import { MapPin, Phone, Instagram, Facebook } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import logoImg from "@/assets/logo.png";

const Footer = () => {
  const footerRef = useScrollReveal();

  return (
    <footer id="contacto" className="bg-marino text-arena">
      {/* Wave top */}
      <svg viewBox="0 0 1440 60" className="w-full block -mb-px" preserveAspectRatio="none">
        <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="hsl(var(--marino))" />
      </svg>

      <div ref={footerRef} className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          
          {/* Logo / Info */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src={logoImg} 
              alt="Pequeña Calabacita" 
              className="h-20 w-auto object-contain mb-4" 
            />
            <p className="text-arena/70 font-sans text-sm leading-relaxed max-w-xs">
              Vestimos a los más pequeños con diseños únicos y mucho amor. Calidad premium para infancias felices.
            </p>
          </div>

          {/* Navegación */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-heading font-semibold text-xl mb-6 text-white">Navegación</h3>
            <ul className="flex flex-col gap-3 font-sans text-sm text-arena/80">
              <li><a href="#" className="hover:text-calabaza transition-colors">Inicio</a></li>
              <li><a href="#categorias" className="hover:text-calabaza transition-colors">Categorías</a></li>
              <li><a href="#productos" className="hover:text-calabaza transition-colors">Productos</a></li>
              <li><a href="#nosotros" className="hover:text-calabaza transition-colors">Nosotros</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-heading font-semibold text-xl mb-6 text-white">Contacto</h3>
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-start gap-3 text-sm font-sans text-arena/80">
                <MapPin className="w-5 h-5 shrink-0 text-calabaza" />
                <span>Santa Fe, Capital</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-sans text-arena/80">
                <Phone className="w-5 h-5 shrink-0 text-calabaza" />
                <span>+54 9 342 123-4567</span> {/* Actualizar número real */}
              </div>

              {/* Mapa de Santa Fe */}
              <div className="mt-4 w-full max-w-[250px] h-32 rounded-lg overflow-hidden border border-arena/20 shadow-inner">
                <iframe 
                  src="https://maps.google.com/maps?q=Santa%20Fe,%20Capital,%20Argentina&t=&z=10&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de Santa Fe"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-start lg:items-end">
            <h3 className="font-heading font-semibold text-xl mb-6 text-white">Seguinos</h3>
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com/calabacita.kids" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-arena/30 flex items-center justify-center hover:bg-calabaza hover:border-calabaza hover:text-marino transition-all duration-300"
                aria-label="Instagram de Pequeña Calabacita"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/calabacita.kids" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-arena/30 flex items-center justify-center hover:bg-calabaza hover:border-calabaza hover:text-marino transition-all duration-300"
                aria-label="Facebook de Pequeña Calabacita"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-arena/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <p className="text-arena/50 text-xs font-sans">
            © {new Date().getFullYear()} linel.com.ar | Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
