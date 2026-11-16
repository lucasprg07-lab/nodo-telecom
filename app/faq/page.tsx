import type { Metadata } from "next";
import { faqItems } from "@/lib/faq";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CallToAction } from "@/components/home/CallToAction";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Respuestas sobre instalación de Starlink, redes, servicio itinerante y alta capacidad satelital en Salta, Argentina.",
};

export default function FaqPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Preguntas frecuentes"
            description="Información útil sobre nuestros servicios, instalaciones y formas de pago."
          />
        </Container>
      </section>
      <section className="pb-16 sm:pb-24">
        <Container className="max-w-3xl">
          <FaqAccordion items={faqItems} />
        </Container>
      </section>
      <CallToAction />
    </>
  );
}