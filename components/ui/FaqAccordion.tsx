"use client";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/lib/faq";
import { cn } from "@/lib/utils";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const [highlighted, setHighlighted] = useState<string | null>(null);

  // Abre y destaca la pregunta apuntada por el hash (ej. /faq#pago-cripto).
  useEffect(() => {
    const applyHash = () => {
      const hash = decodeURIComponent(window.location.hash.replace(/^#/, ""));
      if (!hash) return;
      const index = items.findIndex((item) => item.id === hash);
      if (index === -1) return;
      setOpen(index);
      setHighlighted(hash);
      window.setTimeout(() => {
        document
          .getElementById(hash)
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 60);
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [items]);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.question}
            id={item.id}
            className={cn(
              "rounded-2xl border border-white/10 bg-white/5",
              item.id && highlighted === item.id && "border-cyan-400/60"
            )}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 p-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-white">{item.question}</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-cyan-400 transition-transform",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            {isOpen ? (
              <p className="px-4 pb-4 text-sm text-slate-300">{item.answer}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}