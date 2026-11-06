"use client";

import { useState } from "react";
import type { ReactNode, FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import type { QuoteFormData, QuoteFormErrors } from "@/types";
import { validateQuoteForm } from "@/lib/validation";
import { buildWhatsAppLink } from "@/lib/utils";
import {
  CLIENT_TYPES,
  EQUIPMENT_OPTIONS,
  LOCALITIES,
  SERVICE_OPTIONS,
  STARLINK_OPTIONS,
} from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/icons";

const initialData: QuoteFormData = {
  fullName: "",
  phone: "",
  email: "",
  locality: "",
  zone: "",
  clientType: "",
  service: "",
  message: "",
  hasStarlink: "",
  hasEquipment: "",
};

const inputClass =
  "block w-full rounded-lg border border-navy-200 bg-white px-3.5 py-2.5 text-sm text-navy-900 placeholder-slate-400 shadow-sm transition focus:border-electric-500 focus:outline-none focus:ring-2 focus:ring-electric-500/30";

function clientLabel(value: string): string {
  return CLIENT_TYPES.find((c) => c.value === value)?.label ?? value;
}

function buildMessage(data: QuoteFormData): string {
  const lines = [
    "Hola, NODO Telecom. Quisiera solicitar un presupuesto.",
    "",
    `*Nombre y apellido:* ${data.fullName.trim()}`,
    `*Teléfono / WhatsApp:* ${data.phone.trim()}`,
  ];
  if (data.email.trim()) {
    lines.push(`*Correo electrónico:* ${data.email.trim()}`);
  }
  lines.push(`*Localidad:* ${data.locality}`);
  if (data.zone.trim()) {
    lines.push(`*Barrio / zona:* ${data.zone.trim()}`);
  }
  lines.push(`*Tipo de cliente:* ${clientLabel(data.clientType)}`);
  lines.push(`*Servicio solicitado:* ${data.service}`);
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
            placeholder="Ej.: 387 4xx-xxxx"
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
          <Label htmlFor="locality" required>
            Localidad
          </Label>
          <select
            id="locality"
            value={data.locality}
            onChange={(e) => update("locality", e.target.value)}
            className={inputClass}
            aria-invalid={!!errors.locality}
            aria-describedby={errors.locality ? "locality-error" : undefined}
          >
            <option value="">Seleccioná una localidad</option>
            {LOCALITIES.map((locality) => (
              <option key={locality} value={locality}>
                {locality}
              </option>
            ))}
          </select>
          <FieldError id="locality-error" message={errors.locality} />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="zone">Barrio o zona</Label>
          <input
            id="zone"
            type="text"
            value={data.zone}
            onChange={(e) => update("zone", e.target.value)}
            placeholder="Ej.: centro, barrio, paraje o referencia"
            className={inputClass}
          />
        </div>

                <div>
          <Label htmlFor="clientType" required>
            Tipo de cliente
          </Label>
          <select
            id="clientType"
            value={data.clientType}
            onChange={(e) => update("clientType", e.target.value)}
            className={inputClass}
            aria-invalid={!!errors.clientType}
            aria-describedby={
              errors.clientType ? "clientType-error" : undefined
            }
          >
            <option value="">Seleccioná una opción</option>
            {CLIENT_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          <FieldError id="clientType-error" message={errors.clientType} />
        </div>
        <div>
          <Label htmlFor="service" required>
            Servicio solicitado
          </Label>
          <select
            id="service"
            value={data.service}
            onChange={(e) => update("service", e.target.value)}
            className={inputClass}
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="">Seleccioná un servicio</option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <FieldError id="service-error" message={errors.service} />
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

