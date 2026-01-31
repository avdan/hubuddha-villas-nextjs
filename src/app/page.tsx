import { Navbar, Footer } from "@/components/layout";
import {
  Hero,
  About,
  Services,
  Villas,
  Testimonials,
  Contact,
  Blog,
} from "@/components/home";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Villas />
      <Testimonials />
      <Contact />
      <Blog />
      <Footer />
    </div>
  );
}
