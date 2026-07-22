export const faqCopy = {
  title: "FAQ",
} as const;

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

/** FAQ topic inventory from CONTENT_PLAN.md. */
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
    answer:
      "Yes. When permitted and available at your location, we use your water for service.",
  },
  {
    id: "need-electricity",
    question: "Do I need electricity?",
    answer:
      "Yes. When permitted and available at your location, we use your electricity for service.",
  },
  {
    id: "payment-methods",
    question: "What payment methods do you accept?",
    answer:
      "We accept Zelle and credit cards. Cash is accepted as an exception.",
  },
  {
    id: "how-often",
    question: "How often should I detail my vehicle?",
    answer: "We recommend detailing your vehicle monthly.",
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
