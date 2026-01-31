import { NextRequest, NextResponse } from 'next/server';

const SMOOBU_API_KEY = process.env.SMOOBU_API_KEY;
const SMOOBU_API_URL = 'https://login.smoobu.com/api';

export async function GET(request: NextRequest) {
  if (!SMOOBU_API_KEY) {
    return NextResponse.json(
      { error: 'Smoobu API key not configured' },
      { status: 500 }
    );
  }

  const searchParams = request.nextUrl.searchParams;
  const apartmentId = searchParams.get('apartmentId');
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');

  if (!apartmentId || !startDate || !endDate) {
    return NextResponse.json(
      { error: 'Missing required parameters: apartmentId, startDate, endDate' },
      { status: 400 }
    );
  }

  try {
    const params = new URLSearchParams({
      start_date: startDate,
      end_date: endDate,
    });

    const response = await fetch(
      `${SMOOBU_API_URL}/rates?apartments[]=${apartmentId}&${params}`,
      {
        method: 'GET',
        headers: {
          'Api-Key': SMOOBU_API_KEY,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Smoobu API error:', errorText);
      return NextResponse.json(
        { error: `Smoobu API error: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Parse Smoobu rates response
    // Structure: { data: { [apartmentId]: { [date]: { price, available, min_length_of_stay } } } }
    const apartmentRates = data.data?.[apartmentId];

    if (!apartmentRates) {
      return NextResponse.json({
        available: false,
        errorMessage: 'Villa not found in booking system',
      });
    }

    // Check if all dates are available and calculate total price
    const dates = Object.keys(apartmentRates);
    let totalPrice = 0;
    let isAvailable = true;
    const currency = 'IDR'; // Smoobu returns prices in IDR
    let minimumStay = 1;

    for (const date of dates) {
      const dayData = apartmentRates[date];

      // Check availability (available = 1 means available)
      if (dayData.available !== 1) {
        isAvailable = false;
        break;
      }

      // Sum up the price
      totalPrice += dayData.price || 0;

      // Get minimum stay (use the max of all days)
      if (dayData.min_length_of_stay > minimumStay) {
        minimumStay = dayData.min_length_of_stay;
      }
    }

    // Check minimum stay requirement
    const nights = dates.length;
    if (nights < minimumStay) {
      return NextResponse.json({
        available: false,
        minimumStay,
        errorMessage: `Minimum stay is ${minimumStay} nights`,
      });
    }

    return NextResponse.json({
      available: isAvailable,
      price: isAvailable ? totalPrice : undefined,
      currency,
      minimumStay,
    });
  } catch (error) {
    console.error('Smoobu rates error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch rates' },
      { status: 500 }
    );
  }
}
