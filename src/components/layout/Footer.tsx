import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Globe,
  MapPin,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Villas", href: "/villas" },
  { name: "Articles", href: "/articles" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-jungle text-seashell py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10 mb-10">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-moss-green rounded-full flex items-center justify-center">
                <span className="text-seashell font-bold text-xl">H</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-wider">
                  HUBUDDHA
                </span>
                <span className="text-[9px] tracking-[0.4em] text-sage-green">
                  VILLAS
                </span>
              </div>
            </Link>
            <p className="text-seashell/70 leading-relaxed max-w-xs text-sm mb-4">
              Luxury vacation rentals in the heart of Ubud, Bali. Experience
              authentic Balinese hospitality with modern comfort.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-seashell/30 flex items-center justify-center hover:bg-seashell/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-seashell/30 flex items-center justify-center hover:bg-seashell/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 tracking-wider text-sm">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-seashell/70 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-sage-green transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 tracking-wider text-sm">
              CONTACT
            </h4>
            <ul className="space-y-3 text-seashell/70 text-sm">
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=6281215990063&text=Hi%21+I+have+a+question+about+Hubuddha+Villas.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-sage-green transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>+62 812 1599 0063</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@hubuddha.com"
                  className="flex items-center gap-2 hover:text-sage-green transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>info@hubuddha.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.hubuddha.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-sage-green transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>www.hubuddha.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  Jl. Raya Pejeng Kawan, Ubud, Bali 80552
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-seashell/20 pt-6 text-center text-seashell/50 text-xs">
          <p>
            &copy; {new Date().getFullYear()} Hubuddha Villas. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
