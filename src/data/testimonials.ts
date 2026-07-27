import { businessConfig } from "@/data/business";

export const testimonialsCopy = {
  title: "Trusted by Our Customers",
  subtitle: `See why customers recommend ${businessConfig.name}.`,
} as const;

export const reviewsPageCopy = {
  pageTitle: "Reviews",
  pageDescription: `Read what customers say about ${businessConfig.name} in ${businessConfig.locationShort}.`,
  yelpCta: "Read Reviews on Yelp",
  leaveReviewCta: "Leave a Review on Yelp",
  yelpHint:
    "Featured feedback from our Yelp page. Visit Yelp to read more or share your own experience.",
} as const;

export type Testimonial = {
  id: string;
  name: string;
  /** Omit when the source is a Yelp photo caption without a star rating. */
  rating?: 1 | 2 | 3 | 4 | 5;
  quote: string;
  /** Optional customer photo path under /public */
  photoSrc?: string;
  photoAlt?: string;
  source?: "google" | "yelp";
};

/**
 * Verified customer feedback from Yelp (screenshots Jul 2026).
 * Quotes are copied from the live listing — do not invent reviews.
 */
export const testimonials: Testimonial[] = [
  {
    id: "henry-m",
    name: "Henry M.",
    rating: 5,
    quote:
      "Fantastic job by an awesome person! Theo is thorough and passionate about making your car look fresh and clean! Highly recommend for high quality service at a fair price!",
    source: "yelp",
  },
  {
    id: "conor-l-van",
    name: "Conor L.",
    quote: "Wife's van looking sparkling clean",
    source: "yelp",
  },
  {
    id: "conor-l-suv",
    name: "Conor L.",
    quote: "My Dad mobile looking sparkling clean",
    source: "yelp",
  },
];
