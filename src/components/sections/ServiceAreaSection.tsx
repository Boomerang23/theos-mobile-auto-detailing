import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Section } from "@/components/layout/Section";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { Heading } from "@/components/ui/Heading";
import { serviceAreaCopy } from "@/data/contact";

export function ServiceAreaSection() {
  return (
    <Section
      id="service-area"
      ariaLabelledby="service-area-heading"
      className="bg-gray-light"
      deferPaint
    >
      <AnimatedSection>
        <Heading as={2} id="service-area-heading" className="mb-48">
          {serviceAreaCopy.title}
        </Heading>
        <ServiceArea showContactCard />
      </AnimatedSection>
    </Section>
  );
}
