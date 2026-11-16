"use client";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { galleryItems } from "@/lib/gallery";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Galeria() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const item = openIndex !== null ? galleryItems[openIndex] : null;

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Galería"
          title="Instalaciones"
          description="Una muestra de nuestro trabajo en campo. Las fotos definitivas se cargarán próximamente."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((g, i) => (
            <Reveal key={g.title} delay={i * 60}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group block w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left"
              >
                {g.src ? (
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={g.src}
                      alt={g.alt}
                      fill
                      className="object-cover transition group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className="relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-navy-800 via-navy-950 to-electric-900/40">
                    <span className="text-xs text-slate-400">Imagen próxima</span>
                  </div>
                )}
                <p className="p-3 text-sm font-medium text-slate-200">{g.title}</p>
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

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
            {item.src ? (
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 75vw"
                />
              </div>
            ) : (
              <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-navy-900 text-slate-400">
                Imagen próxima
              </div>
            )}
            <figcaption className="mt-3 text-center text-sm text-slate-300">
              {item.alt}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </section>
  );
}