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
  hours: string;
}

export const businessConfig = {
  name: "Theo\u2019s Detailing Service LLC",
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
  hours: "Mon\u2013Sat 7:00 AM \u2013 5:00 PM",
} as const satisfies BusinessConfig;
