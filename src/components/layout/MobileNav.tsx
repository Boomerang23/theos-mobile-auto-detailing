"use client";

import { useEffect, useId, useRef } from "react";
import { Menu, X } from "lucide-react";
import { CTAButton } from "@/components/layout/CTAButton";
import { Logo } from "@/components/layout/Logo";
import { NavLink } from "@/components/layout/NavLink";
import { businessConfig } from "@/data/business";
import { ctaCopy, mainNavLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  overlay?: boolean;
};

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function MobileNav({
  open,
  onOpenChange,
  overlay = false,
}: MobileNavProps) {
  const close = () => onOpenChange(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;

    const focusables = () =>
      panel
        ? (Array.from(panel.querySelectorAll(FOCUSABLE)) as HTMLElement[])
        : [];

    const first = focusables()[0];
    first?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onOpenChange(false);
        return;
      }

      if (event.key !== "Tab" || !panel) return;

      const items = focusables();
      if (items.length === 0) return;

      const firstItem = items[0];
      const lastItem = items[items.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey && active === firstItem) {
        event.preventDefault();
        lastItem.focus();
      } else if (!event.shiftKey && active === lastItem) {
        event.preventDefault();
        firstItem.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    const toggleButton = toggleRef.current;

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      toggleButton?.focus();
    };
  }, [open, onOpenChange]);

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        className={cn(
          "inline-flex h-48 w-48 items-center justify-center rounded-button transition duration-DEFAULT hover:text-accent",
          overlay
            ? "text-secondary focus-ring-on-dark"
            : "text-primary",
        )}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-haspopup="dialog"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => onOpenChange(!open)}
      >
        {open ? (
          <X className="h-24 w-24" strokeWidth={1.5} aria-hidden />
        ) : (
          <Menu className="h-24 w-24" strokeWidth={1.5} aria-hidden />
        )}
      </button>

      <div
        ref={panelRef}
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={cn(
          "fixed inset-0 z-40 bg-secondary transition duration-DEFAULT ease-DEFAULT",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        hidden={!open}
      >
        <p id={titleId} className="sr-only">
          Mobile navigation
        </p>
        <div className="flex h-full flex-col gap-32 overflow-y-auto px-container-mobile py-32">
          <Logo onNavigate={close} size="sm" />

          <nav aria-label="Mobile primary" className="flex flex-col gap-24">
            {mainNavLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                onNavigate={close}
                className="text-body"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-16 pb-32">
            <CTAButton onNavigate={close} className="w-full" />
            <a
              href={`tel:${businessConfig.phone}`}
              className="inline-flex h-button w-full items-center justify-center rounded-button border border-primary bg-transparent text-button font-medium text-primary transition duration-DEFAULT hover:bg-primary hover:text-secondary"
              onClick={close}
            >
              {ctaCopy.callNow}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
