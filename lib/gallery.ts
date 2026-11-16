import { readdirSync } from "fs";
import { join } from "path";
import type { GalleryItem } from "@/types";

const GALLERY_DIR = join(process.cwd(), "public", "images", "galeria");

/**
 * Lee las fotos reales de /public/images/galeria/ en build time.
 * Devuelve una lista vacía si la carpeta no existe o no hay imágenes.
 * El `alt` se genera a partir del nombre del archivo (editable luego).
 */
export function getGalleryItems(): GalleryItem[] {
  try {
    return readdirSync(GALLERY_DIR)
      .filter((file) => /\.(png|jpe?g|webp)$/i.test(file))
      .sort()
      .map((file) => ({
        src: `/images/galeria/${file}`,
        alt: file.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " "),
      }));
  } catch {
    return [];
  }
}