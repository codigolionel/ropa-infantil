import { useEffect, useRef } from "react";
import heroImg from "@/assets/hero-ceakes.jpg";

const Hero = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    // Fade-in inicial
    requestAnimationFrame(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero image — NO lazy loading (requisito) */}
      <img
        src={heroImg}
        alt="Pequeña Calabacita — Ropa infantil"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      {/* Overlay oscuro sutil para que el texto sea legible */}
      <div className="absolute inset-0 bg-black/60" />

      <div
        ref={contentRef}
        className="relative z-10 text-center px-6 max-w-3xl"
        style={{
          opacity: 0,
          transform: "translateY(30px)",
          transition: "opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6 mt-4">
          Ropa que los chicos{" "}
          <span className="italic text-calabaza-light text-shadow-sm">eligen.</span>
        </h1>

        <p className="text-white/90 text-sm md:text-lg font-sans max-w-xl mx-auto mb-10 leading-relaxed font-light">
          Telas suaves, tallas de 0 a 12 años. Porque vestirlos bien no debería ser complicado.
        </p>

        <a
          href="#productos"
          className="inline-block px-10 py-3 border border-white/60 text-white text-sm uppercase font-medium tracking-[0.2em] hover:bg-white/10 transition-colors rounded-full"
        >
          VER COLECCIÓN
        </a>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full block" preserveAspectRatio="none">
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
