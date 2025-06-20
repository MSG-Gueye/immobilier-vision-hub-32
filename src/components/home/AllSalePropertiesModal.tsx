import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Maximize, Heart, Calendar, Phone, X, Mountain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import PropertyDetailsModal from './PropertyDetailsModal';

interface AllSalePropertiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AllSalePropertiesModal = ({ isOpen, onClose }: AllSalePropertiesModalProps) => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isPropertyModalOpen, setIsPropertyModalOpen] = useState(false);

  const allSaleProperties = [
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
    },
    // Nouveaux biens
    {
      id: 4,
      title: "Terrain constructible vue panoramique",
      price: 320000,
      location: "Grasse",
      surface: 1500,
      rooms: 0,
      bathrooms: 0,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Magnifique terrain plat avec vue panoramique, viabilisé",
      features: ["Vue panoramique", "Viabilisé", "Plat", "Constructible"],
      type: "Terrain",
      isFavorite: false,
      views: 89,
      images: [
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    {
      id: 5,
      title: "Penthouse avec terrasse",
      price: 950000,
      location: "Monaco",
      surface: 95,
      rooms: 3,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Penthouse d'exception avec terrasse de 40m² et vue mer",
      features: ["Vue mer", "Terrasse", "Ascenseur privé", "Parking"],
      type: "Vente",
      isFavorite: false,
      views: 312,
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    {
      id: 6,
      title: "Terrain en bord de mer",
      price: 750000,
      location: "Saint-Tropez",
      surface: 800,
      rooms: 0,
      bathrooms: 0,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Terrain rare en bord de mer, possibilité de construire",
      features: ["Bord de mer", "Rare", "Constructible", "Accès plage"],
      type: "Terrain",
      isFavorite: false,
      views: 445,
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
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
              <span>Tous les biens à vendre</span>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </DialogTitle>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {allSaleProperties.map((property) => (
              <Card key={property.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className={`absolute top-4 left-4 ${property.type === 'Terrain' ? 'bg-green-700' : 'bg-green-600'}`}>
                    {property.type === 'Terrain' ? (
                      <><Mountain className="h-3 w-3 mr-1" /> Terrain</>
                    ) : (
                      'À vendre'
                    )}
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
                  
                  {property.type !== 'Terrain' && (
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
                  )}

                  {property.type === 'Terrain' && (
                    <div className="flex justify-center text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Maximize className="h-4 w-4 mr-1" />
                        <span>{property.surface}m²</span>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1 mb-4">
                    {property.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="mb-4">
                    <span className="text-xl font-bold text-blue-600">
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

export default AllSalePropertiesModal;
