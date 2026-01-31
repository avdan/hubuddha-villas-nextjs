import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { OrganizationJsonLd, LocalBusinessJsonLd } from "@/components/seo";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hubuddha Villas - Luxury Villas in Ubud, Bali",
    template: "%s | Hubuddha Villas",
  },
  description:
    "Experience authentic Balinese luxury at Hubuddha Villas. Brand-new private villas with pools, rice field views, and modern amenities in the heart of Ubud.",
  keywords: [
    "Bali villas",
    "Ubud accommodation",
    "luxury villas Bali",
    "private pool villa",
    "Hubuddha",
    "rice field views",
    "Bali retreat",
  ],
  authors: [{ name: "Hubuddha Villas" }],
  creator: "Hubuddha Villas",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://hubuddha.com",
    siteName: "Hubuddha Villas",
    title: "Hubuddha Villas - Luxury Villas in Ubud, Bali",
    description:
      "Experience authentic Balinese luxury at Hubuddha Villas. Brand-new private villas with pools, rice field views, and modern amenities in the heart of Ubud.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hubuddha Villas - Luxury Villas in Ubud, Bali",
    description:
      "Experience authentic Balinese luxury at Hubuddha Villas. Private villas with pools and rice field views.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
      </head>
      <body className={`${cormorant.variable} font-serif antialiased`}>
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
