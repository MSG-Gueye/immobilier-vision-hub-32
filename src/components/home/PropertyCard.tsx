
import { MapPin, Bed, Bath, Maximize, Heart, Share2, Eye, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  surface: number;
  rooms: number;
  bathrooms: number;
  image: string;
  type: string;
  isFavorite: boolean;
  views: number;
  description?: string;
  features?: string[];
  images?: string[];
}

interface PropertyCardProps {
  property: Property;
  onToggleFavorite: (id: number) => void;
  onShare: (id: number) => void;
  onViewDetails: (property: Property) => void;
}

const PropertyCard = ({ property, onToggleFavorite, onShare, onViewDetails }: PropertyCardProps) => {
  const formatPrice = (price: number, type: string) => {
    return type === "Location" ? `${price}€/mois` : `${price.toLocaleString()}€`;
  };

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <Badge className="absolute top-4 left-4 bg-blue-600">
          {property.type}
        </Badge>
        <div className="absolute top-4 right-4 flex gap-2">
          <Button
            size="icon"
            variant="ghost"
            className="bg-white/80 hover:bg-white h-8 w-8"
            onClick={() => onToggleFavorite(property.id)}
          >
            <Heart className={`h-4 w-4 ${property.isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="bg-white/80 hover:bg-white h-8 w-8"
            onClick={() => onShare(property.id)}
          >
            <Share2 className="h-4 w-4 text-gray-600" />
          </Button>
        </div>
        <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded text-xs">
          <Eye className="h-3 w-3" />
          <span>{property.views}</span>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {property.title}
        </h3>
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-blue-600">
            {formatPrice(property.price, property.type)}
          </span>
        </div>
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
        <div className="flex gap-2">
          <Button 
            onClick={() => onViewDetails(property)}
            variant="outline" 
            className="flex-1 group-hover:bg-blue-600 group-hover:text-white transition-colors"
          >
            Voir le bien
          </Button>
          <Button size="icon" variant="outline" className="group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <Phone className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
