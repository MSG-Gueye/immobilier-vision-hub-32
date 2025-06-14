import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Maximize, Heart, Calendar, Phone, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import PropertyDetailsModal from './PropertyDetailsModal';

interface AllRentalPropertiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AllRentalPropertiesModal = ({ isOpen, onClose }: AllRentalPropertiesModalProps) => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isPropertyModalOpen, setIsPropertyModalOpen] = useState(false);

  const allRentalProperties = [
    {
      id: 1,
      title: "Studio meublé centre Nice",
      price: 950,
      location: "Nice Centre",
      surface: 28,
      rooms: 1,
      bathrooms: 1,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Studio moderne entièrement meublé, proche de tout",
      features: ["Meublé", "Balcon", "Wifi", "Proche transports"],
      type: "Location",
      isFavorite: false,
      views: 178,
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    {
      id: 2,
      title: "Appartement 3 pièces vue mer",
      price: 1800,
      location: "Cannes",
      surface: 75,
      rooms: 3,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Magnifique appartement avec terrasse et vue mer",
      features: ["Vue mer", "Terrasse", "Parking", "Piscine"],
      type: "Location",
      isFavorite: false,
      views: 234,
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    {
      id: 3,
      title: "Villa 4 pièces avec jardin",
      price: 2500,
      location: "Antibes",
      surface: 110,
      rooms: 4,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Belle villa avec jardin privatif dans quartier calme",
      features: ["Jardin", "Barbecue", "Garage", "Climatisation"],
      type: "Location",
      isFavorite: false,
      views: 156,
      images: [
        "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    // Nouvelles locations
    {
      id: 4,
      title: "Loft industriel rénové",
      price: 1400,
      location: "Marseille",
      surface: 85,
      rooms: 2,
      bathrooms: 1,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Loft atypique dans ancien entrepôt, très lumineux",
      features: ["Atypique", "Lumineux", "Parking", "Proche métro"],
      type: "Location",
      isFavorite: false,
      views: 156,
      images: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    {
      id: 5,
      title: "Duplex avec terrasse privative",
      price: 2200,
      location: "Monaco",
      surface: 110,
      rooms: 4,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Duplex moderne avec grande terrasse et vue mer",
      features: ["Duplex", "Terrasse", "Vue mer", "Climatisation"],
      type: "Location",
      isFavorite: false,
      views: 289,
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    {
      id: 6,
      title: "Maison de village provençale",
      price: 1800,
      location: "Vence",
      surface: 95,
      rooms: 3,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Charmante maison dans village perché, calme absolu",
      features: ["Village perché", "Cheminée", "Jardin", "Calme"],
      type: "Location",
      isFavorite: false,
      views: 134,
      images: [
        "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    {
      id: 7,
      title: "Appartement neuf avec piscine",
      price: 1650,
      location: "Cannes",
      surface: 68,
      rooms: 2,
      bathrooms: 1,
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Appartement neuf dans résidence avec piscine et conciergerie",
      features: ["Neuf", "Piscine", "Conciergerie", "Parking"],
      type: "Location",
      isFavorite: false,
      views: 198,
      images: [
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
    }
  ];

  const handleViewProperty = (property: any) => {
    setSelectedProperty(property);
    setIsPropertyModalOpen(true);
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
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span>Tous les biens à louer</span>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </DialogTitle>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {allRentalProperties.map((property) => (
              <Card key={property.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-orange-600">
                    À louer
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
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
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
                    <span className="text-xl font-bold text-orange-600">
                      {property.price}€/mois
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      onClick={() => handleViewProperty(property)}
                      className="flex-1 bg-orange-600 hover:bg-orange-700"
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
        </DialogContent>
      </Dialog>

      <PropertyDetailsModal
        property={selectedProperty}
        isOpen={isPropertyModalOpen}
        onClose={() => setIsPropertyModalOpen(false)}
        onToggleFavorite={toggleFavorite}
        onShare={shareProperty}
      />
    </>
  );
};

export default AllRentalPropertiesModal;
