import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProductSection from "@/components/ProductSection";
import PromoBanner from "@/components/PromoBanner";
import FlavorsSection from "@/components/FlavorsSection";
import GallerySection from "@/components/GallerySection";
import SpecialProductSection from "@/components/SpecialProductSection";
import VideoSection from "@/components/VideoSection";
import ReservationForm from "@/components/ReservationForm";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <Hero />
    <AboutSection />
    <ProductSection />
    <PromoBanner />
    <FlavorsSection />
    <GallerySection />
    <SpecialProductSection />
    <VideoSection />
    <ReservationForm />
    <Footer />
  </div>
);

export default Index;
