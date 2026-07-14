import { cn } from "@/lib/utils";

type LoadingSpinnerProps = {
  className?: string;
  label?: string;
};

export function LoadingSpinner({
  className,
  label = "Loading",
}: LoadingSpinnerProps) {
  return (
    <div
      className={cn("inline-flex items-center justify-center", className)}
      role="status"
      aria-live="polite"
    >
      <span
        className="h-32 w-32 animate-spin rounded-full border-2 border-gray-light border-t-accent"
        aria-hidden
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}
