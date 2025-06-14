
import { CheckCircle, Award, Star, Shield } from 'lucide-react';

const TrustBadgesSection = () => {
  const badges = [
    {
      icon: CheckCircle,
      title: "Certifié FNAIM",
      description: "Membre de la Fédération Nationale de l'Immobilier"
    },
    {
      icon: Award,
      title: "Prix Excellence 2023",
      description: "Meilleure agence Côte d'Azur"
    },
    {
      icon: Star,
      title: "Note 4.9/5",
      description: "Basée sur 500+ avis clients"
    },
    {
      icon: Shield,
      title: "Garantie Financière",
      description: "Vos fonds sont protégés"
    }
  ];

  return (
    <section className="py-12 bg-gray-50 border-t border-b">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Votre confiance, notre priorité
          </h3>
          <p className="text-gray-600">Certifications et reconnaissances qui garantissent notre professionnalisme</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                <badge.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm">{badge.title}</h4>
                <p className="text-xs text-gray-600">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadgesSection;
