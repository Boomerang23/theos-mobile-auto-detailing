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
          <div className="mt-24 flex w-full flex-col gap-16 sm:w-auto sm:flex-row sm:items-center">
            <a
              href={`tel:${businessConfig.phone}`}
              className="btn-interactive inline-flex h-button w-full items-center justify-center rounded-button border border-secondary px-32 text-button font-medium text-secondary hover:bg-secondary hover:text-primary focus-ring-on-dark sm:w-auto"
            >
              {ctaCopy.callNow}: {businessConfig.phoneFormatted}
            </a>
            <CTAButton className="w-full focus-ring-on-dark focus-ring-on-accent sm:w-auto" />
          </div>
        </div>

        <div className="rounded-card bg-secondary p-24 text-primary shadow-soft sm:p-card">
          <ContactForm />
        </div>
      </AnimatedSection>
    </Section>
  );
}
