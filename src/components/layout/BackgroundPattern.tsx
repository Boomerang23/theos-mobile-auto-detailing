import { cn } from "@/lib/utils";

type BackgroundPatternProps = {
  className?: string;
};

export function BackgroundPattern({ className }: BackgroundPatternProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.04]" />
    </div>
  );
}
