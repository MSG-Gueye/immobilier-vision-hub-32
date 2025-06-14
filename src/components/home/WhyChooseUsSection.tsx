
import { Shield, Clock, Users, Trophy, Heart, Headphones } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Transparence totale",
      description: "Aucun frais caché, des prix clairs et une communication transparente à chaque étape."
    },
    {
      icon: Clock,
      title: "Réactivité 24/7",
      description: "Notre équipe est disponible pour répondre à vos questions et organiser des visites rapidement."
    },
    {
      icon: Users,
      title: "Accompagnement personnalisé",
      description: "Un conseiller dédié vous accompagne de A à Z dans votre projet immobilier."
    },
    {
      icon: Trophy,
      title: "Expertise locale",
      description: "Une connaissance approfondie du marché de la Côte d'Azur et de ses spécificités."
    },
    {
      icon: Heart,
      title: "Relation de confiance",
      description: "Nous privilégions les relations durables basées sur la confiance et la satisfaction."
    },
    {
      icon: Headphones,
      title: "Service après-vente",
      description: "Un suivi même après la transaction pour vous assurer une satisfaction complète."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Pourquoi nous choisir ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre engagement envers l'excellence et votre satisfaction fait la différence. 
            Découvrez ce qui nous rend uniques sur le marché immobilier.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
