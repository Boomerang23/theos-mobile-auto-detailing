import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { ContactCard } from "@/components/sections/ContactCard";
import { ContactForm } from "@/components/sections/ContactForm";
import { Map } from "@/components/sections/Map";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Heading } from "@/components/ui/Heading";
import { contactCopy, serviceAreaCopy } from "@/data/contact";
import { pageGraphSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description: contactCopy.subtitle,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        id="ld-contact"
        data={pageGraphSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHeader
        title={contactCopy.title}
        description={contactCopy.subtitle}
      />

      <Section ariaLabelledby="contact-form-heading">
        <AnimatedSection>
          <div className="grid gap-gap lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
            <div>
              <Heading as={2} id="contact-form-heading" className="sr-only">
                {contactCopy.title}
              </Heading>
              <ContactForm />
            </div>
            <ContactCard />
          </div>
        </AnimatedSection>
      </Section>

      <Section
        ariaLabelledby="contact-map-heading"
        className="bg-gray-light"
      >
        <AnimatedSection>
          <Heading as={2} id="contact-map-heading" className="mb-32">
            {serviceAreaCopy.title}
          </Heading>
          <div className="grid gap-gap lg:grid-cols-2">
            <Map />
            <ServiceArea />
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}
