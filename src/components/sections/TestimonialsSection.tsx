import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTAButton } from "@/components/layout/CTAButton";
import { Section } from "@/components/layout/Section";
import { ReviewCard } from "@/components/sections/ReviewCard";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { businessConfig } from "@/data/business";
import { testimonials, testimonialsCopy } from "@/data/testimonials";

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
            [PLACEHOLDER] Customer reviews will appear here once verified
            testimonials are added. Meanwhile, see recent work on{" "}
            <a
              href={businessConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent transition duration-DEFAULT hover:brightness-110"
            >
              {businessConfig.instagramHandle}
            </a>
            .
          </Paragraph>
        )}

        <div className="mt-48">
          <CTAButton />
        </div>
      </AnimatedSection>
    </Section>
  );
}
