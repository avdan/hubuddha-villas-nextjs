/**
 * Smoobu API Client
 *
 * Client for interacting with Smoobu through our API route proxy.
 * The API key is kept secure on the server side.
 */

// Types
export interface AvailabilityRequest {
  arrivalDate: string; // YYYY-MM-DD
  departureDate: string; // YYYY-MM-DD
  apartmentId: number;
  adults?: number;
  children?: number;
}

export interface AvailabilityResponse {
  available: boolean;
  price?: number;
  currency?: string;
  errorMessage?: string;
  minimumStay?: number;
  blockedDates?: string[];
}

export interface BookingRequest {
  apartmentId: number;
  arrivalDate: string;
  departureDate: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  adults: number;
  children: number;
  notice?: string;
  price?: number;
}

export interface BookingResponse {
  success: boolean;
  bookingId?: number;
  error?: string;
  details?: string;
}

export interface GuestDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  specialRequests?: string;
}

// Villa metadata with Smoobu apartment IDs
export interface VillaInfo {
  slug: string;
  apartmentId: number;
  name: string;
  shortName: string;
  bedrooms: number;
  maxGuests: number;
  description: string;
}

// All available villas
export const VILLAS: VillaInfo[] = [
  {
    slug: '2-bedroom-villa',
    apartmentId: 2900836,
    name: '2 Bedroom Villa West',
    shortName: '2BR West',
    bedrooms: 2,
    maxGuests: 4,
    description: 'Private pool, rice field views, modern kitchen',
  },
  {
    slug: '2-bedroom-villa-east',
    apartmentId: 2900841,
    name: '2 Bedroom Villa East',
    shortName: '2BR East',
    bedrooms: 2,
    maxGuests: 4,
    description: 'Private pool, garden setting, peaceful retreat',
  },
  {
    slug: '3-bedroom-villa',
    apartmentId: 2900846,
    name: '3 Bedroom Villa',
    shortName: '3BR',
    bedrooms: 3,
    maxGuests: 6,
    description: 'Wavy pool, cinema projectors, sunken gazebo',
  },
];

// Villa slug to Smoobu apartment ID mapping (for backward compatibility)
export const VILLA_APARTMENT_MAP: Record<string, number> = {
  '2-bedroom-villa': 2900836,
  '2-bedroom-villa-west': 2900836,
  '2-bedroom-villa-east': 2900841,
  '3-bedroom-villa': 2900846,
};

// Get apartment ID from villa slug
export function getApartmentId(villaSlug: string): number | null {
  return VILLA_APARTMENT_MAP[villaSlug] || null;
}

// Get villa info by slug
export function getVillaBySlug(slug: string): VillaInfo | undefined {
  // Handle the alias for 2-bedroom-villa-west
  if (slug === '2-bedroom-villa-west') {
    return VILLAS.find(v => v.slug === '2-bedroom-villa');
  }
  return VILLAS.find(v => v.slug === slug);
}

// Get villa info by apartment ID
export function getVillaByApartmentId(apartmentId: number): VillaInfo | undefined {
  return VILLAS.find(v => v.apartmentId === apartmentId);
}

// Format date to YYYY-MM-DD
export function formatDateForApi(date: Date): string {
  return date.toISOString().split('T')[0];
}

// Calculate number of nights
export function calculateNights(checkIn: Date, checkOut: Date): number {
  const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// API base URL - proxied through Next.js API routes
const API_BASE = '/api/smoobu';

/**
 * Check availability for a villa using Smoobu's rates endpoint
 * This gives us both availability and pricing information
 */
export async function checkAvailability(
  request: AvailabilityRequest
): Promise<AvailabilityResponse> {
  try {
    const params = new URLSearchParams({
      apartmentId: request.apartmentId.toString(),
      startDate: request.arrivalDate,
      endDate: request.departureDate,
    });

    const response = await fetch(`${API_BASE}/rates?${params}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Smoobu API error:', errorText);
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Availability check failed:', error);
    return {
      available: false,
      errorMessage: error instanceof Error ? error.message : 'Failed to check availability',
    };
  }
}

/**
 * Create a booking using Smoobu's reservations endpoint
 */
export async function createBooking(
  request: BookingRequest
): Promise<BookingResponse> {
  try {
    const response = await fetch(`${API_BASE}/reservations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Smoobu booking error:', errorData);
      return {
        success: false,
        error: errorData.detail || errorData.error || 'Failed to create booking',
        details: JSON.stringify(errorData),
      };
    }

    const data = await response.json();

    return {
      success: true,
      bookingId: data.bookingId,
    };
  } catch (error) {
    console.error('Create booking failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create booking',
    };
  }
}

/**
 * Validate guest details
 */
export function validateGuestDetails(details: Partial<GuestDetails>): string[] {
  const errors: string[] = [];

  if (!details.firstName?.trim()) {
    errors.push('First name is required');
  }

  if (!details.lastName?.trim()) {
    errors.push('Last name is required');
  }

  if (!details.email?.trim()) {
    errors.push('Email is required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email)) {
    errors.push('Please enter a valid email address');
  }

  return errors;
}

/**
 * Format price for display (IDR)
 */
export function formatPrice(price: number, currency: string = 'IDR'): string {
  if (currency === 'IDR') {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

// Multi-villa availability types
export interface VillaAvailability extends AvailabilityResponse {
  villa: VillaInfo;
}

export interface MultiVillaAvailabilityRequest {
  arrivalDate: string;
  departureDate: string;
  adults?: number;
  children?: number;
}

/**
 * Check availability for all villas at once
 */
export async function checkAllVillasAvailability(
  request: MultiVillaAvailabilityRequest
): Promise<VillaAvailability[]> {
  // Check all villas in parallel
  const results = await Promise.all(
    VILLAS.map(async (villa) => {
      const availability = await checkAvailability({
        apartmentId: villa.apartmentId,
        arrivalDate: request.arrivalDate,
        departureDate: request.departureDate,
        adults: request.adults,
        children: request.children,
      });

      return {
        ...availability,
        villa,
      };
    })
  );

  return results;
}

/**
 * Check availability for villas other than the specified one
 */
export async function checkOtherVillasAvailability(
  excludeSlug: string,
  request: MultiVillaAvailabilityRequest
): Promise<VillaAvailability[]> {
  const otherVillas = VILLAS.filter(v => v.slug !== excludeSlug && v.slug !== '2-bedroom-villa-west');

  const results = await Promise.all(
    otherVillas.map(async (villa) => {
      const availability = await checkAvailability({
        apartmentId: villa.apartmentId,
        arrivalDate: request.arrivalDate,
        departureDate: request.departureDate,
        adults: request.adults,
        children: request.children,
      });

      return {
        ...availability,
        villa,
      };
    })
  );

  return results;
}
