import { siteConfig } from "@/lib/config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonios() {
  if (!siteConfig.showTestimonials) return null;

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Testimonios"
          title="Lo que dicen nuestros clientes"
        />
        {/* Sin contenido inventado: se carga cuando haya testimonios reales. */}
      </Container>
    </section>
  );
}