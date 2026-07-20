export const galleryCopy = {
  title: "Recent Work",
  subtitle: "Take a look at some of our recent detailing work.",
  instagramCta: "View More on Instagram",
  galleryLink: "View Full Gallery",
} as const;

export type GalleryItem = {
  id: string;
  title: string;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  /** Set true when real photography exists at the reserved paths. */
  hasImages: boolean;
};

/**
 * Gallery inventory for homepage preview and `/gallery`.
 * Photos supplied by the business owner (WhatsApp set, Jul 2026).
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "interior-detailing",
    title: "Interior Detailing",
    beforeSrc: "/images/gallery/interior-before.jpg",
    afterSrc: "/images/gallery/interior-after.jpg",
    beforeAlt: "Stained seats and dirty floor mats before interior detailing",
    afterAlt: "Clean captain seats and floor mats after interior detailing",
    hasImages: true,
  },
  {
    id: "exterior-detailing",
    title: "Exterior Detailing",
    beforeSrc: "/images/gallery/exterior-before.jpg",
    afterSrc: "/images/gallery/exterior-after.jpg",
    beforeAlt: "Vehicle exterior with road film and scuffs before detailing",
    afterAlt: "Glossy polished exterior after professional detailing",
    hasImages: true,
  },
  {
    id: "detail-packages",
    title: "Detail Packages",
    beforeSrc: "/images/gallery/full-before.jpg",
    afterSrc: "/images/gallery/full-after.jpg",
    beforeAlt: "SUV before a full mobile detail package",
    afterAlt: "SUV after a completed mobile detail package",
    hasImages: true,
  },
  {
    id: "engine-bay",
    title: "Engine Bay Cleaning",
    beforeSrc: "/images/gallery/engine-before.jpg",
    afterSrc: "/images/gallery/engine-after.jpg",
    beforeAlt: "Engine bay during detailing",
    afterAlt: "Clean engine bay after professional cleaning",
    hasImages: true,
  },
  {
    id: "wheels-tires",
    title: "Wheels & Tires",
    beforeSrc: "/images/gallery/wheels-before.jpg",
    afterSrc: "/images/gallery/wheels-after.jpg",
    beforeAlt: "Wheels and lower panels before deep cleaning",
    afterAlt: "Clean alloy wheels after detailing",
    hasImages: true,
  },
  {
    id: "dashboard",
    title: "Dashboard Detail",
    beforeSrc: "/images/gallery/dashboard-before.jpg",
    afterSrc: "/images/gallery/dashboard-after.jpg",
    beforeAlt: "Dusty dashboard and gauges before interior cleaning",
    afterAlt: "Clean dashboard and gauges after interior detailing",
    hasImages: true,
  },
  {
    id: "paint-care",
    title: "Paint Care",
    beforeSrc: "/images/gallery/paint-before.jpg",
    afterSrc: "/images/gallery/paint-after.jpg",
    beforeAlt: "Paint surface before wash and protection",
    afterAlt: "Glossy paint after wash and protection",
    hasImages: true,
  },
  {
    id: "mobile-service",
    title: "Mobile Service",
    beforeSrc: "/images/gallery/mobile-before.jpg",
    afterSrc: "/images/gallery/mobile-after.jpg",
    beforeAlt: "Vehicle at a customer location before mobile detailing",
    afterAlt: "Finished vehicle after mobile detailing on site",
    hasImages: true,
  },
];

/** Homepage Recent Work — up to eight strong previews */
export const galleryPreview = galleryItems.slice(0, 8);
