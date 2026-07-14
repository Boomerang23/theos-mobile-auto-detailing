"use client";

import { mainNavLinks } from "@/data/navigation";
import { NavLink } from "@/components/layout/NavLink";
import { cn } from "@/lib/utils";

type DesktopNavProps = {
  className?: string;
  overlay?: boolean;
};

export function DesktopNav({ className, overlay = false }: DesktopNavProps) {
  return (
    <nav
      aria-label="Primary"
      className={cn("hidden items-center gap-32 lg:flex", className)}
    >
      {mainNavLinks.map((link) => (
        <NavLink key={link.href} href={link.href} overlay={overlay}>
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}
