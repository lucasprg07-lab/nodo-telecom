import {
  Satellite,
  Network,
  Server,
  Building2,
  SlidersHorizontal,
  BadgeCheck,
  GitMerge,
  Headset,
  MapPin,
  LifeBuoy,
  Home,
  Store,
  BedDouble,
  Trees,
  Warehouse,
  Factory,
} from "lucide-react";
import type { Benefit, Service, Solution } from "@/types";

export const services: Service[] = [
  {
    slug: "starlink",
    name: "Internet satelital Starlink",
    shortDescription:
      "Instalación, configuración y optimización de equipos Starlink para hogares, comercios y zonas rurales.",
    description:
      "Nos encargamos del relevamiento del lugar, la instalación y fijación de la antena, el tendido de cableado y la puesta en marcha del servicio. Importante: NODO Telecom no es proveedor de internet ni revendedor de planes Starlink; vos contratás y mantenés tu propia suscripción y nosotros realizamos el trabajo técnico profesional.",
    benefits: [
      "Relevamiento del lugar de instalación.",
      "Evaluación de ubicación y visibilidad del cielo.",
      "Instalación y fijación de antenas.",
      "Tendido y organización de cableado.",
      "Configuración y puesta en marcha.",
      "Optimización de conectividad.",
      "Integración con redes existentes.",
      "Configuración de Wi-Fi.",
      "Soporte técnico.",
    ],
    applications: [
      "Hogares",
      "Comercios y oficinas",
      "Cabañas y alojamientos",
      "Zonas rurales",
    ],
    image: "/images/servicio-starlink.png",
    icon: Satellite,
  },
  {
    slug: "redes",
    name: "Redes y conectividad",
    shortDescription:
      "Diseño, instalación y optimización de redes locales para entornos residenciales y comerciales.",
    description:
      "Planificamos e instalamos redes LAN, cableado estructurado y puntos de acceso para lograr una cobertura estable y ordenada. Diagnosticamos y resolvemos problemas de conectividad integrando los dispositivos de tu red local.",
    benefits: [
      "Instalación de redes LAN.",
      "Cableado estructurado.",
      "Instalación de puntos de red Ethernet.",
      "Configuración de routers y puntos de acceso.",
      "Optimización de cobertura Wi-Fi.",
      "Diagnóstico y solución de problemas de conectividad.",
      "Integración de dispositivos y redes locales.",
    ],
    applications: ["Hogares", "Oficinas", "Comercios", "Depósitos y espacios de trabajo"],
    image: "/images/servicio-redes.png",
    icon: Network,
  },
  {
    slug: "infraestructura",
    name: "Infraestructura tecnológica",
    shortDescription:
      "Organización, mantenimiento y diagnóstico de infraestructura de red y telecomunicaciones.",
    description:
      "Organizamos racks y cableado, planificamos infraestructura de telecomunicaciones y brindamos asesoramiento técnico para que tu red sea prolija, segura y fácil de mantener.",
    benefits: [
      "Instalación y organización de racks.",
      "Organización de cableado.",
      "Infraestructura de telecomunicaciones.",
      "Enlaces de conectividad.",
      "Asesoramiento técnico.",
      "Mantenimiento y diagnóstico de infraestructura.",
    ],
    applications: ["Empresas", "Industrias", "Comercios", "Instituciones"],
    image: "/images/servicio-infraestructura.png",
    icon: Server,
  },
  {
    slug: "empresas-rurales",
    name: "Soluciones para empresas y establecimientos rurales",
    shortDescription:
      "Conectividad y redes a medida para operaciones comerciales, turísticas y productivas.",
    description:
      "Diseñamos soluciones de conectividad para alojamientos, comercios, oficinas y establecimientos rurales. Cada propuesta se elabora a partir de un relevamiento técnico y queda sujeta a evaluación de viabilidad y coordinación.",
    benefits: [
      "Conectividad para alojamientos y cabañas.",
      "Conectividad para comercios y oficinas.",
      "Redes para establecimientos rurales.",
      "Soluciones para depósitos y espacios de trabajo.",
      "Relevamientos y propuestas técnicas personalizadas.",
    ],
    applications: ["Cabañas y turismo", "Producción rural", "Depósitos", "Empresas"],
    image: "/images/solucion-productivo.png",
    icon: Building2,
  },
];

export const benefits: Benefit[] = [
  {
    title: "Soluciones a medida",
    description:
      "Evaluamos cada lugar para proponer la solución que mejor se adapta a tus necesidades reales.",
    icon: SlidersHorizontal,
  },
  {
    title: "Instalaciones profesionales",
    description:
      "Trabajo técnico prolijo, seguro y con criterios de calidad de instalación.",
    icon: BadgeCheck,
  },
  {
    title: "Integración de redes",
    description:
      "No solo instalamos equipos: integramos la conectividad con la red existente de tu espacio.",
    icon: GitMerge,
  },
  {
    title: "Atención personalizada",
    description: "Trato directo y seguimiento de tu caso de principio a fin.",
    icon: Headset,
  },
  {
    title: "Cobertura en Salta y alrededores",
    description: "Salta Capital y localidades del Valle de Lerma y alrededores.",
    icon: MapPin,
  },
  {
    title: "Soporte técnico",
    description:
      "Acompañamiento para resolver problemas de conectividad e infraestructura.",
    icon: LifeBuoy,
  },
];

export const solutions: Solution[] = [
  {
    title: "Hogares",
    description:
      "Conectividad confiable para tu casa: internet satelital, Wi-Fi y redes internas bien instaladas.",
    items: ["Internet satelital Starlink", "Configuración de Wi-Fi", "Redes del hogar"],
    image: "/images/solucion-hogares.png",
    icon: Home,
  },
  {
    title: "Comercios y oficinas",
    description:
      "Redes estables y ordenadas para que tu negocio no dependa de conexiones improvisadas.",
    items: ["Redes LAN y cableado", "Puntos de acceso y cobertura", "Diagnóstico de conectividad"],
    image: "/images/solucion-comercios.png",
    icon: Store,
  },
  {
    title: "Cabañas y alojamientos turísticos",
    description:
      "Conectividad para huéspedes y gestión, incluso donde el servicio tradicional no llega.",
    items: ["Internet satelital", "Cobertura Wi-Fi por áreas", "Integración con la red del alojamiento"],
    image: "/images/solucion-cabanas.png",
    icon: BedDouble,
  },
  {
    title: "Viviendas rurales",
    description:
      "Internet satelital y redes para vivir conectado fuera del radio urbano.",
    items: ["Instalación Starlink", "Optimización de señal", "Redes para el hogar"],
    image: "/images/solucion-vivienda-rural.png",
    icon: Trees,
  },
  {
    title: "Establecimientos productivos",
    description:
      "Conectividad para campos, fincas y operaciones que necesitan enlace en zonas alejadas.",
    items: ["Relevamiento técnico", "Enlaces de conectividad", "Redes para la operación"],
    image: "/images/solucion-productivo.png",
    icon: Warehouse,
  },
  {
    title: "Empresas y clientes industriales",
    description:
      "Infraestructura de red y telecomunicaciones planificada y mantenida con criterio profesional.",
    items: [
      "Racks y cableado estructurado",
      "Infraestructura de telecomunicaciones",
      "Asesoramiento y mantenimiento",
    ],
    image: "/images/solucion-empresas.png",
    icon: Factory,
  },
];

export const LOCALITIES: string[] = [
  "Salta Capital",
  "San Lorenzo",
  "Vaqueros",
  "Cerrillos",
  "Rosario de Lerma",
  "Campo Quijano",
  "General Güemes",
  "Metán",
  "Otra localidad",
];

export const PROJECT_TYPES: { value: string; label: string }[] = [
  { value: "Instalación Starlink", label: "Instalación Starlink" },
  { value: "Conectividad residencial", label: "Conectividad residencial" },
  { value: "Conectividad comercial", label: "Conectividad comercial" },
  { value: "Conectividad industrial", label: "Conectividad industrial" },
  { value: "Redes LAN / Wi-Fi", label: "Redes LAN / Wi-Fi" },
  { value: "Infraestructura tecnológica", label: "Infraestructura tecnológica" },
  {
    value: "Proyecto en ubicación remota",
    label: "Proyecto en ubicación remota",
  },
  { value: "Otro", label: "Otro" },
];

export const STARLINK_OPTIONS: { value: string; label: string }[] = [
  { value: "Sí", label: "Sí" },
  { value: "No", label: "No" },
  { value: "No corresponde", label: "No corresponde" },
];

export const EQUIPMENT_OPTIONS: { value: string; label: string }[] = [
  { value: "Sí", label: "Sí" },
  { value: "No", label: "No" },
  { value: "No sabe", label: "No sabe" },
];

