import Image from "next/image";
import {
  MapPin,
  ArrowRight,
  ShieldCheck,
  Satellite,
  Network,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-electric-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-electric-600/10 blur-3xl" />
      </div>

      <Container className="relative grid gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-24">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-electric-500/30 bg-electric-500/10 px-3 py-1 text-xs font-semibold text-electric-300">
            <MapPin className="h-3.5 w-3.5" /> Salta, Argentina
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Conectividad sin límites. Soluciones tecnológicas para cada entorno.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-300">
            Conectamos hogares, empresas y establecimientos rurales mediante
            soluciones de internet satelital, redes e infraestructura
            tecnológica en Salta y alrededores.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/presupuesto" size="lg">
              Solicitar presupuesto
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/servicios" variant="outline" size="lg">
              Conocer nuestros servicios
            </Button>
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm text-slate-400">
            <ShieldCheck className="h-4 w-4 text-electric-400" />
            Instalaciones profesionales · Integración de redes · Soporte técnico
          </p>
        </div>

        <div
          className="relative animate-fade-up"
          style={{ animationDelay: "150ms" }}
        >
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 bg-navy-900/60">
            <Image
              src="/images/hero.png"
              alt="Instalación profesional de una antena satelital al atardecer en Salta, Argentina"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -left-4 bottom-6 hidden animate-float items-center gap-3 rounded-xl border border-navy-100 bg-white px-4 py-3 shadow-lg sm:flex">
            <Satellite className="h-5 w-5 text-electric-600" />
            <div>
              <p className="text-sm font-semibold text-navy-900">
                Internet satelital Starlink
              </p>
              <p className="text-xs text-slate-500">Instalación y configuración</p>
            </div>
          </div>
          <div
            className="absolute -right-4 top-8 hidden animate-float items-center gap-3 rounded-xl border border-navy-100 bg-white px-4 py-3 shadow-lg sm:flex"
            style={{ animationDelay: "1.2s" }}
          >
            <Network className="h-5 w-5 text-electric-600" />
            <div>
              <p className="text-sm font-semibold text-navy-900">
                Redes e infraestructura
              </p>
              <p className="text-xs text-slate-500">Cableado, Wi-Fi y racks</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
