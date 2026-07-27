import Image from "next/image";
import { RatingStars } from "@/components/sections/RatingStars";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import type { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";

type ReviewCardProps = {
  review: Testimonial;
  className?: string;
};

export function ReviewCard({ review, className }: ReviewCardProps) {
  return (
    <Card className={cn("flex h-full flex-col", className)}>
      {review.rating ? (
        <RatingStars
          rating={review.rating}
          label={`${review.name} rated ${review.rating} out of 5 stars`}
        />
      ) : null}

      <Paragraph
        className={cn(
          "flex-1 whitespace-pre-line text-primary",
          review.rating ? "mt-24" : undefined,
        )}
      >
        “{review.quote}”
      </Paragraph>

      <div className="mt-32 flex items-center gap-16">
        {review.photoSrc ? (
          <div className="relative h-48 w-48 overflow-hidden rounded-full bg-gray-light">
            <Image
              src={review.photoSrc}
              alt={review.photoAlt ?? review.name}
              fill
              className="object-cover"
              sizes="48px"
              quality={70}
              loading="lazy"
              decoding="async"
            />
          </div>
        ) : null}

        <div>
          <Heading as={3} size="card" className="text-card-title">
            {review.name}
          </Heading>
          {review.source === "google" || review.source === "yelp" ? (
            <Paragraph size="small" className="mt-8 text-gray-dark">
              {review.source === "google" ? "Google" : "Yelp"}
              {review.date ? ` · ${review.date}` : null}
            </Paragraph>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
