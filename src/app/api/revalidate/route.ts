import { NextRequest, NextResponse } from "next/server";

export const runtime = 'edge';

// Note: On Cloudflare Edge, revalidation works via time-based ISR (set in each page)
// This endpoint acknowledges webhooks but actual revalidation happens via page revalidate config

export async function POST(request: NextRequest) {
  try {
    const secret = request.headers.get("x-webhook-secret");
    const expectedSecret = process.env.REVALIDATION_SECRET;

    if (expectedSecret && secret !== expectedSecret) {
      return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
    }

    const payload = await request.json();
    console.log("Revalidation webhook received:", payload);

    // On Cloudflare Edge, pages automatically revalidate based on their
    // revalidate config (currently set to 60 seconds)
    return NextResponse.json({
      acknowledged: true,
      message: "Webhook received. Pages will revalidate on next request after cache expires.",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { error: "Failed to process webhook" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Hubuddha Villas revalidation webhook endpoint",
    status: "ready",
    note: "On Cloudflare Edge, pages revalidate based on time-based ISR config",
  });
}
