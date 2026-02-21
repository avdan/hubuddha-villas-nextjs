import { Metadata } from "next";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Contact Us | Hubuddha Villas",
  description:
    "Get in touch with Hubuddha Villas. We're here to help with bookings, questions, and anything else you need for your Ubud stay.",
};

// Placeholder data - will be replaced with WordPress data
const contactInfo = {
  phone: "+62 812 1599 0063",
  whatsapp: "+62 812 1599 0063",
  email: "info@hubuddha.com",
  address: "Jl. Raya Tegallalang\nUbud, Gianyar 80561\nBali, Indonesia",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-jungle">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-seashell mb-6 heading-display">
            Contact Us
          </h1>
          <p className="text-seashell/80 max-w-2xl mx-auto text-lg">
            Have questions? We'd love to hear from you. Reach out and we'll
            respond as soon as we can.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-jungle mb-6 heading-display">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm text-muted-foreground mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 bg-background border border-sage-green/50 focus:border-moss-green outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm text-muted-foreground mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 bg-background border border-sage-green/50 focus:border-moss-green outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-muted-foreground mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-background border border-sage-green/50 focus:border-moss-green outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm text-muted-foreground mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-background border border-sage-green/50 focus:border-moss-green outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="availability">Availability Check</option>
                    <option value="services">Services & Amenities</option>
                    <option value="retreats">Retreats & Groups</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="checkin"
                      className="block text-sm text-muted-foreground mb-2"
                    >
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      id="checkin"
                      name="checkin"
                      className="w-full px-4 py-3 bg-background border border-sage-green/50 focus:border-moss-green outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="checkout"
                      className="block text-sm text-muted-foreground mb-2"
                    >
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      id="checkout"
                      name="checkout"
                      className="w-full px-4 py-3 bg-background border border-sage-green/50 focus:border-moss-green outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-muted-foreground mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell us about your trip plans or any questions you have..."
                    className="w-full px-4 py-3 bg-background border border-sage-green/50 focus:border-moss-green outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-jungle text-seashell px-8 py-4 font-medium tracking-wider hover:bg-moss-green transition-colors"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-jungle mb-6 heading-display">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you have questions about our villas, need help planning
                your stay, or just want to say hello, we're here for you.
              </p>

              <div className="space-y-8">
                {/* WhatsApp - Preferred */}
                <div className="p-6 bg-moss-green/10 border border-moss-green/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-moss-green flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-seashell"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs text-moss-green uppercase tracking-wider font-medium">
                        Fastest Response
                      </span>
                      <h3 className="text-xl font-light text-jungle mb-1 heading-display">
                        WhatsApp
                      </h3>
                      <a
                        href={`https://wa.me/${contactInfo.whatsapp.replace(/\s/g, "")}`}
                        className="text-moss-green hover:underline"
                      >
                        {contactInfo.whatsapp}
                      </a>
                      <p className="text-sm text-muted-foreground mt-2">
                        We typically respond within 1 hour
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sage-green/30 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-jungle"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-jungle mb-1 heading-display">
                      Email
                    </h3>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-moss-green hover:underline"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sage-green/30 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-jungle"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-jungle mb-1 heading-display">
                      Phone
                    </h3>
                    <a
                      href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                      className="text-moss-green hover:underline"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sage-green/30 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-jungle"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-jungle mb-1 heading-display">
                      Location
                    </h3>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {contactInfo.address}
                    </p>
                    <Link
                      href="/location"
                      className="inline-block mt-2 text-moss-green text-sm hover:underline"
                    >
                      View on map →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-8 border-t border-sage-green/30">
                <h3 className="text-lg font-light text-jungle mb-4 heading-display">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/hubuddhavillas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-sage-green/30 flex items-center justify-center hover:bg-moss-green hover:text-seashell transition-colors group"
                  >
                    <svg
                      className="w-5 h-5 text-jungle group-hover:text-seashell"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com/hubuddhavillas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-sage-green/30 flex items-center justify-center hover:bg-moss-green hover:text-seashell transition-colors group"
                  >
                    <svg
                      className="w-5 h-5 text-jungle group-hover:text-seashell"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
