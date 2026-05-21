import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface ImageLightboxProps {
  src: string | null;
  onClose: () => void;
}

export const ImageLightbox = ({ src, onClose }: ImageLightboxProps) => {
  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-50 text-white/70 hover:text-white transition-colors bg-black/20 hover:bg-black/40 rounded-full p-2"
          >
            <X className="w-8 h-8" />
          </button>
          
          <motion.div
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl cursor-default bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={src}
              alt="Vista ampliada"
              // Mismo truco CSS para seguir ocultando los puntitos de Instagram en el modal
              className="w-full h-full object-cover object-top origin-top scale-[1.08]" 
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
