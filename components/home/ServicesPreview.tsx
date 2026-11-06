import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function ServicesPreview() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Servicios"
          title="Soluciones técnicas de conectividad"
          description="Internet satelital Starlink, redes y conectividad, infraestructura tecnológica y soluciones para empresas y zonas rurales."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 75} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/servicios" variant="secondary">
            Ver todos los servicios
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
