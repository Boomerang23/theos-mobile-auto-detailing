import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
  as?: HeadingLevel;
  size?: "hero" | "section" | "card";
};

const sizeClasses = {
  hero: "text-hero-mobile md:text-hero-tablet lg:text-hero-desktop",
  section: "text-section-title",
  card: "text-card-title",
};

export function Heading({
  children,
  as = 2,
  size = "section",
  className,
  ...props
}: HeadingProps) {
  const Component = `h${as}` as const;

  return (
    <Component
      className={cn("font-heading text-primary", sizeClasses[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
