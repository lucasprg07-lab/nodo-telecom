import type { Metadata } from "next";
import { CasosExperiencia } from "@/components/home/CasosExperiencia";
import { CallToAction } from "@/components/home/CallToAction";

export const metadata: Metadata = {
  title: "Casos de experiencia",
  description:
    "Proyectos reales de conectividad satelital y redes realizados por el fundador de NODO Telecom durante su trayectoria en telecomunicaciones.",
};

export default function CasosPage() {
  return (
    <>
      <CasosExperiencia />
      <CallToAction />
    </>
  );
}