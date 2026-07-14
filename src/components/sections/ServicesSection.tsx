import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTAButton } from "@/components/layout/CTAButton";
import { Section } from "@/components/layout/Section";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { businessConfig } from "@/data/business";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <Section
      id="services"
      ariaLabelledby="services-heading"
      className="bg-gray-light"
      deferPaint
    >
      <AnimatedSection>
        <div className="mb-48 flex flex-col gap-24 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Heading as={2} id="services-heading">
              Services
            </Heading>
            <Paragraph className="mt-16 max-w-2xl text-gray-dark">
              Professional mobile detailing for vehicles in{" "}
              {businessConfig.location} — interior, exterior, and more.
            </Paragraph>
          </div>
          <CTAButton />
        </div>
        <ServicesGrid services={services} linkToServicesPage />
      </AnimatedSection>
    </Section>
  );
}
