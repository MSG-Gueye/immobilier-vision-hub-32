
import { Shield, Award, Clock, HeartHandshake, Camera, FileText, Smartphone, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const PremiumFeaturesSection = () => {
  const features = [
    {
      icon: Camera,
      title: "Visite virtuelle 360°",
      description: "Visitez nos biens depuis chez vous grâce à notre technologie de visite virtuelle immersive"
    },
    {
      icon: Smartphone,
      title: "Application mobile",
      description: "Retrouvez tous nos biens sur notre application mobile avec notifications en temps réel"
    },
    {
      icon: FileText,
      title: "Dossier digital complet",
      description: "Tous les documents nécessaires numérisés et accessibles en un clic"
    },
    {
      icon: Users,
      title: "Équipe dédiée",
      description: "Un conseiller personnel vous accompagne tout au long de votre projet immobilier"
    },
    {
      icon: Clock,
      title: "Disponible 7j/7",
      description: "Notre équipe est à votre disposition tous les jours pour répondre à vos questions"
    },
    {
      icon: Shield,
      title: "Garantie transaction",
      description: "Vos fonds sont protégés et votre transaction sécurisée à 100%"
    },
    {
      icon: Award,
      title: "Expertise reconnue",
      description: "15 ans d'expérience et des certifications professionnelles reconnues"
    },
    {
      icon: HeartHandshake,
      title: "Service sur-mesure",
      description: "Chaque client est unique, notre approche aussi. Service personnalisé garanti"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-6">
            <Award className="h-5 w-5" />
            <span className="font-medium">Services Premium</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Une expérience immobilière
            <span className="block text-blue-600">d'exception</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous révolutionnons l'immobilier avec des services innovants et une approche personnalisée 
            pour faire de votre projet une réussite absolue.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group bg-white hover:bg-blue-50 transition-all duration-300 hover:shadow-xl border-0 shadow-lg hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumFeaturesSection;
