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

export const pricingCopy = {
  title: "Pricing",
} as const;

/** Packages aligned to client-provided price sheet */
export const pricingPackages: PricingTier[] = [
  {
    id: "basic-detail",
    name: "Basic Detail",
    description:
      "Interior surface cleaning and vacuum with hand wash and tire care.",
    duration: "2–3 hours",
    prices: {
      sedan: 180,
      larger: 195,
    },
    features: [
      "Dash & console cleaned",
      "Wipe down all interior surfaces",
      "Vacuum carpets, mats & trunk/cargo area",
      "Windows cleaned in & out",
      "Door jambs cleaned",
      "Hand wash",
      "Wheel wells & rims cleaned",
      "Clean tail pipes",
      "Clean gas cap area",
      "Tires dressed",
    ],
    notes: [
      "Starting prices depend on vehicle size and condition.",
      "Sedans starting at $180. Larger vehicles starting at $195.",
      "Extra charges apply for extra dirty vehicles and pet hair.",
    ],
  },
  {
    id: "deluxe-detail",
    name: "Deluxe Detail",
    description:
      "Everything in Basic Detail, plus clay bar treatment and wax.",
    duration: "3–4 hours",
    prices: {
      sedan: 280,
      larger: 320,
    },
    features: [
      "Dash & console cleaned",
      "Wipe down all interior surfaces",
      "Vacuum carpets, mats & trunk/cargo area",
      "Windows cleaned in & out",
      "Door jambs cleaned",
      "Hand wash",
      "Wheel wells & rims cleaned",
      "Clean tail pipes",
      "Clean gas cap area",
      "Tires dressed",
      "Clay bar treatment",
      "Wax",
    ],
    notes: [
      "Starting prices depend on vehicle size and condition.",
      "Sedans starting at $280. Larger vehicles starting at $320.",
      "Extra charges apply for extra dirty vehicles and pet hair.",
    ],
  },
  {
    id: "platinum-detail",
    name: "Platinum Detail",
    description:
      "Everything in Deluxe Detail, plus UV protectant, shampoo, and seat care.",
    duration: "4–8 hours",
    prices: {
      sedan: 450,
      larger: 500,
    },
    features: [
      "Dash & console cleaned",
      "Wipe down all interior surfaces",
      "Vacuum carpets, mats & trunk/cargo area",
      "Windows cleaned in & out",
      "Door jambs cleaned",
      "Hand wash",
      "Wheel wells & rims cleaned",
      "Clean tail pipes",
      "Clean gas cap area",
      "Tires dressed",
      "Clay bar treatment",
      "Wax",
      "UV protectant on dash",
      "Shampoo carpets & mats",
      "Shampoo seats / recondition leather seats",
      "Spot clean headliner",
    ],
    notes: [
      "Starting prices depend on vehicle size and condition.",
      "Sedans starting at $450. Larger vehicles starting at $500.",
      "Extra charges apply for extra dirty vehicles and pet hair.",
    ],
  },
];
