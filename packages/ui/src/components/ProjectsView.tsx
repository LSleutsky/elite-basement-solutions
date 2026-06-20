import { ChevronDown, Images, LucideIcon } from "lucide-react";
import { useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

import { buildImageUrl, capitalizeWords } from "@elite/ui/utils";

import { SiteConfig } from "@elite/ui/types";

import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";

interface ImageEntry {
  filename: string;
  width: number;
  height: number;
}

export interface CategoryData {
  category: string;
  images: ImageEntry[];
}

export interface CategoryMeta {
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

interface CategorySectionProps {
  config: SiteConfig;
  category: string;
  images: ImageEntry[];
  meta: CategoryMeta;
}

interface ProjectsViewProps {
  config: SiteConfig;
  categories: CategoryData[];
  categoryMeta: Record<string, CategoryMeta>;
  categoryOrder: string[];
  intro: string;
  ctaLine: string;
}

const getAltText = (filename: string): string => {
  const name = filename.replace(/\.[^.]+$/, "").replace(/_[a-zA-Z0-9-]+$/, "");

  return capitalizeWords(name.replace(/[-_]/g, " "));
};

const CategorySection = ({ config, category, images, meta }: CategorySectionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const Icon = meta.icon;

  const photos = images.map((image) => ({
    src: buildImageUrl(config, category, image.filename, 800),
    width: image.width,
    height: image.height,
    alt: getAltText(image.filename)
  }));

  return (
    <section className="mb-6">
      <button
        className="bg-surface hover:bg-surface/80 flex w-full cursor-pointer items-center justify-between rounded-2xl p-5 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          <div className={`rounded-xl p-3 ${meta.color}`}>
            <Icon size={24} />
          </div>
          <div className="text-left">
            <h2 className="text-primary text-xl font-semibold">{meta.name}</h2>
            <p className="text-muted mt-1 text-sm">{meta.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-muted text-sm">{images.length} photos</span>
          <ChevronDown
            className={`text-muted transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            size={24}
          />
        </div>
      </button>
      <div
        className={`grid transition-all duration-500 ${
          isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="bg-surface rounded-2xl p-4">
            <RowsPhotoAlbum
              componentsProps={{
                button: {
                  className:
                    "rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
                },
                image: {
                  loading: "lazy"
                }
              }}
              photos={photos}
              rowConstraints={{ maxPhotos: 4 }}
              spacing={8}
              targetRowHeight={200}
              onClick={({ index }) => setLightboxIndex(index)}
            />
          </div>
        </div>
      </div>
      <Lightbox
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        open={lightboxIndex >= 0}
        slides={images.map((image) => ({
          src: buildImageUrl(config, category, image.filename, 1600),
          alt: getAltText(image.filename)
        }))}
      />
    </section>
  );
};

export default function ProjectsView({
  config,
  categories,
  categoryMeta,
  categoryOrder,
  intro,
  ctaLine
}: ProjectsViewProps) {
  const categoryMap = new Map(categories.map((category) => [category.category, category.images]));
  const orderedCategories = categoryOrder.filter((id) => categoryMap.has(id) && categoryMeta[id]);
  const totalPhotos = categories.reduce((sum, category) => sum + category.images.length, 0);

  return (
    <article className="mx-auto max-w-6xl pb-24 md:pb-0">
      <header className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2">
          <p className="text-elite-teal mb-2 text-xs font-medium tracking-[0.2em]">OUR WORK</p>
          <h1 className="text-primary font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">
            Project Gallery
          </h1>
          <div className="bg-elite-teal/20 my-6 h-px w-24" />
          <p className="text-muted mt-4 text-base md:text-lg">{intro}</p>
        </div>
        <div className="bg-elite-teal flex flex-col items-center justify-center rounded-2xl p-6 text-center">
          <Images className="mb-2 h-8 w-8 text-white/80" />
          <span className="text-3xl font-semibold text-white">{totalPhotos}+</span>
          <p className="mt-1 text-sm text-white/80">Project photos</p>
        </div>
      </header>
      <div className="bg-surface mb-6 rounded-2xl p-4">
        <p className="text-muted text-center text-sm">
          Click on any category to expand or collapse. Click on any photo to view it in full size
          and browse through the gallery.
        </p>
      </div>
      {orderedCategories.map((category) => (
        <CategorySection
          key={category}
          category={category}
          config={config}
          images={categoryMap.get(category)!}
          meta={categoryMeta[category]}
        />
      ))}
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#0d0d0d] p-6 md:flex-row md:p-8">
        <div>
          <p className="text-center text-lg font-medium text-white md:text-left md:text-xl">
            Like what you see?
          </p>
          <p className="text-center text-sm text-white/60 md:text-left">{ctaLine}</p>
        </div>
        <a
          className="bg-elite-teal rounded-full px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          href="/contact"
        >
          Get Free Quote
        </a>
      </div>
    </article>
  );
}
