import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// Types for WordPress webhook payloads
interface WordPressWebhookPayload {
  post_type?: string;
  post_status?: string;
  post_id?: number;
  post_slug?: string;
  action?: "publish" | "update" | "trash" | "delete";
}

export async function POST(request: NextRequest) {
  try {
    // Verify webhook secret
    const secret = request.headers.get("x-webhook-secret");
    const expectedSecret = process.env.REVALIDATION_SECRET;

    if (!expectedSecret) {
      console.error("REVALIDATION_SECRET not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    if (secret !== expectedSecret) {
      console.warn("Invalid webhook secret received");
      return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
    }

    // Parse the webhook payload
    const payload: WordPressWebhookPayload = await request.json();
    const { post_type, post_slug, action } = payload;

    console.log(
      `Revalidation webhook received: ${action} ${post_type} - ${post_slug}`
    );

    // Track what was revalidated
    const revalidated: string[] = [];

    // Handle different post types
    switch (post_type) {
      case "villa":
        // Revalidate the specific villa page
        if (post_slug) {
          revalidatePath(`/villas/${post_slug}`);
          revalidated.push(`/villas/${post_slug}`);
        }
        // Also revalidate the villas listing page
        revalidatePath("/villas");
        revalidated.push("/villas");
        // And the homepage (which shows villas)
        revalidatePath("/");
        revalidated.push("/");
        break;

      case "post":
        // Revalidate the specific article page (at root level)
        if (post_slug) {
          revalidatePath(`/${post_slug}`);
          revalidated.push(`/${post_slug}`);
        }
        // Also revalidate the articles listing page
        revalidatePath("/articles");
        revalidated.push("/articles");
        // And the homepage (which shows latest articles)
        revalidatePath("/");
        revalidated.push("/");
        break;

      case "testimonial":
        // Testimonials appear on the homepage
        revalidatePath("/");
        revalidated.push("/");
        break;

      case "team_member":
        // Team members appear on the about page
        revalidatePath("/about");
        revalidated.push("/about");
        break;

      case "service":
        // Services appear on the homepage
        revalidatePath("/");
        revalidated.push("/");
        break;

      default:
        // For ACF options pages or unknown types, revalidate everything
        revalidatePath("/");
        revalidatePath("/villas");
        revalidatePath("/articles");
        revalidatePath("/about");
        revalidatePath("/contact");
        revalidatePath("/location");
        revalidatePath("/retreats");
        revalidated.push("all pages");
    }

    console.log(`Revalidated: ${revalidated.join(", ")}`);

    return NextResponse.json({
      revalidated: true,
      paths: revalidated,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { error: "Failed to revalidate", details: String(error) },
      { status: 500 }
    );
  }
}

// Allow GET for testing the endpoint is reachable
export async function GET() {
  return NextResponse.json({
    message: "Hubuddha Villas revalidation webhook endpoint",
    status: "ready",
    supportedPostTypes: [
      "villa",
      "post",
      "testimonial",
      "team_member",
      "service",
    ],
    note: "Send POST request with x-webhook-secret header to trigger revalidation",
  });
}
