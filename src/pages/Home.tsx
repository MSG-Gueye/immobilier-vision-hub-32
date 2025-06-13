
import Header from '@/components/home/Header';
import HeroSection from '@/components/home/HeroSection';
import PropertiesSection from '@/components/home/PropertiesSection';
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
      <ServicesSection />
      <NewsletterSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
