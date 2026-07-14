import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ParagraphProps = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
  size?: "body" | "small";
};

const sizeClasses = {
  body: "text-body",
  small: "text-small",
};

export function Paragraph({
  children,
  size = "body",
  className,
  ...props
}: ParagraphProps) {
  return (
    <p
      className={cn("font-body text-primary", sizeClasses[size], className)}
      {...props}
    >
      {children}
    </p>
  );
}
