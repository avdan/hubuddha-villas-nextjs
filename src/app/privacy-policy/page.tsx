import { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Privacy Policy | Hubuddha Villas",
  description:
    "Privacy policy for Hubuddha Villas. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-jungle">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-seashell mb-6 heading-display">
            Privacy Policy
          </h1>
          <p className="text-seashell/80 max-w-2xl mx-auto text-lg">
            How we collect, use, and protect your personal information.
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
              Introduction
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At Hubuddha Villas, we are committed to protecting your privacy
              and personal information. This policy explains how we collect, use,
              and safeguard the data you provide to us.
            </p>

            <h2 className="text-2xl font-light text-jungle mt-12 mb-4 heading-display">
              Information We Collect
            </h2>
            <h3 className="text-lg font-medium text-foreground mt-6 mb-3">
              Personal Information
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              When you book a villa or contact us, we may collect:
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc pl-6">
              <li>Name and contact details (email, phone, address)</li>
              <li>Payment information for transactions</li>
              <li>Identification details for check-in</li>
              <li>Special requests and stay preferences</li>
            </ul>

            <h3 className="text-lg font-medium text-foreground mt-6 mb-3">
              Website Usage Information
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We automatically collect:
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc pl-6">
              <li>IP address and browser information</li>
              <li>Pages visited and time spent on site</li>
              <li>Referring websites and search terms</li>
              <li>Device information and location data</li>
            </ul>

            <h2 className="text-2xl font-light text-jungle mt-12 mb-4 heading-display">
              How We Use Your Information
            </h2>
            <ul className="space-y-2 text-muted-foreground list-disc pl-6">
              <li>Process and manage villa bookings</li>
              <li>Communicate about your reservations</li>
              <li>Provide customer support</li>
              <li>Improve our website and services</li>
              <li>Send promotional content (with your consent)</li>
              <li>Comply with legal obligations and prevent fraud</li>
            </ul>

            <h2 className="text-2xl font-light text-jungle mt-12 mb-4 heading-display">
              Cookies and Tracking
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar technologies to remember your
              preferences, improve your experience, analyze traffic patterns,
              provide personalized content, and enable social media features.
            </p>

            <h2 className="text-2xl font-light text-jungle mt-12 mb-4 heading-display">
              Third-Party Services
            </h2>
            <ul className="space-y-2 text-muted-foreground list-disc pl-6">
              <li>
                <strong className="text-foreground">Google Analytics:</strong>{" "}
                Website analytics
              </li>
              <li>
                <strong className="text-foreground">Booking Systems:</strong>{" "}
                Reservations and payments
              </li>
              <li>
                <strong className="text-foreground">WhatsApp:</strong> Customer
                communication
              </li>
            </ul>

            <h2 className="text-2xl font-light text-jungle mt-12 mb-4 heading-display">
              Data Protection
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We implement the following security measures:
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc pl-6">
              <li>Secure data transmission via encryption</li>
              <li>Regular security assessments</li>
              <li>Limited access on a need-to-know basis</li>
              <li>Data retention minimization policies</li>
            </ul>

            <h2 className="text-2xl font-light text-jungle mt-12 mb-4 heading-display">
              Your Rights
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              You have the right to:
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc pl-6">
              <li>Access copies of your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to data processing</li>
              <li>Withdraw marketing consent</li>
              <li>Request data portability</li>
            </ul>

            <h2 className="text-2xl font-light text-jungle mt-12 mb-4 heading-display">
              Contact
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              For privacy-related questions, please contact us:
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
