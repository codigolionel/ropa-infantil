import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";

const PromoBanner = () => {
  const textRef = useScrollReveal();

  return (
    <section className="relative overflow-hidden bg-calabaza-light py-24 md:py-32">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.08\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[3rem] p-8 md:p-16 shadow-xl">
          <div ref={textRef} className="text-center max-w-2xl mx-auto">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-calabaza/10 mb-8"
            >
              <span className="text-4xl">🏷️</span>
            </motion.div>

            <span className="text-marino/60 text-xs font-semibold tracking-[0.3em] uppercase font-sans block">
              Promoción Especial
            </span>
            <h2 className="font-heading text-4xl md:text-6xl text-marino mt-4 leading-tight">
              <span className="text-calabaza">20% OFF</span>
            </h2>
            <p className="font-heading text-2xl md:text-3xl text-marino mt-2 leading-tight">
              pagando en efectivo o transferencia
            </p>
            <div className="flex items-center justify-center gap-4 my-8">
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-calabaza/40 to-calabaza/40"></div>
              <div className="w-2 h-2 rounded-full bg-calabaza/40"></div>
              <div className="h-[1px] w-16 bg-gradient-to-l from-transparent via-calabaza/40 to-calabaza/40"></div>
            </div>
            <p className="text-marino/70 font-sans font-light mt-4 text-lg leading-relaxed max-w-md mx-auto">
              Aprovechá este beneficio en toda nuestra colección de ropa y accesorios infantiles. ¡Vestí a tus peques con la mejor calidad al mejor precio!
            </p>
            <a
              href="https://www.instagram.com/calabacita.kids"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-10 py-4 bg-marino text-white text-xs uppercase font-semibold tracking-[0.2em] rounded hover:bg-calabaza transition-colors duration-300"
            >
              Consultar Disponibilidad
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
