import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

type PricingBadgeProps = {
  children: string;
  className?: string;
};

export function PricingBadge({ children, className }: PricingBadgeProps) {
  return <Badge className={cn(className)}>{children}</Badge>;
}
