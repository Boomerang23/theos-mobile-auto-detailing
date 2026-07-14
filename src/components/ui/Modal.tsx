"use client";

import { useCallback, useEffect, useId, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Modal({
  open,
  onClose,
  title,
  children,
  className,
}: ModalProps) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
      closeButtonRef.current?.focus();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCancel = (event: Event) => {
      event.preventDefault();
      handleClose();
    };

    dialog.addEventListener("cancel", handleCancel);
    return () => dialog.removeEventListener("cancel", handleCancel);
  }, [handleClose]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-modal="true"
      className={cn(
        "w-[min(100%,32rem)] rounded-card bg-secondary p-card text-primary shadow-soft-hover backdrop:bg-primary/50 open:flex open:flex-col",
        className,
      )}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
    >
      <div className="mb-24 flex items-start justify-between gap-16">
        <h2 id={titleId} className="font-heading text-card-title">
          {title}
        </h2>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={handleClose}
          className="min-h-48 min-w-48 rounded-button px-16 py-8 text-small text-gray-dark transition duration-DEFAULT hover:text-primary"
          aria-label="Close dialog"
        >
          Close
        </button>
      </div>
      <div>{children}</div>
    </dialog>
  );
}
