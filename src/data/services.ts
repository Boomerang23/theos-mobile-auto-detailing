import type { LucideIcon } from "lucide-react";
import { Car, MapPin, Sofa, Sparkles, Wrench } from "lucide-react";

export type ServiceOffering = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

/** Homepage + services page summary offerings */
export const services: ServiceOffering[] = [
  {
    id: "interior-detailing",
    title: "Interior Detailing",
    description:
      "Vacuuming, surface cleaning, windows, carpets, seats, and more.",
    icon: Sofa,
  },
  {
    id: "exterior-detailing",
    title: "Exterior Detailing",
    description: "Hand wash, wheels, clay bar, wax, and paint care options.",
    icon: Car,
  },
  {
    id: "detail-packages",
    title: "Detail Packages",
    description: "Basic, Deluxe, and Platinum packages with clear starting prices.",
    icon: Sparkles,
  },
  {
    id: "engine-bay-cleaning",
    title: "Engine Bay Cleaning",
    description: "Engine bay cleaning available as an exterior service option.",
    icon: Wrench,
  },
  {
    id: "mobile-detailing",
    title: "Mobile Detailing",
    description:
      "Professional detailing brought directly to your home or workplace.",
    icon: MapPin,
  },
];

export interface ServiceItem {
  name: string;
  requiresQuote?: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  icon: string;
  services: ServiceItem[];
}

/** Line items aligned to the client service selection list */
export const serviceCategories: ServiceCategory[] = [
  {
    id: "exterior",
    title: "Exterior",
    icon: "Car",
    services: [
      { name: "Hand Wash" },
      { name: "Foam Cannon Wash" },
      { name: "Bug & Tar Removal" },
      { name: "Wheel & Tire Cleaning" },
      { name: "Tire Dressing (Shine)" },
      { name: "Wheel Well Cleaning" },
      { name: "Clay Bar Treatment" },
      { name: "Iron Decontamination Treatment" },
      { name: "Paint Sealant Application" },
      { name: "Spray Wax Protection" },
      { name: "Ceramic Coating (1-Year)" },
      { name: "Ceramic Coating (3-Year)" },
      { name: "Headlight Restoration" },
      { name: "Engine Bay Cleaning" },
      { name: "Chrome Polishing" },
      { name: "Trim Restoration" },
      { name: "Paint Enhancement Polish" },
      { name: "One-Step Paint Correction" },
      { name: "Two-Step Paint Correction" },
    ],
  },
  {
    id: "interior",
    title: "Interior",
    icon: "Sofa",
    services: [
      { name: "Interior Vacuuming" },
      { name: "Carpet Shampoo" },
      { name: "Seat Shampoo" },
      { name: "Leather Cleaning" },
      { name: "Leather Conditioning" },
      { name: "Dashboard Cleaning & Protection" },
      { name: "Door Panel Cleaning" },
      { name: "Interior Window Cleaning" },
      { name: "Steam Cleaning" },
      { name: "Pet Hair Removal" },
      { name: "Odor Removal Treatment" },
      { name: "Stain Removal" },
      { name: "Air Vent Cleaning" },
      { name: "Floor Mat Cleaning" },
      { name: "Trunk/Cargo Area Cleaning" },
    ],
  },
  {
    id: "premium-add-on",
    title: "Premium Add-On",
    icon: "Sparkles",
    services: [
      { name: "Ceramic Spray Protection" },
      { name: "Ozone Odor Treatment" },
      { name: "Salt Removal Treatment" },
      { name: "Water Spot Removal" },
      { name: "Glass Water Repellent Treatment" },
      { name: "Fabric Protection Treatment" },
      { name: "Leather Protection Coating" },
      { name: "Engine Bay Dressing" },
      { name: "Tree Sap Removal" },
      { name: "Overspray Removal" },
    ],
  },
  {
    id: "rv",
    title: "RV",
    icon: "Bus",
    services: [
      { name: "Exterior Wash" },
      { name: "Roof Cleaning" },
      { name: "Oxidation Removal" },
      { name: "RV Wax Protection" },
      { name: "Interior Deep Cleaning" },
      { name: "Window Cleaning" },
      { name: "Tire & Wheel Cleaning" },
    ],
  },
  {
    id: "boat",
    title: "Boat",
    icon: "Ship",
    services: [
      { name: "Hull Wash" },
      { name: "Hull Waxing" },
      { name: "Oxidation Removal" },
      { name: "Interior Cleaning" },
      { name: "Vinyl Seat Cleaning & Conditioning" },
      { name: "Metal Polishing" },
      { name: "Deck Cleaning" },
    ],
  },
  {
    id: "commercial",
    title: "Commercial",
    icon: "Building2",
    services: [
      { name: "Cargo Van Detailing" },
      { name: "Work Truck Detailing" },
      { name: "Semi-Truck Exterior Wash" },
      { name: "Fleet Vehicle Detailing" },
      { name: "Bus Interior Cleaning" },
      { name: "Bus Exterior Wash" },
    ],
  },
  {
    id: "specialty",
    title: "Specialty",
    icon: "Star",
    services: [
      { name: "Smoke Odor Removal" },
      { name: "Mold Remediation (Inspection Required)", requiresQuote: true },
      { name: "Biohazard Cleanup (Quote Required)", requiresQuote: true },
      { name: "Fleet Maintenance Program" },
      { name: "Monthly Maintenance Detail" },
      { name: "Bi-Weekly Maintenance Detail" },
    ],
  },
];
