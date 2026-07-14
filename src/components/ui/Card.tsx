import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "scroll-mt-[88px] rounded-card border border-transparent bg-secondary p-card shadow-soft transition duration-DEFAULT ease-DEFAULT hover:-translate-y-1 hover:border-primary/5 hover:shadow-soft-hover motion-reduce:transform-none motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
