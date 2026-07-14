"use client";

import { Maximize2 } from "lucide-react";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import type { GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/utils";

type GalleryCardProps = {
  item: GalleryItem;
  onOpen?: (item: GalleryItem) => void;
  className?: string;
};

export function GalleryCard({ item, onOpen, className }: GalleryCardProps) {
  return (
    <Card className={cn("flex h-full flex-col overflow-hidden p-24", className)}>
      <BeforeAfterSlider
        beforeSrc={item.beforeSrc}
        afterSrc={item.afterSrc}
        beforeAlt={item.beforeAlt}
        afterAlt={item.afterAlt}
        title={item.title}
        hasImages={item.hasImages}
        className="w-full"
      />
      <div className="mt-24 flex min-h-[48px] items-center justify-between gap-16">
        <Heading as={3} size="card" className="min-w-0">
          {item.title}
        </Heading>
        {onOpen ? (
          <button
            type="button"
            onClick={() => onOpen(item)}
            className="inline-flex h-48 w-48 shrink-0 items-center justify-center rounded-button text-primary transition duration-DEFAULT hover:bg-gray-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label={`Open larger view of ${item.title}`}
          >
            <Maximize2 className="h-24 w-24" strokeWidth={1.5} aria-hidden />
          </button>
        ) : null}
      </div>
    </Card>
  );
}
