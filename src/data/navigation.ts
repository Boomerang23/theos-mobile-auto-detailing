export const mainNavLinks = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerNavLinks = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
] as const;

export const ctaCopy = {
  getQuote: "Book Your Detail",
  callNow: "Call Now",
} as const;

export const footerCopy = {
  tagline: "Professional Mobile Auto Detailing",
  description:
    "Interior and exterior detailing for cars, trucks, and SUVs — delivered to your home or workplace in Mukilteo, Washington.",
  callToday: "Call Today",
  businessHours: "Business Hours",
  privacy: "Privacy Policy",
  terms: "Terms of Service",
} as const;
