
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Bed, Bath, Maximize, Heart, Calendar, Phone, X, Search, Filter, SlidersHorizontal } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import PropertyDetailsModal from './PropertyDetailsModal';

interface AllPropertiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AllPropertiesModal = ({ isOpen, onClose }: AllPropertiesModalProps) => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isPropertyModalOpen, setIsPropertyModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [location, setLocation] = useState('all');

  const allProperties = [
    // Biens à vendre
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
      transactionType: "vente",
      status: "disponible",
      isFavorite: false,
      views: 245,
      images: [
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
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
      transactionType: "vente",
      status: "disponible",
      isFavorite: false,
      views: 189,
      images: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    // Biens à louer
    {
      id: 3,
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
      transactionType: "location",
      status: "disponible",
      isFavorite: false,
      views: 178,
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    {
      id: 4,
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
      transactionType: "location",
      status: "disponible",
      isFavorite: false,
      views: 234,
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    // Terrains
    {
      id: 5,
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
      transactionType: "vente",
      status: "disponible",
      isFavorite: false,
      views: 89,
      images: [
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    {
      id: 6,
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
      transactionType: "vente",
      status: "disponible",
      isFavorite: false,
      views: 312,
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
    }
  ];

  const filteredProperties = allProperties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || property.transactionType === filterType;
    const matchesLocation = location === 'all' || property.location.includes(location);
    
    return matchesSearch && matchesType && matchesLocation;
  });

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

  const formatPrice = (price: number, type: string) => {
    return type === 'location' ? `${price}€/mois` : `${price.toLocaleString()}€`;
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-7xl max-h-[95vh] overflow-hidden">
          <DialogHeader className="border-b pb-4">
            <DialogTitle className="flex items-center justify-between text-2xl font-bold">
              <span>Tous nos biens immobiliers</span>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-5 w-5" />
              </Button>
            </DialogTitle>
          </DialogHeader>
          
          {/* Filtres */}
          <div className="border-b pb-4 space-y-4">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 flex-1 min-w-64">
                <Search className="h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Rechercher par nom ou ville..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1"
                />
              </div>
              
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous types</SelectItem>
                  <SelectItem value="vente">À vendre</SelectItem>
                  <SelectItem value="location">À louer</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes villes</SelectItem>
                  <SelectItem value="Nice">Nice</SelectItem>
                  <SelectItem value="Cannes">Cannes</SelectItem>
                  <SelectItem value="Monaco">Monaco</SelectItem>
                  <SelectItem value="Antibes">Antibes</SelectItem>
                  <SelectItem value="Grasse">Grasse</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline" size="sm">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Plus de filtres
              </Button>
            </div>
            
            <div className="text-sm text-gray-600">
              {filteredProperties.length} bien{filteredProperties.length > 1 ? 's' : ''} trouvé{filteredProperties.length > 1 ? 's' : ''}
            </div>
          </div>
          
          {/* Liste des biens */}
          <div className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
              {filteredProperties.map((property) => (
                <Card key={property.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge className={`absolute top-4 left-4 ${
                      property.transactionType === 'location' ? 'bg-orange-600' : 
                      property.type === 'Terrain' ? 'bg-green-700' : 'bg-green-600'
                    }`}>
                      {property.type === 'Terrain' ? 'Terrain' : 
                       property.transactionType === 'location' ? 'À louer' : 'À vendre'}
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
                      {property.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <div className="mb-4">
                      <span className={`text-xl font-bold ${
                        property.transactionType === 'location' ? 'text-orange-600' : 'text-blue-600'
                      }`}>
                        {formatPrice(property.price, property.transactionType)}
                      </span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        onClick={() => handleViewProperty(property)}
                        className={`flex-1 ${
                          property.transactionType === 'location' 
                            ? 'bg-orange-600 hover:bg-orange-700' 
                            : 'bg-blue-600 hover:bg-blue-700'
                        }`}
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

export default AllPropertiesModal;
