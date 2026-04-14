import aboutImg from "@/assets/about-us.jpg";
import { Heart, Award, Sparkles } from "lucide-react";

const highlights = [
  { icon: Heart, label: "Hecho con amor", desc: "Cada torta lleva dedicación y pasión artesanal." },
  { icon: Award, label: "Ingredientes premium", desc: "Solo usamos los mejores ingredientes seleccionados." },
  { icon: Sparkles, label: "Diseño único", desc: "Creamos diseños personalizados para cada ocasión." },
];

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <div className="flex-1 max-w-md">
          <img
            src={aboutImg}
            alt="Nuestra pastelera creando una torta"
            loading="lazy"
            width={800}
            height={600}
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">Nuestra historia</span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mt-3 leading-tight">
            Quiénes Somos
          </h2>
          <p className="text-muted-foreground font-sans mt-4 max-w-lg leading-relaxed">
            En <span className="text-foreground font-medium">Luz de Rosas</span> nos especializamos en tortas de cumpleaños artesanales. Cada creación nace de la pasión por la repostería, combinando sabores exquisitos con diseños elegantes y personalizados.
          </p>
          <p className="text-muted-foreground font-sans mt-3 max-w-lg leading-relaxed">
            Nuestro compromiso es hacer de cada celebración un momento único e inolvidable, con tortas que no solo se ven hermosas, sino que saben aún mejor.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            {highlights.map((h) => (
              <div key={h.label} className="flex flex-col items-center md:items-start gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <h.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif text-sm text-foreground">{h.label}</h3>
                <p className="text-xs text-muted-foreground font-sans leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
