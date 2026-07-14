import type { LucideIcon } from "lucide-react";
import { IconBox } from "@/components/ui/IconBox";
import { cn } from "@/lib/utils";

type ServiceIconProps = {
  icon: LucideIcon;
  label: string;
  className?: string;
};

export function ServiceIcon({ icon, label, className }: ServiceIconProps) {
  return <IconBox icon={icon} label={label} className={cn(className)} />;
}
