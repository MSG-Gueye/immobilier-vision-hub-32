
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Maximize, Heart, Eye, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import PropertyDetailsModal from './PropertyDetailsModal';
import AllPropertiesModal from './AllPropertiesModal';

const PropertiesSection = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAllPropertiesOpen, setIsAllPropertiesOpen] = useState(false);

  const featuredProperties = [
    {
      id: 1,
      title: "Villa moderne avec piscine",
      price: 1200000,
      priceType: "vente",
      location: "Cannes",
      surface: 180,
      rooms: 5,
      bathrooms: 3,
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Villa contemporaine avec vue mer panoramique",
      features: ["Piscine", "Vue mer", "Garage", "Jardin"],
      type: "Vente",
      transactionType: "vente",
      status: "disponible",
      isFavorite: false,
      views: 245,
      images: [
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    {
      id: 2,
      title: "Appartement de prestige",
      price: 2200,
      priceType: "location",
      location: "Nice",
      surface: 95,
      rooms: 3,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Appartement rénové dans le centre historique",
      features: ["Terrasse", "Parking", "Ascenseur", "Climatisation"],
      type: "Location",
      transactionType: "location",
      status: "disponible",
      isFavorite: false,
      views: 189,
      images: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    {
      id: 3,
      title: "Penthouse avec terrasse",
      price: 850000,
      priceType: "vente",
      location: "Monaco",
      surface: 120,
      rooms: 4,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Penthouse d'exception avec vue mer",
      features: ["Vue mer", "Terrasse", "Ascenseur privé", "Parking"],
      type: "Vente",
      transactionType: "vente",
      status: "disponible",
      isFavorite: false,
      views: 312,
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
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

  const formatPrice = (price: number, type: string) => {
    return type === 'location' ? `${price}€/mois` : `${price.toLocaleString()}€`;
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-6">
              <Eye className="h-5 w-5" />
              <span className="font-medium">Sélection Premium</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Nos biens d'exception
              <span className="block text-blue-600">sur la Côte d'Azur</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre sélection de biens immobiliers d'exception. 
              Villas de luxe, appartements de prestige et investissements locatifs de qualité.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.map((property) => (
              <Card key={property.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg">
                <div className="relative overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <Badge className={`absolute top-4 left-4 ${
                    property.priceType === 'location' ? 'bg-orange-600' : 'bg-green-600'
                  } shadow-lg`}>
                    {property.priceType === 'location' ? 'À louer' : 'À vendre'}
                  </Badge>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white h-8 w-8 shadow-lg"
                    onClick={() => toggleFavorite(property.id)}
                  >
                    <Heart className="h-4 w-4 text-gray-600" />
                  </Button>
                  <div className="absolute bottom-4 right-4">
                    <Badge variant="outline" className="bg-white/90 backdrop-blur-sm text-gray-700 border-white/40">
                      {property.views} vues
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
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
                    {property.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <span className={`text-2xl font-bold ${
                      property.priceType === 'location' ? 'text-orange-600' : 'text-blue-600'
                    }`}>
                      {formatPrice(property.price, property.priceType)}
                    </span>
                  </div>
                  
                  <Button 
                    onClick={() => handleViewProperty(property)}
                    className={`w-full ${
                      property.priceType === 'location' 
                        ? 'bg-orange-600 hover:bg-orange-700' 
                        : 'bg-blue-600 hover:bg-blue-700'
                    } font-semibold`}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Voir le bien
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              onClick={() => setIsAllPropertiesOpen(true)}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-semibold px-8 py-4 text-lg"
            >
              Voir tous nos biens
              <ArrowRight className="h-5 w-5 ml-2" />
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

      <AllPropertiesModal
        isOpen={isAllPropertiesOpen}
        onClose={() => setIsAllPropertiesOpen(false)}
      />
    </>
  );
};

export default PropertiesSection;
