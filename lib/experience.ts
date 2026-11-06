import {
  RadioTower,
  Factory,
  ClipboardList,
  Zap,
  Globe2,
  MapPinned,
  BadgeCheck,
  Building2,
} from "lucide-react";
import type {
  ExperienceArea,
  TrustIndicator,
  GlobalReachLevel,
} from "@/types";

export const trustIndicators: TrustIndicator[] = [
  {
    icon: BadgeCheck,
    title: "+5 años de experiencia",
    description: "trayectoria profesional previa en telecomunicaciones.",
  },
  {
    icon: RadioTower,
    title: "Telecomunicaciones",
    description: "e infraestructura tecnológica.",
  },
  {
    icon: Factory,
    title: "Industria y minería",
    description: "entornos operativos exigentes.",
  },
  {
    icon: MapPinned,
    title: "Proyectos empresariales",
    description: "y ubicaciones remotas.",
  },
];

export const experienceAreas: ExperienceArea[] = [
  {
    title: "Telecomunicaciones e infraestructura de redes",
    description:
      "Infraestructura de telecomunicaciones y redes para entornos empresariales.",
    items: [
      "Infraestructura de telecomunicaciones.",
      "Conectividad inalámbrica y enlaces.",
      "Redes LAN y WAN.",
      "Fibra óptica e infraestructura asociada.",
      "Equipamiento de comunicaciones y conectividad empresarial.",
    ],
    icon: RadioTower,
    image: "",
    imageAlt: "Infraestructura de telecomunicaciones y redes",
  },
  {
    title: "Industria y minería",
    description:
      "Conectividad e infraestructura tecnológica para entornos operativos exigentes.",
    items: [
      "Proyectos en entornos industriales y mineros.",
      "Conectividad para establecimientos y ubicaciones remotas.",
      "Infraestructura tecnológica en entornos operativos exigentes.",
      "Coordinación técnica y documentación de proyectos.",
    ],
    icon: Factory,
    image: "",
    imageAlt: "Infraestructura de telecomunicaciones en industria y minería",
  },
  {
    title: "Planificación y gestión técnica",
    description:
      "Análisis, relevamiento y documentación para abordar cada proyecto con visión integral.",
    items: [
      "Análisis de requerimientos.",
      "Relevamientos técnicos.",
      "Ingeniería y documentación de proyectos.",
      "Cómputos de materiales y planificación de recursos.",
      "Procedimientos técnicos y seguimiento de implementación.",
    ],
    icon: ClipboardList,
    image: "",
    imageAlt: "Planificación y gestión técnica de proyectos",
  },
  {
    title: "Energía e infraestructura crítica",
    description:
      "Sistemas de alimentación y respaldo para telecomunicaciones y centros de datos.",
    items: [
      "Sistemas de alimentación para telecomunicaciones.",
      "UPS y bancos de baterías.",
      "Grupos electrógenos y sistemas de transferencia.",
      "Infraestructura eléctrica asociada a nodos y centros de datos.",
      "Mantenimiento y continuidad operativa.",
    ],
    icon: Zap,
    image: "",
    imageAlt: "Energía e infraestructura crítica",
  },
];

export const globalReach: GlobalReachLevel[] = [
  {
    icon: MapPinned,
    title: "Argentina",
    description: "Atención y coordinación de proyectos según cobertura operativa.",
  },
  {
    icon: Globe2,
    title: "Latinoamérica",
    description: "Evaluación y coordinación de soluciones de conectividad.",
  },
  {
    icon: Building2,
    title: "Internacional",
    description:
      "Asesoramiento y coordinación sujetos a disponibilidad, regulación, logística y soporte técnico local.",
  },
];
