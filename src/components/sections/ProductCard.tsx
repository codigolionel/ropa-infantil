import { motion } from "framer-motion";
import type { Producto } from "@/data/types";

interface ProductCardProps {
  product: Producto;
  index: number;
  onClickImage?: (src: string) => void;
}

/**
 * Mapping of category names to their badge color classes.
 * Makes each category visually distinct while staying on-brand.
 */
const categoryColors: Record<string, string> = {
  "Bebés": "bg-calabaza/90 text-white",
  "Nenas": "bg-[hsl(330_60%_70%)]/90 text-white",
  "Nenes": "bg-marino/90 text-white",
  "Accesorios": "bg-calabaza-light text-marino",
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const ProductCard = ({ product, index, onClickImage }: ProductCardProps) => {
  const badgeClass =
    categoryColors[product.categoria] ?? "bg-muted text-foreground";

  return (
    <motion.article
      layout
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md shadow-black/[0.04] ring-1 ring-black/[0.04] transition-shadow duration-500 hover:shadow-xl hover:shadow-calabaza/10 hover:ring-calabaza/20"
    >
      {/* ── Image Container ── */}
      <div 
        className={`relative aspect-[4/5] overflow-hidden bg-arena ${onClickImage ? 'cursor-pointer' : ''}`}
        onClick={() => onClickImage && onClickImage(product.imagen)}
      >
        {/* REEMPLAZAR: El cliente debe colocar las imágenes reales de productos en public/images/ */}
        <img
          src={product.imagen}
          alt={product.nombre}
          loading="lazy"
          className="h-full w-full object-cover object-top origin-top scale-[1.08] transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.15]"
        />

        {/* Hover gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Category badge */}
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.15em] backdrop-blur-sm ${badgeClass}`}
        >
          {product.categoria}
        </span>

        {/* Price floating badge – appears on hover */}
        <div className="absolute bottom-3 right-3 translate-y-3 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <span className="inline-block rounded-full bg-white/95 px-4 py-1.5 font-sans text-sm font-bold text-marino shadow-lg backdrop-blur-sm">
            ${product.precio.toLocaleString("es-AR")}
          </span>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-1 flex-col p-5 pt-4">
        <h3 className="font-heading text-lg font-semibold leading-snug text-marino transition-colors duration-300 group-hover:text-calabaza md:text-xl">
          {product.nombre}
        </h3>

        {/* Price */}
        <div className="mt-auto pt-3">
          <span className="font-sans text-lg font-bold text-marino md:text-xl">
            ${product.precio.toLocaleString("es-AR")}
          </span>
        </div>
      </div>
    </motion.article>
  );
};

export default ProductCard;
