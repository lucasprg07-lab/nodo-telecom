import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { services } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { FlotasEmbarcaciones } from "@/components/home/FlotasEmbarcaciones";
import { AltaCapacidad } from "@/components/home/AltaCapacidad";
import { CallToAction } from "@/components/home/CallToAction";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Instalación de Starlink, redes LAN y Wi-Fi, alta capacidad satelital y servicio itinerante para flotas y embarcaciones.",
};

const VALUE_PROPOSITION = [
  "Instalación y configuración de Starlink.",
  "Evaluación y relevamiento de conectividad.",
  "Redes Wi-Fi y LAN.",
  "Cableado estructurado.",
  "Integración de routers, switches y puntos de acceso.",
  "Optimización de cobertura y rendimiento.",
  "Enlaces y soluciones para ubicaciones remotas.",
  "Infraestructura tecnológica.",
  "Asistencia y mantenimiento técnico.",
];

export default function ServiciosPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Servicios"
            title="Soluciones técnicas de conectividad"
            description="Servicios de instalación, configuración, integración y mantenimiento para hogares, comercios, industria y minería, flotas y embarcaciones."
          />
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container className="space-y-16 sm:space-y-20">
          {services.map((service, index) => (
            <ServiceDetail key={service.slug} service={service} index={index} />
          ))}
        </Container>
      </section>

      <FlotasEmbarcaciones />
      <AltaCapacidad />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Propuesta integral"
            title="Un servicio técnico de punta a punta"
            description="Cada proyecto puede comprender relevamiento, diseño, montaje, configuración, integración con redes existentes, pruebas y puesta en servicio, según el alcance contratado."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {VALUE_PROPOSITION.map((item) => (
              <div
                key={item}
                className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CallToAction />
    </>
  );
}
