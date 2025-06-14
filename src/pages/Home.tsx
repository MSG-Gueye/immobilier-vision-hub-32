
import Header from '@/components/home/Header';
import EnhancedHeroSection from '@/components/home/EnhancedHeroSection';
import TrustBadgesSection from '@/components/home/TrustBadgesSection';
import PremiumFeaturesSection from '@/components/home/PremiumFeaturesSection';
import PropertiesSection from '@/components/home/PropertiesSection';
import SalePropertiesSection from '@/components/home/SalePropertiesSection';
import RentalPropertiesSection from '@/components/home/RentalPropertiesSection';
import MarketInsightsSection from '@/components/home/MarketInsightsSection';
import StatsSection from '@/components/home/StatsSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import ServicesSection from '@/components/home/ServicesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';
import NewsletterSection from '@/components/home/NewsletterSection';
import Footer from '@/components/home/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <EnhancedHeroSection />
      <TrustBadgesSection />
      <PremiumFeaturesSection />
      <PropertiesSection />
      <SalePropertiesSection />
      <RentalPropertiesSection />
      <MarketInsightsSection />
      <StatsSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default HomePage;
