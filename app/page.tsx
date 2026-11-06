import { Hero } from "@/components/home/Hero";
import { Benefits } from "@/components/home/Benefits";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { Differentiator } from "@/components/home/Differentiator";
import { CallToAction } from "@/components/home/CallToAction";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <ServicesPreview />
      <Differentiator />
      <CallToAction />
    </>
  );
}
