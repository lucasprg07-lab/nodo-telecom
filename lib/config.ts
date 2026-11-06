export const siteConfig = {
  name: "NODO Telecom",
  slogan: "Conectamos lo que importa.",
  descriptor: "Conectividad · Redes · Infraestructura tecnológica",
  location: "Salta, Argentina",

  // URL pública del sitio. Se resuelve desde variables de entorno.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nodotele.com",
  domain: "https://nodotele.com",

  // ---------------------------------------------------------------
  // Datos de contacto — PLACEHOLDERS: reemplazar por los datos reales.
  // ---------------------------------------------------------------
  // Formato internacional sin "+", espacios ni guiones (ej. 549387XXXXXXX).
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5493875777543",
  whatsappDisplay: "+54 9 387 577-7543",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",

  // Mensaje inicial predefinido para los botones de WhatsApp.
  whatsappDefaultMessage:
    "Hola, NODO Telecom. Quisiera solicitar más información sobre sus servicios.",

  // ---------------------------------------------------------------
  // Redes sociales — vacías por defecto. Solo se muestran si están configuradas.
  // ---------------------------------------------------------------
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },

  nav: [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Soluciones", href: "/soluciones" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Contacto", href: "/contacto" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
