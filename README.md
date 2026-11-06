# NODO Telecom — Sitio web corporativo

Sitio web corporativo de **NODO Telecom** (Salta, Argentina): soluciones de
conectividad, redes e infraestructura tecnológica para hogares, comercios,
establecimientos rurales y clientes empresariales.

**Eslogan:** Conectamos lo que importa.

## Stack tecnológico

- **Next.js 15** (App Router) + **React 19** + **TypeScript**.
- **Tailwind CSS 3.4** para estilos (identidad visual propia).
- **Lucide React** para iconografía.
- Arquitectura modular y preparada para escalar (backend futuro con
  Supabase/PostgreSQL, pagos, etc.).

## Cómo ejecutar localmente

Requisitos: Node.js 18.18+ (probado con Node 26) y npm.

```bash
# 1. Instalar dependencias
npm install

# 2. (Opcional) Configurar variables de entorno
cp .env.example .env.local

# 3. Iniciar el servidor de desarrollo
npm run dev
```

Abrí http://localhost:3000.

Otros comandos:

```bash
npm run build   # build de producción (incluye TypeScript + ESLint)
npm run start   # servir el build de producción
npm run lint    # ejecutar ESLint
```

## Estructura de carpetas

```
app/                  # Rutas (App Router) + metadata, sitemap, robots, icon
  layout.tsx          # Layout raíz (fuente, Navbar, Footer, WhatsAppButton)
  page.tsx            # Home
  servicios/          # Página de servicios
  soluciones/         # Soluciones por tipo de cliente
  nosotros/           # Quiénes somos
  contacto/           # Contacto
  presupuesto/        # Formulario de solicitud de presupuesto
components/
  layout/             # Navbar, Footer, WhatsAppButton
  home/               # Hero, Benefits, ServicesPreview, Differentiator, CallToAction
  services/           # ServiceCard, ServiceDetail
  forms/              # QuoteForm (formulario de presupuesto)
  ui/                 # Button, Container, SectionHeading, Logo, icons
lib/
  config.ts           # Configuración central (contacto, navegación, redes)
  data.ts             # Contenido: servicios, beneficios, soluciones, opciones
  utils.ts            # Helpers (cn, enlace de WhatsApp)
  validation.ts       # Validación del formulario
types/
  index.ts            # Tipos compartidos
```

## Configuración pendiente (reemplazar por datos reales)

Todos los datos de contacto y redes son **placeholders configurables** en
`lib/config.ts` (con soporte de variables de entorno). Antes de publicar,
completá:

1. **WhatsApp** — `NEXT_PUBLIC_WHATSAPP_NUMBER` (formato internacional sin
   `+`, espacios ni guiones, ej. `549387XXXXXXX`). También actualizá
   `whatsappDisplay` en `lib/config.ts`.
2. **Correo** — `NEXT_PUBLIC_CONTACT_EMAIL`.
3. **Redes sociales** — `siteConfig.social` en `lib/config.ts` (se muestran
   solo si tienen valor).
4. **Dominio / URL** — `NEXT_PUBLIC_SITE_URL` (para SEO y Open Graph).
5. **Imágenes reales** — actualmente se usan ilustraciones SVG propias (sin
   fotos de stock genéricas). Podés agregar fotografías en `public/images/`
   cuando estén disponibles.
6. **Aviso de privacidad** — actualmente es un texto; conviene crear una
   página `/privacidad` con el texto legal definitivo.

## Notas sobre el modelo comercial

- **NODO Telecom no es un proveedor de internet ni revendedor de planes
  Starlink.** El cliente mantiene su propia suscripción; NODO Telecom cobra
  por el trabajo técnico (relevamiento, instalación, configuración,
  integración y soporte). La web comunica esto de forma explícita.
- La contratación inicial se realiza mediante solicitud de presupuesto y
  coordinación directa.

## Formulario de presupuesto

- Valida los campos y muestra mensajes de error/success claros.
- Al enviar, abre **WhatsApp** con un mensaje precompletado (no simula guardar
  en una base de datos). El número sale de la configuración.
- La estructura está preparada para conectar un backend futuro (Supabase) y
  para adjuntar fotografías en una etapa posterior.

## Decisiones técnicas

- **App Router + Server Components por defecto.** Solo `Navbar` y `QuoteForm`
  usan `"use client"` (estado local), minimizando el JavaScript en el cliente.
- **Identidad visual con CSS/SVG** (paleta azul petróleo + cian eléctrico),
  sin gradientes excesivos ni animaciones pesadas, para mantener rendimiento y
  una imagen corporativa profesional.
- **Ilustraciones SVG propias** en lugar de imágenes de stock, evitando fotos
  que no representen los servicios reales.
- **SEO:** metadata por página, Open Graph, `sitemap.xml` y `robots.txt`
  autogenerados, estructura semántica y diseño responsive.
- **Pagos (arquitectura futura):** no se implementa ningún checkout ni custodia
  de fondos en esta versión. La estructura modular permite integrar después
  pagos tradicionales y stablecoins (USDC/USDT) con validación en backend,
  verificación de webhooks y controles de seguridad.

## Notas de entorno

- Este entorno usa Windows/PowerShell con la política de ejecución que bloquea
  `npm.ps1`; usá `npm.cmd` si `npm` no responde.
- `git` no estaba disponible en el PATH al momento de crear el proyecto;
  inicializá el repositorio (`git init`) y conectá GitHub cuando esté instalado.
