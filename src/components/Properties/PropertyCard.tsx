
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit, Trash, Eye } from 'lucide-react';
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

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <div className="relative">
          <img
            src={property.images[0] || '/placeholder.svg'}
            alt={property.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <Badge 
            className="absolute top-2 right-2"
            variant={getStatusColor(property.status)}
          >
            {property.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">{property.title}</h3>
          <p className="text-sm text-gray-600">{property.address}, {property.city}</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-blue-600">
              {formatPrice(property.price, property.transactionType)}
            </span>
            <Badge variant="outline">{property.type}</Badge>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>{property.surface}m²</span>
            <span>{property.rooms} pièces</span>
            <span>{property.bathrooms} SDB</span>
          </div>
          <div className="flex gap-2 pt-2">
            <Button size="sm" variant="outline" onClick={() => onView(property)}>
              <Eye className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="outline" onClick={() => onEdit(property)}>
              <Edit className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="outline" onClick={() => onDelete(property.id)}>
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
