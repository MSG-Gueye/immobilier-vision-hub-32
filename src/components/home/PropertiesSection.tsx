
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import PropertyCard from './PropertyCard';
import PropertyDetailsModal from './PropertyDetailsModal';

const PropertiesSection = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock data for properties avec images multiples
  const recentProperties = [
    {
      id: 1,
      title: "Villa moderne avec piscine",
      price: 850000,
      location: "Cannes",
      surface: 180,
      rooms: 5,
      bathrooms: 3,
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      type: "Vente",
      isFavorite: false,
      views: 245,
      description: "Magnifique villa contemporaine avec piscine infinity et vue panoramique sur la mer. Entièrement rénovée avec des matériaux haut de gamme.",
      features: ["Piscine", "Vue mer", "Garage", "Jardin", "Climatisation"],
      images: [
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    {
      id: 2,
      title: "Appartement centre-ville",
      price: 2500,
      location: "Nice",
      surface: 75,
      rooms: 3,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      type: "Location",
      isFavorite: true,
      views: 189,
      description: "Appartement moderne au cœur de Nice, proche de toutes commodités. Récemment rénové avec une cuisine équipée.",
      features: ["Meublé", "Balcon", "Ascenseur", "Parking"],
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    {
      id: 3,
      title: "Maison avec jardin",
      price: 450000,
      location: "Antibes",
      surface: 120,
      rooms: 4,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      type: "Vente",
      isFavorite: false,
      views: 167,
      description: "Belle maison familiale dans un quartier calme d'Antibes. Parfaite pour une famille avec enfants.",
      features: ["Jardin", "Garage", "Cave", "Terrasse"],
      images: [
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    {
      id: 4,
      title: "Studio vue mer",
      price: 1200,
      location: "Monaco",
      surface: 35,
      rooms: 1,
      bathrooms: 1,
      image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      type: "Location",
      isFavorite: false,
      views: 298,
      description: "Studio avec vue imprenable sur la mer à Monaco. Idéal pour un investissement locatif.",
      features: ["Vue mer", "Meublé", "Terrasse", "Piscine commune"],
      images: [
        "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
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

  const handleViewDetails = (property: any) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  return (
    <>
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
                onViewDetails={handleViewDetails}
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

      <PropertyDetailsModal
        property={selectedProperty}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onToggleFavorite={toggleFavorite}
        onShare={shareProperty}
      />
    </>
  );
};

export default PropertiesSection;
