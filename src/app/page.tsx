import { ContactSection } from "@/components/sections/ContactSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { homeGraphSchema } from "@/lib/schema";
import { buildPageMetadata, siteConfig } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd id="ld-home" data={homeGraphSchema()} />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <WhyChooseSection />
      <AboutSection />
      <TestimonialsSection />
      <ServiceAreaSection />
      <ContactSection />
    </>
  );
}
