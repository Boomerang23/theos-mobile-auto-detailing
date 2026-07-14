import { businessConfig } from "@/data/business";
import { faqItems } from "@/data/faq";
import { services } from "@/data/services";
import { absoluteUrl, getSiteUrl, siteConfig } from "@/lib/seo";

type JsonLd = Record<string, unknown>;

function businessAddress(): JsonLd {
  const street = process.env.BUSINESS_ADDRESS?.trim();
  return {
    "@type": "PostalAddress",
    ...(street ? { streetAddress: street } : {}),
    addressLocality: "Mukilteo",
    addressRegion: "WA",
    addressCountry: "US",
  };
}

export function organizationSchema(): JsonLd {
  return {
    "@type": "Organization",
    "@id": `${getSiteUrl()}/#organization`,
    name: siteConfig.name,
    url: getSiteUrl(),
    logo: absoluteUrl(siteConfig.logoPath),
    image: absoluteUrl(siteConfig.logoPath),
    telephone: businessConfig.phone,
    address: businessAddress(),
    sameAs: [
      businessConfig.socials.facebook,
      businessConfig.socials.instagram,
    ].filter((url) => url && url !== "#"),
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@type": "WebSite",
    "@id": `${getSiteUrl()}/#website`,
    name: siteConfig.shortName,
    url: getSiteUrl(),
    description: siteConfig.description,
    publisher: { "@id": `${getSiteUrl()}/#organization` },
  };
}

export function localBusinessSchema(): JsonLd {
  return {
    "@type": "LocalBusiness",
    "@id": `${getSiteUrl()}/#localbusiness`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: getSiteUrl(),
    telephone: businessConfig.phone,
    image: absoluteUrl(siteConfig.logoPath),
    logo: absoluteUrl(siteConfig.logoPath),
    priceRange: "$$",
    address: businessAddress(),
    areaServed: {
      "@type": "City",
      name: "Mukilteo",
      containedInPlace: {
        "@type": "State",
        name: "Washington",
      },
    },
    parentOrganization: { "@id": `${getSiteUrl()}/#organization` },
  };
}

export function serviceSchemas(): JsonLd[] {
  return services.map((service) => ({
    "@type": "Service",
    "@id": `${getSiteUrl()}/services#${service.id}`,
    name: service.title,
    description: service.description,
    provider: { "@id": `${getSiteUrl()}/#localbusiness` },
    url: absoluteUrl("/services"),
    areaServed: {
      "@type": "City",
      name: "Mukilteo",
    },
  }));
}

export function faqPageSchema(): JsonLd | null {
  const answered = faqItems.filter((item) => item.answer.trim().length > 0);
  if (answered.length === 0) return null;

  return {
    "@type": "FAQPage",
    "@id": `${getSiteUrl()}/#faq`,
    mainEntity: answered.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  crumbs: Array<{ name: string; path: string }>,
): JsonLd {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function homeGraphSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      localBusinessSchema(),
      ...serviceSchemas(),
    ],
  };
}

export function pageGraphSchema(
  crumbs: Array<{ name: string; path: string }>,
  extra: JsonLd[] = [],
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      breadcrumbSchema(crumbs),
      ...extra,
    ],
  };
}
