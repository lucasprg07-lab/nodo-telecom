import { siteConfig } from "@/lib/config";
import { getGalleryItems } from "@/lib/gallery";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryGrid } from "@/components/ui/GalleryGrid";

export function Galeria() {
  if (!siteConfig.showGallery) return null;

  const items = getGalleryItems();

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Galería"
          title="Instalaciones"
          description="Una muestra de nuestro trabajo en campo."
        />
        <GalleryGrid items={items} />
      </Container>
    </section>
  );
}