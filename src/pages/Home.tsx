
import Header from '@/components/home/Header';
import HeroSection from '@/components/home/HeroSection';
import PropertiesSection from '@/components/home/PropertiesSection';
import SalePropertiesSection from '@/components/home/SalePropertiesSection';
import RentalPropertiesSection from '@/components/home/RentalPropertiesSection';
import ServicesSection from '@/components/home/ServicesSection';
import NewsletterSection from '@/components/home/NewsletterSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import Footer from '@/components/home/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <PropertiesSection />
      <SalePropertiesSection />
      <RentalPropertiesSection />
      <ServicesSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default HomePage;
