import { Fragment } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import { MapPin, ArrowRight, ShieldCheck, Satellite } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { buildWhatsAppLink } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/icons";

const titularInicio = ["Conectividad", "satelital", "y", "redes", "para"];

export function Hero() {
  return (
    <section className="grain relative overflow-hidden">
      <div className="hero-bg" aria-hidden="true" />

      <svg
        className="hero-orbit pointer-events-none absolute inset-x-0 top-0 -z-10 h-full w-full opacity-60 hidden sm:block"
        viewBox="0 0 800 400"
        preserveAspectRatio="xMidYMin meet"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="orbitGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          id="orbit"
          d="M-20 330 Q 400 -90 820 330"
          fill="none"
          stroke="url(#orbitGrad)"
          strokeWidth="1.2"
          strokeDasharray="2 8"
        />
        <circle r="4" fill="#22d3ee" className="orbit-dot">
          <animateMotion dur="16s" repeatCount="indefinite">
            <mpath href="#orbit" />
          </animateMotion>
        </circle>
      </svg>

      <svg
        className="hero-orbit pointer-events-none absolute inset-x-0 top-0 -z-10 h-[300px] w-full opacity-90 sm:hidden"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMin meet"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="orbitGradM" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          id="orbitM"
          d="M-10 240 Q 200 -50 410 240"
          fill="none"
          stroke="url(#orbitGradM)"
          strokeWidth="1.8"
          strokeDasharray="3 8"
        />
        <g className="orbit-dot">
          <circle r="11" fill="#22d3ee" opacity="0.25" />
          <circle r="5" fill="#22d3ee" />
          <animateMotion dur="16s" repeatCount="indefinite">
            <mpath href="#orbitM" />
          </animateMotion>
        </g>
      </svg>

      <Container className="relative grid gap-8 pb-12 pt-10 sm:gap-12 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
            <MapPin className="h-3.5 w-3.5" /> Base en Salta, Argentina
          </span>
          <h1 className="mt-5 font-display text-[2rem] font-bold leading-[1.15] tracking-tight text-white text-balance sm:mt-6 sm:text-5xl sm:leading-tight">
            {titularInicio.map((palabra, i) => (
              <Fragment key={palabra}>
                <span
                  className="hero-word"
                  style={{ ["--i" as string]: i } as CSSProperties}
                >
                  {palabra}
                </span>{" "}
              </Fragment>
            ))}
            <span className="grad-text">
              hogares, empresas, minería, flotas y embarcaciones
            </span>
          </h1>
          <p
            className="mt-4 max-w-xl animate-fade-up text-base text-slate-300 sm:mt-5 sm:text-lg"
            style={{ animationDelay: "120ms" }}
          >
            Base en Salta, servicio en toda Argentina y coordinación
            internacional según disponibilidad.
          </p>
          <div
            className="mt-7 flex animate-fade-up flex-col gap-3 sm:mt-8 sm:flex-row"
            style={{ animationDelay: "180ms" }}
          >
            <Button
              href={buildWhatsAppLink(siteConfig.whatsappDefaultMessage)}
              external
              size="lg"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </Button>
            <Button href="/presupuesto" variant="outline" size="lg">
              Pedir presupuesto
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <p
            className="mt-6 flex animate-fade-up items-center gap-2 text-xs text-slate-400 sm:mt-8 sm:text-sm"
            style={{ animationDelay: "240ms" }}
          >
            <ShieldCheck className="h-4 w-4 shrink-0 text-cyan-400" />
            Instalación profesional · Integración de redes · Soporte técnico
          </p>
        </div>

        <div className="relative">
          <div className="rounded-3xl bg-gradient-to-br from-cyan-400/50 via-white/10 to-violet-500/50 p-px shadow-[0_0_60px_rgba(34,211,238,0.12)]">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[calc(1.5rem-1px)] bg-navy-950">
              <Image
                src="/images/solutions/hero.webp"
                alt="Instalación profesional de una antena satelital al atardecer en Salta, Argentina"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute -left-4 bottom-6 hidden animate-float items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md sm:flex">
            <Satellite className="h-5 w-5 text-cyan-400" />
            <div>
              <p className="text-sm font-semibold text-white">
                Internet satelital Starlink
              </p>
              <p className="text-xs text-slate-400">
                Instalación y configuración
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
