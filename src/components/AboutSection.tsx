import aboutImg from "@/assets/about-us.jpg";
import { Heart, Award, Sparkles } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";
import { ElegantDivider } from "@/components/ui/ElegantDivider";

const highlights = [
  { icon: Heart, label: "Diseños Únicos", desc: "Cada prenda está pensada para la comodidad y el estilo." },
  { icon: Award, label: "Calidad Premium", desc: "Telas suaves y resistentes que acompañan su crecimiento." },
  { icon: Sparkles, label: "Envíos a todo el país", desc: "Llegamos a la puerta de tu casa, estés donde estés." },
];

const AboutSection = () => {
  const imgRef = useScrollReveal();
  const textRef = useScrollReveal({ delay: 200 });
  const highlightsRef = useStaggerReveal(":scope > div", { staggerMs: 120 });

  return (
    <section id="nosotros" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative floral-like blurred background blob */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-calabaza-light/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div ref={imgRef} className="lg:w-1/2 relative">
            <div className="relative rounded-t-full rounded-b-2xl overflow-hidden shadow-2xl border-8 border-white p-2 bg-white">
              {/* REEMPLAZAR: El cliente debe colocar la imagen real de la tienda/marca */}
              <img
                src={aboutImg}
                alt="Pequeña Calabacita — Nuestra historia"
                loading="lazy"
                width={800}
                height={1000}
                className="rounded-t-full rounded-b-lg w-full object-cover aspect-[3/4]"
              />
            </div>
          </div>

          <div ref={textRef} className="lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">
            <span className="text-calabaza text-xs font-semibold tracking-[0.3em] uppercase font-sans">Nuestra historia</span>
            <h2 className="font-heading text-4xl md:text-5xl text-marino mt-4 leading-tight">
              Vestimos infancias felices
            </h2>
            <div className="flex justify-center lg:justify-start">
              <ElegantDivider />
            </div>

            <p className="text-foreground/80 font-sans font-light mt-2 text-lg leading-relaxed">
              En <span className="font-heading font-semibold text-marino">Pequeña Calabacita</span> creemos que la ropa infantil debe ser tan divertida y alegre como los niños que la usan, sin dejar de lado la calidad y la comodidad.
            </p>
            <p className="text-foreground/70 font-sans font-light mt-4 leading-relaxed">
              Nacimos en Santa Fe con la misión de ofrecer prendas y accesorios únicos, seleccionados con muchísimo amor para acompañar a tus peques en todas sus aventuras.
            </p>

            <div ref={highlightsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border/50">
              {highlights.map((h) => (
                <div key={h.label} className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3">
                  <div className="w-10 h-10 rounded-full border border-calabaza/30 flex items-center justify-center bg-calabaza/5">
                    <h.icon className="w-5 h-5 text-calabaza" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-base text-marino font-semibold">{h.label}</h3>
                  <p className="text-xs text-foreground/60 font-sans font-light leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
