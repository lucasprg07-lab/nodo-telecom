import {
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
  Layers,
  Ship,
} from "lucide-react";
import type { Benefit, Service, Solution } from "@/types";

export const services: Service[] = [
  {
    slug: "hogar",
    name: "Hogar",
    shortDescription:
      "Internet satelital y Wi-Fi para tu casa, con instalación profesional y cobertura estable.",
    description:
      "Instalamos y configuramos internet satelital Starlink en viviendas, junto con la red Wi-Fi interna para que toda la casa quede conectada. Hacemos el relevamiento del lugar, fijamos la antena, organizamos el cableado y dejamos el servicio funcionando.",
    benefits: [
      "Relevamiento del lugar antes de instalar.",
      "Instalación y fijación de la antena.",
      "Configuración de Wi-Fi y cobertura.",
      "Organización del cableado.",
      "Soporte técnico posterior.",
    ],
    applications: ["Casas", "Viviendas rurales", "Cabañas"],
    image: "/images/solutions/hogar.webp",
    icon: Home,
  },
  {
    slug: "pyme-comercio",
    name: "Pyme y comercio",
    shortDescription:
      "Redes estables y ordenadas para negocios, oficinas y comercios que no pueden depender de conexiones improvisadas.",
    description:
      "Diseñamos e instalamos la red de tu comercio u oficina: puntos de acceso, cableado y configuración, para lograr una cobertura estable y prolija. Diagnosticamos y resolvemos problemas de conectividad integrando tu red local.",
    benefits: [
      "Redes LAN y cableado estructurado.",
      "Puntos de acceso y cobertura Wi-Fi.",
      "Configuración de routers y equipos.",
      "Diagnóstico de conectividad.",
      "Integración con tu red existente.",
    ],
    applications: ["Comercios", "Oficinas", "Depósitos"],
    image: "/images/servicio-redes.webp",
    icon: Store,
  },
  {
    slug: "industria-mineria",
    name: "Industria y minería",
    shortDescription:
      "Conectividad e infraestructura tecnológica para operaciones industriales y mineras en zonas remotas.",
    description:
      "Abordamos proyectos de conectividad e infraestructura tecnológica para entornos operativos exigentes: relevamiento, instalación, integración y soporte. Incluye soluciones satelitales de alta capacidad para operaciones que necesitan continuidad.",
    benefits: [
      "Relevamiento técnico en sitio.",
      "Instalación e integración de equipos.",
      "Redundancia y continuidad de conexión.",
      "Monitoreo remoto de nodos.",
      "Infraestructura y soporte técnico.",
    ],
    applications: ["Minería", "Industria", "Ubicaciones remotas"],
    image: "/images/solutions/mineria.webp",
    icon: Factory,
  },
  {
    slug: "alta-capacidad",
    name: "Alta capacidad satelital",
    shortDescription:
      "Múltiples Starlink en una sola conexión para sumar capacidad y redundancia.",
    description:
      "Combinamos varios terminales Starlink en una sola conexión para operaciones que necesitan más velocidad y continuidad, en zonas sin infraestructura terrestre. Se diseña a medida de cada operación y se cotiza como proyecto.",
    benefits: [
      "Mayor capacidad: se suma la de los enlaces.",
      "Redundancia: si un terminal falla, la conexión sigue.",
      "Escalable: se agregan terminales según la necesidad.",
      "Sin infraestructura terrestre.",
      "Monitoreo remoto.",
      "Soporte técnico.",
    ],
    applications: ["Minería", "Industria", "Operaciones críticas"],
    image: "/images/solutions/alta-capacidad.webp",
    icon: Layers,
    featured: true,
  },
  {
    slug: "flotas-embarcaciones",
    name: "Flotas y embarcaciones",
    shortDescription:
      "Servicio itinerante: conectividad móvil de Starlink para vehículos, flotas y embarcaciones.",
    description:
      "Conectividad en movimiento para camiones, vehículos de campo, buses, yates, barcos de pesca y embarcaciones. Asesoramos entre planes con límite de datos o ilimitados y gestionamos la solución.",
    benefits: [
      "Conectividad en movimiento en zonas remotas.",
      "Vehículos, flotas y embarcaciones.",
      "Planes con límite de datos o ilimitados.",
      "Asesoramiento según la operación.",
      "Instalación en techo (nunca en parabrisas).",
    ],
    applications: ["Flotas", "Embarcaciones", "Vehículos de campo"],
    image: "/images/solutions/flotas.webp",
    icon: Ship,
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
    image: "/images/solucion-hogares.webp",
    icon: Home,
  },
  {
    title: "Comercios y oficinas",
    description:
      "Redes estables y ordenadas para que tu negocio no dependa de conexiones improvisadas.",
    items: ["Redes LAN y cableado", "Puntos de acceso y cobertura", "Diagnóstico de conectividad"],
    image: "/images/solucion-comercios.webp",
    icon: Store,
  },
  {
    title: "Cabañas y alojamientos turísticos",
    description:
      "Conectividad para huéspedes y gestión, incluso donde el servicio tradicional no llega.",
    items: ["Internet satelital", "Cobertura Wi-Fi por áreas", "Integración con la red del alojamiento"],
    image: "/images/solucion-cabanas.webp",
    icon: BedDouble,
  },
  {
    title: "Viviendas rurales",
    description:
      "Internet satelital y redes para vivir conectado fuera del radio urbano.",
    items: ["Instalación Starlink", "Optimización de señal", "Redes para el hogar"],
    image: "/images/solucion-vivienda-rural.webp",
    icon: Trees,
  },
  {
    title: "Establecimientos productivos",
    description:
      "Conectividad para campos, fincas y operaciones que necesitan enlace en zonas alejadas.",
    items: ["Relevamiento técnico", "Enlaces de conectividad", "Redes para la operación"],
    image: "/images/solucion-productivo.webp",
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
    image: "/images/solucion-empresas.webp",
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

