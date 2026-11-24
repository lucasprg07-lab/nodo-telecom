import { VISIT_PRICE } from "@/config/site";

export interface FaqItem {
  question: string;
  answer: string;
  id?: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "¿Qué incluye la instalación?",
    answer:
      "Para hogares: equipo, montaje y configuración. Si la distancia entre la antena y el router es mayor a la del kit, se analiza en el sitio antes de presupuestar.",
  },
  {
    question: "¿Cuánto tarda?",
    answer:
      "Instalaciones de hogar: en muchos casos el mismo día, según disponibilidad. Comercial, industria y minería: se hace un proyecto, se cotiza y se ejecuta con aprobación del cliente.",
  },
  {
    question: "¿Quién provee el equipo?",
    answer:
      "En esta etapa, el cliente de hogar puede comprar su equipo Starlink y NODO lo instala. Para pymes, industria y minería, NODO lo provee o lo gestiona.",
  },
  {
    question: "¿Qué necesita el lugar?",
    answer:
      "Vista despejada del cielo, sin árboles ni estructuras que obstruyan, en un lugar alto (techo). El campo de visión necesario depende del modelo; lo medimos en el sitio con la app de Starlink.",
  },
  {
    question: "¿Y si hay un problema después?",
    answer: `Promoción de lanzamiento: soporte remoto gratis durante 3 meses para clientes nuevos. Las visitas técnicas tienen costo (desde ${VISIT_PRICE} en Salta Capital y zonas cercanas: Cerrillos, Valle de Lerma, Vaqueros, La Caldera). Fuera de esa zona se acuerda el valor antes de ir.`,
  },
  {
    question: "¿Cómo se paga?",
    answer:
      "Transferencia, QR y tarjetas por Mercado Pago. Pago en cuotas solo con tarjeta. En efectivo, el 50% se abona antes para cubrir los equipos y el resto es mano de obra. Para clientes del exterior, también aceptamos stablecoins (USDC/USDT). Las instrucciones de pago se envían con la propuesta.",
  },
  {
    question: "¿Trabajan fuera de Salta?",
    answer:
      "Sí. Viajamos físicamente: se cotiza el proyecto completo y se ejecuta con aprobación del cliente. Para clientes de otros países, el equipo y el plan de Starlink se contratan en el país del cliente y a su nombre, según la disponibilidad y las condiciones de cada país; NODO coordina el proyecto y la instalación.",
  },
  {
    question: "¿Qué diferencia hay con contratar Starlink directamente?",
    answer:
      "Starlink es el proveedor del servicio y de los equipos. NODO diseña e instala la solución a medida, con más de 5 años de experiencia profesional en telecomunicaciones. NODO Telecom es una empresa independiente: no es distribuidor oficial, representante autorizado ni instalador oficial de Starlink, y no es proveedor de internet. El servicio lo presta y factura Starlink directamente al cliente.",
  },
  {
    question: "¿Qué es el servicio itinerante?",
    answer:
      "Es el servicio móvil de Starlink para vehículos, flotas y embarcaciones, para tener conectividad en movimiento en zonas remotas.",
  },
  {
    question: "¿Plan con límite de datos o ilimitado?",
    answer:
      "El servicio residencial (antena fija en un domicilio) no tiene límite de datos. El itinerante se contrata por cantidad de datos y se puede ampliar. Starlink factura el servicio directamente; NODO ayuda con la gestión y no es intermediario. Para uso empresarial o en varios países se evalúa el plan más adecuado.",
  },
  {
    question: "¿Se puede instalar en camiones, autos, barcos y yates?",
    answer:
      "Sí, en vehículos de todo tipo y embarcaciones. En vehículos se instala en el techo, nunca en el parabrisas. El uso fuera del país depende de las condiciones vigentes de Starlink; lo evaluamos según tu caso.",
  },
  {
    question: "¿Emiten factura?",
    answer: "Sí, facturas A y C.",
  },
  {
    question: "¿Qué es la alta capacidad satelital?",
    answer:
      "Es una solución que combina varios terminales Starlink en una sola conexión para sumar capacidad y tener redundancia. Se diseña a medida de cada operación y se cotiza como proyecto.",
  },
  {
    id: "pago-cripto",
    question: "¿Cómo pago en USDC o USDT?",
    answer:
      "Para clientes del exterior aceptamos stablecoins (USDC y USDT). El proceso es así: 1) Te enviamos la propuesta con el monto final en USD. 2) Elegís la stablecoin y la red de pago. 3) Recibís las instrucciones de pago y confirmás. 4) Verificamos la transacción y coordinamos el servicio. Importante: confirmá siempre la red y la dirección con nosotros por un canal oficial antes de enviar fondos; una transferencia en la red equivocada puede perderse.",
  },
];