import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-8xl md:text-9xl font-light text-jungle/20 mb-4 heading-display">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-light text-jungle mb-4 heading-display">
            Page Not Found
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Oops! The page you're looking for seems to have wandered off into
            the rice fields. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-jungle text-seashell px-8 py-4 font-medium tracking-wider hover:bg-moss-green transition-colors"
            >
              GO HOME
            </Link>
            <Link
              href="/villas"
              className="border border-jungle text-jungle px-8 py-4 font-medium tracking-wider hover:bg-jungle hover:text-seashell transition-colors"
            >
              VIEW VILLAS
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
