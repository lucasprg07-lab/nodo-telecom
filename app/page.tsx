import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { FlotasEmbarcaciones } from "@/components/home/FlotasEmbarcaciones";
import { AltaCapacidad } from "@/components/home/AltaCapacidad";
import { ComoTrabajamos } from "@/components/home/ComoTrabajamos";
import { ExperienceAreas } from "@/components/home/ExperienceAreas";
import { CasosExperiencia } from "@/components/home/CasosExperiencia";
import { Benefits } from "@/components/home/Benefits";
import { Differentiator } from "@/components/home/Differentiator";
import { GlobalReach } from "@/components/home/GlobalReach";
import { Galeria } from "@/components/home/Galeria";
import { PagosCripto } from "@/components/home/PagosCripto";
import { FAQSection } from "@/components/home/FAQSection";
import { Testimonios } from "@/components/home/Testimonios";
import { CallToAction } from "@/components/home/CallToAction";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesPreview />
      <FlotasEmbarcaciones />
      <AltaCapacidad />
      <ComoTrabajamos />
      <ExperienceAreas />
      <CasosExperiencia />
      <Benefits />
      <Differentiator />
      <GlobalReach />
      <Galeria />
      <PagosCripto />
      <FAQSection />
      <Testimonios />
      <CallToAction />
    </>
  );
}

