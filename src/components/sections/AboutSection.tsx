import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTAButton } from "@/components/layout/CTAButton";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { aboutCopy } from "@/data/about";
import { businessConfig } from "@/data/business";
import { ctaCopy } from "@/data/navigation";

export function AboutSection() {
  return (
    <Section id="about" ariaLabelledby="about-intro-heading" deferPaint>
      <AnimatedSection>
        <div className="grid items-center gap-gap lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-image bg-primary sm:aspect-[5/4] lg:aspect-[4/5]">
            {aboutCopy.hasPhoto ? (
              <Image
                src={aboutCopy.photoSrc}
                alt={aboutCopy.photoAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={80}
              />
            ) : (
              <div
                className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-gray-dark"
                role="img"
                aria-label="Photo of Theo coming soon"
              >
                <div className="absolute inset-0 bg-dot-pattern opacity-[0.08]" />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/15 to-transparent" />
              </div>
            )}
          </div>

          <div>
            <p className="mb-16 font-heading text-small font-semibold tracking-[0.04em] text-accent">
              {businessConfig.location}
            </p>
            <Heading as={2} id="about-intro-heading">
              {aboutCopy.pageTitle}
            </Heading>
            <Paragraph className="mt-24 max-w-xl text-gray-dark">
              {aboutCopy.intro}
            </Paragraph>
            <Paragraph className="mt-16 max-w-xl text-gray-dark">
              {aboutCopy.qualityStatement}
            </Paragraph>

            <div className="mt-32 flex flex-col gap-16 sm:flex-row sm:items-center">
              <CTAButton className="w-full sm:w-auto" />
              <a
                href={`tel:${businessConfig.phone}`}
                className="btn-interactive inline-flex h-button w-full items-center justify-center rounded-button border border-primary px-32 text-button font-medium text-primary hover:bg-primary hover:text-secondary sm:w-auto"
              >
                {ctaCopy.callNow}
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}
