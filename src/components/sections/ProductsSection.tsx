import { useState, useEffect, useRef, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";

import { useDataFetch } from "@/hooks/useDataFetch";
import type { Producto } from "@/data/types";
import ProductCard from "@/components/sections/ProductCard";
import { ImageLightbox } from "@/components/ui/ImageLightbox";

/* ── Register GSAP plugins ── */
gsap.registerPlugin(ScrollTrigger);

/* ── Category icon mapping (for filter pills) ── */
const categoryEmoji: Record<string, string> = {
  Todos: "✦",
  "Bebés": "👶",
  "Nenas": "👧",
  "Nenes": "👦",
  "Accesorios": "🎀",
};

const ALL_LABEL = "Todos";

const ProductsSection = () => {
  const { data: allProducts, loading } = useDataFetch<Producto[]>("/data/productos.json");
  const [activeCategory, setActiveCategory] = useState(ALL_LABEL);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleFilterCategory = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setActiveCategory(customEvent.detail);
      }
    };
    window.addEventListener("filter-category", handleFilterCategory);
    return () => window.removeEventListener("filter-category", handleFilterCategory);
  }, []);

  /* Refs for GSAP */
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);

  /* ── Derive unique categories from data ── */
  const categories = useMemo(() => {
    if (!allProducts) return [ALL_LABEL];
    return [ALL_LABEL, ...Array.from(new Set(allProducts.map((p) => p.categoria)))];
  }, [allProducts]);

  /* ── Filtered products (memoized) ── */
  const filteredProducts = useMemo(
    () =>
      !allProducts
        ? []
        : activeCategory === ALL_LABEL
          ? allProducts
          : allProducts.filter((p) => p.categoria === activeCategory),
    [activeCategory, allProducts]
  );

  /* ── GSAP Scroll Animations ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Header reveal */
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          y: 50,
          opacity: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      /* Filters reveal */
      if (filtersRef.current) {
        gsap.from(filtersRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: filtersRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [allProducts]);

  if (loading || !allProducts) {
    return (
      <section className="py-24 md:py-32 bg-arena">
        <div className="container mx-auto px-6 text-center">
          <div className="w-8 h-8 border-2 border-calabaza border-t-transparent rounded-full animate-spin mx-auto" />
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="catalogo"
      className="relative overflow-hidden bg-arena py-24 md:py-32"
    >
      {/* ── Decorative background elements ── */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-calabaza/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-[400px] w-[400px] rounded-full bg-marino/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-calabaza/20 to-transparent" />

      <div className="container relative z-10 mx-auto px-6">
        {/* ── Section Header ── */}
        <div ref={headerRef} className="mb-16 text-center">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-calabaza">
            Catálogo
          </span>
          <h2 className="mt-4 font-heading text-4xl text-marino md:text-5xl lg:text-6xl">
            Nuestros Productos
          </h2>

          {/* Elegant divider */}
          <div className="my-6 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-calabaza/50 to-calabaza/50" />
            <Sparkles
              className="h-4 w-4 text-calabaza/70"
              strokeWidth={1.5}
            />
            <div className="h-px w-12 bg-gradient-to-l from-transparent via-calabaza/50 to-calabaza/50" />
          </div>

          <p className="mx-auto max-w-xl font-sans text-sm font-light leading-relaxed text-foreground/60 md:text-base">
            Cada prenda es seleccionada con amor y cuidado para vestir a los más
            pequeños con comodidad, estilo y la mejor calidad.
          </p>
        </div>

        {/* ── Category Filters ── */}
        <div ref={filtersRef} className="mb-14 flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative rounded-full px-5 py-2.5 font-sans text-xs font-medium uppercase tracking-[0.12em] transition-all duration-300 md:text-sm ${
                    isActive
                      ? "bg-marino text-white shadow-lg shadow-marino/20"
                      : "bg-white text-marino/70 shadow-sm ring-1 ring-black/[0.06] hover:bg-calabaza-light hover:text-marino hover:ring-calabaza/20"
                  }`}
                >
                  <span className="mr-1.5">
                    {categoryEmoji[cat] ?? "•"}
                  </span>
                  {cat}
                  {isActive && (
                    <motion.span
                      layoutId="activeFilterDot"
                      className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-calabaza"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* ── Product count ── */}
        <div className="mb-8 text-center">
          <motion.p
            key={activeCategory}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-xs font-light tracking-wider text-foreground/40"
          >
            Mostrando{" "}
            <span className="font-medium text-marino">
              {filteredProducts.length}
            </span>{" "}
            {filteredProducts.length === 1 ? "producto" : "productos"}
            {activeCategory !== ALL_LABEL && (
              <>
                {" "}
                en{" "}
                <span className="font-medium text-calabaza">
                  {activeCategory}
                </span>
              </>
            )}
          </motion.p>
        </div>

        {/* ── Product Grid — renderizado dinámico con .map() ── */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onClickImage={setSelectedImage}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="font-heading text-lg italic text-marino/60 md:text-xl">
            Sigue viendo nuestros productos
          </p>
          <a
            href="https://www.instagram.com/calabacita.kids"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-full bg-marino px-10 py-4 font-sans text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-marino/20 transition-all duration-300 hover:bg-calabaza hover:shadow-calabaza/20"
          >
            Por Instagram
          </a>
        </motion.div>
      </div>

      <ImageLightbox src={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  );
};

export default ProductsSection;
