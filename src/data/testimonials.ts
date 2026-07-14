export const testimonialsCopy = {
  title: "Trusted by Our Customers",
  subtitle: "See why customers recommend Theo's Auto Detailing.",
} as const;

export type Testimonial = {
  id: string;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  /** Optional customer photo path under /public */
  photoSrc?: string;
  photoAlt?: string;
  source?: "google";
};

/**
 * Google Reviews inventory (CONTENT_PLAN → Testimonials display strategy).
 * Add verified customer reviews here when available — do not invent quotes.
 */
export const testimonials: Testimonial[] = [];
