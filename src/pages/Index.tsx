import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoriesSection from "@/components/CategoriesSection";
import ProductSection from "@/components/ProductSection";
import ProductsSection from "@/components/sections/ProductsSection";
import PromoBanner from "@/components/PromoBanner";
import AboutSection from "@/components/AboutSection";
import ShippingSection from "@/components/ShippingSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <Hero />
    <CategoriesSection />
    <ProductSection />
    <ProductsSection />
    <PromoBanner />
    <AboutSection />
    <ShippingSection />
    <Footer />
    {/* Actualizar con el número real de WhatsApp */}
    <WhatsAppButton number="5493421234567" />
  </div>
);

export default Index;
