import { NextRequest, NextResponse } from 'next/server';

const SMOOBU_API_KEY = process.env.SMOOBU_API_KEY;
const SMOOBU_API_URL = 'https://login.smoobu.com/api';
const SMOOBU_CHANNEL_ID = 1544457; // Direct booking channel ID

export async function POST(request: NextRequest) {
  if (!SMOOBU_API_KEY) {
    return NextResponse.json(
      { error: 'Smoobu API key not configured' },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();

    const {
      apartmentId,
      arrivalDate,
      departureDate,
      firstName,
      lastName,
      email,
      phone,
      adults,
      children,
      notice,
      price,
    } = body;

    // Validate required fields
    if (!apartmentId || !arrivalDate || !departureDate || !firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Smoobu reservations endpoint payload
    const payload = {
      arrivalDate,
      departureDate,
      apartmentId,
      firstName,
      lastName,
      email,
      phone: phone || '',
      adults: adults || 2,
      children: children || 0,
      notice: notice || '',
      price,
      priceStatus: 1, // 1 = not paid
      channelId: SMOOBU_CHANNEL_ID,
    };

    const response = await fetch(`${SMOOBU_API_URL}/reservations`, {
      method: 'POST',
      headers: {
        'Api-Key': SMOOBU_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Smoobu reservation error:', errorData);
      return NextResponse.json(
        {
          success: false,
          error: errorData.detail || errorData.error || 'Failed to create booking',
          details: errorData,
        },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      success: true,
      bookingId: data.id,
    });
  } catch (error) {
    console.error('Smoobu reservation error:', error);
    return NextResponse.json(
      { error: 'Failed to create reservation' },
      { status: 500 }
    );
  }
}
