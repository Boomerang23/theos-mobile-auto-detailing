export interface SocialLinks {
  facebook: string;
  instagram: string;
}

export interface BusinessConfig {
  name: string;
  phone: string;
  phoneFormatted: string;
  tagline: string;
  location: string;
  locationShort: string;
  /** Instagram profile handle for display only */
  instagramHandle: string;
  socials: SocialLinks;
  /**
   * [PLACEHOLDER] Confirm with the business owner before publishing as final hours.
   */
  hoursPlaceholder: string;
}

export const businessConfig = {
  name: "Theo\u2019s Auto Detailing",
  phone: "425-409-7198",
  phoneFormatted: "(425) 409-7198",
  tagline: "We Bring the Shine to You!",
  location: "Mukilteo, Washington",
  locationShort: "Mukilteo, WA",
  instagramHandle: "@theosauto",
  socials: {
    facebook: "#",
    instagram: "https://www.instagram.com/theosauto",
  },
  hoursPlaceholder:
    "[PLACEHOLDER] Business hours to be confirmed with Theo",
} as const satisfies BusinessConfig;
