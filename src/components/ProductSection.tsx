import macaronOrganic from "@/assets/macaron-organic.jpg";
import macaronFlowers from "@/assets/macaron-flowers.jpg";
import macaronFashion from "@/assets/macaron-fashion.jpg";
import macaronMix from "@/assets/macaron-mix.jpg";

const products = [
  { title: "Macarons Orgánicos", description: "Elaborados con ingredientes 100% naturales y orgánicos certificados.", image: macaronOrganic },
  { title: "Macarons de Flores", description: "Decorados con pétalos comestibles y esencias florales delicadas.", image: macaronFlowers },
  { title: "Macarons de Moda", description: "Colores vibrantes y presentaciones exclusivas para cada temporada.", image: macaronFashion },
  { title: "Mezcla para Macarons", description: "Kits artesanales para que crees tus propios macarons en casa.", image: macaronMix },
];

const ProductSection = () => (
  <section id="products" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">Nuestros favoritos</span>
        <h2 className="font-serif text-3xl md:text-5xl text-foreground mt-3">Nuestros Macarons</h2>
        <div className="w-16 h-px bg-primary mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p) => (
          <div key={p.title} className="group bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-border/50">
            <div className="aspect-square overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={512}
                height={512}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="font-serif text-lg text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductSection;
