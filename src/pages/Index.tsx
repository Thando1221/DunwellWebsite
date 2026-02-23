import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import CampaignsSection from "@/components/CampaignsSection";
import AboutSection from "@/components/AboutSection";
import AnonymousSection from "@/components/AnonymousSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <CampaignsSection />
      <AboutSection />
      <AnonymousSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
