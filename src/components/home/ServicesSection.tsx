
import { Home, Building, Calculator, FileText, Euro, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Vendre votre bien",
      description: "Estimation gratuite et accompagnement personnalisé pour la vente de votre propriété."
    },
    {
      icon: Building,
      title: "Location",
      description: "Trouvez le logement idéal parmi notre sélection de biens à louer."
    },
    {
      icon: Calculator,
      title: "Simulation prêt",
      description: "Calculez votre capacité d'emprunt et simulez votre financement immobilier."
    },
    {
      icon: FileText,
      title: "Expertise juridique",
      description: "Accompagnement juridique complet pour tous vos projets immobiliers."
    },
    {
      icon: Euro,
      title: "Estimation gratuite",
      description: "Obtenez une estimation précise de la valeur de votre bien immobilier."
    },
    {
      icon: Users,
      title: "Gestion locative",
      description: "Confiez-nous la gestion complète de vos biens locatifs en toute sérénité."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nos services</h2>
          <p className="text-xl text-gray-600">Un accompagnement sur mesure pour tous vos projets</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="text-center p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Button variant="outline" className="group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  En savoir plus
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
