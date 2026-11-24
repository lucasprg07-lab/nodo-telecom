# NODO Telecom — Documento maestro de cambios (versión final)

> **Para el agente:** este documento contiene TODAS las instrucciones de cambios para el sitio. La sección 1 es el prompt; las secciones 2 a 5 son código de referencia. Las imágenes nuevas las carga el dueño en `/public/images/` con los nombres indicados; el agente solo las coloca.

---

## 1. PROMPT PARA EL AGENTE

Sos un desarrollador front-end senior. Trabajás sobre el sitio existente de NODO Telecom (Next.js, desplegado en Vercel, dominio definitivo nodotele.com, aún no conectado). **No rompas lo que ya funciona**: mantené rutas, el formulario de presupuesto, el botón de WhatsApp y el aviso legal de que NODO no es distribuidor ni instalador oficial de Starlink. Trabajá por bloques, y al final de cada uno mostrá un resumen de archivos creados/modificados. Al terminar, `npm run build` debe pasar sin errores.

### 1.0 Variables de configuración
Crear `/config/site.ts` con constantes editables:
- `SITE_URL` ("https://nodotele.com"), `CONTACT_EMAIL` (vacío por ahora; si está vacío, no mostrarlo), `WHATSAPP` (usar el actual).
- `SHOW_TESTIMONIALS = false`.
- `SHOW_CASES = true`.

### 1.1 Sistema visual (tech / cripto, pero profesional)
- Modo oscuro por defecto. Fondo azul muy oscuro (`#070d17`), tarjetas "glass" con borde sutil, acentos cian y violeta con degradé. Usar el CSS de la sección 2.
- Tipografías con `next/font`: `Space Grotesk` o `Sora` para títulos, `Inter` para el cuerpo, `JetBrains Mono` para datos técnicos.
- El estilo cripto va solo en el look (oscuro, glow, grilla, degradé). Nada de memes, gráficos de precios ni lenguaje especulativo. El público es de empresas, industria y minería: tiene que transmitir seriedad.

### 1.2 Animaciones (sin librerías pesadas)
- Componente `Reveal` (sección 3) en cada bloque: fade + slide al hacer scroll.
- Hero con grilla animada y resplandor (clase `.hero-bg`).
- `CountUp` para cifras (ej. "+5 años").
- Hover en tarjetas con elevación y glow.
- Obligatorio: respetar `prefers-reduced-motion`; no bloquear el scroll; Lighthouse móvil Performance ≥ 90.

### 1.3 Estructura de la home (en este orden)
1. **Hero:** "Conectividad satelital y redes para hogares, empresas, minería, flotas y embarcaciones". Base en Salta, servicio en toda Argentina y coordinación internacional según disponibilidad. Botones: WhatsApp y "Pedir presupuesto".
2. **Servicios:** Hogar, Pyme/Comercio, Industria y Minería, **Alta capacidad satelital (múltiples Starlink)** y **Flotas y embarcaciones (Servicio itinerante)**. La tarjeta de Alta capacidad satelital va destacada (primera en Industria y Minería).
3. **Cómo trabajamos:** línea de tiempo animada en 4 pasos (Relevamiento → Propuesta → Instalación → Soporte).
4. **Experiencia en proyectos reales:** ver 1.5.
5. **Galería de instalaciones:** grilla responsive con lightbox simple y `alt` editable; usar placeholders (el dueño carga las fotos reales).
6. **Formas de pago flexibles:** ver 1.6.
7. **FAQ:** las 5 primeras preguntas con enlace "Ver todas" a `/faq`.
8. **Testimonios:** componente creado pero oculto con `SHOW_TESTIMONIALS=false`. No inventar contenido.
9. **Contacto:** WhatsApp, formulario y email (si `CONTACT_EMAIL` no está vacío).

Mantener el mismo contenido en `/servicios` y `/soluciones`, agregando el ancla `#flotas-y-embarcaciones`.

### 1.4 Servicio itinerante (flotas y embarcaciones)
Usar el componente de la sección 4, adaptado:
- Nombrar el servicio como **"Servicio itinerante"** (conectividad móvil de Starlink para vehículos, flotas y embarcaciones).
- Texto base: "Conectividad en movimiento, en cualquier zona remota. Camiones, vehículos de campo, utilitarios, buses, yates, barcos de pesca y embarcaciones de toda envergadura."
- Explicar que existen planes con límite de datos y planes ilimitados, y que NODO asesora cuál conviene. El servicio lo factura Starlink directamente al cliente; NODO ayuda con la gestión y no es intermediario.
- **NO publicar** cantidades de GB, velocidades, precios de planes ni listas de países.
- Clientes de otros países: el equipo y el plan se contratan en el país del cliente y a su nombre (no se envían equipos desde Argentina). Redactarlo así en la web.
- Uso fuera del país: sujeto a las condiciones vigentes de Starlink (límites de días, registro de viaje y planes según el país). Redactarlo de forma general, sin publicar cantidad de días. Para flotas empresariales o uso internacional continuo, NODO evalúa el plan adecuado (categoría Empresas/Prioridad).
- En vehículos, la antena se instala en el techo, nunca en el parabrisas.
- Imágenes con placeholders: `/public/images/flotas.png` y `/public/images/embarcaciones.png` (fondo degradé si el archivo no existe).

### 1.5 Sección "Experiencia en proyectos reales" y página `/casos`
Título: "Experiencia en proyectos reales". Subtítulo: "Proyectos realizados por el fundador de NODO durante su trayectoria profesional en telecomunicaciones." Resumen: "Más de 5 años de experiencia profesional en telecomunicaciones e infraestructura para empresas del sector". Cuatro casos más abajo. Tres puntos de valor: soluciones a medida, instalación profesional, soporte.

**Reglas:** no nombrar empresas ni clientes anteriores; no decir "NODO realizó" (son proyectos del fundador); no publicar cifras de velocidad; mostrar zona como "Puna salteña"; no mencionar marcas de equipos de radio; no decir que otros instaladores son "simples" ni que Starlink "solo vende equipos".

**Importante:** la web actual ya tiene una sección "Experiencia profesional" con 4 áreas técnicas (telecomunicaciones, industria y minería, planificación, energía). NO la borres ni la dupliques: mantenerla y agregar debajo los casos como "Casos de experiencia" (ahí se incorporan también la `/casos` y el bloque de método de trabajo). Mostrar en tarjetas con los campos Situación / Solución / Resultado:

**Caso 1 — Tercer camino satelital para operaciones mineras (Puna salteña)**
- Situación: minera con servicio por dos radioenlaces terrestres, uno principal y uno de respaldo.
- Solución: se sumó un tercer camino independiente con Starlink, un router donde convergen los servicios y salida hacia el equipo del cliente.
- Resultado: si la red terrestre se cae, la operación sigue conectada por vía satelital de alta velocidad.
- Nota: "Realizado en 3 proyectos similares."
- Incluir un diagrama SVG animado: dos líneas (radioenlace 1 y 2) y una tercera (satélite) que convergen en un router y salen al "Cliente". Al hacer scroll se encienden en secuencia.

**Caso 2 — Monitoreo remoto de un nodo VHF en un cerro**
- Situación: nodo VHF de una minera, sin conectividad a internet, imposible de monitorear a distancia.
- Solución: Starlink más un router que crea un túnel seguro hasta la empresa.
- Resultado: el cliente pudo monitorear el nodo en forma remota.

**Caso 3 — Repetidoras VHF integradas por internet (trunking)**
- Situación: repetidoras VHF aisladas en zonas remotas.
- Solución: conectividad satelital en cada repetidora y enlace entre ellas a través de internet.
- Resultado: las repetidoras se ven entre sí y operan integradas, ampliando la cobertura de comunicación.

**Caso 4 — Puntos de monitoreo con cámaras (Valle de Lerma)**
- Zona: localidades cercanas a Salta Capital, Valle de Lerma.
- Situación: necesidad de monitorear puntos remotos donde no había infraestructura de datos disponible.
- Solución: poste o gabinete con cámaras y Starlink, más un router que crea un túnel seguro hasta la central de monitoreo.
- Resultado: las imágenes y el video llegan a la central de monitoreo del cliente.
- Imagen: `/public/images/monitoreo.png` (placeholder, "Imagen ilustrativa").

**Bloque "Método de trabajo"** (también en la página de Industria/Minería): Relevamiento → Proyecto con materiales, personal, tiempo y costeo → Cotización → Aprobación del cliente → Intervención.

Fotos de los casos: placeholders con leyenda "Imagen ilustrativa". No presentar imágenes generadas como prueba de un trabajo real.

### 1.6 Formas de pago flexibles
Sección con el componente de la sección 5, con este texto:
- "Aceptamos transferencia, QR y tarjetas (Mercado Pago). Pago en cuotas solo con tarjeta."
- "Para clientes del exterior, también aceptamos stablecoins (USDC y USDT). Las instrucciones de pago se entregan junto con la propuesta."
- **Sin direcciones de wallet, sin botón de procesador de pagos.** No incluir ningún texto sobre trámites, impuestos ni cómo se declara.

### 1.7 FAQ (`/faq`, acordeón) — usar estos textos
1. **¿Qué incluye la instalación?** Para hogares: equipo, montaje y configuración. Si la distancia entre la antena y el router es mayor a la del kit, se analiza en el sitio antes de presupuestar.
2. **¿Cuánto tarda?** Instalaciones de hogar: en muchos casos el mismo día, según disponibilidad. Comercial, industria y minería: se hace un proyecto, se cotiza y se ejecuta con aprobación del cliente.
3. **¿Quién provee el equipo?** En esta etapa, el cliente de hogar puede comprar su equipo Starlink y NODO lo instala. Para pymes, industria y minería, NODO lo provee o lo gestiona.
4. **¿Qué necesita el lugar?** Vista despejada del cielo, sin árboles ni estructuras que obstruyan, en un lugar alto (techo). El campo de visión necesario depende del modelo; lo medimos en el sitio con la app de Starlink.
5. **¿Y si hay un problema después?** Promoción de lanzamiento: soporte remoto gratis durante 3 meses para clientes nuevos. Las visitas técnicas presenciales tienen costo y se presupuestan previamente según la ubicación y el trabajo a realizar, acordando siempre el valor antes de asistir.
6. **¿Cómo se paga?** Transferencia, QR y tarjetas por Mercado Pago. Pago en cuotas solo con tarjeta. En efectivo, el 50% se abona antes para cubrir los equipos y el resto es mano de obra. Para clientes del exterior, también aceptamos stablecoins (USDC/USDT). Las instrucciones de pago se envían con la propuesta.
7. **¿Trabajan fuera de Salta?** Sí. Viajamos físicamente: se cotiza el proyecto completo y se ejecuta con aprobación del cliente. Para clientes de otros países, el equipo y el plan de Starlink se contratan en el país del cliente y a su nombre, según la disponibilidad y las condiciones de cada país; NODO coordina el proyecto y la instalación.
8. **¿Qué diferencia hay con contratar Starlink directamente?** Starlink es el proveedor del servicio y los equipos. NODO diseña e instala la solución a medida, con más de 5 años de experiencia profesional en telecomunicaciones. NODO no es distribuidor ni instalador oficial de Starlink.
9. **¿Qué es el servicio itinerante?** Es el servicio móvil de Starlink para vehículos, flotas y embarcaciones, para tener conectividad en movimiento en zonas remotas.
10. **¿Plan con límite de datos o ilimitado?** El servicio residencial (antena fija en un domicilio) no tiene límite de datos. El itinerante se contrata por cantidad de datos y se puede ampliar. Starlink factura el servicio directamente; NODO ayuda con la gestión y no es intermediario. Para uso empresarial o en varios países se evalúa el plan más adecuado.
11. **¿Se puede instalar en camiones, autos, barcos y yates?** Sí, en vehículos de todo tipo y embarcaciones. En vehículos se instala en el techo, nunca en el parabrisas. El uso fuera del país depende de las condiciones vigentes de Starlink; lo evaluamos según tu caso.
12. **¿Emiten factura?** Sí, facturas A y C.

### 1.8 Inglés (ES/EN)
- Selector ES/EN en el header. Rutas `/es` y `/en` con diccionarios JSON (sin traductores embebidos ni librerías pesadas), `hreflang` y metadata por idioma.
- Traducir TODO el contenido anterior al inglés (FAQ, casos, pagos, servicios). Mantener "Servicio itinerante" como "Mobile service (Starlink Roam)" solo si el nombre es correcto; si hay dudas, usar "Mobile connectivity service".

### 1.9 Alcance, SEO y técnico
- Unificar el mensaje: "Base en Salta, servicio en toda Argentina y coordinación internacional según disponibilidad". Reemplazar "Salta y alrededores" donde contradiga.
- `canonical` y `og:image` usan `SITE_URL` (nodotele.com). No cambiar el dominio a mano.
- JSON-LD (`LocalBusiness` + `Service`) en el layout.
- Palabras clave a sumar en títulos/meta: internet satelital para flotas, conectividad para embarcaciones, internet satelital para minería, redundancia satelital, Starlink Salta.
- `alt` descriptivos en todas las imágenes, contraste AA, foco visible, `aria-label` en botones.
- Imagen OG: mantener la actual (`/public/images/og-image.png`); no reemplazarla salvo que el dueño entregue una nueva.

### 1.10 Entregables
Lista de archivos creados/modificados, descripción del resultado por sección y confirmación de que `npm run build` pasa. Si alguna tarea no es posible, decirlo explícitamente en vez de saltearla.

### 1.11 Aclaraciones sobre imágenes
- `og-image.png`: mantener la actual y reemplazarla SOLO si el dueño entrega un archivo nuevo con ese nombre. Verificar que la imagen que se use para compartir tenga el logo o el nombre NODO Telecom visible y un tamaño recomendado de 1200×630.
- Mantener SIN CAMBIOS las 5 imágenes actuales de `/images/experience/` (el dueño las reemplazará más adelante).
- `hogar.png` se incluye: usarla en la tarjeta de Hogar (si el archivo faltara, usar un recorte de `hero.png`).
- Reemplazar `hero.png` conservando el texto alternativo actual (o uno equivalente), y comprimir todas las imágenes nuevas a WebP, menos de 300 KB.


### 1.12 Servicio destacado: Alta capacidad satelital (múltiples Starlink en una sola conexión)
Servicio estrella para minería e industria del norte (Salta, Catamarca, Jujuy y zonas sin infraestructura terrestre). Crear:
- Tarjeta destacada en la home y en Industria y Minería, y una página/sección dedicada con ancla `#alta-capacidad`.
- Título: "Alta capacidad satelital: múltiples Starlink en una sola conexión".
- Subtítulo: "Sumamos la capacidad de varios terminales Starlink para operaciones que necesitan más velocidad y continuidad, en zonas sin infraestructura terrestre."
- 6 beneficios en tarjetas: Mayor capacidad (se suma la de los enlaces) · Redundancia (si un terminal falla, la conexión sigue) · Escalable (se agregan terminales según la necesidad) · Sin infraestructura terrestre · Monitoreo remoto · Soporte técnico.
- "Cómo lo hacemos": Relevamiento → Diseño de la solución → Shelter/estructura e instalación → Configuración → Monitoreo y soporte.
- Diagrama SVG animado (sin librerías): varios íconos de antena a la izquierda cuyas líneas convergen en un router central y salen hacia "Operación / Mina". Las líneas se encienden en secuencia al hacer scroll; respetar `prefers-reduced-motion`.
- Aclaración visible en letra chica: "La capacidad final depende de la cantidad de terminales, la ubicación, el plan y las condiciones de cada sitio. Los planes de Starlink se contratan directamente con Starlink."
- **NO publicar** cifras de velocidad (nada de "1 Gbps"), cantidad máxima de terminales, nombres de marcas de routers ni de competidores.
- Imagen: `/public/images/alta-capacidad.png` (placeholder, "Imagen ilustrativa"). NO usar ninguna foto de sitios reales de clientes.
- FAQ nueva (agregar como pregunta 13): **¿Qué es la alta capacidad satelital?** Es una solución que combina varios terminales Starlink en una sola conexión para sumar capacidad y tener redundancia. Se diseña a medida de cada operación y se cotiza como proyecto.
- SEO: sumar "internet satelital para minería", "redundancia satelital", "Starlink múltiples antenas", "conectividad minera Salta Catamarca Jujuy".

### 1.13 Estado actual del proyecto (importante)
- Todavía NO está comprado ni conectado el dominio nodotele.com: por ahora la web vive en Vercel (nodo-telecom.vercel.app). Dejar `SITE_URL` configurado como "https://nodotele.com" (será el definitivo) y no cambiarlo.
- Todavía NO existe el email corporativo (se creará con Zoho Mail después de comprar el dominio). Dejar `CONTACT_EMAIL` vacío y NO mostrar ningún email en el footer ni en `/contacto`; mostrar solo WhatsApp y el formulario. Cuando el dueño tenga el email, lo cargará en `CONTACT_EMAIL`.
- Plan del dueño: implementar estos cambios, probar la web en una vista previa de Vercel, y recién después pagar el dominio y agregar el correo.

### 1.14 Ubicación de las imágenes nuevas (importante)
- Todas las imágenes nuevas que menciona este documento (hero, flotas, embarcaciones, hogar, minería, vhf, monitoreo, alta-capacidad) están en **`/public/images/solutions/`** (URL `/images/solutions/<archivo>`). Esa carpeta la creaste vos en un prompt anterior; ahora el dueño dejó ahí los archivos.
- Donde este documento diga `/public/images/<nombre>`, leer `/public/images/solutions/<nombre>`.
- Primero listá la carpeta `/public/images/solutions/` y usá los nombres y extensiones reales (pueden ser .png, .webp o .jpg). Si faltara alguna imagen o los nombres no coincidieran con los de este documento, NO adivines: mostrame la lista y preguntame el mapeo antes de seguir.
- El nuevo hero reemplaza el uso del hero actual: apuntar el componente del hero a la imagen nueva de `solutions/`. NO borrar ni sobrescribir los archivos existentes de `/public/images/` (hero, nosotros, servicio-*, solucion-*, experience/): quedan como están por si hay que volver atrás.
- La imagen OG sigue siendo la actual (`/public/images/og-image`). No tocarla.
- Las imágenes de `/public/images/experience/` se mantienen sin cambios.

---

## 2. `globals.css` (agregar/mezclar con el existente)

```css
:root {
  --bg: #070d17;
  --surface: rgba(255, 255, 255, 0.04);
  --border: rgba(255, 255, 255, 0.10);
  --text: #e8eef7;
  --muted: #8fa3bd;
  --cyan: #22d3ee;
  --violet: #8b5cf6;
  --grad: linear-gradient(120deg, var(--cyan), var(--violet));
}

body {
  background: var(--bg);
  color: var(--text);
}

/* Texto con degradé para titulares clave */
.grad-text {
  background: var(--grad);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* Tarjeta glass */
.card {
  position: relative;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px;
  backdrop-filter: blur(10px);
  transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease;
}
.card:hover {
  transform: translateY(-4px);
  border-color: rgba(34, 211, 238, 0.5);
  box-shadow: 0 0 32px rgba(34, 211, 238, 0.15);
}

/* Botón principal */
.btn-primary {
  display: inline-block;
  padding: 14px 26px;
  border-radius: 12px;
  font-weight: 600;
  color: #06101c;
  background: var(--grad);
  background-size: 200% 200%;
  animation: shift 6s ease infinite;
  transition: transform .2s ease, box-shadow .2s ease;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(139, 92, 246, 0.4);
}
@keyframes shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Fondo del hero: grilla + resplandor animado */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  background:
    radial-gradient(600px circle at 20% 20%, rgba(34, 211, 238, .18), transparent 60%),
    radial-gradient(500px circle at 80% 30%, rgba(139, 92, 246, .18), transparent 60%);
}
.hero-bg::before {
  content: "";
  position: absolute;
  inset: -50%;
  background-image:
    linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(circle at center, #000 30%, transparent 70%);
  animation: drift 30s linear infinite;
}
@keyframes drift {
  to { transform: translate3d(48px, 48px, 0); }
}

/* Aparición al hacer scroll */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity .7s ease, transform .7s ease;
  transition-delay: var(--delay, 0ms);
}
.reveal.is-visible {
  opacity: 1;
  transform: none;
}

/* Accesibilidad: sin movimiento si el usuario lo pidió */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
  }
  .reveal { opacity: 1; transform: none; }
}
```

---

## 3. `components/Reveal.tsx` y `components/CountUp.tsx`

```tsx
"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ ["--delay" as string]: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
```

```tsx
"use client";
import { useEffect, useRef, useState } from "react";

export function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 1400,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setValue(to); return; }

    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return <span ref={ref}>{prefix}{value}{suffix}</span>;
}
```

Uso: `<CountUp to={5} prefix="+" suffix=" años" />`

---

## 4. `components/FlotasEmbarcaciones.tsx`

```tsx
import Image from "next/image";
import { Reveal } from "./Reveal";

const flotas = [
  "Camiones de carga y transporte de larga distancia",
  "Flotas de servicio técnico y utilitarios",
  "Vehículos de campo, agro y minería",
  "Buses y transporte de pasajeros",
];

const embarcaciones = [
  "Yates y embarcaciones de recreo",
  "Barcos de pesca y de trabajo",
  "Embarcaciones comerciales y de carga",
  "Navegación costera y de altura",
];

export default function FlotasEmbarcaciones() {
  return (
    <section id="flotas-y-embarcaciones" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="text-sm uppercase tracking-widest" style={{ color: "var(--cyan)" }}>
          Conectividad en movimiento
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mt-2">
          Flotas de vehículos y <span className="grad-text">embarcaciones</span>
        </h2>
        <p className="mt-4 max-w-2xl" style={{ color: "var(--muted)" }}>
          Evaluamos la solución de conectividad según la operación, la ruta y el
          tipo de unidad, para que tu flota o tu embarcación esté conectada
          donde trabaja.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Reveal>
          <article className="card h-full">
            <div className="relative h-48 w-full overflow-hidden rounded-xl bg-white/5">
              <Image
                src="/images/flotas.png"
                alt="Flota de camiones con conectividad satelital en ruta"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <h3 className="mt-5 text-xl font-semibold">Flotas de vehículos</h3>
            <ul className="mt-3 space-y-2" style={{ color: "var(--muted)" }}>
              {flotas.map((t) => <li key={t}>• {t}</li>)}
            </ul>
          </article>
        </Reveal>

        <Reveal delay={120}>
          <article className="card h-full">
            <div className="relative h-48 w-full overflow-hidden rounded-xl bg-white/5">
              <Image
                src="/images/embarcaciones.png"
                alt="Embarcación con antena satelital instalada en cubierta"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <h3 className="mt-5 text-xl font-semibold">Embarcaciones de toda envergadura</h3>
            <ul className="mt-3 space-y-2" style={{ color: "var(--muted)" }}>
              {embarcaciones.map((t) => <li key={t}>• {t}</li>)}
            </ul>
          </article>
        </Reveal>
      </div>

      <Reveal delay={200}>
        <p className="mt-6 text-sm" style={{ color: "var(--muted)" }}>
          La disponibilidad del servicio, los planes y las condiciones dependen
          del país, la zona de operación y las regulaciones aplicables. Cada
          caso se evalúa de forma individual.
        </p>
      </Reveal>
    </section>
  );
}
```

---

## 5. `components/PagosCripto.tsx`

```tsx
import { Reveal } from "./Reveal";

const pasos = [
  "Te enviamos la propuesta y el monto final en USD.",
  "Elegís stablecoin (USDC o USDT) y red de pago.",
  "Recibís las instrucciones de pago y confirmás.",
  "Verificamos la transacción y coordinamos el servicio.",
];

export default function PagosCripto() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="card text-center md:p-12">
          <p className="text-sm uppercase tracking-widest" style={{ color: "var(--violet)" }}>
            Pagos internacionales
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Contratá desde cualquier parte del mundo con{" "}
            <span className="grad-text">USDC o USDT</span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl" style={{ color: "var(--muted)" }}>
            Aceptamos stablecoins para clientes del exterior, sin depender de
            transferencias bancarias internacionales.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-4 text-left">
            {pasos.map((p, i) => (
              <Reveal key={p} delay={i * 100}>
                <div className="rounded-xl border p-4 h-full" style={{ borderColor: "var(--border)" }}>
                  <span className="font-mono text-sm" style={{ color: "var(--cyan)" }}>
                    0{i + 1}
                  </span>
                  <p className="mt-2 text-sm">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-xs" style={{ color: "var(--muted)" }}>
            Siempre confirmá la red y la dirección con nosotros por un canal
            oficial antes de enviar fondos. Una transferencia en la red
            equivocada puede perderse.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
```

**Nota para el agente sobre las direcciones de wallet:** no las escribas fijas en el código ni en el HTML público. Opciones seguras: (a) que se entreguen por WhatsApp/mail junto con la propuesta, o (b) usar un procesador de pagos (ej. Coinbase Commerce, NOWPayments) que genere una dirección o link por cada cobro. Si se muestra una dirección, que sea desde variable de entorno y con QR.

---

---

## FIN DEL DOCUMENTO
Si algo de este documento no se puede implementar, indicarlo explícitamente en el resumen final en vez de omitirlo.
