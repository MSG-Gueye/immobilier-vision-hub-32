
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, MapPin, Phone, Mail } from 'lucide-react';
import { mockRestaurants } from '../data/restaurantData';
import { Restaurant } from '../types/restaurant';

interface RestaurantSelectorProps {
  selectedRestaurant: string;
  onRestaurantChange: (restaurantId: string) => void;
}

const RestaurantSelector = ({ selectedRestaurant, onRestaurantChange }: RestaurantSelectorProps) => {
  const restaurant = mockRestaurants.find(r => r.id === selectedRestaurant);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Select value={selectedRestaurant} onValueChange={onRestaurantChange}>
          <SelectTrigger className="w-80">
            <SelectValue placeholder="Sélectionner un restaurant" />
          </SelectTrigger>
          <SelectContent>
            {mockRestaurants.map((restaurant) => (
              <SelectItem key={restaurant.id} value={restaurant.id}>
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  {restaurant.name}
                  <Badge variant={restaurant.isActive ? 'default' : 'secondary'} className="ml-2">
                    {restaurant.isActive ? 'Actif' : 'Inactif'}
                  </Badge>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {restaurant && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5" />
              {restaurant.name}
              <Badge variant={restaurant.plan === 'premium' ? 'default' : 'outline'}>
                {restaurant.plan}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-gray-600">{restaurant.description}</p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <MapPin className="h-4 w-4" />
              {restaurant.address}
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                {restaurant.phone}
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                {restaurant.email}
              </div>
            </div>
            <div className="flex gap-2 text-xs">
              <Badge variant="outline">
                Menu: {restaurant.maxMenuItems} items max
              </Badge>
              <Badge variant="outline">
                Personnalisation: {restaurant.allowCustomization ? 'Oui' : 'Non'}
              </Badge>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default RestaurantSelector;
