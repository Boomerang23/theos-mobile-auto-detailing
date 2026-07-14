export const faqCopy = {
  title: "FAQ",
} as const;

export type FaqItem = {
  id: string;
  question: string;
  /** Leave empty until final answers are provided in CONTENT_PLAN / CONTENT_COPY */
  answer: string;
};

/**
 * FAQ topic inventory from CONTENT_PLAN.md.
 * Answers filled only where already documented elsewhere in the SSOT.
 */
export const faqItems: FaqItem[] = [
  {
    id: "how-long",
    question: "How long does detailing take?",
    answer:
      "Service duration depends on the package: Basic Detail takes 2–3 hours, Deluxe Detail takes 3–4 hours, and Platinum Detail takes 4–8 hours.",
  },
  {
    id: "come-to-home",
    question: "Do you come to my home?",
    answer:
      "Yes. We come directly to you and bring detailing service to your location.",
  },
  {
    id: "need-water",
    question: "Do I need water?",
    answer: "",
  },
  {
    id: "need-electricity",
    question: "Do I need electricity?",
    answer: "",
  },
  {
    id: "payment-methods",
    question: "What payment methods do you accept?",
    answer: "",
  },
  {
    id: "how-often",
    question: "How often should I detail my vehicle?",
    answer: "",
  },
  {
    id: "detail-boats",
    question: "Do you detail boats?",
    answer:
      "Yes. We offer Boat Detailing with professional cleaning and protection for your boat.",
  },
  {
    id: "detail-rvs",
    question: "Do you detail RVs?",
    answer:
      "Yes. We offer RV Detailing to keep your RV looking its best inside and out.",
  },
];
