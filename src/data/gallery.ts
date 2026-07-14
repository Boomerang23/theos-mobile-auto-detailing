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
 * Image paths are reserved until the owner supplies real detailing photos.
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "interior-detailing",
    title: "Interior Detailing",
    beforeSrc: "/images/gallery/interior-before.jpg",
    afterSrc: "/images/gallery/interior-after.jpg",
    beforeAlt: "Vehicle interior before professional detailing",
    afterAlt: "Vehicle interior after professional detailing",
    hasImages: false,
  },
  {
    id: "exterior-detailing",
    title: "Exterior Detailing",
    beforeSrc: "/images/gallery/exterior-before.jpg",
    afterSrc: "/images/gallery/exterior-after.jpg",
    beforeAlt: "Vehicle exterior before professional detailing",
    afterAlt: "Vehicle exterior after professional detailing",
    hasImages: false,
  },
  {
    id: "full-detail",
    title: "Full Detail",
    beforeSrc: "/images/gallery/full-before.jpg",
    afterSrc: "/images/gallery/full-after.jpg",
    beforeAlt: "Vehicle before a full interior and exterior detail",
    afterAlt: "Vehicle after a full interior and exterior detail",
    hasImages: false,
  },
  {
    id: "engine-bay",
    title: "Engine Bay Cleaning",
    beforeSrc: "/images/gallery/engine-before.jpg",
    afterSrc: "/images/gallery/engine-after.jpg",
    beforeAlt: "Engine bay before cleaning",
    afterAlt: "Engine bay after cleaning and dressing",
    hasImages: false,
  },
  {
    id: "wheels-tires",
    title: "Wheels & Tires",
    beforeSrc: "/images/gallery/wheels-before.jpg",
    afterSrc: "/images/gallery/wheels-after.jpg",
    beforeAlt: "Dirty wheels and tires before detailing",
    afterAlt: "Clean wheels and tires after detailing",
    hasImages: false,
  },
  {
    id: "dashboard",
    title: "Dashboard Detail",
    beforeSrc: "/images/gallery/dashboard-before.jpg",
    afterSrc: "/images/gallery/dashboard-after.jpg",
    beforeAlt: "Dashboard and console before detailing",
    afterAlt: "Dashboard and console after detailing",
    hasImages: false,
  },
  {
    id: "paint-care",
    title: "Paint Care",
    beforeSrc: "/images/gallery/paint-before.jpg",
    afterSrc: "/images/gallery/paint-after.jpg",
    beforeAlt: "Paint surface before wash and protection",
    afterAlt: "Paint surface after wash and protection",
    hasImages: false,
  },
  {
    id: "mobile-service",
    title: "Mobile Service",
    beforeSrc: "/images/gallery/mobile-before.jpg",
    afterSrc: "/images/gallery/mobile-after.jpg",
    beforeAlt: "Vehicle before mobile detailing at a customer location",
    afterAlt: "Vehicle after mobile detailing at a customer location",
    hasImages: false,
  },
];

/** Homepage Recent Work — up to eight strong previews */
export const galleryPreview = galleryItems.slice(0, 8);
