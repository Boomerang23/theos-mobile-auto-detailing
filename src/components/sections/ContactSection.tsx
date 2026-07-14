import dynamic from "next/dynamic";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTAButton } from "@/components/layout/CTAButton";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { businessConfig } from "@/data/business";
import { contactCopy } from "@/data/contact";
import { ctaCopy } from "@/data/navigation";

const ContactForm = dynamic(
  () =>
    import("@/components/sections/ContactForm").then((mod) => mod.ContactForm),
  {
    loading: () => (
      <div
        className="h-[28rem] w-full animate-pulse rounded-input bg-gray-light"
        aria-hidden
      />
    ),
  },
);

export function ContactSection() {
  return (
    <Section
      id="contact"
      ariaLabelledby="contact-heading"
      className="bg-primary text-secondary"
      deferPaint
    >
      <AnimatedSection>
        <div className="mb-48 max-w-3xl">
          <Heading as={2} id="contact-heading" className="text-secondary">
            {contactCopy.title}
          </Heading>
          <Paragraph className="mt-16 text-secondary/80">
            {contactCopy.subtitle}
          </Paragraph>
          <div className="mt-24 flex flex-col gap-16 sm:flex-row sm:items-center">
            <a
              href={`tel:${businessConfig.phone}`}
              className="inline-flex h-button items-center justify-center rounded-button border border-secondary px-32 text-button font-medium text-secondary transition duration-DEFAULT hover:bg-secondary hover:text-primary focus-ring-on-dark"
            >
              {ctaCopy.callNow}: {businessConfig.phoneFormatted}
            </a>
            <CTAButton className="focus-ring-on-dark" />
          </div>
        </div>

        <div className="rounded-card bg-secondary p-card text-primary shadow-soft">
          <ContactForm />
        </div>
      </AnimatedSection>
    </Section>
  );
}
