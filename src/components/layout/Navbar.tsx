"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "VILLAS", href: "/villas", hasDropdown: true },
  { name: "RETREATS", href: "/retreats" },
  { name: "LOCATION", href: "/location" },
  { name: "CONTACT", href: "/contact" },
];

const villaSubLinks = [
  { name: "2 Bedroom Villa", href: "/villas/2-bedroom-villa" },
  { name: "3 Bedroom Villa", href: "/villas/3-bedroom-villa" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card shadow-md" : "bg-card/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-moss-green rounded-full flex items-center justify-center">
              <span className="text-seashell font-bold text-2xl">H</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wider text-foreground">
                HUBUDDHA
              </span>
              <span className="text-[10px] tracking-[0.4em] text-muted-foreground">
                VILLAS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-moss-green transition-colors tracking-wider outline-none">
                    {link.name}
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-card border-border z-50">
                    <DropdownMenuItem asChild>
                      <Link href="/villas" className="w-full cursor-pointer">
                        All Villas
                      </Link>
                    </DropdownMenuItem>
                    {villaSubLinks.map((subLink) => (
                      <DropdownMenuItem key={subLink.name} asChild>
                        <Link
                          href={subLink.href}
                          className="w-full cursor-pointer"
                        >
                          {subLink.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors tracking-wider ${
                    pathname === link.href
                      ? "text-moss-green"
                      : "text-foreground hover:text-moss-green"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="p-2 hover:bg-secondary rounded-full transition-colors">
              <Search className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-secondary rounded-full transition-colors"
            >
              <Menu className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.name} className="flex flex-col">
                    <Link
                      href="/villas"
                      onClick={() => setIsOpen(false)}
                      className="text-foreground hover:text-moss-green transition-colors py-2 tracking-wider font-medium"
                    >
                      {link.name}
                    </Link>
                    <div className="pl-4 flex flex-col gap-2">
                      {villaSubLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          onClick={() => setIsOpen(false)}
                          className="text-muted-foreground hover:text-moss-green transition-colors py-1 text-sm"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-foreground hover:text-moss-green transition-colors py-2 tracking-wider"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
