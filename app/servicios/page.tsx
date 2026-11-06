import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { services } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { CallToAction } from "@/components/home/CallToAction";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Instalación de Starlink, redes LAN y Wi-Fi, cableado estructurado e infraestructura tecnológica. Soluciones integrales de conectividad para empresas, industria y ubicaciones remotas.",
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
      <section className="bg-navy-950 py-16 sm:py-20">
        <Container>
          <SectionHeading
            dark
            eyebrow="Servicios"
            title="Soluciones técnicas de conectividad"
            description="Servicios de instalación, configuración, integración y mantenimiento para hogares, comercios y establecimientos rurales."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="space-y-16 sm:space-y-20">
          {services.map((service, index) => (
            <ServiceDetail key={service.slug} service={service} index={index} />
          ))}
        </Container>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
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
                className="flex items-start gap-2 rounded-xl border border-navy-100 bg-white p-4 text-sm text-slate-700"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-electric-500" />
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
