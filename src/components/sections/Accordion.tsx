"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type AccordionContextValue = {
  openId: string | null;
  setOpenId: (id: string | null) => void;
  baseId: string;
  registerButton: (id: string, el: HTMLButtonElement | null) => void;
  onHeaderKeyDown: (event: ReactKeyboardEvent<HTMLButtonElement>, id: string) => void;
};

const AccordionContext = createContext<AccordionContextValue | null>(null);

export function useAccordion() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionItem must be used within Accordion");
  }
  return context;
}

type AccordionProps = {
  children: ReactNode;
  className?: string;
  defaultOpenId?: string | null;
};

export function Accordion({
  children,
  className,
  defaultOpenId = null,
}: AccordionProps) {
  const baseId = useId();
  const [openId, setOpenIdState] = useState<string | null>(defaultOpenId);
  const buttonsRef = useRef<Map<string, HTMLButtonElement>>(new Map());
  const orderRef = useRef<string[]>([]);

  const setOpenId = useCallback((id: string | null) => {
    setOpenIdState((current) => (current === id ? null : id));
  }, []);

  const registerButton = useCallback((id: string, el: HTMLButtonElement | null) => {
    if (el) {
      buttonsRef.current.set(id, el);
      if (!orderRef.current.includes(id)) {
        orderRef.current.push(id);
      }
    } else {
      buttonsRef.current.delete(id);
      orderRef.current = orderRef.current.filter((item) => item !== id);
    }
  }, []);

  const onHeaderKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLButtonElement>, id: string) => {
      const order = orderRef.current;
      const index = order.indexOf(id);
      if (index < 0) return;

      let nextIndex = index;

      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          nextIndex = (index + 1) % order.length;
          break;
        case "ArrowUp":
          event.preventDefault();
          nextIndex = (index - 1 + order.length) % order.length;
          break;
        case "Home":
          event.preventDefault();
          nextIndex = 0;
          break;
        case "End":
          event.preventDefault();
          nextIndex = order.length - 1;
          break;
        default:
          return;
      }

      const nextId = order[nextIndex];
      buttonsRef.current.get(nextId)?.focus();
    },
    [],
  );

  useEffect(() => {
    orderRef.current = orderRef.current.filter((id) => buttonsRef.current.has(id));
  });

  const value = useMemo(
    () => ({
      openId,
      setOpenId,
      baseId,
      registerButton,
      onHeaderKeyDown,
    }),
    [openId, setOpenId, baseId, registerButton, onHeaderKeyDown],
  );

  return (
    <AccordionContext.Provider value={value}>
      <div className={cn("flex flex-col divide-y divide-gray-light", className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}
