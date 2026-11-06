import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { Benefits } from "@/components/home/Benefits";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { GlobalReach } from "@/components/home/GlobalReach";
import { ExperienceAreas } from "@/components/home/ExperienceAreas";
import { Differentiator } from "@/components/home/Differentiator";
import { CallToAction } from "@/components/home/CallToAction";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Benefits />
      <ServicesPreview />
      <GlobalReach />
      <ExperienceAreas />
      <Differentiator />
      <CallToAction />
    </>
  );
}

