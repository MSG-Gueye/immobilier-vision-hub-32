
import { Home, Building, Calculator, FileText, Euro, Users, ArrowRight, TrendingUp, Key } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Vente immobilière",
      description: "Estimation gratuite et accompagnement personnalisé pour la vente de votre propriété.",
      details: "Notre équipe d'experts vous accompagne de l'estimation à la signature chez le notaire.",
      color: "blue"
    },
    {
      icon: Key,
      title: "Location & Gestion",
      description: "Trouvez le logement idéal ou confiez-nous la gestion de vos biens locatifs.",
      details: "Recherche de locataires, états des lieux, gestion administrative complète.",
      color: "green"
    },
    {
      icon: Calculator,
      title: "Simulation & Financement",
      description: "Calculez votre capacité d'emprunt et simulez votre financement immobilier.",
      details: "Partenariats bancaires privilégiés pour obtenir les meilleurs taux.",
      color: "purple"
    },
    {
      icon: Euro,
      title: "Estimation gratuite",
      description: "Obtenez une estimation précise de la valeur de votre bien immobilier.",
      details: "Analyse comparative du marché et expertise personnalisée sous 48h.",
      color: "orange"
    },
    {
      icon: FileText,
      title: "Conseil juridique",
      description: "Accompagnement juridique complet pour tous vos projets immobiliers.",
      details: "Vérifications administratives, conseils fiscaux et optimisation patrimoniale.",
      color: "red"
    },
    {
      icon: TrendingUp,
      title: "Investissement locatif",
      description: "Conseils en investissement immobilier pour optimiser votre patrimoine.",
      details: "Étude de rentabilité, défiscalisation et stratégie d'investissement.",
      color: "indigo"
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nos services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un accompagnement sur mesure pour tous vos projets immobiliers. 
            Notre expertise à votre service depuis plus de 15 ans sur la Côte d'Azur.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colorClasses = {
              blue: "from-blue-600 to-blue-700",
              green: "from-green-600 to-green-700",
              purple: "from-purple-600 to-purple-700",
              orange: "from-orange-600 to-orange-700",
              red: "from-red-600 to-red-700",
              indigo: "from-indigo-600 to-indigo-700"
            };
            
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${colorClasses[service.color]} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-sm text-gray-500 mb-6">{service.details}</p>
                  <Button variant="outline" className="group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-all">
                    En savoir plus
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Besoin d'un conseil personnalisé ?</h3>
          <p className="text-xl mb-6 opacity-90">
            Nos experts sont à votre disposition pour étudier votre projet immobilier
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              Prendre rendez-vous
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Estimation gratuite
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
