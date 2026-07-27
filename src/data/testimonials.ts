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
  rating?: 1 | 2 | 3 | 4 | 5;
  quote: string;
  /** Optional displayed date label from the source review (e.g. "3 months ago"). */
  date?: string;
  /** Optional customer photo path under /public */
  photoSrc?: string;
  photoAlt?: string;
  source?: "google" | "yelp";
};

/**
 * Verified customer feedback (screenshots Jul 2026).
 * Quotes are copied from the live listings — do not invent reviews.
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
    id: "jon-calderwood",
    name: "Jon Calderwood",
    rating: 5,
    date: "5 months ago",
    quote:
      "Theo came out to our house today to detail/wash our Volkswagen Golf as a Christmas gift from our son Jon.\n\nWe’ve never had a home visit for detailing before so I was a bit unsure of how it would work, but there was little to no effort needed on my part.\n\nTheo was a perfect gentleman and I felt completely reassured by his introduction and breakdown of what the process would include.\n\nWe were gifted a full detail of our car with the option to upgrade to an interior steam clean (worth it)!\n\nTheo brought everything necessary for the job and required nothing from me.\n\nI am very impressed with his attention to detail and I would recommend him to anyone, and in fact our neighbor is interested in booking him now too 👍\n\nOur car is looking fantastic and I couldn’t be happier with the results. I would definitely use Theo’s services again and the whole process was so convenient.",
    source: "google",
  },
  {
    id: "conor-law",
    name: "Conor Law",
    rating: 5,
    date: "3 months ago",
    quote:
      "Theo is fantastic. He came out to our house two nights in a row and put in serious work, starting mid-afternoon and going into the evening. We had both of our cars detailed and they look brand new.\n\nThe price was very reasonable, communication was easy over text and phone, and everything was super smooth to coordinate.\n\nOur cars were in tough shape with kids, outdoor parking, and pine sap, and he got all of it off. Huge difference.\n\nI’m also sensitive to fragrances and he used low or no-scent products inside, which I really appreciated.\n\nReliable, hardworking, and does great work. We’ll definitely be using him again.",
    source: "google",
  },
  {
    id: "stefan-kehnemund",
    name: "Stefan Kehnemund",
    rating: 5,
    date: "2 months ago",
    quote:
      "Theo came out and cleaned two of my vehicles and they did a fantastic job and went above and beyond. My wife’s Tahoe looks brand new and my work truck has never looked this nice.",
    source: "google",
  },
];
