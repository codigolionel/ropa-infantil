import promoBox from "@/assets/promo-box.jpg";

const PromoBanner = () => (
  <section className="relative overflow-hidden">
    {/* Wave top */}
    <svg viewBox="0 0 1440 60" className="w-full block -mb-px" preserveAspectRatio="none">
      <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="hsl(var(--rose-light))" />
    </svg>

    <div className="bg-rose-light py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">Oferta Especial</span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mt-3 leading-tight">
            Cualquier diseño para tu día festivo
          </h2>
          <p className="text-muted-foreground font-sans mt-4 max-w-md leading-relaxed">
            Personalizamos cada caja de macarons para bodas, cumpleaños, aniversarios y cualquier celebración especial. Haz de tu evento algo inolvidable.
          </p>
          <a
            href="#reservation"
            className="inline-block mt-8 px-8 py-3 bg-primary text-primary-foreground text-sm uppercase tracking-widest rounded-full hover:bg-primary/90 transition-colors"
          >
            Hacer Pedido
          </a>
        </div>

        <div className="flex-1 max-w-md">
          <img
            src={promoBox}
            alt="Caja de macarons regalo"
            loading="lazy"
            width={800}
            height={800}
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </div>

    {/* Wave bottom */}
    <svg viewBox="0 0 1440 60" className="w-full block -mt-px" preserveAspectRatio="none">
      <path d="M0,0 L1440,0 L1440,30 C960,60 480,0 0,30 Z" fill="hsl(var(--rose-light))" />
    </svg>
  </section>
);

export default PromoBanner;
