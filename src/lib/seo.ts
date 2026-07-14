import type { Metadata } from "next";
import { businessConfig } from "@/data/business";

export const siteConfig = {
  name: businessConfig.name,
  shortName: "Theo's Mobile Auto Detailing",
  title: "Theo's Mobile Auto Detailing | Mukilteo, WA",
  description:
    "Professional mobile auto detailing in Mukilteo, Washington. Interior and exterior detailing delivered to your home or workplace. Book your detail today.",
  phone: businessConfig.phone,
  phoneFormatted: businessConfig.phoneFormatted,
  keywords: [
    "mobile auto detailing",
    "mobile car detailing Mukilteo",
    "car detailing Mukilteo WA",
    "interior detailing",
    "exterior detailing",
    "basic detail",
    "deluxe detail",
    "platinum detail",
    "engine bay cleaning",
    "mobile detailing near me",
  ],
  logoPath: "/images/logo.png",
  /** Routes from ARCHITECTURE.md / SEO_PLAN.md — no /faq */
  routes: [
    "/",
    "/services",
    "/gallery",
    "/pricing",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ] as const,
} as const;

export type SiteRoute = (typeof siteConfig.routes)[number];

export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  return url || "http://localhost:3000";
}

export function absoluteUrl(path: string = "/"): string {
  const base = getSiteUrl();
  if (path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

type PageSeoInput = {
  title: string;
  description: string;
  path: SiteRoute | string;
  /** Absolute or site-relative path to OG image */
  image?: string;
  noIndex?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path,
  image,
  noIndex = false,
}: PageSeoInput): Metadata {
  const url = absoluteUrl(path);
  const isHome = path === "/";
  const socialTitle = isHome
    ? title
    : `${title} | ${siteConfig.shortName}`;
  const ogImage = image
    ? image.startsWith("http")
      ? image
      : absoluteUrl(image)
    : undefined;

  return {
    title: isHome ? { absolute: title } : title,
    description,
    keywords: [...siteConfig.keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: siteConfig.shortName,
      type: "website",
      locale: "en_US",
      ...(ogImage
        ? {
            images: [
              {
                url: ogImage,
                alt: siteConfig.shortName,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      title: socialTitle,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
