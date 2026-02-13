import { Metadata } from "next";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQ | Hubuddha Villas",
  description:
    "Frequently asked questions about staying at Hubuddha Villas in Ubud, Bali. Find answers about booking, amenities, location, and more.",
};

const faqs = [
  {
    category: "Booking & Reservations",
    questions: [
      {
        question: "How do I book a villa?",
        answer:
          "You can book directly through our website by selecting your preferred dates and villa, then completing the reservation form. You can also contact us via WhatsApp or email for personalized assistance.",
      },
      {
        question: "What is the minimum stay requirement?",
        answer:
          "Our minimum stay is typically 2 nights. During peak seasons (July-August, December-January), we may require a minimum of 3-5 nights.",
      },
      {
        question: "What is the cancellation policy?",
        answer:
          "Free cancellation up to 14 days before check-in. Cancellations within 14 days are subject to a 50% charge. No-shows or cancellations within 48 hours are charged in full.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept bank transfers, credit cards (Visa, Mastercard), and PayPal. A 50% deposit is required to confirm your booking, with the balance due upon arrival.",
      },
    ],
  },
  {
    category: "Villa & Amenities",
    questions: [
      {
        question: "Do the villas have private pools?",
        answer:
          "Yes, all our villas feature private infinity pools with stunning rice field views. The pools are cleaned daily and maintained to the highest standards.",
      },
      {
        question: "Is WiFi available?",
        answer:
          "Yes, we provide high-speed fiber internet (50+ Mbps) in all villas, perfect for remote work and video calls. The connection is reliable and available throughout the property.",
      },
      {
        question: "Is the villa suitable for remote work?",
        answer:
          "Absolutely! Our villas are designed with digital nomads in mind. Each villa has a dedicated workspace, ergonomic seating, high-speed WiFi, and backup power to ensure uninterrupted work.",
      },
      {
        question: "What kitchen facilities are available?",
        answer:
          "Our villas have fully equipped modern kitchens with refrigerator, stove, oven, microwave, rice cooker, coffee maker, and all necessary cookware and utensils.",
      },
      {
        question: "Is daily housekeeping included?",
        answer:
          "Yes, daily housekeeping is included in your stay. Our staff will clean the villa, make beds, and replenish towels and toiletries. Pool maintenance is also included.",
      },
    ],
  },
  {
    category: "Location & Transportation",
    questions: [
      {
        question: "Where exactly are the villas located?",
        answer:
          "Our villas are located in Pejeng Kawan, about 10 minutes from Ubud center. The area is peaceful and surrounded by rice fields, yet close to restaurants, cafes, and attractions.",
      },
      {
        question: "How far is the airport?",
        answer:
          "Ngurah Rai International Airport (DPS) is approximately 1.5-2 hours from our villas, depending on traffic. We can arrange airport transfers for your convenience.",
      },
      {
        question: "Do you provide airport transfers?",
        answer:
          "Yes, we offer airport pickup and drop-off services at an additional cost. Please let us know your flight details when booking, and we'll arrange everything for you.",
      },
      {
        question: "Do I need to rent a scooter or car?",
        answer:
          "While not essential, having your own transport gives you more flexibility to explore. We can help arrange scooter or car rentals. Alternatively, ride-hailing apps like Grab and Gojek are widely available.",
      },
    ],
  },
  {
    category: "Check-in & Check-out",
    questions: [
      {
        question: "What are the check-in and check-out times?",
        answer:
          "Check-in is from 3:00 PM and check-out is by 11:00 AM. Early check-in or late check-out may be available upon request, subject to availability.",
      },
      {
        question: "Is early check-in or late check-out possible?",
        answer:
          "Yes, subject to availability. Early check-in before 12:00 PM or late check-out after 3:00 PM may incur an additional charge. Please contact us in advance to arrange.",
      },
    ],
  },
  {
    category: "Policies",
    questions: [
      {
        question: "Are pets allowed?",
        answer:
          "Unfortunately, we do not allow pets in our villas to ensure the comfort of all guests and maintain our property standards.",
      },
      {
        question: "Is smoking allowed?",
        answer:
          "Smoking is not permitted inside the villas. However, you may smoke in designated outdoor areas. Please dispose of cigarette butts responsibly.",
      },
      {
        question: "Are parties or events allowed?",
        answer:
          "Our villas are designed for relaxation and are not suitable for parties or large gatherings. We maintain quiet hours from 10:00 PM to 8:00 AM out of respect for neighbors.",
      },
      {
        question: "What is the maximum occupancy?",
        answer:
          "Maximum occupancy varies by villa. Our 2-bedroom villa accommodates up to 4 guests, and our 3-bedroom villa up to 6 guests. Additional guests may be possible with prior arrangement.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-jungle">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-seashell mb-6 heading-display">
            FAQ
          </h1>
          <p className="text-seashell/80 max-w-2xl mx-auto text-lg">
            Find answers to commonly asked questions about staying at Hubuddha
            Villas.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-light text-jungle mb-6 heading-display">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-sage-green/30 px-6"
                    >
                      <AccordionTrigger className="text-left text-jungle hover:text-moss-green hover:no-underline py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-sage-green/20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-jungle mb-4 heading-display">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            We&apos;re here to help. Contact us and we&apos;ll get back to you
            as soon as possible.
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
