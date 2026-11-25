# NODO Telecom — Plan de rediseño visual por fases

> Este plan está escrito para que lo ejecute un modelo económico (DeepSeek) sin tomar decisiones de diseño. Todo el código está dado. El modelo solo debe aplicarlo, adaptarlo a los nombres reales de archivos y verificar que compile.

## REGLAS PARA EL MODELO QUE EJECUTA (leer primero)

1. ANTES de la primera fase (una sola vez):
   - Hacé un commit con el estado actual, mensaje "Respaldo antes del rediseño visual".
   - Creá una rama llamada `rediseno-visual` y trabajá solo en ella.
   - No hagas push ni merge a main. Eso lo hace el dueño a mano.
2. Ejecutá UNA fase por vez, la que te pida el dueño. No adelantes fases.
3. No leas imágenes, `package-lock.json` ni `node_modules`. Leé solo los archivos que nombra cada fase.
4. No cambies textos ni mensajes del sitio, salvo los que la fase indique. No agregues librerías nuevas (`lucide-react` queda en ^0.469.0).
5. Al terminar cada fase: corré `npm run build`; si hay errores, arreglalos; hacé commit con el mensaje indicado; mostrá un resumen de 5 líneas máximo y DETENETE esperando el OK del dueño.
6. Si algo no se puede aplicar tal cual (por nombres distintos, tipos, etc.), adaptalo con el mínimo cambio y avisalo en el resumen. No improvises rediseños.
7. Siempre respetá `prefers-reduced-motion`, el contraste y el foco visible.

## DIRECCIÓN DE DISEÑO (resumen)

- Mantener la identidad actual: fondo `#070d17`, cian `#22d3ee`, violeta `#8b5cf6`, tipografías Space Grotesk (títulos), Inter (texto), JetBrains Mono (datos).
- Más aire y ritmo: secciones con fondos alternados muy sutiles, tarjetas con bordes luminosos al pasar el cursor, títulos balanceados.
- Movimiento: todo aparece con un fade + desplazamiento suave, **al bajar y también al subir**; los diagramas muestran flujo de datos; nada pesado (solo `transform` y `opacity`).
- Celular primero: barra inferior fija con WhatsApp y presupuesto, encabezado que se compacta.

---

## FASE 0 — Verificación (no cambia nada)

1. Corré `npm run build`. Debe pasar sin errores.
2. Confirmá que existen: `app/privacidad/page.tsx`, la meta description nueva en `app/layout.tsx` y que `CasosExperiencia.tsx` dice "Más de 5 años" (sin "+" duplicado).
3. Informá el resultado en 3 líneas. Si algo falta, avisá al dueño antes de seguir.

Commit: ninguno.

---

## FASE 1 — Sistema de diseño base

Archivos: `app/globals.css`, `components/ui/Button.tsx`, `components/ui/SectionHeading.tsx`, `components/home/AltaCapacidad.tsx`, `components/home/FlotasEmbarcaciones.tsx`, `next.config.ts`.

### 1.1 `app/globals.css` — agregar al final (sin borrar lo existente)

```css
/* ===== Tokens de diseño ===== */
:root {
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --radius-card: 16px;
}

/* Títulos balanceados y anclas con margen para el menú fijo */
h1,
h2,
h3 {
  text-wrap: balance;
}
[id] {
  scroll-margin-top: 6rem;
}

/* Foco visible coherente */
:focus-visible {
  outline: 2px solid var(--cyan);
  outline-offset: 3px;
}

/* Fondo de sección con resplandor sutil (usar en secciones destacadas) */
.section-glow {
  position: relative;
  isolation: isolate;
}
.section-glow::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    radial-gradient(700px circle at 15% 0%, rgba(139, 92, 246, 0.1), transparent 60%),
    radial-gradient(700px circle at 85% 100%, rgba(34, 211, 238, 0.08), transparent 60%);
  pointer-events: none;
}

/* Tarjeta con borde luminoso al pasar el cursor (mejora de .card) */
.card {
  transition:
    transform 0.35s var(--ease-out),
    border-color 0.35s var(--ease-out),
    box-shadow 0.35s var(--ease-out),
    background-color 0.35s var(--ease-out);
}
.card:hover {
  background-color: rgba(255, 255, 255, 0.06);
}

/* Línea decorativa para títulos de sección */
.eyebrow-line {
  display: inline-block;
  width: 28px;
  height: 2px;
  margin-right: 10px;
  vertical-align: middle;
  background: var(--grad);
  border-radius: 2px;
}
```

### 1.2 `components/ui/Button.tsx`

- En `baseStyles` agregá `active:scale-[0.98]` y cambiá `transition-colors duration-150` por `transition-all duration-200`.
- En `variantStyles.primary` reemplazá por: `"bg-gradient-to-r from-cyan-400 to-electric-500 text-navy-950 shadow-lg shadow-electric-500/20 hover:from-cyan-300 hover:to-electric-400 hover:shadow-electric-500/40"`.
- En `variantStyles.ghost` reemplazá por: `"text-cyan-300 hover:bg-white/5"` (el actual usa colores pensados para fondo claro).

### 1.3 `components/ui/SectionHeading.tsx`

- Dentro del `<p>` del eyebrow, antes del texto, agregá `<span className="eyebrow-line" aria-hidden="true" />`. Si `align="center"`, ocultá la línea con `className="eyebrow-line hidden"`, y mostrala solo cuando `align="left"`.
- Al `<h2>` agregale `text-balance`.

### 1.4 Unificar el contenedor de secciones

- En `AltaCapacidad.tsx` y `FlotasEmbarcaciones.tsx` el `<section>` usa `mx-auto max-w-6xl px-6 py-24`. Cambialo a `className="section-glow py-16 sm:py-24"` (conservando el `id` y `scroll-mt`) y envolvé el contenido en `<Container>` (`components/ui/Container.tsx`). Así el espaciado coincide con el resto de la web.

### 1.5 `next.config.ts` (reemplazar el contenido)

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 828, 1080, 1280, 1600, 1920],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
```

Commit: `feat(ui): sistema de diseño base y botones`

---

## FASE 2 — Sistema de movimiento (aparece al bajar Y al subir)

Archivos nuevos: `components/ui/useInView.ts`. Archivos a reemplazar: `components/ui/Reveal.tsx`, `components/ui/Diagram.tsx`. Archivos a editar: `components/ui/CountUp.tsx`, `app/globals.css`.

### 2.1 Crear `components/ui/useInView.ts`

```ts
"use client";

import { useEffect, useRef } from "react";
import type { RefObject } from "react";

type Handler = (inView: boolean) => void;

// Un único IntersectionObserver compartido por todos los elementos.
const handlers = new WeakMap<Element, Handler>();
let observer: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          handlers.get(entry.target)?.(entry.isIntersecting);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
  }
  return observer;
}

export function useInView(ref: RefObject<Element | null>, onChange: Handler) {
  const latest = useRef(onChange);

  useEffect(() => {
    latest.current = onChange;
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = getObserver();
    handlers.set(el, (inView) => latest.current(inView));
    io.observe(el);
    return () => {
      io.unobserve(el);
      handlers.delete(el);
    };
  }, [ref]);
}
```

### 2.2 Reemplazar `components/ui/Reveal.tsx` (mantiene la misma API: `children`, `className`, `delay`)

```tsx
"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/components/ui/useInView";

type From = "up" | "down" | "left" | "right" | "scale";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Retraso en ms (para escalonar tarjetas). */
  delay?: number;
  /** Dirección de entrada. */
  from?: From;
  /** Si es true, anima solo la primera vez (usar en bloques muy altos). */
  once?: boolean;
}

function reducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Revela el contenido con fade + desplazamiento al entrar en pantalla.
 * Vuelve a animar cuando el bloque reaparece (al subir y al bajar).
 * Sin JavaScript, o con movimiento reducido, el contenido se ve siempre.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  from = "up",
  once = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.dataset.js = "1";
    if (reducedMotion()) el.dataset.in = "1";
  }, []);

  useInView(ref, (inView) => {
    const el = ref.current;
    if (!el) return;
    if (inView || reducedMotion()) {
      el.dataset.in = "1";
    } else if (!once) {
      el.dataset.in = "0";
    }
  });

  return (
    <div
      ref={ref}
      data-from={from}
      className={cn("reveal", className)}
      style={
        delay
          ? ({ ["--reveal-delay" as string]: `${delay}ms` } as CSSProperties)
          : undefined
      }
    >
      {children}
    </div>
  );
}
```

### 2.3 Reemplazar `components/ui/Diagram.tsx`

```tsx
"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/components/ui/useInView";

/** Envuelve un SVG animado. Reinicia la animación cada vez que reaparece en pantalla. */
export function Diagram({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.dataset.js = "1";
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.dataset.visible = "true";
    }
  }, []);

  useInView(ref, (inView) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.dataset.visible = "true";
      return;
    }
    el.dataset.visible = String(inView);
  });

  return (
    <div ref={ref} className={cn("diagram-wrap", className)}>
      {children}
    </div>
  );
}
```

### 2.4 `components/ui/CountUp.tsx` (cambios mínimos)

- Cambiar `useState(0)` por `useState(to)` para que el HTML inicial traiga el valor final.
- Dentro del `useEffect`: si hay movimiento reducido, hacé solo `return;` (ya muestra el valor final). Si no, hacé `setValue(0);` justo antes de crear el `IntersectionObserver`.

### 2.5 `app/globals.css`

**Borrá** el bloque final antiguo "Diagramas SVG: las líneas se encienden en secuencia al hacer scroll" (las reglas `.diagram .seg` y `[data-visible="true"] .diagram .seg`) y **agregá**:

```css
/* ===== Revelado al hacer scroll (bidireccional) ===== */
.reveal {
  transition:
    opacity 0.7s var(--ease-out),
    transform 0.7s var(--ease-out);
  transition-delay: var(--reveal-delay, 0ms);
}
.reveal[data-js="1"]:not([data-in="1"]) {
  opacity: 0;
  transition-delay: 0ms;
}
.reveal[data-js="1"]:not([data-in="1"])[data-from="up"] {
  transform: translateY(28px);
}
.reveal[data-js="1"]:not([data-in="1"])[data-from="down"] {
  transform: translateY(-28px);
}
.reveal[data-js="1"]:not([data-in="1"])[data-from="left"] {
  transform: translateX(-32px);
}
.reveal[data-js="1"]:not([data-in="1"])[data-from="right"] {
  transform: translateX(32px);
}
.reveal[data-js="1"]:not([data-in="1"])[data-from="scale"] {
  transform: scale(0.96);
}
@media (prefers-reduced-motion: reduce) {
  .reveal {
    transition: none;
    opacity: 1 !important;
    transform: none !important;
  }
}

/* ===== Diagramas SVG animados ===== */
.diagram .seg {
  opacity: 1;
  transition: opacity 0.7s ease;
  transition-delay: var(--d, 0s);
}
.diagram-wrap[data-js="1"]:not([data-visible="true"]) .seg {
  opacity: 0.15;
  transition-delay: 0s;
}
.diagram .flow {
  stroke-dasharray: 5 9;
  opacity: 0;
}
.diagram-wrap[data-visible="true"] .flow {
  opacity: 1;
  animation: flow 1.1s linear infinite;
}
@keyframes flow {
  to {
    stroke-dashoffset: -28;
  }
}
.diagram .node-pulse {
  transform-box: fill-box;
  transform-origin: center;
}
.diagram-wrap[data-visible="true"] .node-pulse {
  animation: node-pulse 2.4s ease-in-out infinite;
}
@keyframes node-pulse {
  50% {
    transform: scale(1.3);
    opacity: 0.6;
  }
}
@media (prefers-reduced-motion: reduce) {
  .diagram .flow,
  .diagram .node-pulse {
    animation: none !important;
  }
}
```

Nota: los dos diagramas SVG actuales (en `AltaCapacidad.tsx` y `CasosExperiencia.tsx`) usan la clase `.seg` con `style={{ transitionDelay }}`: seguirán funcionando hasta que la Fase 6 los reemplace. Si alguno deja de verse bien, revisá que `Diagram` envuelva al SVG.

Commit: `feat(motion): revelado bidireccional, diagramas reiniciables y contador sin parpadeo`

---

## FASE 3 — Redes sociales y contacto

Archivos: `config/site.ts`, `lib/config.ts`, `components/ui/SocialLinks.tsx` (nuevo), `components/home/CallToAction.tsx`, `app/contacto/page.tsx`, `app/layout.tsx`, `components/layout/Footer.tsx`.

### 3.1 `config/site.ts` — agregar al final

```ts
// Redes sociales de NODO Telecom. Si una está vacía, su ícono no se muestra.
export const INSTAGRAM_URL = "https://www.instagram.com/nodotele.comsla";
export const FACEBOOK_URL =
  "https://www.facebook.com/profile.php?id=61596768836791";
```

### 3.2 `lib/config.ts`

- Agregá `INSTAGRAM_URL` y `FACEBOOK_URL` al `import` desde `@/config/site`.
- En `social:` poné `facebook: FACEBOOK_URL,` e `instagram: INSTAGRAM_URL,` (dejá `linkedin: ""`).

### 3.3 Crear `components/ui/SocialLinks.tsx`

```tsx
import { Facebook, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

const items = [
  {
    key: "instagram",
    label: "Instagram de NODO Telecom",
    Icon: Instagram,
    href: siteConfig.social.instagram,
  },
  {
    key: "facebook",
    label: "Facebook de NODO Telecom",
    Icon: Facebook,
    href: siteConfig.social.facebook,
  },
];

/** Íconos de redes sociales. Solo muestra las que tienen URL configurada. */
export function SocialLinks({ className }: { className?: string }) {
  const visibles = items.filter((item) => item.href);
  if (visibles.length === 0) return null;

  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {visibles.map(({ key, label, Icon, href }) => (
        <li key={key}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:text-cyan-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.25)]"
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
```

### 3.4 Usarlo

- `CallToAction.tsx`: debajo del `<div>` de botones agregá `<p className="mt-8 text-sm text-slate-400">Seguinos en redes</p>` y `<SocialLinks className="mt-3 justify-center" />`.
- `app/contacto/page.tsx`: en la columna de tarjetas de contacto (después de la tarjeta de email, o de WhatsApp si no hay email) agregá un bloque con el mismo estilo de tarjeta: título "Seguinos en redes" y `<SocialLinks className="mt-3" />`. Mostralo solo si hay alguna URL (`siteConfig.social.instagram || siteConfig.social.facebook`).
- `Footer.tsx`: verificá que ya muestre los íconos (hoy usa `socialItems`) y que **filtre los que no tienen URL**. Si el estilo no coincide con `SocialLinks`, reemplazá ese bloque por `<SocialLinks />`.

### 3.5 `app/layout.tsx` — JSON-LD

Dentro del objeto `"@type": "LocalBusiness"` agregá:

```ts
sameAs: [siteConfig.social.instagram, siteConfig.social.facebook].filter(Boolean),
```

Commit: `feat(contacto): enlaces a Instagram y Facebook`

---

## FASE 4 — Navegación y celular

Archivos: `components/layout/Navbar.tsx`, `components/layout/MobileCtaBar.tsx` (nuevo), `components/layout/WhatsAppButton.tsx`, `app/layout.tsx`, `app/globals.css`.

### 4.1 `Navbar.tsx`

- Importá `useEffect` junto a `useState`.
- Agregá el estado `scrolled` y el listener:

```tsx
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}, []);
```

- En el `<header>` reemplazá las clases de fondo por:
  `className={cn("sticky top-0 z-50 border-b border-white/10 backdrop-blur-md transition-all duration-300", scrolled ? "bg-[#070d17]/90 shadow-[0_8px_30px_rgba(0,0,0,0.35)]" : "bg-[#070d17]/60")}` (importá `cn` desde `@/lib/utils`).
- En el `<nav>` reemplazá `h-16` por `${scrolled ? "h-14" : "h-16"}` con `transition-all duration-300`.
- Antes de cerrar el `<header>` agregá `<div className="scroll-progress" aria-hidden="true" />`.
- Dejá un espacio libre dentro del `<nav>`, entre los enlaces y el botón de presupuesto, con el comentario `{/* Espacio reservado para el selector de idioma ES/EN (futuro) */}`. No implementes el selector.

### 4.2 `app/globals.css` — agregar

```css
/* Barra de progreso de lectura (solo navegadores con animation-timeline) */
.scroll-progress {
  position: absolute;
  left: 0;
  bottom: -1px;
  height: 2px;
  width: 100%;
  transform-origin: 0 50%;
  transform: scaleX(0);
  background: var(--grad);
}
@supports (animation-timeline: scroll()) {
  .scroll-progress {
    animation: scroll-progress linear both;
    animation-timeline: scroll(root);
  }
  @keyframes scroll-progress {
    to {
      transform: scaleX(1);
    }
  }
}
```

### 4.3 Crear `components/layout/MobileCtaBar.tsx`

```tsx
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { buildWhatsAppLink } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/ui/icons";

/** Barra inferior fija solo en celular: WhatsApp y presupuesto. */
export function MobileCtaBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#070d17]/90 px-4 pt-3 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-md gap-3">
        <a
          href={buildWhatsAppLink(siteConfig.whatsappDefaultMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition active:scale-[0.98]"
        >
          <WhatsAppIcon className="h-5 w-5" />
          WhatsApp
        </a>
        <Link
          href="/presupuesto"
          className="inline-flex flex-1 items-center justify-center rounded-lg bg-gradient-to-r from-cyan-400 to-electric-500 px-4 py-3 text-sm font-semibold text-navy-950 transition active:scale-[0.98]"
        >
          Pedir presupuesto
        </Link>
      </div>
    </div>
  );
}
```

### 4.4 `WhatsAppButton.tsx` y `app/layout.tsx`

- En `WhatsAppButton.tsx` cambiá `inline-flex` por `hidden lg:inline-flex` en las clases (el botón flotante queda solo en pantallas grandes).
- En `app/layout.tsx` importá `MobileCtaBar` y agregalo después de `<WhatsAppButton />`. Después de `<Footer />` agregá `<div className="h-20 lg:hidden" aria-hidden="true" />` para que la barra no tape el final de la página.

Commit: `feat(nav): encabezado compacto, progreso y barra inferior móvil`

---

## FASE 5 — Hero

Archivos: `components/home/Hero.tsx`, `app/globals.css`.

### 5.1 `Hero.tsx`

- En el `<h1>` agregá la clase `text-balance`.
- Justo después de `<div className="hero-bg" aria-hidden="true" />` agregá este SVG (órbita con un satélite que recorre el arco):

```tsx
<svg
  className="hero-orbit pointer-events-none absolute inset-x-0 top-0 -z-10 h-full w-full opacity-60"
  viewBox="0 0 800 400"
  preserveAspectRatio="xMidYMid slice"
  aria-hidden="true"
>
  <defs>
    <linearGradient id="orbitGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
      <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.7" />
      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
    </linearGradient>
  </defs>
  <path
    id="orbit"
    d="M-20 330 Q 400 -90 820 330"
    fill="none"
    stroke="url(#orbitGrad)"
    strokeWidth="1.2"
    strokeDasharray="2 8"
  />
  <circle r="4" fill="#22d3ee" className="orbit-dot">
    <animateMotion dur="16s" repeatCount="indefinite">
      <mpath href="#orbit" />
    </animateMotion>
  </circle>
</svg>
```

- Marco con borde de degradé para la imagen: reemplazá el `<div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 bg-white/5">` por:

```tsx
<div className="rounded-3xl bg-gradient-to-br from-cyan-400/50 via-white/10 to-violet-500/50 p-px shadow-[0_0_60px_rgba(34,211,238,0.12)]">
  <div className="relative aspect-[16/9] overflow-hidden rounded-[calc(1.5rem-1px)] bg-navy-950">
    {/* <Image ... /> existente, sin cambios */}
  </div>
</div>
```

### 5.2 `app/globals.css` — agregar

```css
@media (prefers-reduced-motion: reduce) {
  .hero-orbit .orbit-dot {
    display: none;
  }
}
```

Commit: `feat(hero): órbita animada y marco con degradé`

---

## FASE 6 — Diagramas rediseñados

Archivos: `components/ui/NetworkDiagram.tsx` (nuevo), `components/home/AltaCapacidad.tsx`, `components/home/CasosExperiencia.tsx`.

### 6.1 Crear `components/ui/NetworkDiagram.tsx`

```tsx
import { Diagram } from "@/components/ui/Diagram";

export type DiagramInput = { label: string; kind: "sat" | "radio" };

const COLORS = { sat: "#22d3ee", radio: "#8b5cf6" } as const;

interface NetworkDiagramProps {
  inputs: DiagramInput[];
  routerLabel?: string;
  outputLabel: string;
  ariaLabel: string;
  className?: string;
}

/** Varias entradas (satélite o radioenlace) convergen en un router y salen hacia el destino. */
export function NetworkDiagram({
  inputs,
  routerLabel = "Router",
  outputLabel,
  ariaLabel,
  className,
}: NetworkDiagramProps) {
  const rowH = 40;
  const h = Math.max(190, inputs.length * rowH + 50);
  const cy = h / 2;
  const top = (h - inputs.length * rowH) / 2;

  return (
    <Diagram className={className}>
      <svg
        viewBox={`0 0 480 ${h}`}
        className="diagram w-full"
        role="img"
        aria-label={ariaLabel}
      >
        {inputs.map((input, i) => {
          const y = top + rowH * i + rowH / 2;
          const color = COLORS[input.kind];
          const delay = `${0.1 + i * 0.1}s`;
          const d = `M160 ${y} C 205 ${y}, 215 ${cy}, 246 ${cy}`;
          return (
            <g key={`${input.label}-${i}`}>
              <circle
                className="seg node-pulse"
                cx="28"
                cy={y}
                r="6"
                fill={color}
                style={{ ["--d" as string]: delay }}
              />
              <text
                className="seg"
                x="44"
                y={y + 4}
                fontSize="11"
                fill="#8fa3bd"
                style={{ ["--d" as string]: delay }}
              >
                {input.label}
              </text>
              <path
                className="seg"
                d={d}
                fill="none"
                stroke={color}
                strokeOpacity="0.35"
                strokeWidth="1.5"
                style={{ ["--d" as string]: delay }}
              />
              <path
                className="flow"
                d={d}
                fill="none"
                stroke={color}
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </g>
          );
        })}

        {/* Router */}
        <g className="seg" style={{ ["--d" as string]: "0.7s" }}>
          <rect
            x="246"
            y={cy - 18}
            width="48"
            height="36"
            rx="8"
            fill="#0a1827"
            stroke="#22d3ee"
            strokeWidth="1.5"
          />
          <circle cx="260" cy={cy} r="2.5" fill="#22d3ee" />
          <circle cx="270" cy={cy} r="2.5" fill="#22d3ee" />
          <circle cx="280" cy={cy} r="2.5" fill="#22d3ee" />
          <text x="270" y={cy + 34} fontSize="10" fill="#8fa3bd" textAnchor="middle">
            {routerLabel}
          </text>
        </g>

        {/* Salida */}
        <path
          className="seg"
          d={`M294 ${cy} L360 ${cy}`}
          stroke="#22d3ee"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          style={{ ["--d" as string]: "0.8s" }}
        />
        <path
          className="flow"
          d={`M294 ${cy} L360 ${cy}`}
          stroke="#22d3ee"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <g className="seg" style={{ ["--d" as string]: "0.9s" }}>
          <rect
            x="360"
            y={cy - 22}
            width="100"
            height="44"
            rx="10"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="1.5"
          />
          <text
            x="410"
            y={cy + 4}
            fontSize="12"
            fill="#e8eef7"
            textAnchor="middle"
          >
            {outputLabel}
          </text>
        </g>
      </svg>
    </Diagram>
  );
}
```

### 6.2 `AltaCapacidad.tsx`

- Importá `NetworkDiagram`; quitá el import de `Diagram` si ya no se usa.
- Reemplazá todo el bloque `<Diagram ...> ... </Diagram>` (el SVG con 3 antenas) por:

```tsx
<NetworkDiagram
  className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4"
  inputs={[
    { label: "Starlink 1", kind: "sat" },
    { label: "Starlink 2", kind: "sat" },
    { label: "Starlink 3", kind: "sat" },
    { label: "Starlink 4", kind: "sat" },
    { label: "Starlink 5", kind: "sat" },
    { label: "Starlink 6", kind: "sat" },
  ]}
  outputLabel="Operación"
  ariaLabel="Varios terminales satelitales convergen en un router central y salen hacia la operación"
/>
```

### 6.3 `CasosExperiencia.tsx`

- Importá `NetworkDiagram`; quitá el import de `Diagram` si ya no se usa.
- Reemplazá el bloque `<Diagram> ... </Diagram>` del caso destacado (el que termina con el texto "Cliente") por:

```tsx
<NetworkDiagram
  inputs={[
    { label: "Radioenlace 1", kind: "radio" },
    { label: "Radioenlace 2", kind: "radio" },
    { label: "Satélite (Starlink)", kind: "sat" },
  ]}
  outputLabel="Cliente"
  ariaLabel="Dos radioenlaces y un enlace satelital convergen en un router y salen hacia el cliente"
/>
```

Commit: `feat(diagramas): diagrama de red animado y reutilizable`

---

## FASE 7 — Tarjetas y microinteracciones

Archivos: `components/services/ServiceCard.tsx`, `components/ui/FaqAccordion.tsx`, `components/home/ComoTrabajamos.tsx`.

### 7.1 `ServiceCard.tsx`

- Al ícono contenedor agregale `transition duration-300 group-hover:scale-110 group-hover:bg-cyan-400/20`.
- Al `<Link>` agregale `hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]` (junto con las clases de hover existentes).

### 7.2 `FaqAccordion.tsx` — apertura suave

Reemplazá el bloque `{isOpen ? (<p ...>...</p>) : null}` por:

```tsx
<div
  className={cn(
    "grid transition-[grid-template-rows] duration-300 ease-out",
    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
  )}
>
  <div className="overflow-hidden" inert={!isOpen}>
    <p className="px-4 pb-4 text-sm text-slate-300">{item.answer}</p>
  </div>
</div>
```

(Si TypeScript se queja por `inert`, usá `{...(!isOpen ? { inert: true } : {})}` con un `as object`.) Además, a cada botón agregale `aria-controls={`faq-${i}`}` y al contenedor de la respuesta `id={`faq-${i}`}`.

### 7.3 `ComoTrabajamos.tsx` — línea de tiempo

- Envolvé el `<div className="mt-12 grid ...">` de los pasos en un `<div className="relative mt-12">`, quitando `mt-12` del grid interno.
- Dentro de ese wrapper, antes del grid, agregá:
  `<div className="pointer-events-none absolute left-6 right-6 top-[2.35rem] hidden h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent lg:block" aria-hidden="true" />`
- En cada tarjeta reemplazá `<span className="font-mono text-sm text-cyan-400">0{i + 1}</span>` por un círculo:
  `<span className="relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/40 bg-navy-950 font-mono text-sm text-cyan-300">0{i + 1}</span>`

Commit: `feat(ui): microinteracciones en tarjetas, FAQ y proceso`

---

## FASE 8 — Reorganización de la home (OPCIONAL, riesgo medio)

Antes de tocar nada:
1. Leé `components/home/Benefits.tsx`, `Differentiator.tsx`, `GlobalReach.tsx` y `ExperienceAreas.tsx`.
2. Proponé al dueño, en un mini-plan de 10 líneas, cómo agrupar o acortar esas secciones (por ejemplo, unir Benefits y Differentiator en un solo bloque con tarjetas, o reducir el padding vertical de 24 a 20). **Esperá su aprobación** antes de editar.
3. Si se aprueba, aplicalo y hacé commit `refactor(home): home más compacta`.

---

## FASE 9 — Cierre

1. `npm run build` y `npm run lint` sin errores.
2. Revisá en `npm run dev`: home, /servicios, /casos, /contacto, /faq en ancho de celular (390 px) y escritorio.
3. Confirmá que con `prefers-reduced-motion` activado todo se ve estático y completo.
4. Informá el peso aproximado de la página inicial si el dueño lo pide.

Commit: `chore: revisión final del rediseño`

---

## ANEXO — Imágenes antiguas que no combinan con las nuevas (las genera el dueño)

Se usan en `lib/data.ts`, `/servicios`, `/soluciones` y `/nosotros`. Tamaño 1200×800, formato WebP, nombres exactos en `public/images/`. Prompts (en inglés) con este estilo común al final:

STYLE: "Photorealistic professional photography, natural golden-hour light, warm highlights with cool blue-teal shadows, 35mm lens, high-altitude Salta valley setting with dry mountains, clean modern satellite installation, no text, no logos, no watermark, no people."

| Archivo | Tema |
|---|---|
| `servicio-starlink.webp` | Flat white satellite antenna on a galvanized pole on a house roof |
| `servicio-redes.webp` | Neat network rack with patch panel and organized cables in a small technical room |
| `servicio-infraestructura.webp` | Metal tower and equipment cabinet with tidy cabling outdoors |
| `solucion-hogares.webp` | Modern house in the valley with a satellite antenna on the roof at sunset |
| `solucion-comercios.webp` | Small shop front with a discreet satellite antenna on the roof and a Wi-Fi access point inside |
| `solucion-empresas.webp` | Modern office building with satellite antenna on the roof, clean evening light |
| `solucion-cabanas.webp` | Wooden mountain cabin with a satellite antenna on a pole, forest and mountains behind |
| `solucion-vivienda-rural.webp` | Rural adobe house with a satellite antenna on a pole, dry landscape |
| `solucion-productivo.webp` | Farm or small plant with equipment shed and a satellite antenna on a mast |
| `nosotros.webp` | Technical workbench with tools, network equipment and a laptop, warm light |

Las 5 imágenes de `public/images/experience/` se mantienen sin cambios por ahora.
