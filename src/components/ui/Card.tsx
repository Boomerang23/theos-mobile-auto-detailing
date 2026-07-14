import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "scroll-mt-[88px] rounded-card bg-secondary p-card shadow-soft transition duration-DEFAULT ease-DEFAULT hover:-translate-y-1 hover:shadow-soft-hover",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
