import Image from "next/image";
import { MapPin, ArrowRight, ShieldCheck, Satellite } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { buildWhatsAppLink } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-bg" aria-hidden="true" />

      <Container className="relative grid gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-24">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
            <MapPin className="h-3.5 w-3.5" /> Base en Salta, Argentina
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Conectividad satelital y redes para{" "}
            <span className="grad-text">
              hogares, empresas, minería, flotas y embarcaciones
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-300">
            Base en Salta, servicio en toda Argentina y coordinación
            internacional según disponibilidad.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
          <p className="mt-8 flex items-center gap-2 text-sm text-slate-400">
            <ShieldCheck className="h-4 w-4 text-cyan-400" />
            Instalación profesional · Integración de redes · Soporte técnico
          </p>
        </div>

        <div
          className="relative animate-fade-up"
          style={{ animationDelay: "150ms" }}
        >
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <Image
              src="/images/solutions/hero.png"
              alt="Instalación profesional de una antena satelital al atardecer en Salta, Argentina"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
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
