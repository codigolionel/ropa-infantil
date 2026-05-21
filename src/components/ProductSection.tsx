import { useMemo } from "react";
import { useDataFetch } from "@/hooks/useDataFetch";
import type { Producto } from "@/data/types";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";
import { ElegantDivider } from "@/components/ui/ElegantDivider";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { useState } from "react";

const ProductSection = () => {
  const { data: allProducts, loading } = useDataFetch<Producto[]>("/data/productos.json");
  const titleRef = useScrollReveal();
  const gridRef = useStaggerReveal(":scope > div", { staggerMs: 150 });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  /* Filtrar solo los productos marcados como destacados */
  const destacados = useMemo(
    () => (allProducts ?? []).filter((p) => p.destacado),
    [allProducts]
  );

  if (loading || !allProducts) {
    return (
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 text-center">
          <div className="w-8 h-8 border-2 border-calabaza border-t-transparent rounded-full animate-spin mx-auto" />
        </div>
      </section>
    );
  }

  return (
    <section id="productos" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative large blurred circle behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-calabaza/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={titleRef} className="text-center mb-20">
          <span className="text-calabaza text-xs font-semibold tracking-[0.3em] uppercase font-sans">
            Lo más elegido
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-marino mt-4">Productos Destacados</h2>
          <ElegantDivider />
        </div>

        {/* Renderizado dinámico con .map() — solo productos destacados */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
          {destacados.map((p) => (
            <div key={p.id} className="group flex flex-col items-center">
              <div 
                className="relative w-full aspect-[4/5] rounded-t-[50px] rounded-b-2xl overflow-hidden shadow-lg border-[6px] border-white transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-3 bg-white cursor-pointer"
                onClick={() => setSelectedImage(p.imagen)}
              >
                {/* REEMPLAZAR: El cliente debe colocar las imágenes reales de productos en public/images/ */}
                <img
                  src={p.imagen}
                  alt={p.nombre}
                  loading="lazy"
                  className="w-full h-full object-cover object-top origin-top scale-[1.08] transition-transform duration-700 group-hover:scale-[1.15]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Category badge */}
                <span className="absolute left-3 top-3 rounded-full px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.15em] bg-calabaza/90 text-white backdrop-blur-sm">
                  {p.categoria}
                </span>
                {/* Price floating badge – appears on hover */}
                <div className="absolute bottom-3 right-3 translate-y-3 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="inline-block rounded-full bg-white/95 px-4 py-1.5 font-sans text-sm font-bold text-marino shadow-lg backdrop-blur-sm">
                    ${p.precio.toLocaleString("es-AR")}
                  </span>
                </div>
              </div>
              <div className="text-center mt-6 px-4">
                <h3 className="font-heading text-xl text-marino font-semibold mb-3 relative inline-block">
                  {p.nombre}
                </h3>
                <p className="text-sm text-foreground/70 font-sans font-light leading-relaxed">
                  ${p.precio.toLocaleString("es-AR")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ImageLightbox src={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  );
};

export default ProductSection;
