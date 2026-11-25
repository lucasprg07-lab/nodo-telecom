"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/components/ui/useInView";

type From = "up" | "down" | "left" | "right" | "scale";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Retraso en ms (para escalonar tarjetas). */
  delay?: number;
  /** Dirección de entrada. */
  from?: From;
  /** Si es true, anima solo la primera vez (usar en bloques muy altos). */
  once?: boolean;
}

function reducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Revela el contenido con fade + desplazamiento al entrar en pantalla.
 * Vuelve a animar cuando el bloque reaparece (al subir y al bajar).
 * Sin JavaScript, o con movimiento reducido, el contenido se ve siempre.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  from = "up",
  once = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.dataset.js = "1";
    if (reducedMotion()) el.dataset.in = "1";
  }, []);

  useInView(ref, (inView) => {
    const el = ref.current;
    if (!el) return;
    if (inView || reducedMotion()) {
      el.dataset.in = "1";
    } else if (!once) {
      el.dataset.in = "0";
    }
  });

  return (
    <div
      ref={ref}
      data-from={from}
      className={cn("reveal", className)}
      style={
        delay
          ? ({ ["--reveal-delay" as string]: `${delay}ms` } as CSSProperties)
          : undefined
      }
    >
      {children}
    </div>
  );
}
