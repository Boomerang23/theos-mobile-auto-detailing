"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { GalleryCard } from "@/components/sections/GalleryCard";
import type { GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/utils";

const Lightbox = dynamic(
  () => import("@/components/sections/Lightbox").then((mod) => mod.Lightbox),
  { ssr: false },
);

type GalleryGridProps = {
  items: readonly GalleryItem[];
  className?: string;
};

export function GalleryGrid({ items, className }: GalleryGridProps) {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <>
      <div
        className={cn("grid gap-gap sm:grid-cols-2 lg:grid-cols-3", className)}
      >
        {items.map((item) => (
          <GalleryCard key={item.id} item={item} onOpen={setActiveItem} />
        ))}
      </div>

      {activeItem ? (
        <Lightbox
          item={activeItem}
          open={Boolean(activeItem)}
          onClose={() => setActiveItem(null)}
        />
      ) : null}
    </>
  );
}
