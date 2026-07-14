"use client";

import { Modal } from "@/components/ui/Modal";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import type { GalleryItem } from "@/data/gallery";

type LightboxProps = {
  item: GalleryItem | null;
  open: boolean;
  onClose: () => void;
};

export function Lightbox({ item, open, onClose }: LightboxProps) {
  return (
    <Modal
      open={open && Boolean(item)}
      onClose={onClose}
      title={item?.title ?? "Gallery"}
      className="w-[min(100%,56rem)] max-w-[calc(100vw-2rem)]"
    >
      {item ? (
        <BeforeAfterSlider
          beforeSrc={item.beforeSrc}
          afterSrc={item.afterSrc}
          beforeAlt={item.beforeAlt}
          afterAlt={item.afterAlt}
          title={item.title}
          hasImages={item.hasImages}
        />
      ) : null}
    </Modal>
  );
}
