import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Maximize, Heart, Calendar, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import PropertyDetailsModal from './PropertyDetailsModal';

const SalePropertiesSection = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const saleProperties = [
    {
      id: 1,
      title: "Villa contemporaine avec vue mer",
      price: 1250000,
      location: "Cannes La Bocca",
      surface: 220,
      rooms: 6,
      bathrooms: 4,
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Magnifique villa moderne avec piscine infinity et vue panoramique sur la mer",
      features: ["Piscine", "Vue mer", "Garage", "Jardin"],
      type: "Vente",
      isFavorite: false,
      views: 245,
      images: [
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    {
      id: 2,
      title: "Appartement de prestige centre-ville",
      price: 850000,
      location: "Nice Centre",
      surface: 120,
      rooms: 4,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Appartement haussmannien rénové avec terrasse et parking",
      features: ["Terrasse", "Parking", "Ascenseur", "Climatisation"],
      type: "Vente",
      isFavorite: false,
      views: 189,
      images: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    {
      id: 3,
      title: "Maison familiale avec jardin",
      price: 680000,
      location: "Antibes",
      surface: 150,
      rooms: 5,
      bathrooms: 3,
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Belle maison provençale dans quartier résidentiel calme",
      features: ["Jardin", "Barbecue", "Cave", "Buanderie"],
      type: "Vente",
      isFavorite: false,
      views: 167,
      images: [
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
    }
  ];

  const handleViewProperty = (property: any) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

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
    <>
      <section id="biens-vendre" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Biens à vendre</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre sélection exclusive de biens immobiliers à vendre sur la Côte d'Azur. 
              Des villas de luxe aux appartements de charme, trouvez votre futur chez-vous.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {saleProperties.map((property) => (
              <Card key={property.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-green-600">
                    À vendre
                  </Badge>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white h-8 w-8"
                    onClick={() => toggleFavorite(property.id)}
                  >
                    <Heart className="h-4 w-4 text-gray-600" />
                  </Button>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{property.description}</p>
                  
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Maximize className="h-4 w-4 mr-1" />
                      <span>{property.surface}m²</span>
                    </div>
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span>{property.rooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span>{property.bathrooms}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {property.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">
                      {property.price.toLocaleString()}€
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      onClick={() => handleViewProperty(property)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Voir & Visiter
                    </Button>
                    <Button size="icon" variant="outline">
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Voir tous les biens à vendre
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

export default SalePropertiesSection;
