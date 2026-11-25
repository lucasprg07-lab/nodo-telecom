import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { CasosExperiencia } from "@/components/home/CasosExperiencia";
import { PorQueNodo } from "@/components/home/PorQueNodo";
import { AltaCapacidad } from "@/components/home/AltaCapacidad";
import { CallToAction } from "@/components/home/CallToAction";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function HomePage() {
  return (
    <>
      {/* Bloque 1 — impacto: propuesta, confianza y servicios */}
      <Hero />
      <TrustStrip />
      <ServicesPreview />
      <SectionDivider />

      {/* Bloque 2 — pruebas: casos reales y capacidad */}
      <CasosExperiencia />
      <AltaCapacidad />
      <SectionDivider />

      {/* Bloque 3 — por qué NODO: beneficios, enfoque y proceso */}
      <PorQueNodo />
      <SectionDivider />

      {/* Bloque 4 — cierre: llamado a la acción */}
      <CallToAction />
    </>
  );
}

