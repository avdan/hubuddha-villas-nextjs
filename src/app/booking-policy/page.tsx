import { Metadata } from "next";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Booking Policy | Hubuddha Villas",
  description:
    "Booking policy for Hubuddha Villas in Ubud, Bali. Learn about reservations, payments, cancellations, and check-in procedures.",
};

export default function BookingPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-jungle">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-seashell mb-6 heading-display">
            Booking Policy
          </h1>
          <p className="text-seashell/80 max-w-2xl mx-auto text-lg">
            Everything you need to know about booking your stay at Hubuddha
            Villas.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Last updated: February 2026
            </p>

            <h2 className="text-2xl font-light text-jungle mt-12 mb-4 heading-display">
              Reservations
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Reservations can be made directly through our website or by
              contacting us via WhatsApp or email. All bookings are subject to
              availability and confirmation.
            </p>

            <h2 className="text-2xl font-light text-jungle mt-12 mb-4 heading-display">
              Minimum Stay
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our minimum stay is typically 2 nights. During peak seasons
              (July-August, December-January), a minimum of 3-5 nights may be
              required.
            </p>

            <h2 className="text-2xl font-light text-jungle mt-12 mb-4 heading-display">
              Payment
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A 50% deposit is required to confirm your booking. The remaining
              balance is due upon arrival. We accept bank transfers, credit cards
              (Visa, Mastercard), and PayPal.
            </p>

            <h2 className="text-2xl font-light text-jungle mt-12 mb-4 heading-display">
              Cancellation Policy
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                Free cancellation up to 14 days before check-in for a full
                refund.
              </li>
              <li>
                Cancellations within 14 days of check-in are subject to a 50%
                charge.
              </li>
              <li>
                No-shows or cancellations within 48 hours are charged in full.
              </li>
            </ul>

            <h2 className="text-2xl font-light text-jungle mt-12 mb-4 heading-display">
              Check-in & Check-out
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <strong className="text-foreground">Check-in:</strong> 2:00 PM
                to 11:00 PM (advance notice required)
              </li>
              <li>
                <strong className="text-foreground">Check-out:</strong> 11:00 AM
              </li>
              <li>
                Early check-in or late check-out may be available upon request,
                subject to availability and additional charges.
              </li>
            </ul>

            <h2 className="text-2xl font-light text-jungle mt-12 mb-4 heading-display">
              Children & Extra Beds
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              All ages are welcome. Children aged 12 and over are charged as
              adults. Free cribs are available for infants (ages 0-3) upon
              request, subject to availability. No extra beds are provided.
            </p>

            <h2 className="text-2xl font-light text-jungle mt-12 mb-4 heading-display">
              Damage & Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Guests bear responsibility for any damage to the property during
              their stay. The property takes no responsibility for personal
              possessions that are lost, stolen, or misplaced due to guest
              negligence.
            </p>

            <h2 className="text-2xl font-light text-jungle mt-12 mb-4 heading-display">
              Contact
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about our booking policy, please contact us:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email: info@hubuddha.com</li>
              <li>WhatsApp: +62 812 1599 0063</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sage-green/20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-jungle mb-4 heading-display">
            Ready to Book?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Contact us and we&apos;ll help you plan the perfect stay.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-jungle text-seashell px-8 py-4 font-medium tracking-wider hover:bg-moss-green transition-colors"
          >
            CONTACT US
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
