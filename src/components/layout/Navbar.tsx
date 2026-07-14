"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { CTAButton } from "@/components/layout/CTAButton";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { Logo } from "@/components/layout/Logo";
import { MobileNav } from "@/components/layout/MobileNav";
import { businessConfig } from "@/data/business";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navPath, setNavPath] = useState(pathname);

  // Close the mobile menu when the route changes (render-time sync).
  if (pathname !== navPath) {
    setNavPath(pathname);
    if (mobileOpen) {
      setMobileOpen(false);
    }
  }

  const isHome = pathname === "/";
  const isOverlay = isHome;

  return (
    <header
      className={cn(
        "relative z-50 w-full transition duration-DEFAULT ease-DEFAULT",
        isOverlay
          ? "bg-primary"
          : "border-b border-gray-light bg-secondary",
      )}
    >
      <Container className="flex h-[72px] items-center justify-between gap-24">
        <Logo overlay={isOverlay} />

        <DesktopNav overlay={isOverlay} />

        <div className="hidden items-center gap-16 lg:flex">
          <a
            href={`tel:${businessConfig.phone}`}
            className={cn(
              "text-small font-medium transition duration-DEFAULT hover:text-accent",
              isOverlay ? "text-secondary focus-ring-on-dark" : "text-primary",
            )}
          >
            {businessConfig.phoneFormatted}
          </a>
          <CTAButton />
        </div>

        <div className="flex items-center gap-8 lg:hidden">
          <CTAButton
            className={cn(
              "px-16 text-small",
              isOverlay && "focus-ring-on-dark",
            )}
          />
          <MobileNav
            open={mobileOpen}
            onOpenChange={setMobileOpen}
            overlay={isOverlay}
          />
        </div>
      </Container>
    </header>
  );
}
