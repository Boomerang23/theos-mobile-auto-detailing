import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type RatingStarsProps = {
  rating: number;
  max?: number;
  label?: string;
  className?: string;
};

export function RatingStars({
  rating,
  max = 5,
  label,
  className,
}: RatingStarsProps) {
  const safeRating = Math.min(max, Math.max(0, rating));
  const accessibleLabel = label ?? `${safeRating} out of ${max} stars`;

  return (
    <div
      role="img"
      aria-label={accessibleLabel}
      className={cn("flex items-center gap-4", className)}
    >
      {Array.from({ length: max }, (_, index) => {
        const filled = index < safeRating;

        return (
          <Star
            key={index}
            className={cn(
              "h-16 w-16",
              filled ? "text-accent" : "text-gray-dark",
            )}
            strokeWidth={1.5}
            aria-hidden
          />
        );
      })}
    </div>
  );
}
