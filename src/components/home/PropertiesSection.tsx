
import { Button } from '@/components/ui/button';
import PropertyCard from './PropertyCard';

const PropertiesSection = () => {
  // Mock data for properties
  const recentProperties = [
    {
      id: 1,
      title: "Villa moderne avec piscine",
      price: 850000,
      location: "Cannes",
      surface: 180,
      rooms: 5,
      bathrooms: 3,
      image: "/placeholder.svg",
      type: "Vente",
      isFavorite: false,
      views: 245
    },
    {
      id: 2,
      title: "Appartement centre-ville",
      price: 2500,
      location: "Nice",
      surface: 75,
      rooms: 3,
      bathrooms: 2,
      image: "/placeholder.svg",
      type: "Location",
      isFavorite: true,
      views: 189
    },
    {
      id: 3,
      title: "Maison avec jardin",
      price: 450000,
      location: "Antibes",
      surface: 120,
      rooms: 4,
      bathrooms: 2,
      image: "/placeholder.svg",
      type: "Vente",
      isFavorite: false,
      views: 167
    },
    {
      id: 4,
      title: "Studio vue mer",
      price: 1200,
      location: "Monaco",
      surface: 35,
      rooms: 1,
      bathrooms: 1,
      image: "/placeholder.svg",
      type: "Location",
      isFavorite: false,
      views: 298
    }
  ];

  const toggleFavorite = (propertyId: number) => {
    console.log(`Toggle favorite for property ${propertyId}`);
  };

  const shareProperty = (propertyId: number) => {
    if (navigator.share) {
      navigator.share({
        title: 'Découvrez ce bien immobilier',
        url: `${window.location.origin}/property/${propertyId}`
      });
    } else {
      navigator.clipboard.writeText(`${window.location.origin}/property/${propertyId}`);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Biens récents</h2>
          <p className="text-xl text-gray-600">Découvrez notre sélection de biens immobiliers</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recentProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onToggleFavorite={toggleFavorite}
              onShare={shareProperty}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Voir tous les biens
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
