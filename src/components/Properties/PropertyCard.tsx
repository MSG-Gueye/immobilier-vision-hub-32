
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit, Trash, Eye, MapPin, Home, Bath } from 'lucide-react';
import { Property } from '../../types';

interface PropertyCardProps {
  property: Property;
  onEdit: (property: Property) => void;
  onDelete: (id: string) => void;
  onView: (property: Property) => void;
}

const PropertyCard = ({ property, onEdit, onDelete, onView }: PropertyCardProps) => {
  const formatPrice = (price: number, type: string) => {
    return type === 'location' ? `${price}€/mois` : `${price.toLocaleString()}€`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'disponible': return 'default';
      case 'reserve': return 'secondary';
      case 'vendu': case 'loue': return 'destructive';
      default: return 'default';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'disponible': return 'Disponible';
      case 'reserve': return 'Réservé';
      case 'vendu': return 'Vendu';
      case 'loue': return 'Loué';
      default: return status;
    }
  };

  return (
    <Card className="group bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={property.images[0] || '/placeholder.svg'}
            alt={property.title}
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <Badge 
            className="absolute top-4 right-4 shadow-lg backdrop-blur-sm"
            variant={getStatusColor(property.status)}
          >
            {getStatusLabel(property.status)}
          </Badge>
          <div className="absolute bottom-4 left-4">
            <Badge variant="outline" className="bg-white/90 backdrop-blur-sm text-slate-700 border-white/40">
              {property.type}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="font-bold text-xl text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
            {property.title}
          </h3>
          <div className="flex items-center text-slate-600 mb-3">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.address}, {property.city}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center py-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {formatPrice(property.price, property.transactionType)}
          </span>
        </div>
        
        <div className="flex justify-between text-sm text-slate-600 py-3 border-t border-slate-100">
          <div className="flex items-center">
            <Home className="h-4 w-4 mr-1" />
            <span>{property.surface}m²</span>
          </div>
          <div className="flex items-center">
            <span>{property.rooms} pièces</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{property.bathrooms}</span>
          </div>
        </div>
        
        <div className="flex gap-2 pt-4">
          <Button 
            size="sm" 
            variant="outline" 
            onClick={() => onView(property)}
            className="flex-1 border-blue-200 text-blue-600 hover:bg-blue-50"
          >
            <Eye className="h-4 w-4 mr-1" />
            Voir
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            onClick={() => onEdit(property)}
            className="flex-1 border-emerald-200 text-emerald-600 hover:bg-emerald-50"
          >
            <Edit className="h-4 w-4 mr-1" />
            Éditer
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            onClick={() => onDelete(property.id)}
            className="border-red-200 text-red-600 hover:bg-red-50"
          >
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
