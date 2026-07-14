import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { termsCopy } from "@/data/legal";
import { pageGraphSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Service",
  description: termsCopy.description,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        id="ld-terms"
        data={pageGraphSchema([
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms" },
        ])}
      />
      <PageHeader
        title={termsCopy.title}
        description={`Last updated: ${termsCopy.lastUpdated}`}
      />

      <Section ariaLabelledby="terms-content-heading">
        <AnimatedSection>
          <Heading as={2} id="terms-content-heading" className="sr-only">
            Terms of Service details
          </Heading>
          <div className="mx-auto flex max-w-3xl flex-col gap-48">
            {termsCopy.sections.map((section) => (
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
