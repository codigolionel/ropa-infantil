import { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import galleryCake from "@/assets/gallery-cake.jpg";
import tortas from "@/assets/tortas1.png";
import cakeClassic from "@/assets/cake-classic.jpg";
import cakeChocolate from "@/assets/cake-chocolate.jpg";
import cakeThemed from "@/assets/cake-themed.jpg";
import cakeNaked from "@/assets/cake-naked.jpg";
import specialCake from "@/assets/special-cake.jpg";
import flavorVanilla from "@/assets/flavor-vanilla.jpg";
import flavorChoco from "@/assets/flavor-choco-cake.jpg";
import flavorRedvelvet from "@/assets/flavor-redvelvet.jpg";
import promoCake from "@/assets/promo-cake.jpg";
import heroImg from "@/assets/hero-cakes.jpg";

const images = [
  { src: tortas, alt: "Tortas especiales", className: "col-span-1 row-span-2" },
  { src: cakeClassic, alt: "Torta clásica con rosas", className: "col-span-1 row-span-1" },
  { src: cakeChocolate, alt: "Torta de chocolate", className: "col-span-1 row-span-1" },
  { src: galleryCake, alt: "Pastel decorado", className: "col-span-1 row-span-2" },
  { src: cakeThemed, alt: "Torta temática unicornio", className: "col-span-1 row-span-1" },
  { src: cakeNaked, alt: "Naked cake con flores", className: "col-span-1 row-span-1" },
  { src: specialCake, alt: "Torta de autor", className: "col-span-1 row-span-1" },
  { src: flavorVanilla, alt: "Torta de vainilla y fresas", className: "col-span-1 row-span-2" },
  { src: flavorChoco, alt: "Torta de chocolate premium", className: "col-span-1 row-span-1" },
  { src: flavorRedvelvet, alt: "Torta red velvet", className: "col-span-1 row-span-1" },
  { src: promoCake, alt: "Torta regalo", className: "col-span-1 row-span-1" },
  { src: heroImg, alt: "Torta de cumpleaños elegante", className: "col-span-1 row-span-2" },
];

const GallerySection = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = () => setLightboxIndex(null);
  const prev = useCallback(() => setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null)), []);
  const next = useCallback(() => setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null)), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, prev, next]);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-chocolate text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-primary-foreground/60 font-sans">Inspiración dulce</span>
          <h2 className="font-serif text-3xl md:text-5xl text-cream mt-3">Nuestras Creaciones</h2>
          <div className="w-16 h-px bg-primary mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`${img.className} rounded-2xl overflow-hidden group cursor-pointer`}
              onClick={() => setLightboxIndex(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center animate-in fade-in duration-200"
          onClick={close}
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <img
            src={images[lightboxIndex].src}
            alt={images[lightboxIndex].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-6 text-center w-full">
            <p className="text-white/70 font-sans text-sm">{images[lightboxIndex].alt}</p>
            <p className="text-white/40 font-sans text-xs mt-1">{lightboxIndex + 1} / {images.length}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
