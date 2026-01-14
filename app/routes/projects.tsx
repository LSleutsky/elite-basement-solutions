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

import { createMeta, getImageUrl } from "@/utils";

import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";

export function meta() {
  return createMeta({
    title: "Project Gallery | Elite Basement Solutions",
    description:
      "Browse our project gallery showcasing basement waterproofing, mold remediation, foundation repair, and basement remodeling work throughout the Tri-State area.",
    path: "projects"
  });
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
    width: 1200,
    height: 800,
    alt: "Interior drainage installation"
  },
  {
    id: "0e910767-ad5d-424b-a862-294bc0421889",
    width: 600,
    height: 900,
    alt: "Mira drain installation"
  },
  { id: "e54673ef-aa50-4fd6-a1de-5b7ed13ea0d0", width: 700, height: 700, alt: "PVC drainage pipe" },
  {
    id: "f21224db-aa2d-4025-90d9-3190c4bd8b1d",
    width: 1400,
    height: 700,
    alt: "Sump pump installation"
  },
  {
    id: "ffde64bc-ad84-4fe0-a82c-b1a3358e0308",
    width: 600,
    height: 1000,
    alt: "Cemented floor drain"
  },
  {
    id: "9231e052-8c0c-4be2-9a87-b4b248308df9",
    width: 1000,
    height: 700,
    alt: "Basement drainage"
  },
  {
    id: "59be4c39-2a41-421a-9762-51663285ac8e",
    width: 800,
    height: 800,
    alt: "PVC drainage system"
  },
  {
    id: "40b9e3d4-e0d6-4c7a-814e-dd2c9cebcef5",
    width: 1200,
    height: 600,
    alt: "Sump pump basin"
  },
  {
    id: "eb2696e9-0c14-4874-8929-4ab8212f0dc6",
    width: 900,
    height: 600,
    alt: "Finished french drain system"
  },
  {
    id: "d7835a15-eaa8-42df-b1f2-ddead5939bfb",
    width: 700,
    height: 1000,
    alt: "Finished french drain system"
  },
  {
    id: "adba0f94-2a1c-4023-9c20-6e490ba25322",
    width: 1100,
    height: 700,
    alt: "Finished french drain system"
  },
  {
    id: "52145230-21fc-4540-8cae-53095867c8c2",
    width: 750,
    height: 750,
    alt: "Finished french drain system"
  }
];

const moldImages: ImageData[] = [
  {
    id: "87da2e6d-ad26-4a10-881b-05de7c6b3584",
    width: 1100,
    height: 750,
    alt: "Black mold on wall"
  },
  {
    id: "2638532e-9d9f-463e-bea1-fe815a98f4f6",
    width: 650,
    height: 950,
    alt: "Black mold between wall studs"
  },
  {
    id: "d99fccc2-2eec-4ccb-94fa-5f5aefbfedd0",
    width: 750,
    height: 750,
    alt: "Drywall mold infestation"
  },
  { id: "dc2a7da4-4de5-4173-9c15-80f18b601834", width: 1300, height: 700, alt: "Mold in rafters" },
  {
    id: "0e13f5f9-46ae-472c-8964-318b44b9e91f",
    width: 600,
    height: 1000,
    alt: "Mold on walls leading down stairs"
  },
  {
    id: "ff9c8399-d01f-4ff4-a0bd-659727660f32",
    width: 1000,
    height: 650,
    alt: "Black mold behind drywall"
  },
  {
    id: "8b17e26f-d200-48ab-b275-82301931f06f",
    width: 800,
    height: 800,
    alt: "Disinfecting heavy mold colonies"
  },
  { id: "ddb58a0f-82cd-47c2-aa12-019af19672fe", width: 1200, height: 650, alt: "Severe black mold" }
];

const foundationImages: ImageData[] = [
  {
    id: "365832c8-f5a5-40ef-9818-cb79974a2b67",
    width: 750,
    height: 750,
    alt: "Foundation crack repair"
  },
  {
    id: "0e3456fd-6263-4046-a4c0-3c7d6326f004",
    width: 650,
    height: 1000,
    alt: "Wall stabilization"
  },
  {
    id: "a7ec9026-c4fa-45fe-98e4-c1cc462ae61d",
    width: 1100,
    height: 700,
    alt: "Carbon fiber reinforcement"
  },
  {
    id: "d5047536-61f3-4385-97c6-fc9f850bf14a",
    width: 1300,
    height: 650,
    alt: "Basement structural restoration"
  },
  {
    id: "ee0780a3-fbc8-4a27-87ab-fa974ea4c9c6",
    width: 700,
    height: 950,
    alt: "Basement wall repair"
  },
  {
    id: "d1fdde08-eea9-40f4-a0f7-a5dcd3a4ca67",
    width: 1000,
    height: 700,
    alt: "Foundation crack fix"
  },
  { id: "5830b996-2dfc-473e-82c7-deca4dd78173", width: 800, height: 800, alt: "Crack injection" },
  {
    id: "8806dda3-4372-4641-bc9c-f456e79e0fcc",
    width: 1200,
    height: 600,
    alt: "Wall anchor installation"
  },
  { id: "facc60ff-68b9-4a13-8a16-0cc5dcaf319a", width: 600, height: 900, alt: "Wall staples" },
  { id: "f1eea8ec-2e69-42c7-b9f3-3a84f207644e", width: 650, height: 1000, alt: "Wall pins" }
];

const remodelingImages: ImageData[] = [
  {
    id: "e91b6fc1-15f9-43c8-9c00-6c384151ed8e",
    width: 1200,
    height: 750,
    alt: "Basement finishing"
  },
  { id: "77a0dae5-21ff-4e6c-a080-2569a8bf526e", width: 650, height: 950, alt: "Custom renovation" },
  {
    id: "91569d59-a901-4f0d-a982-6b4ade5cf08b",
    width: 800,
    height: 800,
    alt: "Flooring installation"
  },
  {
    id: "62131629-912f-464e-8fb5-7136b125ca1e",
    width: 1400,
    height: 700,
    alt: "Living space transformation"
  },
  { id: "45491a07-2e11-4445-813b-78efabdce834", width: 600, height: 1000, alt: "Ceiling work" },
  {
    id: "1d17c163-f6fe-4f1b-a85f-63e996485636",
    width: 1100,
    height: 700,
    alt: "Bathroom addition"
  },
  {
    id: "fadd2dfb-09b2-42ed-8a99-c98600490d0f",
    width: 750,
    height: 750,
    alt: "Home theater build"
  },
  {
    id: "555d3dbc-2284-49ea-96bd-e7eeed277774",
    width: 1300,
    height: 650,
    alt: "Complete basement remodel"
  },
  {
    id: "abd67c27-b2fc-47c7-9ce7-d4035f0633b1",
    width: 1000,
    height: 700,
    alt: "Basement laundry room"
  },
  {
    id: "3547e399-9ef6-49e3-85c9-b47d6db7efcd",
    width: 700,
    height: 950,
    alt: "Basement full bathroom"
  },
  { id: "d4f67bc1-d03d-4ba3-85b2-81a000d5eefb", width: 850, height: 850, alt: "Basement man cave" },
  { id: "4c5b0024-4027-40a8-97e5-14f2d849486f", width: 1200, height: 650, alt: "Basement storage" },
  {
    id: "7a299ec7-638b-4872-b61f-0b5e86a36c84",
    width: 950,
    height: 700,
    alt: "Custom basement remodel"
  },
  {
    id: "694f26ad-aae6-470b-a2af-87f1286de230",
    width: 1100,
    height: 750,
    alt: "Custom basement living space"
  }
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
    name: "Basement Renovations",
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
            repair, and basement renovations. Each project showcases our commitment to quality
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
