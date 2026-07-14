import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};

export function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-button bg-accent/15 px-16 py-8 text-small font-medium text-primary",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
