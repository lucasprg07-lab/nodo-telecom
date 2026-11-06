# Brief de imágenes — NODO Telecom

Guía para generar las imágenes del sitio de forma coherente con la identidad de
marca. Cada imagen tiene su **nombre de archivo exacto**, la **proporción** y la
**prompt** lista para pegar en un generador de imágenes (Midjourney, DALL·E,
Flux, Ideogram, etc.).

## Dónde se cargan las imágenes

Guardar en esta carpeta (es donde se integran al sitio):

```
nodo-telecom/public/images/
```

Con los nombres exactos indicados abajo. La integración se hace con `next/image`
y `object-cover`, por lo que una proporción aproximada alcanza (se recorta sin
deformar).

---

## Bloque de estilo (pegar en TODAS las prompts)

> **Estilo:** fotografía corporativa profesional fotorrealista, nítida, alta
> resolución, iluminación natural suave, profundidad de campo sutil, composición
> limpia y ordenada, jerarquía visual clara. Estética de empresa tecnológica
> consolidada (telecomunicaciones e infraestructura), **no** una página
> improvisada de instalación de antenas ni una tienda de informática.
>
> **Paleta:** azul petróleo / marino oscuro (#0E2238) como base, azul eléctrico /
> cian (#06B6D4 / #22D3EE) como acento sutil (equipos, cables, detalles),
> blancos y grises neutros. El cian acompaña, no domina.
>
> **Entorno / locación:** Salta, Argentina — Valle de Lerma, faldeos de la
> precordillera, clima semiárido, cielos despejados, montañas al fondo, tonos
> tierra y verdes secos en el paisaje.
>
> **Evitar (negativo):** texto, letras, marcas de agua, logos, personas genéricas
> posando o mirando a cámara, estética futurista exagerada, neones, gradientes
> excesivos, estilo "cripto", ilustración o dibujo, baja calidad, deformidades en
> manos/equipos.
>
> **Resolución:** mínimo 1600 px en el lado mayor. Formato JPG (o WebP) de alta
> calidad.

---

## Etapa 1 — Las 5 esenciales (Hero + 4 servicios)

### 1. `hero.jpg` — Portada (Home)

- **Dónde:** panel principal del Hero (columna derecha).
- **Proporción:** 4:3 (ej. 1600×1200).
- **Prompt:**

  > Fotografía fotorrealista de una antena satelital (estilo Starlink) instalada
  > de forma prolija sobre el techo de una casa rural en Salta, Argentina. Se ve
  > el disco blanco con un cable ordenado y fijado con grampas, contra un cielo
  > despejado y montañas áridas del Valle de Lerma al fondo. Luz natural cálida
  > de atardecer. Un técnico de espaldas, con ropa de trabajo y casco, terminando
  > de ajustar la antena. Sensación de instalación profesional, limpia y segura.
  > Detalles en cian sutil en el equipo. Composición limpia, espacio negativo para
  > texto a la izquierda. Sin texto, sin logos, fotorrealista, 8K.

### 2. `servicio-starlink.jpg` — Servicio: Internet satelital Starlink

- **Dónde:** sección "Internet satelital Starlink" en `/servicios`.
- **Proporción:** 3:2 (ej. 1500×1000).
- **Prompt:**

  > Primer plano/plano medio de una antena satelital blanca (estilo Starlink)
  > montada sobre un mástil o soporte en un techo, con el cableado organizado y
  > fijado con prolijidad. Técnico revisando la orientación de la antena con una
  > herramienta, de perfil (sin mostrar rostro). Fondo: cielo despejado y
  > montañas de Salta. Iluminación natural, acentos cian en el equipo y el cable.
  > Fotografía corporativa profesional, limpia, fotorrealista. Sin texto ni logos.

### 3. `servicio-redes.jpg` — Servicio: Redes y conectividad

- **Dónde:** sección "Redes y conectividad".
- **Proporción:** 3:2.
- **Prompt:**

  > Fotografía profesional de un punto de red Ethernet y un router/access point
  > instalados en una pared de una oficina u hogar, con cableado estructurado
  > prolijo y etiquetado. Manos de un técnico conectando un cable UTP a un patch
  > panel o a un access point. Luz natural suave, tonos azul petróleo y gris,
  > acento cian en los cables. Composición ordenada y limpia, estética de
  > instalación de redes profesional. Sin texto, sin logos, fotorrealista.

### 4. `servicio-infraestructura.jpg` — Servicio: Infraestructura tecnológica

- **Dónde:** sección "Infraestructura tecnológica".
- **Proporción:** 3:2.
- **Prompt:**

  > Rack de telecomunicaciones ordenado y prolijo, con switches y equipos
  > montados, cableado estructurado perfectamente organizado con guías y velcros.
  > Iluminación suave, ambiente técnico limpio. Detalles de luces LED azules/cian
  > sutiles en los equipos. Estética de infraestructura corporativa profesional,
  > sin personas o con un técnico de espaldas ajustando el rack. Sin texto, sin
  > logos, fotorrealista, alta calidad.

### 5. `servicio-empresas-rurales.jpg` — Servicio: Soluciones para empresas y rurales

- **Dónde:** sección "Soluciones para empresas y establecimientos rurales".
- **Proporción:** 3:2.
- **Prompt:**

  > Vivienda rural o cabaña de hospedaje en las afueras de Salta, Argentina, con
  > una antena satelital en el techo y vegetación semiárida alrededor. Al fondo,
  > montañas del Valle de Lerma y cielo despejado. Interior o exterior que
  > transmita conectividad en un entorno alejado. Luz cálida natural, ambiente
  > acogedor pero profesional. Acento cian sutil en el equipo. Sin texto, sin
  > logos, fotorrealista.

---

## Etapa 2 — Soluciones (6 miniaturas) + Nosotros + OG

### 6–11. Imágenes de "Soluciones" (tarjetas de `/soluciones`)

Todas **1:1** (ej. 800×800), pegando el bloque de estilo + la descripción.

| Archivo | Tema | Prompt (resumida) |
|---|---|---|
| `solucion-hogares.jpg` | Hogares | Living/hogar luminoso con router y Wi-Fi, ambiente acogedor, acento cian sutil en el equipo |
| `solucion-comercios.jpg` | Comercios y oficinas | Pequeño comercio/oficina con red cableada ordenada y access point en techo, ambiente de trabajo |
| `solucion-cabanas.jpg` | Cabañas y alojamientos | Cabaña turística con antena satelital, montañas de Salta, ambiente de hospedaje |
| `solucion-vivienda-rural.jpg` | Viviendas rurales | Casa rural aislada con antena, campo semiárido, cielo despejado |
| `solucion-productivo.jpg` | Establecimientos productivos | Galpón/campo de producción con enlace de conectividad y equipo de red, maquinaria al fondo |
| `solucion-empresas.jpg` | Empresas e industriales | Nave industrial/empresa con rack y cableado estructurado, estética corporativa |

### 12. `nosotros.jpg` — Página "Nosotros"

- **Proporción:** 3:2.
- **Prompt:**

  > Técnico profesional de telecomunicaciones trabajando en la instalación de una
  > antena o rack, de perfil o de espaldas, con ropa de trabajo prolija y
  > herramientas. Entorno de Salta, Argentina. Luz natural, tonos azul petróleo y
  > cian sutil. Transmite profesionalismo, confiabilidad y conocimiento técnico.
  > Sin texto, sin logos, fotorrealista.

### 13. `og-image.jpg` — Imagen para redes / SEO

- **Proporción:** 1.91:1 (exacta 1200×630).
- **Prompt:**

  > Composición horizontal para redes sociales: antena satelital y red de
  > nodos/conexiones sutiles sobre fondo azul petróleo (#0E2238), con acento cian
  > eléctrico (#06B6D4). Espacio para texto/logo en el centro-izquierda. Estética
  > corporativa tecnológica, limpia, profesional. Sin texto (el logo se agrega
  > después). Fotorrealista con toque gráfico sutil.

---

## Cómo seguir después de generar

1. Generar **Etapa 1** (5 imágenes) y guardarlas en `public/images/` con los
   nombres exactos.
2. Avisar (o pegar las imágenes en el chat) para integrarlas al sitio.
3. Luego generar **Etapa 2** (Soluciones, Nosotros y OG image).

La integración usará `next/image` con `alt` accesibles y `object-cover`.

