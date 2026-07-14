import { businessConfig } from "@/data/business";

export const aboutCopy = {
  pageTitle: "About Theo",
  pageDescription: `Meet the detailer behind ${businessConfig.name} in ${businessConfig.location}.`,
  introTitle: businessConfig.name,
  /**
   * [PLACEHOLDER] Replace with Theo's preferred short introduction.
   */
  intro:
    "[PLACEHOLDER] Theo is a mobile auto detailer based in Mukilteo, Washington. He brings professional interior and exterior detailing directly to your home or workplace — with careful attention to every vehicle.",
  /**
   * [PLACEHOLDER] Replace with a short quality / customer-care statement from Theo.
   */
  qualityStatement:
    "[PLACEHOLDER] Every job is handled with care, clear communication, and a focus on results you can see and feel.",
  tagline: businessConfig.tagline,
  photoSrc: "/images/about/theo.jpg",
  photoAlt: "Theo, owner of Theo's Auto Detailing in Mukilteo, Washington",
  /** Set true when a real photo of Theo is added at photoSrc. */
  hasPhoto: false,
  valuesTitle: "Why Choose Theo",
  valuesDescription:
    "Straightforward mobile detailing focused on quality results and reliable local service.",
} as const;

export const aboutValues = [
  {
    id: "mobile-service",
    title: "Mobile Service",
    description: "We come directly to your home or workplace.",
    icon: "MapPin",
  },
  {
    id: "attention-to-detail",
    title: "Attention to Detail",
    description: "Every inch is cleaned carefully.",
    icon: "Eye",
  },
  {
    id: "professional-equipment",
    title: "Professional Equipment",
    description: "The right tools and products for lasting results.",
    icon: "Wrench",
  },
  {
    id: "reliable-scheduling",
    title: "Reliable Scheduling",
    description: "Clear communication and on-time appointments.",
    icon: "Clock",
  },
  {
    id: "interior-exterior",
    title: "Interior & Exterior Expertise",
    description: "Complete care for the outside and the cabin.",
    icon: "Sparkles",
  },
  {
    id: "local-service",
    title: "Local Service",
    description: `Proudly serving ${businessConfig.location} and nearby areas.`,
    icon: "Home",
  },
] as const;
