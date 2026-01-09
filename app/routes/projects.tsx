import {
  Biohazard,
  BrickWall,
  ChevronDown,
  CloudRain,
  HousePlus,
  Images,
  LucideIcon
} from "lucide-react";
import { useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

import { getImageUrl } from "@/utils";

import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";

export function meta() {
  return [
    { title: "Project Gallery | Elite Basement Solutions" },
    {
      name: "description",
      content:
        "Browse our project gallery showcasing basement waterproofing, mold remediation, foundation repair, and home remodeling work throughout the Tri-State area."
    }
  ];
}

interface Photo {
  src: string;
  width: number;
  height: number;
  alt: string;
}

interface ImageData {
  id: string;
  width: number;
  height: number;
  alt: string;
}

interface ProjectCategory {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  images: ImageData[];
}

const createPhoto = (image: ImageData): Photo => {
  const { id, width, height, alt } = image;

  return {
    src: getImageUrl(id, `${width}x${height}`),
    width,
    height,
    alt
  };
};

const waterproofingImages: ImageData[] = [
  {
    id: "5c1ff590-d5c5-4ec7-b603-8e3b6f7ebb99",
    width: 800,
    height: 600,
    alt: "Interior drainage installation"
  },
  {
    id: "0e910767-ad5d-424b-a862-294bc0421889",
    width: 600,
    height: 800,
    alt: "Mira drain installation"
  },
  { id: "33233dc1-53fe-4c20-913f-e5dac2505882", width: 800, height: 800, alt: "PVC drainage pipe" },
  {
    id: "f21224db-aa2d-4025-90d9-3190c4bd8b1d",
    width: 1000,
    height: 600,
    alt: "Sump pump installation"
  },
  {
    id: "abf17c33-53ad-468f-9ae4-2e57aa468bc2",
    width: 600,
    height: 900,
    alt: "Cemented floor drain"
  },
  {
    id: "7f9d0bb2-0308-484f-aa15-a441e1f0deb8",
    width: 900,
    height: 600,
    alt: "Exterior waterproofing"
  },
  {
    id: "5c02d93d-e3c7-4d94-beb6-eb420bdaa2a6",
    width: 700,
    height: 700,
    alt: "Exterior wall encapsulation"
  },
  {
    id: "67d63c06-2535-43cc-8fc4-2c242bf5469e",
    width: 800,
    height: 500,
    alt: "Outside drainage system"
  }
];

const moldImages: ImageData[] = [
  {
    id: "87da2e6d-ad26-4a10-881b-05de7c6b3584",
    width: 800,
    height: 600,
    alt: "Black mold on wall"
  },
  {
    id: "2638532e-9d9f-463e-bea1-fe815a98f4f6",
    width: 600,
    height: 800,
    alt: "Black mold between wall studs"
  },
  {
    id: "d99fccc2-2eec-4ccb-94fa-5f5aefbfedd0",
    width: 800,
    height: 800,
    alt: "Drywall mold infestation"
  },
  { id: "dc2a7da4-4de5-4173-9c15-80f18b601834", width: 1000, height: 600, alt: "Mold in rafters" },
  {
    id: "0e13f5f9-46ae-472c-8964-318b44b9e91f",
    width: 600,
    height: 900,
    alt: "Mold on walls leading down stairs"
  },
  {
    id: "ff9c8399-d01f-4ff4-a0bd-659727660f32",
    width: 900,
    height: 600,
    alt: "Black mold behind drywall"
  },
  {
    id: "8b17e26f-d200-48ab-b275-82301931f06f",
    width: 700,
    height: 700,
    alt: "Disinfecting heavy mold colonies"
  },
  { id: "ddb58a0f-82cd-47c2-aa12-019af19672fe", width: 800, height: 500, alt: "Severe black mold" }
];

const foundationImages: ImageData[] = [
  { id: "", width: 800, height: 600, alt: "Foundation crack repair" },
  { id: "", width: 600, height: 800, alt: "Wall stabilization" },
  { id: "", width: 800, height: 800, alt: "Carbon fiber reinforcement" },
  { id: "", width: 1000, height: 600, alt: "Structural restoration" },
  { id: "", width: 600, height: 900, alt: "Basement wall repair" },
  { id: "", width: 900, height: 600, alt: "Foundation waterproofing" },
  { id: "", width: 700, height: 700, alt: "Crack injection" },
  { id: "", width: 800, height: 500, alt: "Wall anchor installation" }
];

const remodelingImages: ImageData[] = [
  { id: "", width: 800, height: 600, alt: "Basement finishing" },
  { id: "", width: 600, height: 800, alt: "Custom renovation" },
  { id: "", width: 800, height: 800, alt: "Flooring installation" },
  { id: "", width: 1000, height: 600, alt: "Living space transformation" },
  { id: "", width: 600, height: 900, alt: "Ceiling work" },
  { id: "", width: 900, height: 600, alt: "Bathroom addition" },
  { id: "", width: 700, height: 700, alt: "Home theater build" },
  { id: "", width: 800, height: 500, alt: "Complete basement remodel" }
];

const projectCategories: ProjectCategory[] = [
  {
    id: "waterproofing",
    name: "Waterproofing",
    description:
      "Interior drainage systems, sump pump installations, wall encapsulation, and complete basement waterproofing solutions.",
    icon: CloudRain,
    color: "bg-blue-500/20 text-blue-400",
    images: waterproofingImages
  },
  {
    id: "mold",
    name: "Mold Remediation",
    description:
      "Professional mold removal, containment, HEPA filtration, and air quality restoration projects.",
    icon: Biohazard,
    color: "bg-emerald-500/20 text-emerald-400",
    images: moldImages
  },
  {
    id: "foundation",
    name: "Foundation Repair",
    description:
      "Crack repair, wall stabilization, carbon fiber reinforcement, and structural restoration work.",
    icon: BrickWall,
    color: "bg-amber-500/20 text-amber-400",
    images: foundationImages
  },
  {
    id: "remodeling",
    name: "Home Remodeling",
    description:
      "Basement finishing, custom renovations, flooring, ceilings, and complete living space transformations.",
    icon: HousePlus,
    color: "bg-purple-500/20 text-purple-400",
    images: remodelingImages
  }
];

const CategorySection = ({ category }: { category: ProjectCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const Icon = category.icon;
  const photos = category.images.map(createPhoto);

  return (
    <section className="mb-6">
      <button
        className="bg-surface hover:bg-surface/80 flex w-full cursor-pointer items-center justify-between rounded-2xl p-5 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          <div className={`rounded-xl p-3 ${category.color}`}>
            <Icon size={24} />
          </div>
          <div className="text-left">
            <h2 className="text-primary text-xl font-semibold">{category.name}</h2>
            <p className="text-muted mt-1 text-sm">{category.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-muted text-sm">{category.images.length} photos</span>
          <ChevronDown
            className={`text-muted transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            size={24}
          />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "mt-4 max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
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
            targetRowHeight={200}
            onClick={({ index }) => setLightboxIndex(index)}
          />
        </div>
      </div>
      <Lightbox
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        open={lightboxIndex >= 0}
        slides={category.images.map((image) => ({
          src: getImageUrl(image.id, "1600x1200"),
          alt: image.alt
        }))}
      />
    </section>
  );
};

export default function Projects() {
  const totalPhotos = projectCategories.reduce((sum, cat) => sum + cat.images.length, 0);

  return (
    <article className="mx-auto max-w-6xl pb-24 md:pb-0">
      <header className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-surface rounded-2xl p-6 md:p-8 lg:col-span-2">
          <p className="text-elite-teal mb-2 text-xs font-medium tracking-[0.2em]">OUR WORK</p>
          <h1 className="text-primary font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">
            Project Gallery
          </h1>
          <div className="bg-elite-teal/20 my-6 h-px w-24" />
          <p className="text-muted mt-4 text-base md:text-lg">
            Browse through our completed projects across waterproofing, mold remediation, foundation
            repair, and home remodeling. Each project showcases our commitment to quality
            craftsmanship and customer satisfaction.
          </p>
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
      {projectCategories.map((category) => (
        <CategorySection key={category.id} category={category} />
      ))}
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#0d0d0d] p-6 md:flex-row md:p-8">
        <div>
          <p className="text-center text-lg font-medium text-white md:text-left md:text-xl">
            Like what you see?
          </p>
          <p className="text-center text-sm text-white/60 md:text-left">
            Let us revamp your living space into something amazing
          </p>
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
