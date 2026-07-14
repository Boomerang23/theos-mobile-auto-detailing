"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";
import { useAccordion } from "@/components/sections/Accordion";
import { Paragraph } from "@/components/ui/Paragraph";
import { cn } from "@/lib/utils";

type AccordionItemProps = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function AccordionItem({
  id,
  title,
  children,
  className,
}: AccordionItemProps) {
  const { openId, setOpenId, baseId, registerButton, onHeaderKeyDown } =
    useAccordion();
  const isOpen = openId === id;
  const panelId = `${baseId}-panel-${id}`;
  const buttonId = `${baseId}-button-${id}`;
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    registerButton(id, buttonRef.current);
    return () => registerButton(id, null);
  }, [id, registerButton]);

  return (
    <div className={cn("py-24", className)}>
      <h3>
        <button
          ref={buttonRef}
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setOpenId(id)}
          onKeyDown={(event) => onHeaderKeyDown(event, id)}
          className="flex min-h-48 w-full items-center justify-between gap-16 text-left font-heading text-card-title text-primary transition duration-DEFAULT hover:text-primary/80"
        >
          <span>{title}</span>
          <ChevronDown
            className={cn(
              "h-24 w-24 shrink-0 text-primary transition duration-DEFAULT",
              isOpen && "rotate-180",
            )}
            strokeWidth={1.5}
            aria-hidden
          />
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className="pt-16"
      >
        {typeof children === "string" ? (
          <Paragraph className="text-gray-dark">{children}</Paragraph>
        ) : (
          children
        )}
      </div>
    </div>
  );
}
