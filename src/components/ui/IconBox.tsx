import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconBoxProps = {
  icon: LucideIcon;
  label: string;
  className?: string;
};

export function IconBox({ icon: Icon, label, className }: IconBoxProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "inline-flex h-64 w-64 shrink-0 items-center justify-center rounded-card bg-gray-light text-primary",
        className,
      )}
    >
      <Icon className="h-32 w-32" strokeWidth={1.5} aria-hidden />
    </div>
  );
}
