"use client";

import { useState } from "react";
import type { ReactNode, FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import type { QuoteFormData, QuoteFormErrors } from "@/types";
import { validateQuoteForm } from "@/lib/validation";
import { buildWhatsAppLink } from "@/lib/utils";
import { EQUIPMENT_OPTIONS, PROJECT_TYPES, STARLINK_OPTIONS } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/icons";

const initialData: QuoteFormData = {
  fullName: "",
  company: "",
  phone: "",
  email: "",
  country: "Argentina",
  province: "",
  city: "",
  projectType: "",
  message: "",
  hasStarlink: "",
  hasEquipment: "",
};

const inputClass =
  "block w-full rounded-lg border border-navy-200 bg-white px-3.5 py-2.5 text-sm text-navy-900 placeholder-slate-400 shadow-sm transition focus:border-electric-500 focus:outline-none focus:ring-2 focus:ring-electric-500/30";

function buildMessage(data: QuoteFormData): string {
  const lines = [
    "Hola, NODO Telecom. Quisiera solicitar un presupuesto.",
    "",
    `*Nombre y apellido:* ${data.fullName.trim()}`,
  ];
  if (data.company.trim()) {
    lines.push(`*Empresa:* ${data.company.trim()}`);
  }
  lines.push(`*Teléfono / WhatsApp:* ${data.phone.trim()}`);
  if (data.email.trim()) {
    lines.push(`*Correo electrónico:* ${data.email.trim()}`);
  }
  lines.push(`*País:* ${data.country.trim()}`);
  lines.push(`*Provincia / región:* ${data.province.trim()}`);
  lines.push(`*Ciudad / localidad:* ${data.city.trim()}`);
  lines.push(`*Tipo de proyecto:* ${data.projectType}`);
  lines.push(`*¿Ya cuenta con Starlink?:* ${data.hasStarlink}`);
  lines.push(`*¿Tiene equipo Starlink propio?:* ${data.hasEquipment}`);
  if (data.message.trim()) {
    lines.push("", `*Descripción de la necesidad:* ${data.message.trim()}`);
  }
  return lines.join("\n");
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-sm text-red-600">
      {message}
    </p>
  );
}

function Label({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-navy-800">
      {children}
      {required ? <span className="text-red-500"> *</span> : null}
    </label>
  );
}

export function QuoteForm() {
  const [data, setData] = useState<QuoteFormData>(initialData);
  const [errors, setErrors] = useState<QuoteFormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  function update(key: keyof QuoteFormData, value: string) {
    setData((prev) => ({ ...prev, [key]: value } as QuoteFormData));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateQuoteForm(data);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }
    const url = buildWhatsAppLink(buildMessage(data));
    setWhatsappUrl(url);
    setSubmitted(true);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="fullName" required>
            Nombre y apellido
          </Label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            value={data.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            placeholder="Ej.: Juan Pérez"
            className={inputClass}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
          />
          <FieldError id="fullName-error" message={errors.fullName} />
        </div>
        <div>
          <Label htmlFor="company">
            Empresa{" "}
            <span className="font-normal text-slate-500">(opcional)</span>
          </Label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            value={data.company}
            onChange={(e) => update("company", e.target.value)}
            placeholder="Nombre de tu empresa o proyecto"
            className={inputClass}
          />
        </div>
        <div>
          <Label htmlFor="phone" required>
            Teléfono / WhatsApp
          </Label>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="Con código de país, ej. +54 9 387 577-7543"
            className={inputClass}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          <FieldError id="phone-error" message={errors.phone} />
        </div>
        <div>
          <Label htmlFor="email">
            Correo electrónico{" "}
            <span className="font-normal text-slate-500">(opcional)</span>
          </Label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="tu@correo.com"
            className={inputClass}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          <FieldError id="email-error" message={errors.email} />
        </div>
        <div>
          <Label htmlFor="country" required>
            País
          </Label>
          <input
            id="country"
            type="text"
            autoComplete="country-name"
            value={data.country}
            onChange={(e) => update("country", e.target.value)}
            placeholder="Ej.: Argentina"
            className={inputClass}
            aria-invalid={!!errors.country}
            aria-describedby={errors.country ? "country-error" : undefined}
          />
          <FieldError id="country-error" message={errors.country} />
        </div>
        <div>
          <Label htmlFor="province" required>
            Provincia / región
          </Label>
          <input
            id="province"
            type="text"
            value={data.province}
            onChange={(e) => update("province", e.target.value)}
            placeholder="Ej.: Salta"
            className={inputClass}
            aria-invalid={!!errors.province}
            aria-describedby={errors.province ? "province-error" : undefined}
          />
          <FieldError id="province-error" message={errors.province} />
        </div>
        <div>
          <Label htmlFor="city" required>
            Ciudad / localidad
          </Label>
          <input
            id="city"
            type="text"
            value={data.city}
            onChange={(e) => update("city", e.target.value)}
            placeholder="Ej.: Salta Capital"
            className={inputClass}
            aria-invalid={!!errors.city}
            aria-describedby={errors.city ? "city-error" : undefined}
          />
          <FieldError id="city-error" message={errors.city} />
        </div>
        <div>
          <Label htmlFor="projectType" required>
            Tipo de proyecto
          </Label>
          <select
            id="projectType"
            value={data.projectType}
            onChange={(e) => update("projectType", e.target.value)}
            className={inputClass}
            aria-invalid={!!errors.projectType}
            aria-describedby={
              errors.projectType ? "projectType-error" : undefined
            }
          >
            <option value="">Seleccioná una opción</option>
            {PROJECT_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          <FieldError id="projectType-error" message={errors.projectType} />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="message">Descripción de la necesidad</Label>
          <textarea
            id="message"
            rows={4}
            value={data.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder="Contanos qué necesitás, en qué lugar y cualquier detalle útil."
            className={inputClass}
          />
        </div>
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-navy-800">
          ¿Ya cuenta con Starlink? <span className="text-red-500">*</span>
        </legend>
        <div className="mt-2 flex flex-wrap gap-3">
          {STARLINK_OPTIONS.map((option) => (
            <label
              key={option.value}
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-navy-200 px-3.5 py-2 text-sm transition has-[:checked]:border-electric-500 has-[:checked]:bg-electric-50"
            >
              <input
                type="radio"
                name="hasStarlink"
                value={option.value}
                checked={data.hasStarlink === option.value}
                onChange={(e) => update("hasStarlink", e.target.value)}
                className="accent-electric-600"
              />
              {option.label}
            </label>
          ))}
        </div>
        <FieldError id="hasStarlink-error" message={errors.hasStarlink} />
      </fieldset>

      <fieldset>
        <legend className="text-sm font-medium text-navy-800">
          ¿Tiene equipo Starlink propio? <span className="text-red-500">*</span>
        </legend>
        <div className="mt-2 flex flex-wrap gap-3">
          {EQUIPMENT_OPTIONS.map((option) => (
            <label
              key={option.value}
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-navy-200 px-3.5 py-2 text-sm transition has-[:checked]:border-electric-500 has-[:checked]:bg-electric-50"
            >
              <input
                type="radio"
                name="hasEquipment"
                value={option.value}
                checked={data.hasEquipment === option.value}
                onChange={(e) => update("hasEquipment", e.target.value)}
                className="accent-electric-600"
              />
              {option.label}
            </label>
          ))}
        </div>
        <FieldError id="hasEquipment-error" message={errors.hasEquipment} />
      </fieldset>

      <div className="rounded-lg border border-dashed border-navy-200 bg-slate-50 p-4 text-sm text-slate-600">
        <p className="font-medium text-navy-800">Fotografías del lugar</p>
        <p className="mt-1">
          La carga de fotos estará disponible próximamente. Por ahora, podés
          enviarlas por WhatsApp después de iniciar la conversación.
        </p>
      </div>

      {submitted ? (
        <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800">
          <p className="flex items-start gap-2 font-medium">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />
            Tu solicitud está lista para enviarse por WhatsApp.
          </p>
          <p className="mt-1">
            Se abrió WhatsApp con tu mensaje precompletado. Si no se abrió
            automáticamente, tocá el botón de abajo.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Abrir WhatsApp
          </a>
        </div>
      ) : null}

      <div>
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          <WhatsAppIcon className="h-5 w-5" />
          Enviar por WhatsApp
        </Button>
        <p className="mt-3 text-xs text-slate-500">
          Al enviar, se abrirá WhatsApp con tu consulta precompletada. En esta
          versión no se guarda información en una base de datos.
        </p>
      </div>

    </form>
  );
}

