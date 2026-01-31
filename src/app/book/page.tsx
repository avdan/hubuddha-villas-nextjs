"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import {
  CalendarIcon,
  ChevronDown,
  Users,
  BedDouble,
  Loader2,
  CheckCircle2,
  XCircle,
  ArrowRight,
} from "lucide-react";
import { Navbar, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  checkAllVillasAvailability,
  formatDateForApi,
  formatPrice,
  calculateNights,
  type VillaAvailability,
} from "@/lib/smoobu";
import { formatUsd, convertIdrToUsd } from "@/lib/exchange-rate";

type SearchStep = "select-dates" | "searching" | "results";

// Fallback images for villas
const villaFallbackImages: Record<string, string> = {
  "2-bedroom-villa": "/images/villa-2br-placeholder.jpg",
  "2-bedroom-villa-east": "/images/villa-2br-placeholder.jpg",
  "3-bedroom-villa": "/images/villa-3br-placeholder.jpg",
};

export default function BookPage() {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [step, setStep] = useState<SearchStep>("select-dates");
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<VillaAvailability[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [exchangeRate, setExchangeRate] = useState<number>(16000); // Fallback rate

  // Fetch exchange rate on mount
  useEffect(() => {
    fetch("/api/exchange-rate")
      .then((res) => res.json())
      .then((data) => {
        if (data.rate) {
          setExchangeRate(data.rate);
        }
      })
      .catch(console.error);
  }, []);

  const nights = checkIn && checkOut ? calculateNights(checkIn, checkOut) : 0;
  const canSearch = checkIn && checkOut && !isSearching;

  const handleSearch = async () => {
    if (!checkIn || !checkOut) return;

    setStep("searching");
    setIsSearching(true);
    setError(null);

    try {
      const availability = await checkAllVillasAvailability({
        arrivalDate: formatDateForApi(checkIn),
        departureDate: formatDateForApi(checkOut),
        adults: parseInt(adults),
        children: parseInt(children),
      });

      setResults(availability);
      setStep("results");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to check availability"
      );
      setStep("select-dates");
    } finally {
      setIsSearching(false);
    }
  };

  const handleReset = () => {
    setStep("select-dates");
    setResults([]);
    setError(null);
  };

  const availableVillas = results.filter((r) => r.available);
  const unavailableVillas = results.filter((r) => !r.available);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[40vh] lg:h-[50vh] bg-jungle">
        <div className="absolute inset-0 bg-gradient-to-b from-jungle/60 to-jungle/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-seashell px-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 heading-display">
              Book Your Stay
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Check availability across all our villas and find your perfect
              retreat
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatePresence mode="wait">
            {/* Search Form */}
            {(step === "select-dates" || step === "searching") && (
              <motion.div
                key="search-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-card border border-border p-6 lg:p-8">
                  <h2 className="text-2xl font-light text-jungle mb-6 heading-display text-center">
                    Select Your Dates
                  </h2>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {/* Check In */}
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">
                        Check In
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-between text-left font-normal h-12",
                              !checkIn && "text-muted-foreground"
                            )}
                            disabled={isSearching}
                          >
                            <div className="flex items-center gap-2">
                              <CalendarIcon className="h-4 w-4" />
                              {checkIn
                                ? format(checkIn, "MMM d, yyyy")
                                : "Select date"}
                            </div>
                            <ChevronDown className="h-4 w-4 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent
                          className="w-auto p-0 bg-card z-50"
                          align="start"
                        >
                          <Calendar
                            mode="single"
                            selected={checkIn}
                            onSelect={setCheckIn}
                            disabled={(date) => date < new Date()}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* Check Out */}
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">
                        Check Out
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-between text-left font-normal h-12",
                              !checkOut && "text-muted-foreground"
                            )}
                            disabled={isSearching}
                          >
                            <div className="flex items-center gap-2">
                              <CalendarIcon className="h-4 w-4" />
                              {checkOut
                                ? format(checkOut, "MMM d, yyyy")
                                : "Select date"}
                            </div>
                            <ChevronDown className="h-4 w-4 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent
                          className="w-auto p-0 bg-card z-50"
                          align="start"
                        >
                          <Calendar
                            mode="single"
                            selected={checkOut}
                            onSelect={setCheckOut}
                            disabled={(date) =>
                              date < new Date() || (checkIn ? date <= checkIn : false)
                            }
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* Adults */}
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">
                        Adults
                      </label>
                      <Select
                        value={adults}
                        onValueChange={setAdults}
                        disabled={isSearching}
                      >
                        <SelectTrigger className="w-full h-12">
                          <SelectValue placeholder="Adults" />
                        </SelectTrigger>
                        <SelectContent className="bg-card z-50">
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? "Adult" : "Adults"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Children */}
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">
                        Children
                      </label>
                      <Select
                        value={children}
                        onValueChange={setChildren}
                        disabled={isSearching}
                      >
                        <SelectTrigger className="w-full h-12">
                          <SelectValue placeholder="Children" />
                        </SelectTrigger>
                        <SelectContent className="bg-card z-50">
                          {[0, 1, 2, 3, 4].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? "Child" : "Children"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Summary */}
                  {checkIn && checkOut && (
                    <p className="text-center text-muted-foreground mb-6">
                      {nights} {nights === 1 ? "night" : "nights"} ·{" "}
                      {format(checkIn, "MMM d")} -{" "}
                      {format(checkOut, "MMM d, yyyy")}
                    </p>
                  )}

                  {/* Error Message */}
                  {error && (
                    <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-6">
                      <p className="text-red-600 text-center">{error}</p>
                    </div>
                  )}

                  {/* Search Button */}
                  <Button
                    className="w-full bg-jungle text-seashell py-6 text-center font-medium hover:bg-moss-green transition-colors tracking-wide uppercase"
                    onClick={handleSearch}
                    disabled={!canSearch}
                  >
                    {isSearching ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Checking All Villas...
                      </>
                    ) : (
                      "Check Availability"
                    )}
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Results */}
            {step === "results" && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {/* Results Header */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-light text-jungle mb-2 heading-display">
                    Availability Results
                  </h2>
                  <p className="text-muted-foreground">
                    {format(checkIn!, "MMM d")} -{" "}
                    {format(checkOut!, "MMM d, yyyy")} · {nights}{" "}
                    {nights === 1 ? "night" : "nights"} · {adults}{" "}
                    {parseInt(adults) === 1 ? "adult" : "adults"}
                    {parseInt(children) > 0 &&
                      `, ${children} ${parseInt(children) === 1 ? "child" : "children"}`}
                  </p>
                  <button
                    onClick={handleReset}
                    className="text-moss-green hover:text-jungle transition-colors mt-2 text-sm underline"
                  >
                    Change dates
                  </button>
                </div>

                {/* Available Villas */}
                {availableVillas.length > 0 && (
                  <div className="mb-12">
                    <h3 className="text-xl font-light text-jungle mb-6 heading-display flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-moss-green" />
                      Available Villas ({availableVillas.length})
                    </h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {availableVillas.map((result, index) => (
                        <motion.div
                          key={result.villa.slug}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-card border border-border overflow-hidden group"
                        >
                          <Link href={`/villas/${result.villa.slug}`}>
                            <div className="relative aspect-[4/3] overflow-hidden bg-sage-green/20">
                              <div className="w-full h-full bg-gradient-to-br from-moss-green/30 to-jungle/30 group-hover:scale-105 transition-transform duration-500" />
                              <div className="absolute top-4 right-4 bg-moss-green text-seashell px-3 py-1 text-sm font-medium">
                                Available
                              </div>
                            </div>
                          </Link>

                          <div className="p-6">
                            <h4 className="text-xl font-light text-jungle mb-2 heading-display">
                              <Link
                                href={`/villas/${result.villa.slug}`}
                                className="hover:text-moss-green transition-colors"
                              >
                                {result.villa.name}
                              </Link>
                            </h4>

                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                              <span className="flex items-center gap-1">
                                <BedDouble className="h-4 w-4" />
                                {result.villa.bedrooms} Bedrooms
                              </span>
                              <span className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                Up to {result.villa.maxGuests}
                              </span>
                            </div>

                            <p className="text-sm text-muted-foreground mb-4">
                              {result.villa.description}
                            </p>

                            {result.price && (
                              <div className="mb-4">
                                <div className="flex items-baseline justify-between">
                                  <span className="text-2xl font-light text-jungle heading-display">
                                    {formatPrice(result.price)}
                                  </span>
                                  <span className="text-sm text-muted-foreground">
                                    total for {nights} nights
                                  </span>
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  ~{formatUsd(convertIdrToUsd(result.price, exchangeRate))}
                                </div>
                              </div>
                            )}

                            <Link
                              href={`/villas/${result.villa.slug}`}
                              className="flex items-center justify-center gap-2 w-full bg-jungle text-seashell py-3 font-medium hover:bg-moss-green transition-colors tracking-wide uppercase text-sm"
                            >
                              Book Now
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Unavailable Villas */}
                {unavailableVillas.length > 0 && (
                  <div>
                    <h3 className="text-xl font-light text-jungle mb-6 heading-display flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-muted-foreground" />
                      Not Available ({unavailableVillas.length})
                    </h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {unavailableVillas.map((result, index) => (
                        <motion.div
                          key={result.villa.slug}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: (availableVillas.length + index) * 0.1,
                          }}
                          className="bg-card border border-border overflow-hidden opacity-60"
                        >
                          <div className="relative aspect-[4/3] overflow-hidden bg-sage-green/20">
                            <div className="w-full h-full bg-gradient-to-br from-muted/30 to-muted/50 grayscale" />
                            <div className="absolute top-4 right-4 bg-muted text-muted-foreground px-3 py-1 text-sm font-medium">
                              Not Available
                            </div>
                          </div>

                          <div className="p-6">
                            <h4 className="text-xl font-light text-jungle mb-2 heading-display">
                              {result.villa.name}
                            </h4>

                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                              <span className="flex items-center gap-1">
                                <BedDouble className="h-4 w-4" />
                                {result.villa.bedrooms} Bedrooms
                              </span>
                              <span className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                Up to {result.villa.maxGuests}
                              </span>
                            </div>

                            <p className="text-sm text-muted-foreground mb-4">
                              {result.errorMessage ||
                                "Not available for selected dates"}
                            </p>

                            <Link
                              href={`/villas/${result.villa.slug}`}
                              className="text-moss-green hover:text-jungle transition-colors text-sm"
                            >
                              View villa details
                            </Link>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* No Results */}
                {results.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">
                      No villas found. Please try different dates.
                    </p>
                    <Button onClick={handleReset} variant="outline">
                      Search Again
                    </Button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-jungle text-seashell">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-light mb-4 heading-display">
              Need Help Booking?
            </h2>
            <p className="text-seashell/80 max-w-2xl mx-auto mb-8">
              Our team is here to help you plan your perfect stay. Contact us
              for group bookings, special requests, or any questions.
            </p>
            <Link
              href="/contact"
              className="inline-block border-2 border-seashell text-seashell px-8 py-4 font-medium hover:bg-seashell hover:text-jungle transition-colors tracking-wide uppercase"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
