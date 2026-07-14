"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  title: string;
  hasImages?: boolean;
  className?: string;
};

function AtmosphereLayer({ variant }: { variant: "before" | "after" }) {
  const isBefore = variant === "before";

  return (
    <div
      className={cn(
        "absolute inset-0",
        isBefore
          ? "bg-gradient-to-br from-primary via-primary to-gray-dark"
          : "bg-gradient-to-br from-primary via-primary to-accent/40",
      )}
      aria-hidden
    >
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.08]" />
      {!isBefore ? (
        <div className="absolute inset-0 bg-gradient-to-t from-accent/25 to-transparent" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      )}
    </div>
  );
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  title,
  hasImages = false,
  className,
}: BeforeAfterSliderProps) {
  const labelId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  }, []);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    updatePosition(event.clientX);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    updatePosition(event.clientX);
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    setDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPosition((value) => Math.max(0, value - 5));
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setPosition((value) => Math.min(100, value + 5));
    }
    if (event.key === "Home") {
      event.preventDefault();
      setPosition(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      setPosition(100);
    }
  };

  useEffect(() => {
    if (!dragging) return;

    const handleUp = () => setDragging(false);
    window.addEventListener("pointerup", handleUp);
    return () => window.removeEventListener("pointerup", handleUp);
  }, [dragging]);

  return (
    <div
      ref={containerRef}
      role="slider"
      aria-labelledby={labelId}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      aria-valuetext={`${Math.round(position)} percent before visible`}
      tabIndex={0}
      className={cn(
        "relative aspect-[4/3] w-full touch-none overflow-hidden rounded-image bg-primary select-none",
        className,
      )}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onKeyDown={handleKeyDown}
    >
      <span id={labelId} className="sr-only">
        Before and after comparison for {title}
      </span>

      <div className="absolute inset-0">
        {hasImages ? (
          <Image
            src={afterSrc}
            alt={afterAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            quality={75}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <AtmosphereLayer variant="after" />
        )}
        <Badge className="absolute right-16 top-16 bg-secondary/90">After</Badge>
      </div>

      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        {hasImages ? (
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            quality={75}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <AtmosphereLayer variant="before" />
        )}
        <Badge className="absolute left-16 top-16 bg-secondary/90">Before</Badge>
      </div>

      <div
        className="absolute inset-y-0 z-10 w-1 -translate-x-1/2 bg-accent"
        style={{ left: `${position}%` }}
        aria-hidden
      >
        <div className="absolute top-1/2 left-1/2 flex h-48 w-48 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-accent bg-secondary shadow-soft">
          <span className="text-small font-medium text-primary" aria-hidden>
            ‹ ›
          </span>
        </div>
      </div>
    </div>
  );
}
