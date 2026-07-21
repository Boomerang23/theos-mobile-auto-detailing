export interface SocialLinks {
  instagram: string;
}

export interface BusinessConfig {
  name: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  tagline: string;
  location: string;
  locationShort: string;
  /** Instagram profile handle for display only */
  instagramHandle: string;
  socials: SocialLinks;
  /**
   * Confirmed business hours only. Leave empty until the owner provides hours.
   */
  hours: string;
}

export const businessConfig = {
  name: "Theo\u2019s Mobile Auto Detailing",
  phone: "425-409-7198",
  phoneFormatted: "(425) 409-7198",
  email: "theosadetailing@gmail.com",
  tagline: "We Bring the Shine to You!",
  location: "Mukilteo, Washington",
  locationShort: "Mukilteo, WA",
  instagramHandle: "@theosauto",
  socials: {
    instagram: "https://www.instagram.com/theosauto",
  },
  hours: "",
} as const satisfies BusinessConfig;
