import { siteConfig } from "@/lib/config";

/**
 * Une clases CSS condicionalmente, ignorando valores vacíos o nulos.
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Construye un enlace de WhatsApp (https://wa.me) con un mensaje precompletado.
 * El número se normaliza eliminando caracteres no numéricos.
 */
export function buildWhatsAppLink(message: string, phoneNumber?: string): string {
  const number = (phoneNumber ?? siteConfig.whatsappNumber).replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
