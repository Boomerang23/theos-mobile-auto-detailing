import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  ariaLabelledby?: string;
  /** Skip offscreen paint work until near viewport (below-fold sections). */
  deferPaint?: boolean;
};

export function Section({
  children,
  className,
  containerClassName,
  id,
  ariaLabelledby,
  deferPaint = false,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn(
        "py-section-mobile md:py-section-tablet lg:py-section-desktop",
        deferPaint && "content-visibility-auto",
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
