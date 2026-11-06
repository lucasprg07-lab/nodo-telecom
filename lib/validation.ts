import type { QuoteFormData, QuoteFormErrors } from "@/types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Valida los datos del formulario de presupuesto.
 * Devuelve un objeto con los mensajes de error por campo (vacío si es válido).
 */
export function validateQuoteForm(data: QuoteFormData): QuoteFormErrors {
  const errors: QuoteFormErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Ingresá tu nombre y apellido.";
  } else if (data.fullName.trim().length < 3) {
    errors.fullName = "El nombre debe tener al menos 3 caracteres.";
  }

  const phoneDigits = data.phone.replace(/\D/g, "");
  if (!data.phone.trim()) {
    errors.phone = "Ingresá tu teléfono o WhatsApp.";
  } else if (phoneDigits.length < 8 || phoneDigits.length > 15) {
    errors.phone = "Ingresá un número de teléfono válido (con código de país).";
  }

  if (data.email.trim() && !EMAIL_REGEX.test(data.email.trim())) {
    errors.email = "Ingresá un correo electrónico válido.";
  }

  if (!data.country.trim()) errors.country = "Ingresá el país.";
  if (!data.province.trim()) errors.province = "Ingresá la provincia o región.";
  if (!data.city.trim()) errors.city = "Ingresá la ciudad o localidad.";
  if (!data.projectType) errors.projectType = "Seleccioná el tipo de proyecto.";
  if (!data.hasStarlink) errors.hasStarlink = "Indicá si ya contás con Starlink.";
  if (!data.hasEquipment)
    errors.hasEquipment = "Indicá si tenés equipo Starlink propio.";

  return errors;
}

