import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return (
    <>
      <main className="flex flex-col min-h-screen">
        <div>
          <Hero />
          <LogoTicker />
          <ProductShowcase />
          <Pricing />
          <Testimonials />
          <CallToAction />
        </div>
        <Footer />
      </main>
    </>
  );
}
