"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onNavigate?: () => void;
  overlay?: boolean;
};

export function NavLink({
  href,
  children,
  className,
  onNavigate,
  overlay = false,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "inline-flex min-h-[44px] items-center text-small font-medium transition duration-DEFAULT ease-DEFAULT",
        overlay && "focus-ring-on-dark",
        isActive
          ? overlay
            ? "text-accent"
            : "text-primary underline decoration-accent decoration-2 underline-offset-8"
          : overlay
            ? "text-secondary hover:text-accent"
            : "text-primary hover:text-accent",
        className,
      )}
    >
      {children}
    </Link>
  );
}
