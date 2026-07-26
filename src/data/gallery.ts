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
 * Only complete before/after pairs are listed.
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "headlights-restoration",
    title: "Headlights Restoration",
    beforeSrc: "/images/gallery/headlights-before.jpg",
    afterSrc: "/images/gallery/headlights-after.jpg",
    beforeAlt: "Oxidized cloudy headlight lens before restoration",
    afterAlt: "Clear restored headlight lens after professional restoration",
    hasImages: true,
  },
  {
    id: "interior-detailing",
    title: "Interior Detailing",
    beforeSrc: "/images/gallery/interior-before.jpg",
    afterSrc: "/images/gallery/interior-after.jpg",
    beforeAlt: "Dirty rear seats and floor mats covered in crumbs and mud before interior detailing",
    afterAlt: "Clean black leather rear seats and vacuumed carpet after interior detailing",
    hasImages: true,
  },
  {
    id: "trunk-detailing",
    title: "Trunk Detailing",
    beforeSrc: "/images/gallery/trunk-before.jpg",
    afterSrc: "/images/gallery/trunk-after.jpg",
    beforeAlt: "Dusty Subaru cargo mat with debris before trunk detailing",
    afterAlt: "Clean carpeted trunk floor after professional trunk detailing",
    hasImages: true,
  },
  {
    id: "engine-bay-cleaning",
    title: "Engine Bay Cleaning",
    beforeSrc: "/images/gallery/engine-before.jpg",
    afterSrc: "/images/gallery/engine-after.jpg",
    beforeAlt: "Dusty engine bay covered in road grime before cleaning",
    afterAlt: "Clean dressed engine bay after professional engine bay cleaning",
    hasImages: true,
  },
];

/** Homepage Recent Work — up to eight strong previews */
export const galleryPreview = galleryItems.slice(0, 8);
