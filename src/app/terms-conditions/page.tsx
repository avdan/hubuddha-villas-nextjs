import { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Terms & Conditions | Hubuddha Villas",
  description:
    "Terms and conditions for staying at Hubuddha Villas in Ubud, Bali. House rules, liability, and guest responsibilities.",
};

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-jungle">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-seashell mb-6 heading-display">
            Terms & Conditions
          </h1>
          <p className="text-seashell/80 max-w-2xl mx-auto text-lg">
            Please read these terms carefully before booking your stay.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Last updated: February 2026
            </p>

            <h2 className="text-2xl font-light text-jungle mt-12 mb-4 heading-display">
              General Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              By making a reservation at Hubuddha Villas, you agree to the
              following terms and conditions. Reservations cannot be transferred
              between parties. Special offer terms supersede standard conditions
              when conflicts arise.
            </p>

            <h2 className="text-2xl font-light text-jungle mt-12 mb-4 heading-display">
              Check-in & Check-out
            </h2>
            <ul className="space-y-2 text-muted-foreground list-disc pl-6">
              <li>Check-in: 2:00 PM to 11:00 PM (advance notice required)</li>
              <li>Check-out: 11:00 AM to 12:00 PM</li>
              <li>
                Guests must present original identification upon arrival
              </li>
            </ul>

            <h2 className="text-2xl font-light text-jungle mt-12 mb-4 heading-display">
              House Rules
            </h2>
            <ul className="space-y-2 text-muted-foreground list-disc pl-6">
              <li>
                No gatherings or parties of any nature are permitted in the
                villas
              </li>
              <li>Quiet hours: 9:00 PM to 7:00 AM</li>
              <li>Pets are not allowed</li>
              <li>Smoking is not permitted inside the villas</li>
              <li>
                Guests must maintain health, safety, and hygiene standards of the
                property
              </li>
            </ul>

            <h2 className="text-2xl font-light text-jungle mt-12 mb-4 heading-display">
              No-Shows
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              No-show fees are equal to one night&apos;s charge plus applicable
              taxes.
            </p>

            <h2 className="text-2xl font-light text-jungle mt-12 mb-4 heading-display">
              Guest Conduct
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The property reserves the right to remove guests for conduct
              violations, safety concerns, or medical reasons, particularly if
              they harass or endanger other guests. Excess occupants beyond the
              booked capacity may result in eviction.
            </p>

            <h2 className="text-2xl font-light text-jungle mt-12 mb-4 heading-display">
              Damage & Property Care
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Guests bear sole responsibility for any damage to the property
              during their stay and must maintain hygiene standards throughout.
            </p>

            <h2 className="text-2xl font-light text-jungle mt-12 mb-4 heading-display">
              Personal Belongings
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The property takes no responsibility for personal possessions that
              are lost, stolen, or misplaced due to guest negligence. Lost items
              are logged but may be donated or disposed of after a set period.
            </p>

            <h2 className="text-2xl font-light text-jungle mt-12 mb-4 heading-display">
              Children & Extra Beds
            </h2>
            <ul className="space-y-2 text-muted-foreground list-disc pl-6">
              <li>All ages are welcome</li>
              <li>Children aged 12 and over are charged as adults</li>
              <li>
                Free cribs available for ages 0-3 upon request (subject to
                availability)
              </li>
              <li>No extra beds provided</li>
            </ul>

            <h2 className="text-2xl font-light text-jungle mt-12 mb-4 heading-display">
              Transportation
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Airport transportation is an ancillary service. The property
              assumes no responsibility during transit.
            </p>

            <h2 className="text-2xl font-light text-jungle mt-12 mb-4 heading-display">
              Limitation of Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The property disclaims liability for circumstances beyond its
              control, including flight delays or cancellations, civil
              disturbance, strikes, theft, acts of terrorism, natural disasters,
              war, fire, and floods.
            </p>

            <h2 className="text-2xl font-light text-jungle mt-12 mb-4 heading-display">
              Changes to Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these terms at any time. Updated
              terms will be posted on this page with a revised date.
            </p>

            <h2 className="text-2xl font-light text-jungle mt-12 mb-4 heading-display">
              Contact
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              For questions about these terms, please contact us:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email: info@hubuddha.com</li>
              <li>Phone: +62 812 1599 0063</li>
              <li>Address: Jl. Raya Pejeng Kawan, Ubud, Bali, Indonesia</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
