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
      "Deep cleaning for carpets, seats, dashboards, windows, and more.",
    icon: Sofa,
  },
  {
    id: "exterior-detailing",
    title: "Exterior Detailing",
    description: "Hand wash, wax, tire shine, and paint care.",
    icon: Car,
  },
  {
    id: "full-detail",
    title: "Full Detail",
    description: "Complete interior and exterior package.",
    icon: Sparkles,
  },
  {
    id: "engine-bay-cleaning",
    title: "Engine Bay Cleaning",
    description:
      "Careful cleaning and dressing so your engine bay looks sharp and well-maintained.",
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

/** Detailed line-item inventory for the dedicated /services page */
export const serviceCategories: ServiceCategory[] = [
  {
    id: "exterior",
    title: "Exterior",
    icon: "Car",
    services: [
      { name: "Hand Wash & Dry" },
      { name: "Clay Bar Treatment" },
      { name: "Paint Decontamination (Iron Fallout Removal)" },
      { name: "One-Step Machine Polish" },
      { name: "Wax Application" },
      { name: "Synthetic Sealant Application" },
      { name: "Ceramic Coating", requiresQuote: true },
      { name: "Headlight Restoration" },
      { name: "Engine Bay Cleaning & Dressing" },
      { name: "Wheel & Rim Deep Cleaning" },
      { name: "Tire Cleaning & Dressing" },
      { name: "Trim Restoration & Plastic Dressing" },
      { name: "Paint Correction", requiresQuote: true },
      { name: "Bug & Tar Removal" },
      { name: "Water Spot Removal" },
      { name: "Chrome Polish" },
      { name: "Convertible Top Cleaning", requiresQuote: true },
    ],
  },
  {
    id: "interior",
    title: "Interior",
    icon: "Sofa",
    services: [
      { name: "Full Interior Vacuum" },
      { name: "Carpet Shampoo & Extraction" },
      { name: "Floor Mat Cleaning" },
      { name: "Seat Shampoo (Fabric)" },
      { name: "Leather Seat Cleaning & Conditioning" },
      { name: "Dashboard & Console Detail" },
      { name: "Door Panel Cleaning" },
      { name: "Headliner Cleaning" },
      { name: "Interior Window Cleaning" },
      { name: "Vent & Crevice Cleaning" },
      { name: "Cup Holder & Storage Compartment Cleaning" },
      { name: "Trunk / Cargo Area Cleaning" },
      { name: "Pet Hair Removal" },
      { name: "Stain Removal" },
      { name: "Odor Removal" },
      { name: "Sanitizing Treatment" },
    ],
  },
  {
    id: "premium-add-on",
    title: "Premium Add-On",
    icon: "Sparkles",
    services: [
      { name: "Ceramic Coating", requiresQuote: true },
      { name: "Paint Protection Film (PPF)", requiresQuote: true },
      { name: "Engine Bay Detail" },
      { name: "Headlight Restoration" },
      { name: "Pet Hair Removal (Heavy)" },
      { name: "Ozone Odor Elimination" },
      { name: "Scratch & Swirl Removal", requiresQuote: true },
      { name: "Windshield Water Repellent Treatment" },
      { name: "Undercarriage Wash" },
      { name: "Baby Car Seat Area Deep Clean" },
      { name: "Smoke Damage Treatment", requiresQuote: true },
    ],
  },
  {
    id: "rv",
    title: "RV",
    icon: "Bus",
    services: [
      { name: "Full Exterior Wash" },
      { name: "Roof Cleaning & Treatment" },
      { name: "Awning Cleaning" },
      { name: "Slide-Out Cleaning" },
      { name: "Full Interior Vacuum" },
      { name: "Interior Deep Clean & Sanitize" },
      { name: "Carpet & Upholstery Shampoo" },
      { name: "Cabinet & Surface Wipe-Down" },
      { name: "Generator Compartment Cleaning" },
      { name: "Oxidation Removal", requiresQuote: true },
      { name: "Wax & UV Protection Application" },
      {
        name: "Class A / Class C / Travel Trailer Detailing",
        requiresQuote: true,
      },
    ],
  },
  {
    id: "boat",
    title: "Boat",
    icon: "Ship",
    services: [
      { name: "Hull Wash & Scrub" },
      { name: "Deck Cleaning" },
      { name: "Vinyl & Upholstery Cleaning" },
      { name: "Gelcoat Polish" },
      { name: "Wax & Sealant Application" },
      { name: "Bilge Cleaning" },
      { name: "Canvas & Bimini Top Cleaning" },
      { name: "Stainless Steel Polishing" },
      { name: "Interior Cabin Detailing" },
      { name: "Teak Cleaning & Oiling", requiresQuote: true },
      { name: "Bottom Cleaning", requiresQuote: true },
    ],
  },
  {
    id: "commercial",
    title: "Commercial",
    icon: "Building2",
    services: [
      { name: "Fleet Washing Programs" },
      { name: "Scheduled Maintenance Plans" },
      { name: "Commercial Van Detailing" },
      { name: "Delivery Truck Detailing" },
      { name: "Company Car Detailing" },
      { name: "Dealership Reconditioning", requiresQuote: true },
      { name: "Sales Lot Vehicle Prep" },
      { name: "Government & Municipal Fleet", requiresQuote: true },
      { name: "Construction Vehicle Cleaning", requiresQuote: true },
      { name: "Uniform Fleet Branding Prep" },
    ],
  },
  {
    id: "specialty",
    title: "Specialty",
    icon: "Star",
    services: [
      { name: "Pre-Sale Detailing" },
      { name: "Show Car Preparation" },
      { name: "Wedding & Event Vehicle Prep" },
      { name: "Motorcycle Detailing" },
      { name: "Classic & Collectible Car Detailing", requiresQuote: true },
      { name: "Oversized Vehicle Detailing", requiresQuote: true },
      { name: "Limousine & Luxury Transport Detailing", requiresQuote: true },
      { name: "Exotic & Supercar Detailing", requiresQuote: true },
      { name: "New Car Delivery Prep" },
      { name: "Lease Return Detailing" },
    ],
  },
];
