import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SuccessMessageProps = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
};

export function SuccessMessage({
  children,
  className,
  ...props
}: SuccessMessageProps) {
  return (
    <p
      role="status"
      className={cn("text-small font-medium text-success", className)}
      {...props}
    >
      {children}
    </p>
  );
}
