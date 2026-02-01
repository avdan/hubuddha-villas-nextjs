/**
 * Exchange Rate Utility
 *
 * Fetches IDR to USD exchange rate with 24-hour caching.
 * Uses frankfurter.app (free, no API key required)
 */

// Fallback rate in case API fails (approximate rate)
const FALLBACK_RATE = 16000;

// Cache duration: 24 hours in seconds
const CACHE_DURATION = 86400;

interface ExchangeRateResponse {
  amount: number;
  base: string;
  date: string;
  rates: {
    USD: number;
  };
}

interface ExchangeRateResult {
  rate: number; // IDR per 1 USD
  date: string;
  isFallback: boolean;
}

/**
 * Fetch current IDR to USD exchange rate
 * Returns how many IDR equals 1 USD
 */
export async function getExchangeRate(): Promise<ExchangeRateResult> {
  try {
    // Fetch from frankfurter.app (Edge-compatible)
    const response = await fetch(
      'https://api.frankfurter.app/latest?from=USD&to=IDR',
      {
        // Use cf for Cloudflare caching on Edge
        cf: { cacheTtl: CACHE_DURATION, cacheEverything: true },
      } as RequestInit
    );

    if (!response.ok) {
      throw new Error(`Exchange rate API error: ${response.status}`);
    }

    const data: { rates: { IDR: number }; date: string } = await response.json();

    return {
      rate: data.rates.IDR, // e.g., 15850 (1 USD = 15850 IDR)
      date: data.date,
      isFallback: false,
    };
  } catch (error) {
    console.error('Failed to fetch exchange rate, using fallback:', error);
    return {
      rate: FALLBACK_RATE,
      date: new Date().toISOString().split('T')[0],
      isFallback: true,
    };
  }
}

/**
 * Convert IDR to USD
 */
export function convertIdrToUsd(idrAmount: number, rate: number): number {
  return Math.round(idrAmount / rate);
}

/**
 * Format price in IDR
 */
export function formatIdr(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format price in USD
 */
export function formatUsd(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format dual currency display
 * Returns: "IDR 4,500,000 (~$281 USD)"
 */
export function formatDualCurrency(idrAmount: number, rate: number): string {
  const usdAmount = convertIdrToUsd(idrAmount, rate);
  return `${formatIdr(idrAmount)} (~${formatUsd(usdAmount)})`;
}

/**
 * Get formatted prices object for UI components
 */
export function getPriceDisplay(idrAmount: number, rate: number) {
  const usdAmount = convertIdrToUsd(idrAmount, rate);
  return {
    idr: formatIdr(idrAmount),
    usd: formatUsd(usdAmount),
    usdRaw: usdAmount,
    combined: formatDualCurrency(idrAmount, rate),
  };
}
