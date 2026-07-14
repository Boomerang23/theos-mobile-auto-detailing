import { cn } from "@/lib/utils";

type ServiceFeatureProps = {
  children: string;
  className?: string;
};

export function ServiceFeature({ children, className }: ServiceFeatureProps) {
  return (
    <li
      className={cn(
        "flex items-start gap-8 text-small text-primary",
        className,
      )}
    >
      <span
        className="mt-[0.55em] h-8 w-8 shrink-0 rounded-full bg-accent"
        aria-hidden
      />
      <span>{children}</span>
    </li>
  );
}
