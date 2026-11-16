"use client";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { GalleryItem } from "@/types";

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const item = openIndex !== null ? items[openIndex] : null;

  if (items.length === 0) {
    return (
      <p className="mt-10 text-center text-sm text-slate-400">
        Las fotos de instalaciones se cargarán próximamente.
      </p>
    );
  }

  return (
    <>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((g, i) => (
          <button
            key={g.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group block w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={g.src}
                alt={g.alt}
                fill
                className="object-cover transition group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <p className="p-3 text-sm font-medium text-slate-200">{g.alt}</p>
          </button>
        ))}
      </div>

      {item ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={item.alt}
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Cerrar"
            onClick={() => setOpenIndex(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <figure
            className="max-h-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 75vw"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm text-slate-300">
              {item.alt}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}