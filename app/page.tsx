import { FooterSection } from "@/sections/footer-section";
import { AboutSection } from "@/sections/about-section";
import { ContactSection } from "@/sections/contact-section";
import { GallerySection } from "@/sections/gallery-section";
import { HeroSection } from "@/sections/hero-section";
import { JourneySection } from "@/sections/journey-section";
import { Navbar } from "@/sections/navbar";
import { ProgramsSection } from "@/sections/programs-section";
import { TestimonialsSection } from "@/sections/testimonials-section";
import { WhySection } from "@/sections/why-section";

export default function HomePage() {
  return (
    <div className="bg-white text-ink">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <WhySection />
        <JourneySection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}
