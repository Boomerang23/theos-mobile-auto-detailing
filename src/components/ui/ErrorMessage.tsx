import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ErrorMessageProps = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
};

export function ErrorMessage({
  children,
  className,
  ...props
}: ErrorMessageProps) {
  return (
    <p
      role="alert"
      className={cn("text-small font-medium text-error", className)}
      {...props}
    >
      {children}
    </p>
  );
}
