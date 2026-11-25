"use client";

import { Children, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: ReactNode;
  /** Nombre accesible del carrusel (usar un texto ya existente en la sección). */
  label: string;
  /** Clases de grilla desde md (ej. "md:grid-cols-2 lg:grid-cols-3"). */
  gridClassName?: string;
  className?: string;
}

/** Carrusel con scroll-snap en celular; grilla normal desde md. */
export function Carousel({ children, label, gridClassName, className }: CarouselProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const count = Children.count(children);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const slides = Array.from(el.children) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(slides.indexOf(entry.target as HTMLElement));
          }
        }
      },
      { root: el, threshold: 0.6 }
    );
    slides.forEach((slide) => io.observe(slide));
    return () => io.disconnect();
  }, [count]);

  return (
    <div className={className}>
      <div
        ref={ref}
        role="region"
        aria-label={label}
        tabIndex={0}
        className={cn(
          "no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-px-4 px-4 pb-2 sm:-mx-6 sm:scroll-px-6 sm:px-6",
          "md:mx-0 md:grid md:gap-6 md:overflow-visible md:px-0 md:pb-0",
          gridClassName
        )}
      >
        {children}
      </div>
      {count > 1 ? (
        <div className="mt-4 flex justify-center gap-2 md:hidden" aria-hidden="true">
          {Array.from({ length: count }, (_, i) => (
            <span
              key={i}
              className={cn(
                "h-1.5 w-1.5 rounded-full transition-[transform,background-color] duration-300",
                i === active ? "scale-125 bg-cyan-400" : "bg-white/25"
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
