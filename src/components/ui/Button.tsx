import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-primary hover:brightness-95 hover:scale-[1.02] focus-ring-on-accent",
  secondary:
    "border border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-primary focus-ring-on-dark",
};

export function Button({
  children,
  variant = "primary",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "btn-interactive inline-flex h-button items-center justify-center rounded-button px-32 text-button font-medium disabled:pointer-events-none disabled:opacity-50 motion-reduce:hover:scale-100",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
