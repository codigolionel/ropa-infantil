import { Smartphone, ShoppingBag, Truck, Heart } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";
import { ElegantDivider } from "@/components/ui/ElegantDivider";

const shippingInfo = [
  { icon: Smartphone, title: "Nos contactás", desc: "Escribinos por Instagram o WhatsApp con las prendas que te gusten." },
  { icon: ShoppingBag, title: "Elegís", desc: "Armamos tu pedido con los talles y modelos que necesites." },
  { icon: Truck, title: "Enviamos", desc: "Coordinamos la entrega o el envío rápido en nuestra zona." },
  { icon: Heart, title: "Disfrutás", desc: "Recibís la ropita lista para estrenar con mucho amor." },
];

const ShippingSection = () => {
  const titleRef = useScrollReveal();
  const gridRef = useStaggerReveal(":scope > div", { staggerMs: 100 });

  return (
    <section className="py-24 md:py-32 bg-arena relative overflow-hidden">
      {/* Subtle decorative blob */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-calabaza/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-calabaza text-xs font-semibold tracking-[0.3em] uppercase font-sans">
            Comprá con confianza
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-marino mt-4">
            ¿Cómo comprar?
          </h2>
          <ElegantDivider />
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {shippingInfo.map((info, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 text-center shadow-sm border border-black/[0.04] hover:shadow-md transition-shadow duration-300 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-calabaza/10 text-calabaza flex items-center justify-center mb-6 rotate-3">
                <info.icon strokeWidth={1.5} className="w-8 h-8 -rotate-3" />
              </div>
              <h3 className="font-heading text-xl text-marino font-semibold mb-3">
                {info.title}
              </h3>
              <p className="text-foreground/70 font-sans text-sm font-light leading-relaxed">
                {info.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShippingSection;
