import type { Metadata } from "next";
import { ExternalLink, Star } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTAButton } from "@/components/layout/CTAButton";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { ReviewCard } from "@/components/sections/ReviewCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { businessConfig } from "@/data/business";
import {
  reviewsPageCopy,
  testimonials,
  testimonialsCopy,
} from "@/data/testimonials";
import { pageGraphSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: reviewsPageCopy.pageTitle,
  description: reviewsPageCopy.pageDescription,
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        id="ld-reviews"
        data={pageGraphSchema([
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews" },
        ])}
      />
      <PageHeader
        title={reviewsPageCopy.pageTitle}
        description={reviewsPageCopy.pageDescription}
      />

      <Section ariaLabelledby="yelp-reviews-heading">
        <AnimatedSection>
          <div className="max-w-2xl">
            <Heading as={2} id="yelp-reviews-heading" size="card">
              Reviews on Yelp
            </Heading>
            <Paragraph className="mt-16 text-gray-dark">
              {reviewsPageCopy.yelpHint}
            </Paragraph>
          </div>

          <div className="mt-32 flex flex-col gap-16 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={businessConfig.socials.yelp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-interactive inline-flex h-button items-center justify-center gap-12 rounded-button bg-accent px-32 text-button font-medium text-primary hover:brightness-110"
            >
              <Star className="h-20 w-20" strokeWidth={1.5} aria-hidden />
              {reviewsPageCopy.yelpCta}
              <ExternalLink className="h-16 w-16" strokeWidth={1.5} aria-hidden />
            </a>
            <a
              href={businessConfig.socials.yelp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-interactive inline-flex h-button items-center justify-center gap-12 rounded-button border border-primary px-32 text-button font-medium text-primary hover:bg-primary hover:text-secondary"
            >
              {reviewsPageCopy.leaveReviewCta}
            </a>
          </div>
        </AnimatedSection>
      </Section>

      {testimonials.length > 0 ? (
        <Section
          ariaLabelledby="featured-reviews-heading"
          className="bg-gray-light"
        >
          <AnimatedSection>
            <Heading as={2} id="featured-reviews-heading">
              {testimonialsCopy.title}
            </Heading>
            <Paragraph className="mt-16 max-w-3xl text-gray-dark">
              {testimonialsCopy.subtitle}
            </Paragraph>
            <ul className="mt-48 grid list-none gap-gap sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((review) => (
                <li key={review.id}>
                  <ReviewCard review={review} />
                </li>
              ))}
            </ul>
            <div className="mt-48">
              <CTAButton />
            </div>
          </AnimatedSection>
        </Section>
      ) : (
        <Section className="bg-gray-light" ariaLabelledby="reviews-cta-heading">
          <AnimatedSection>
            <Heading as={2} id="reviews-cta-heading" className="sr-only">
              Book your detail
            </Heading>
            <Paragraph className="max-w-2xl text-gray-dark">
              Ready for a clean, detailed vehicle? Book a mobile appointment in{" "}
              {businessConfig.locationShort}.
            </Paragraph>
            <div className="mt-32">
              <CTAButton />
            </div>
          </AnimatedSection>
        </Section>
      )}
    </>
  );
}
