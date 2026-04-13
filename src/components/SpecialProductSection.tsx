import specialMacaron from "@/assets/special-macaron.jpg";
import { Palette } from "lucide-react";

const SpecialProductSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <div className="flex-1 max-w-md">
          <img
            src={specialMacaron}
            alt="Macaron especial"
            loading="lazy"
            width={600}
            height={600}
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">Edición limitada</span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mt-3 leading-tight">
            Macaron Especial
          </h2>
          <p className="text-muted-foreground font-sans mt-4 max-w-md leading-relaxed">
            Nuestro macaron insignia, elaborado con crema de mantequilla francesa y un toque de vainilla de Madagascar. Una experiencia de sabor inigualable.
          </p>

          <div className="flex items-center gap-3 mt-6 justify-center md:justify-start">
            <Palette className="w-5 h-5 text-primary" />
            <span className="font-serif text-lg italic text-foreground">Cualquier color</span>
          </div>

          <a
            href="#reservation"
            className="inline-block mt-8 px-8 py-3 bg-primary text-primary-foreground text-sm uppercase tracking-widest rounded-full hover:bg-primary/90 transition-colors"
          >
            Ordenar Ahora
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default SpecialProductSection;
