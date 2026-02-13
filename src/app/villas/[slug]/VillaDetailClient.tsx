"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import {
  Maximize2,
  Users,
  BedDouble,
  Bath,
  Wifi,
  Wind,
  Waves,
  Car,
  Shield,
  ChefHat,
  Sparkles,
  UtensilsCrossed,
  Tv,
  Coffee,
  Shirt,
  Lock,
  CalendarIcon,
  ChevronDown,
  Eye,
  TreePine,
  Droplets,
  Briefcase,
  Loader2,
  CheckCircle,
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
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { Villa } from "@/lib/types";
import { useBooking, type GuestDetails } from "@/hooks/use-booking";
import { formatPrice } from "@/lib/smoobu";
import { formatUsd, convertIdrToUsd } from "@/lib/exchange-rate";

// Icon mapping for amenities
const amenityIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  private_pool: Waves,
  rice_field_views: Eye,
  air_conditioning: Wind,
  fibre_internet: Wifi,
  fully_equipped_kitchen: ChefHat,
  outdoor_shower: Droplets,
  workspace: Briefcase,
  smart_tv: Tv,
  daily_housekeeping: Sparkles,
};

// Format amenity name for display
function formatAmenityName(amenity: string): string {
  return amenity
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

interface VillaDetailClientProps {
  villa: Villa;
  otherVillas: Villa[];
}

export default function VillaDetailClient({ villa, otherVillas }: VillaDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [guestDetails, setGuestDetails] = useState<GuestDetails>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  });
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

  const { villaDetails } = villa;
  const gallery = villaDetails.gallery?.nodes || [];
  const amenities = villaDetails.amenities || [];

  // Booking hook
  const booking = useBooking(villa.slug);

  const handleCheckAvailability = () => {
    if (checkIn && checkOut) {
      booking.checkAvailabilityForDates(
        checkIn,
        checkOut,
        parseInt(adults),
        parseInt(children)
      );
    }
  };

  const handleSubmitBooking = () => {
    booking.submitBooking(guestDetails);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Image */}
      <section className="relative h-[60vh] lg:h-[70vh] bg-jungle">
        {villa.featuredImage ? (
          <Image
            src={villa.featuredImage.node.sourceUrl}
            alt={villa.featuredImage.node.altText || villa.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-jungle/60 to-jungle/40" />
        )}
        <div className="absolute inset-0 bg-jungle/30" />
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-jungle mb-4 heading-display">
                {villa.title}
              </h1>
              {villaDetails.tagline && (
                <p className="text-muted-foreground mb-8">{villaDetails.tagline}</p>
              )}

              {/* Quick Specs */}
              <div className="flex flex-wrap gap-6 mb-12 pb-8 border-b border-border">
                {villaDetails.villaSize && (
                  <div className="flex items-center gap-3">
                    <Maximize2 className="w-5 h-5 text-moss-green" />
                    <span className="text-foreground">{villaDetails.villaSize}</span>
                  </div>
                )}
                {villaDetails.maxGuests && (
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-moss-green" />
                    <span className="text-foreground">Up to {villaDetails.maxGuests} Guests</span>
                  </div>
                )}
                {villaDetails.bedrooms && (
                  <div className="flex items-center gap-3">
                    <BedDouble className="w-5 h-5 text-moss-green" />
                    <span className="text-foreground">{villaDetails.bedrooms} Bedrooms</span>
                  </div>
                )}
                {villaDetails.bathrooms && (
                  <div className="flex items-center gap-3">
                    <Bath className="w-5 h-5 text-moss-green" />
                    <span className="text-foreground">{villaDetails.bathrooms} Bathrooms</span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Gallery */}
            {gallery.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-12"
              >
                {/* Main Image */}
                <div className="mb-4 relative aspect-video">
                  <Image
                    src={gallery[selectedImage]?.sourceUrl || ""}
                    alt={gallery[selectedImage]?.altText || villa.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-6 gap-2">
                  {gallery.slice(0, 6).map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square overflow-hidden transition-all relative ${
                        selectedImage === index
                          ? "ring-2 ring-moss-green ring-offset-2"
                          : "opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={image.sourceUrl}
                        alt={image.altText || `Gallery ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-light text-jungle mb-6 heading-display">
                Description of the Villa
              </h2>
              {villaDetails.shortDescription && (
                <div
                  className="text-muted-foreground leading-relaxed mb-4 prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: villaDetails.shortDescription }}
                />
              )}
              {villa.content && (
                <div
                  className="text-muted-foreground leading-relaxed prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: villa.content }}
                />
              )}
            </motion.div>

            {/* Specs Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 p-8 bg-card border border-border"
            >
              {villaDetails.villaSize && (
                <div className="text-center">
                  <Maximize2 className="w-8 h-8 text-moss-green mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-1">Villa Size</p>
                  <p className="text-lg font-light text-jungle heading-display">
                    {villaDetails.villaSize}
                  </p>
                </div>
              )}
              {villaDetails.bedrooms && (
                <div className="text-center">
                  <BedDouble className="w-8 h-8 text-moss-green mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-1">Bedrooms</p>
                  <p className="text-lg font-light text-jungle heading-display">
                    {villaDetails.bedrooms} Bedrooms
                  </p>
                </div>
              )}
              {villaDetails.maxGuests && (
                <div className="text-center">
                  <Users className="w-8 h-8 text-moss-green mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-1">Occupancy</p>
                  <p className="text-lg font-light text-jungle heading-display">
                    Up to {villaDetails.maxGuests}
                  </p>
                </div>
              )}
              {villaDetails.bathrooms && (
                <div className="text-center">
                  <Bath className="w-8 h-8 text-moss-green mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-1">Bathrooms</p>
                  <p className="text-lg font-light text-jungle heading-display">
                    {villaDetails.bathrooms} Bathrooms
                  </p>
                </div>
              )}
            </motion.div>

            {/* Amenities */}
            {amenities.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-light text-jungle mb-6 heading-display">
                  Amenities
                </h2>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {amenities.map((amenity, index) => {
                    const IconComponent = amenityIcons[amenity] || Sparkles;
                    return (
                      <div
                        key={index}
                        className="group flex flex-col items-center text-center"
                      >
                        <div className="w-16 h-16 rounded-full bg-sage-green/30 flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-moss-green">
                          <IconComponent className="w-7 h-7 text-moss-green transition-colors duration-300 group-hover:text-seashell" />
                        </div>
                        <span className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-jungle">
                          {formatAmenityName(amenity)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Highlight Features */}
            {villaDetails.highlightFeatures && villaDetails.highlightFeatures.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-light text-jungle mb-6 heading-display">
                  Highlights
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {villaDetails.highlightFeatures.map((feature, index) => (
                    <div key={index} className="p-6 bg-sage-green/10 border border-sage-green/20">
                      <h3 className="text-lg font-medium text-jungle mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Other Villas */}
            {otherVillas.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h2 className="text-2xl font-light text-jungle mb-6 heading-display">
                  Other Villas
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {otherVillas.slice(0, 2).map((otherVilla) => (
                    <Link
                      key={otherVilla.id}
                      href={`/villas/${otherVilla.slug}`}
                      className="group"
                    >
                      <div className="aspect-[4/3] overflow-hidden mb-4 relative bg-sage-green/20">
                        {otherVilla.featuredImage ? (
                          <Image
                            src={otherVilla.featuredImage.node.sourceUrl}
                            alt={otherVilla.featuredImage.node.altText || otherVilla.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-moss-green/20 to-jungle/20 group-hover:scale-105 transition-transform duration-500" />
                        )}
                      </div>
                      <h3 className="text-xl font-light text-jungle mb-2 heading-display group-hover:text-moss-green transition-colors">
                        {otherVilla.title}
                      </h3>
                      {otherVilla.villaDetails.shortDescription && (
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {otherVilla.villaDetails.shortDescription}
                        </p>
                      )}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column - Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Booking Form Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card border border-border p-6"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-light text-jungle heading-display">
                    Book Your Stay
                  </h3>
                  {villaDetails.pricePerNight && (
                    <div className="text-right">
                      <span className="text-2xl font-light text-jungle">
                        ${villaDetails.pricePerNight}
                      </span>
                      <span className="text-sm text-muted-foreground">/night</span>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
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
                        >
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="h-4 w-4" />
                            {checkIn ? format(checkIn, "PPP") : "Select date"}
                          </div>
                          <ChevronDown className="h-4 w-4 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-card z-50" align="start">
                        <Calendar
                          mode="single"
                          selected={checkIn}
                          onSelect={setCheckIn}
                          disabled={(date) => date < new Date()}
                          initialFocus
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
                        >
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="h-4 w-4" />
                            {checkOut ? format(checkOut, "PPP") : "Select date"}
                          </div>
                          <ChevronDown className="h-4 w-4 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-card z-50" align="start">
                        <Calendar
                          mode="single"
                          selected={checkOut}
                          onSelect={setCheckOut}
                          disabled={(date) =>
                            date < new Date() || (checkIn ? date <= checkIn : false)
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Adults */}
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Adults
                    </label>
                    <Select value={adults} onValueChange={setAdults}>
                      <SelectTrigger className="w-full h-12">
                        <SelectValue placeholder="Select adults" />
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
                    <Select value={children} onValueChange={setChildren}>
                      <SelectTrigger className="w-full h-12">
                        <SelectValue placeholder="Select children" />
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

                  {/* Submit Button */}
                  <Button
                    onClick={handleCheckAvailability}
                    disabled={!checkIn || !checkOut || booking.isChecking}
                    className="w-full bg-jungle text-seashell py-6 text-center font-medium hover:bg-moss-green transition-colors tracking-wide uppercase mt-6 disabled:opacity-50"
                  >
                    {booking.isChecking ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Checking...
                      </span>
                    ) : (
                      "Check Availability"
                    )}
                  </Button>

                  {/* Availability Result */}
                  <AnimatePresence mode="wait">
                    {booking.step === "available" && booking.availability && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-6 p-4 bg-moss-green/10 border border-moss-green/30 rounded-lg"
                      >
                        <div className="flex items-center gap-2 text-moss-green mb-3">
                          <CheckCircle className="w-5 h-5" />
                          <span className="font-medium">Available!</span>
                        </div>
                        <div className="mb-4">
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">
                              {booking.nights} nights
                            </span>
                            <span className="text-2xl font-light text-jungle">
                              {formatPrice(booking.availability.price || 0)}
                            </span>
                          </div>
                          <div className="text-right text-sm text-muted-foreground">
                            ~{formatUsd(convertIdrToUsd(booking.availability.price || 0, exchangeRate))}
                          </div>
                        </div>
                        <Button
                          onClick={() => booking.step === "available" && booking.resetBooking()}
                          variant="outline"
                          className="w-full mb-2"
                        >
                          Change Dates
                        </Button>
                        <Button
                          className="w-full bg-jungle text-seashell hover:bg-moss-green"
                          onClick={() => {
                            // Show guest details form
                            const form = document.getElementById("guest-details-form");
                            form?.scrollIntoView({ behavior: "smooth" });
                          }}
                        >
                          Continue to Book
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </motion.div>
                    )}

                    {booking.step === "unavailable" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-6 p-4 bg-destructive/10 border border-destructive/30 rounded-lg"
                      >
                        <div className="flex items-center gap-2 text-destructive mb-2">
                          <XCircle className="w-5 h-5" />
                          <span className="font-medium">Not Available</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {booking.error || "Selected dates are not available"}
                        </p>
                        <Button
                          onClick={booking.resetBooking}
                          variant="outline"
                          className="w-full mt-3"
                        >
                          Try Different Dates
                        </Button>
                      </motion.div>
                    )}

                    {booking.step === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-6 p-4 bg-destructive/10 border border-destructive/30 rounded-lg"
                      >
                        <div className="flex items-center gap-2 text-destructive mb-2">
                          <XCircle className="w-5 h-5" />
                          <span className="font-medium">Error</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{booking.error}</p>
                        <Button
                          onClick={booking.resetBooking}
                          variant="outline"
                          className="w-full mt-3"
                        >
                          Try Again
                        </Button>
                      </motion.div>
                    )}

                    {booking.step === "confirmed" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-6 p-4 bg-moss-green/10 border border-moss-green/30 rounded-lg"
                      >
                        <div className="flex items-center gap-2 text-moss-green mb-3">
                          <CheckCircle className="w-5 h-5" />
                          <span className="font-medium">Booking Confirmed!</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          Booking ID: {booking.bookingResult?.bookingId}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          A confirmation email has been sent to your email address.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Guest Details Form - shown after availability confirmed */}
              {(booking.step === "available" || booking.step === "guest-details" || booking.step === "booking") && (
                <motion.div
                  id="guest-details-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-card border border-border p-6"
                >
                  <h3 className="text-xl font-light text-jungle mb-6 heading-display">
                    Guest Details
                  </h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-muted-foreground mb-2">
                          First Name *
                        </label>
                        <Input
                          value={guestDetails.firstName}
                          onChange={(e) =>
                            setGuestDetails({ ...guestDetails, firstName: e.target.value })
                          }
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-muted-foreground mb-2">
                          Last Name *
                        </label>
                        <Input
                          value={guestDetails.lastName}
                          onChange={(e) =>
                            setGuestDetails({ ...guestDetails, lastName: e.target.value })
                          }
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        value={guestDetails.email}
                        onChange={(e) =>
                          setGuestDetails({ ...guestDetails, email: e.target.value })
                        }
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        value={guestDetails.phone}
                        onChange={(e) =>
                          setGuestDetails({ ...guestDetails, phone: e.target.value })
                        }
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">
                        Special Requests
                      </label>
                      <textarea
                        value={guestDetails.specialRequests}
                        onChange={(e) =>
                          setGuestDetails({ ...guestDetails, specialRequests: e.target.value })
                        }
                        placeholder="Any special requests..."
                        rows={3}
                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                      />
                    </div>

                    {booking.guestErrors.length > 0 && (
                      <div className="p-3 bg-destructive/10 border border-destructive/30 rounded-lg">
                        {booking.guestErrors.map((error, i) => (
                          <p key={i} className="text-sm text-destructive">
                            {error}
                          </p>
                        ))}
                      </div>
                    )}

                    <Button
                      onClick={handleSubmitBooking}
                      disabled={booking.isBooking}
                      className="w-full bg-jungle text-seashell py-6 hover:bg-moss-green"
                    >
                      {booking.isBooking ? (
                        <span className="flex items-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Processing...
                        </span>
                      ) : (
                        <>
                          Confirm Booking
                          {booking.availability?.price && (
                            <span className="ml-2">
                              - {formatPrice(booking.availability.price)} (~{formatUsd(convertIdrToUsd(booking.availability.price, exchangeRate))})
                            </span>
                          )}
                        </>
                      )}
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-card border border-border p-6"
              >
                <h3 className="text-xl font-light text-jungle mb-6 heading-display">
                  Contact Us
                </h3>

                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      href="https://api.whatsapp.com/send/?phone=6281215990063&text=Hi%21+I+have+a+question+about+Hubuddha+Villas.&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-moss-green transition-colors"
                    >
                      +62 812 1599 0063
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@hubuddha.com"
                      className="text-muted-foreground hover:text-moss-green transition-colors"
                    >
                      info@hubuddha.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.hubuddha.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-moss-green transition-colors"
                    >
                      www.hubuddha.com
                    </a>
                  </li>
                  <li className="text-muted-foreground">
                    Jl. Raya Pejeng Kawan, Ubud, Bali
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
