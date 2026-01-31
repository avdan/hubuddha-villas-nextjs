'use client';

import { useState, useCallback } from 'react';
import {
  checkAvailability,
  createBooking,
  getApartmentId,
  formatDateForApi,
  calculateNights,
  validateGuestDetails,
  checkOtherVillasAvailability,
  type AvailabilityResponse,
  type BookingResponse,
  type GuestDetails,
  type VillaAvailability,
} from '@/lib/smoobu';

export type BookingStep = 'select-dates' | 'checking' | 'available' | 'unavailable' | 'guest-details' | 'booking' | 'confirmed' | 'error';

interface UseBookingState {
  step: BookingStep;
  isChecking: boolean;
  isBooking: boolean;
  availability: AvailabilityResponse | null;
  bookingResult: BookingResponse | null;
  error: string | null;
  guestErrors: string[];
  otherVillas: VillaAvailability[];
}

interface UseBookingReturn extends UseBookingState {
  checkAvailabilityForDates: (
    checkIn: Date,
    checkOut: Date,
    adults: number,
    children: number
  ) => Promise<void>;
  submitBooking: (guestDetails: GuestDetails) => Promise<void>;
  resetBooking: () => void;
  nights: number | null;
  apartmentId: number | null;
}

const initialState: UseBookingState = {
  step: 'select-dates',
  isChecking: false,
  isBooking: false,
  availability: null,
  bookingResult: null,
  error: null,
  guestErrors: [],
  otherVillas: [],
};

export function useBooking(villaSlug: string): UseBookingReturn {
  const [state, setState] = useState<UseBookingState>(initialState);
  const [bookingData, setBookingData] = useState<{
    checkIn: Date | null;
    checkOut: Date | null;
    adults: number;
    children: number;
  }>({
    checkIn: null,
    checkOut: null,
    adults: 2,
    children: 0,
  });

  const apartmentId = getApartmentId(villaSlug);

  const nights = bookingData.checkIn && bookingData.checkOut
    ? calculateNights(bookingData.checkIn, bookingData.checkOut)
    : null;

  const checkAvailabilityForDates = useCallback(
    async (checkIn: Date, checkOut: Date, adults: number, children: number) => {
      if (!apartmentId) {
        setState(prev => ({
          ...prev,
          step: 'error',
          error: 'Villa not found in booking system',
        }));
        return;
      }

      // Save booking data
      setBookingData({ checkIn, checkOut, adults, children });

      // Start checking
      setState(prev => ({
        ...prev,
        step: 'checking',
        isChecking: true,
        error: null,
        availability: null,
        otherVillas: [],
      }));

      try {
        // Check current villa and other villas in parallel
        const [result, otherVillasResult] = await Promise.all([
          checkAvailability({
            apartmentId,
            arrivalDate: formatDateForApi(checkIn),
            departureDate: formatDateForApi(checkOut),
            adults,
            children,
          }),
          checkOtherVillasAvailability(villaSlug, {
            arrivalDate: formatDateForApi(checkIn),
            departureDate: formatDateForApi(checkOut),
            adults,
            children,
          }),
        ]);

        if (result.available) {
          setState(prev => ({
            ...prev,
            step: 'available',
            isChecking: false,
            availability: result,
            otherVillas: otherVillasResult,
          }));
        } else {
          setState(prev => ({
            ...prev,
            step: 'unavailable',
            isChecking: false,
            availability: result,
            error: result.errorMessage || 'Selected dates are not available',
            otherVillas: otherVillasResult,
          }));
        }
      } catch (err) {
        setState(prev => ({
          ...prev,
          step: 'error',
          isChecking: false,
          error: err instanceof Error ? err.message : 'Failed to check availability',
        }));
      }
    },
    [apartmentId, villaSlug]
  );

  const submitBooking = useCallback(
    async (guestDetails: GuestDetails) => {
      if (!apartmentId || !bookingData.checkIn || !bookingData.checkOut) {
        setState(prev => ({
          ...prev,
          error: 'Missing booking information',
        }));
        return;
      }

      // Validate guest details
      const errors = validateGuestDetails(guestDetails);
      if (errors.length > 0) {
        setState(prev => ({
          ...prev,
          guestErrors: errors,
        }));
        return;
      }

      // Start booking
      setState(prev => ({
        ...prev,
        step: 'booking',
        isBooking: true,
        error: null,
        guestErrors: [],
      }));

      try {
        const result = await createBooking({
          apartmentId,
          arrivalDate: formatDateForApi(bookingData.checkIn),
          departureDate: formatDateForApi(bookingData.checkOut),
          firstName: guestDetails.firstName,
          lastName: guestDetails.lastName,
          email: guestDetails.email,
          phone: guestDetails.phone,
          adults: bookingData.adults,
          children: bookingData.children,
          notice: guestDetails.specialRequests,
          price: state.availability?.price,
        });

        if (result.success) {
          setState(prev => ({
            ...prev,
            step: 'confirmed',
            isBooking: false,
            bookingResult: result,
          }));
        } else {
          setState(prev => ({
            ...prev,
            step: 'error',
            isBooking: false,
            error: result.error || 'Failed to create booking',
            bookingResult: result,
          }));
        }
      } catch (err) {
        setState(prev => ({
          ...prev,
          step: 'error',
          isBooking: false,
          error: err instanceof Error ? err.message : 'Failed to create booking',
        }));
      }
    },
    [apartmentId, bookingData, state.availability?.price]
  );

  const resetBooking = useCallback(() => {
    setState(initialState);
    setBookingData({
      checkIn: null,
      checkOut: null,
      adults: 2,
      children: 0,
    });
  }, []);

  return {
    ...state,
    checkAvailabilityForDates,
    submitBooking,
    resetBooking,
    nights,
    apartmentId,
  };
}

export type { GuestDetails };
