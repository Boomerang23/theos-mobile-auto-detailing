import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { privacyCopy } from "@/data/legal";
import { pageGraphSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: privacyCopy.description,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        id="ld-privacy"
        data={pageGraphSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
      <PageHeader
        title={privacyCopy.title}
        description={`Last updated: ${privacyCopy.lastUpdated}`}
      />

      <Section ariaLabelledby="privacy-content-heading">
        <AnimatedSection>
          <Heading as={2} id="privacy-content-heading" className="sr-only">
            Privacy Policy details
          </Heading>
          <div className="mx-auto flex max-w-3xl flex-col gap-48">
            {privacyCopy.sections.map((section) => (
              <article key={section.id} className="flex flex-col gap-16">
                <Heading as={2} size="card" id={section.id}>
                  {section.title}
                </Heading>
                {section.paragraphs.map((paragraph, index) => (
                  <Paragraph key={`${section.id}-p-${index}`} className="text-gray-dark">
                    {paragraph}
                  </Paragraph>
                ))}
                {section.bullets ? (
                  <ul className="list-disc space-y-8 pl-24 text-body text-gray-dark">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}
