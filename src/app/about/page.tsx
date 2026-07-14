import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  Clock,
  Eye,
  Home,
  MapPin,
  Sparkles,
  Wrench,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTAButton } from "@/components/layout/CTAButton";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { IconBox } from "@/components/ui/IconBox";
import { Paragraph } from "@/components/ui/Paragraph";
import { aboutCopy, aboutValues } from "@/data/about";
import { businessConfig } from "@/data/business";
import { ctaCopy } from "@/data/navigation";
import { pageGraphSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import Image from "next/image";

const valueIcons: Record<string, LucideIcon> = {
  MapPin,
  Eye,
  Wrench,
  Clock,
  Sparkles,
  Home,
};

export const metadata: Metadata = buildPageMetadata({
  title: "About Theo",
  description: aboutCopy.intro,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        id="ld-about"
        data={pageGraphSchema([
          { name: "Home", path: "/" },
          { name: "About Theo", path: "/about" },
        ])}
      />
      <PageHeader
        title={aboutCopy.pageTitle}
        description={aboutCopy.pageDescription}
      />

      <Section ariaLabelledby="about-heading">
        <AnimatedSection>
          <div className="grid items-center gap-gap lg:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-image bg-primary sm:aspect-[5/4] lg:max-w-md">
              {aboutCopy.hasPhoto ? (
                <Image
                  src={aboutCopy.photoSrc}
                  alt={aboutCopy.photoAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 28rem"
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
              <Heading as={2} id="about-heading">
                {aboutCopy.introTitle}
              </Heading>
              <Paragraph className="mt-16 text-accent">{aboutCopy.tagline}</Paragraph>
              <Paragraph className="mt-24 max-w-3xl text-gray-dark">
                {aboutCopy.intro}
              </Paragraph>
              <Paragraph className="mt-16 max-w-3xl text-gray-dark">
                {aboutCopy.qualityStatement}
              </Paragraph>

              <div className="mt-48 flex flex-col gap-16 sm:flex-row sm:items-center">
                <CTAButton />
                <a
                  href={`tel:${businessConfig.phone}`}
                  className="inline-flex h-button items-center justify-center rounded-button border border-primary px-32 text-button font-medium text-primary transition duration-DEFAULT hover:bg-primary hover:text-secondary"
                >
                  {ctaCopy.callNow}
                </a>
              </div>

              <Paragraph size="small" className="mt-32 text-gray-dark">
                {businessConfig.phoneFormatted} · {businessConfig.location}
              </Paragraph>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <Section
        ariaLabelledby="about-values-heading"
        className="bg-gray-light"
      >
        <AnimatedSection>
          <Heading as={2} id="about-values-heading">
            {aboutCopy.valuesTitle}
          </Heading>
          <Paragraph className="mt-16 max-w-3xl text-gray-dark">
            {aboutCopy.valuesDescription}
          </Paragraph>

          <ul className="mt-48 grid list-none gap-gap sm:grid-cols-2 lg:grid-cols-3">
            {aboutValues.map((value) => {
              const Icon = valueIcons[value.icon] ?? Sparkles;

              return (
                <li key={value.id}>
                  <Card className="h-full">
                    <IconBox icon={Icon} label={value.title} />
                    <Heading as={3} size="card" className="mt-24">
                      {value.title}
                    </Heading>
                    <Paragraph size="small" className="mt-8 text-gray-dark">
                      {value.description}
                    </Paragraph>
                  </Card>
                </li>
              );
            })}
          </ul>

          <div className="mt-48">
            <CTAButton />
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}
