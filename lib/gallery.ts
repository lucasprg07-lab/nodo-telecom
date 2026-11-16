export interface GalleryItem {
  src?: string;
  alt: string;
  title: string;
}

/**
 * Galería de instalaciones. Mientras no haya fotos reales, `src` queda vacío
 * y se muestra un placeholder. El dueño carga las fotos y el `alt` definitivo.
 */
export const galleryItems: GalleryItem[] = [
  {
    title: "Instalación en hogar",
    alt: "Instalación de antena satelital en una vivienda",
  },
  {
    title: "Instalación en comercio",
    alt: "Instalación de antena satelital en un comercio",
  },
  {
    title: "Cableado estructurado",
    alt: "Tendido y organización de cableado estructurado",
  },
  {
    title: "Redes y puntos de acceso",
    alt: "Configuración de red y puntos de acceso",
  },
  {
    title: "Entorno industrial",
    alt: "Instalación de conectividad en entorno industrial",
  },
  {
    title: "Zona rural",
    alt: "Instalación de conectividad en zona rural",
  },
];