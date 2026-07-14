import type { Metadata } from "next";
import { CTAButton } from "@/components/layout/CTAButton";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { PricingGrid } from "@/components/sections/PricingGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { pricingCopy, pricingPackages } from "@/data/packages";
import { pageGraphSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Pricing",
  description:
    "Basic Detail, Deluxe Detail, and Platinum Detail packages for sedans and larger vehicles.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <JsonLd
        id="ld-pricing"
        data={pageGraphSchema([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
      <PageHeader title={pricingCopy.title} />

      <Section ariaLabelledby="pricing-packages-heading">
        <AnimatedSection>
          <h2 id="pricing-packages-heading" className="sr-only">
            Detailing packages
          </h2>
          <PricingGrid packages={pricingPackages} showNotes />
          <div className="mt-48">
            <CTAButton />
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}
