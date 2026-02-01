import { NextResponse } from 'next/server';
import { getExchangeRate } from '@/lib/exchange-rate';

export const runtime = 'edge';

/**
 * GET /api/exchange-rate
 * Returns the current IDR to USD exchange rate
 * Cached for 24 hours
 */
export async function GET() {
  try {
    const result = await getExchangeRate();

    return NextResponse.json({
      rate: result.rate,
      date: result.date,
      isFallback: result.isFallback,
    });
  } catch (error) {
    console.error('Exchange rate API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch exchange rate' },
      { status: 500 }
    );
  }
}
