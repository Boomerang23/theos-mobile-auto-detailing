export interface PackagePrices {
  sedan: number;
  larger: number;
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  duration: string;
  prices: PackagePrices;
  features: string[];
  notes: string[];
}

/** Section chrome — route/nav label from CONTENT_PLAN / navigation */
export const pricingCopy = {
  title: "Pricing",
} as const;

export const pricingPackages: PricingTier[] = [
  {
    id: "basic-detail",
    name: "Basic Detail",
    description:
      "Essential exterior wash and interior refresh — ideal for maintaining a clean, presentable vehicle between full details.",
    duration: "2–3 hours",
    prices: {
      sedan: 180,
      larger: 195,
    },
    features: [
      "Exterior hand wash and dry",
      "Wheels and tires cleaned",
      "Tire dressing applied",
      "Door jambs wiped down",
      "Full interior vacuum (carpets, seats, and trunk)",
      "Dashboard, console, and vents wiped clean",
      "Door panels and cup holders wiped",
      "Interior and exterior glass cleaned",
      "Light surface wipe-down throughout cabin",
      "Trash and debris removed",
      "Finishing air freshener",
    ],
    notes: [
      "Larger vehicles include SUVs, trucks, and minivans.",
      "Additional charges may apply for excessive pet hair, heavy soiling, or biohazard cleanup.",
      "Pricing is per vehicle; condition assessed on-site before service begins.",
    ],
  },
  {
    id: "deluxe-detail",
    name: "Deluxe Detail",
    description:
      "Enhanced interior and exterior care with paint decontamination, machine polish, and lasting protection.",
    duration: "3–4 hours",
    prices: {
      sedan: 280,
      larger: 320,
    },
    features: [
      "Everything included in Basic Detail",
      "Clay bar paint decontamination",
      "Iron fallout and tar spot removal",
      "One-step machine polish",
      "Carnauba wax or synthetic sealant application",
      "Deep wheel and rim cleaning",
      "Trim restoration and plastic dressing",
      "Carpet and floor mat shampoo",
      "Fabric seat shampoo (where applicable)",
      "Leather cleaning and conditioning (where applicable)",
      "Thorough crevice and crack cleaning",
      "Enhanced interior surface protection",
      "Bug and road grime removal",
    ],
    notes: [
      "Larger vehicles include SUVs, trucks, and minivans.",
      "Leather and fabric treatments applied based on your vehicle\u2019s interior materials.",
      "Heavily soiled interiors may require additional time and cost — quoted before work starts.",
    ],
  },
  {
    id: "platinum-detail",
    name: "Platinum Detail",
    description:
      "Our most comprehensive package — full interior restoration, paint correction, and premium protection for show-quality results.",
    duration: "4–8 hours",
    prices: {
      sedan: 450,
      larger: 500,
    },
    features: [
      "Everything included in Deluxe Detail",
      "Multi-stage paint correction (light to moderate swirls and scratches)",
      "Premium ceramic sealant or high-grade wax application",
      "Full engine bay detail and dressing",
      "Headlight restoration and UV seal",
      "Complete interior steam cleaning and extraction",
      "Pet hair removal throughout cabin",
      "Odor elimination treatment",
      "Paint decontamination with iron fallout remover",
      "Water spot removal on paint and glass",
      "Door hinge and latch cleaning with lubrication",
      "Comprehensive UV protection on interior surfaces",
      "Final quality inspection walkthrough with customer",
    ],
    notes: [
      "Larger vehicles include SUVs, trucks, and minivans.",
      "Service duration varies based on vehicle size and condition.",
      "Paint correction scope is assessed on-site; severe damage may require a separate quote.",
      "Engine bay detail performed only when safe and accessible — electrical components protected.",
    ],
  },
];
