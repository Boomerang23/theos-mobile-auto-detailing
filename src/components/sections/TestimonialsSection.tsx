import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTAButton } from "@/components/layout/CTAButton";
import { Section } from "@/components/layout/Section";
import { ReviewCard } from "@/components/sections/ReviewCard";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { businessConfig } from "@/data/business";
import {
  reviewsPageCopy,
  testimonials,
  testimonialsCopy,
} from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <Section
      id="testimonials"
      ariaLabelledby="testimonials-heading"
      className="bg-gray-light"
      deferPaint
    >
      <AnimatedSection>
        <Heading as={2} id="testimonials-heading">
          {testimonialsCopy.title}
        </Heading>
        <Paragraph className="mt-16 max-w-3xl text-gray-dark">
          {testimonialsCopy.subtitle}
        </Paragraph>

        {testimonials.length > 0 ? (
          <ul className="mt-48 grid list-none gap-gap sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((review) => (
              <li key={review.id}>
                <ReviewCard review={review} />
              </li>
            ))}
          </ul>
        ) : (
          <Paragraph size="small" className="mt-32 text-gray-dark">
            {reviewsPageCopy.yelpHint}{" "}
            <a
              href={businessConfig.socials.yelp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent transition duration-DEFAULT hover:brightness-110"
            >
              View on Yelp
            </a>
            {" · "}
            <Link
              href="/reviews"
              className="font-medium text-accent transition duration-DEFAULT hover:brightness-110"
            >
              Reviews page
            </Link>
            .
          </Paragraph>
        )}

        <div className="mt-48 flex flex-col gap-16 sm:flex-row sm:items-center">
          <CTAButton />
          <a
            href={businessConfig.socials.yelp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-interactive inline-flex h-button items-center justify-center rounded-button border border-primary px-32 text-button font-medium text-primary hover:bg-primary hover:text-secondary"
          >
            {reviewsPageCopy.yelpCta}
          </a>
        </div>
      </AnimatedSection>
    </Section>
  );
}
