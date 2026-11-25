"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/components/ui/useInView";

/** Envuelve un SVG animado. Reinicia la animación cada vez que reaparece en pantalla. */
export function Diagram({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.dataset.js = "1";
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.dataset.visible = "true";
    }
  }, []);

  useInView(ref, (inView) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.dataset.visible = "true";
      return;
    }
    el.dataset.visible = String(inView);
  });

  return (
    <div ref={ref} className={cn("diagram-wrap", className)}>
      {children}
    </div>
  );
}
