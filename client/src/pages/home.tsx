import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import IntegrationSection from "@/components/integration-section";
import CaseStudiesSection from "@/components/case-studies-section";
import TestimonialsSection from "@/components/testimonials-section";
import PricingSection from "@/components/pricing-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <IntegrationSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
