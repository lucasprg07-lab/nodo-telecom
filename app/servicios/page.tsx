import type { Metadata } from "next";
import { services } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { CallToAction } from "@/components/home/CallToAction";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Instalación de Starlink, redes y conectividad, infraestructura tecnológica y soluciones para empresas y establecimientos rurales en Salta.",
};

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

      <CallToAction />
    </>
  );
}
