import { useDataFetch } from "@/hooks/useDataFetch";
import type { Categoria } from "@/data/types";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";
import { ElegantDivider } from "@/components/ui/ElegantDivider";

const CategoriesSection = () => {
  const { data: categorias, loading } = useDataFetch<Categoria[]>("/data/categorias.json");
  const titleRef = useScrollReveal();
  const gridRef = useStaggerReveal(":scope > div", { staggerMs: 150 });

  const handleCategoryClick = (categoryName: string) => {
    window.dispatchEvent(new CustomEvent("filter-category", { detail: categoryName }));
  };

  if (loading || !categorias) {
    return (
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="w-8 h-8 border-2 border-calabaza border-t-transparent rounded-full animate-spin mx-auto" />
        </div>
      </section>
    );
  }

  return (
    <section id="categorias" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center mb-20">
          <span className="text-calabaza text-xs font-semibold tracking-[0.3em] uppercase font-sans">
            Explorá
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-marino mt-4">Nuestras Categorías</h2>
          <ElegantDivider />
        </div>

        {/* Renderizado dinámico con .map() — datos desde categorias.json */}
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {categorias.map((cat) => (
            <a 
              key={cat.id} 
              href="#catalogo"
              onClick={() => handleCategoryClick(cat.nombre)}
              className="relative group text-center block cursor-pointer"
            >
              <div className="aspect-square rounded-full overflow-hidden mb-6 border-[8px] border-background shadow-md mx-auto w-4/5 transition-all duration-700 group-hover:scale-105 group-hover:border-calabaza/30 group-hover:shadow-xl">
                {/* REEMPLAZAR: El cliente debe colocar las imágenes reales en public/images/ con los nombres definidos en categorias.json */}
                <img
                  src={cat.imagen}
                  alt={`Categoría ${cat.nombre}`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top origin-top scale-[1.08] transition-transform duration-1000 group-hover:scale-[1.15]"
                />
              </div>
              <h3 className="font-heading text-xl text-marino font-semibold group-hover:text-calabaza transition-colors duration-300">
                {cat.nombre}
              </h3>
              <p className="text-xs font-sans tracking-[0.2em] text-calabaza uppercase mt-3">
                Ver colección →
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
