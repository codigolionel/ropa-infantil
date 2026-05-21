import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo.png";

const navLinks = [
  { label: "Inicio", href: "#" },
  { label: "Categorías", href: "#categorias" },
  { label: "Productos", href: "#productos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300">
      <div className={`container mx-auto px-6 flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16 bg-black/60 backdrop-blur-md rounded-b-xl' : 'h-24'}`}>
        <a href="#" className="flex items-center h-full py-2">
          <img 
            src={logoImg} 
            alt="Pequeña Calabacita" 
            className={`w-auto object-contain drop-shadow-md transition-all duration-300 ${scrolled ? 'h-10 md:h-12' : 'h-16 md:h-20'}`} 
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href="#productos"
            className="hidden md:flex px-5 py-2.5 bg-calabaza text-white font-sans text-xs uppercase font-bold tracking-[0.2em] rounded hover:bg-marino transition-colors duration-300"
          >
            Ver Productos
          </a>
          <button
            className="md:hidden text-white/80 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border px-6 py-6 space-y-5 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-sm font-semibold tracking-widest uppercase text-foreground hover:text-calabaza"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#productos"
            className="block text-center mt-6 px-6 py-3 bg-calabaza text-white font-sans text-xs uppercase font-bold tracking-[0.2em] rounded shadow-md"
            onClick={() => setMobileOpen(false)}
          >
            Ver Productos
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
