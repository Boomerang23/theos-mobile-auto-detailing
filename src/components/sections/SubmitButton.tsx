import type { ButtonHTMLAttributes, ReactNode } from "react";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { cn } from "@/lib/utils";

type SubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  loading?: boolean;
};

export function SubmitButton({
  children,
  loading = false,
  className,
  disabled,
  ...props
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cn(
        "inline-flex h-button w-full items-center justify-center gap-8 rounded-button bg-accent px-32 text-button font-medium text-primary transition duration-DEFAULT ease-DEFAULT hover:scale-[1.02] hover:brightness-95 disabled:pointer-events-none disabled:opacity-50 sm:w-auto",
        className,
      )}
      {...props}
    >
      {loading ? <LoadingSpinner className="h-24 w-24" label="Sending" /> : null}
      {children}
    </button>
  );
}
