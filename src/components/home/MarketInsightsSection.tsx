
import { TrendingUp, BarChart3, PieChart, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const MarketInsightsSection = () => {
  const marketData = [
    {
      icon: TrendingUp,
      title: "Marché en croissance",
      value: "+12%",
      description: "d'augmentation des prix sur la Côte d'Azur cette année",
      color: "text-green-600"
    },
    {
      icon: BarChart3,
      title: "Demande forte",
      value: "85%",
      description: "de nos biens vendus en moins de 3 mois",
      color: "text-blue-600"
    },
    {
      icon: PieChart,
      title: "Rentabilité locative",
      value: "4.2%",
      description: "de rendement moyen sur nos biens en location",
      color: "text-purple-600"
    },
    {
      icon: Target,
      title: "Précision d'estimation",
      value: "98%",
      description: "de nos estimations confirmées à la vente",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 rounded-full px-6 py-2 mb-6">
              <BarChart3 className="h-5 w-5" />
              <span className="font-medium">Analyse de marché</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Le marché immobilier
              <span className="block text-blue-600">en temps réel</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Restez informé des dernières tendances du marché immobilier sur la Côte d'Azur 
              grâce à nos analyses exclusives et notre expertise terrain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {marketData.map((data, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4`}>
                    <data.icon className={`h-6 w-6 ${data.color}`} />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-800">
                    {data.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`text-3xl font-bold mb-2 ${data.color}`}>
                    {data.value}
                  </div>
                  <p className="text-sm text-gray-600">
                    {data.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">
              Obtenez votre rapport de marché personnalisé
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Recevez une analyse détaillée de votre secteur et des conseils d'experts 
              pour optimiser votre investissement immobilier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">
                Demander mon rapport gratuit
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8">
                Consulter nos études
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketInsightsSection;
