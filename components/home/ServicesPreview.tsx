import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Carousel } from "@/components/ui/Carousel";
import { SpotlightGroup } from "@/components/ui/SpotlightGroup";

const ordered = [...services].sort(
  (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
);

export function ServicesPreview() {
  return (
    <section className="py-14 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Servicios"
          title="Conectividad para cada necesidad"
          description="Hogares, pymes, industria y minería, alta capacidad satelital y conectividad en movimiento para flotas y embarcaciones."
        />
        <Reveal className="mt-8 sm:mt-12">
          <SpotlightGroup>
            <Carousel
              label="Servicios"
              gridClassName="md:grid-cols-2 lg:grid-cols-4"
            >
              {ordered.map((service) => (
                <ServiceCard
                  key={service.slug}
                  service={service}
                  className={cn(
                    "w-[85%] shrink-0 snap-start sm:w-[60%] md:w-auto",
                    service.featured && "md:col-span-2 lg:row-span-2"
                  )}
                />
              ))}
            </Carousel>
          </SpotlightGroup>
        </Reveal>
        <div className="mt-8 text-center sm:mt-10">
          <Button href="/servicios" variant="secondary">
            Ver todos los servicios
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

