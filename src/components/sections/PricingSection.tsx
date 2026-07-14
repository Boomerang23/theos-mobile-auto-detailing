import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTAButton } from "@/components/layout/CTAButton";
import { Section } from "@/components/layout/Section";
import { PricingGrid } from "@/components/sections/PricingGrid";
import { Heading } from "@/components/ui/Heading";
import { pricingCopy, pricingPackages } from "@/data/packages";

export function PricingSection() {
  return (
    <Section
      id="pricing"
      ariaLabelledby="pricing-heading"
      className="bg-gray-light"
      deferPaint
    >
      <AnimatedSection>
        <div className="mb-48 flex flex-col gap-24 sm:flex-row sm:items-end sm:justify-between">
          <Heading as={2} id="pricing-heading">
            {pricingCopy.title}
          </Heading>
          <Link
            href="/pricing"
            className="inline-flex h-button items-center justify-center rounded-button border border-primary px-32 text-button font-medium text-primary transition duration-DEFAULT hover:bg-primary hover:text-secondary"
          >
            Pricing
          </Link>
        </div>

        <PricingGrid packages={pricingPackages} featureLimit={5} />

        <div className="mt-48">
          <CTAButton />
        </div>
      </AnimatedSection>
    </Section>
  );
}
