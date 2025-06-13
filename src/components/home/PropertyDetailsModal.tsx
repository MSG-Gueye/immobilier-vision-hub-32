
import { useState } from 'react';
import { X, MapPin, Bed, Bath, Maximize, Calendar, Phone, Mail, Heart, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import AppointmentBooking from './AppointmentBooking';

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

interface PropertyDetailsModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
  onToggleFavorite: (id: number) => void;
  onShare: (id: number) => void;
}

const PropertyDetailsModal = ({ property, isOpen, onClose, onToggleFavorite, onShare }: PropertyDetailsModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAppointment, setShowAppointment] = useState(false);

  if (!property) return null;

  const images = property.images || [property.image];
  
  const formatPrice = (price: number, type: string) => {
    return type === "Location" ? `${price}€/mois` : `${price.toLocaleString()}€`;
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{property.title}</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Galerie d'images */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={images[currentImageIndex]}
                alt={property.title}
                className="w-full h-80 object-cover rounded-lg"
              />
              {images.length > 1 && (
                <>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}
              <div className="absolute top-4 left-4">
                <Badge className="bg-blue-600">{property.type}</Badge>
              </div>
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
            </div>
            
            {/* Miniatures */}
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      index === currentImageIndex ? 'border-blue-600' : 'border-gray-200'
                    }`}
                  >
                    <img src={img} alt={`${property.title} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Informations du bien */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{property.location}</span>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-4">
                {formatPrice(property.price, property.type)}
              </div>
            </div>

            {/* Caractéristiques */}
            <div className="grid grid-cols-3 gap-4 py-4 border-t border-b">
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Maximize className="h-5 w-5 text-gray-600" />
                </div>
                <div className="font-semibold">{property.surface}m²</div>
                <div className="text-sm text-gray-600">Surface</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Bed className="h-5 w-5 text-gray-600" />
                </div>
                <div className="font-semibold">{property.rooms}</div>
                <div className="text-sm text-gray-600">Pièces</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Bath className="h-5 w-5 text-gray-600" />
                </div>
                <div className="font-semibold">{property.bathrooms}</div>
                <div className="text-sm text-gray-600">SDB</div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-600">
                {property.description || "Belle propriété dans un quartier recherché. Idéal pour une famille ou un investissement locatif. Proche de toutes commodités."}
              </p>
            </div>

            {/* Caractéristiques supplémentaires */}
            {property.features && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Caractéristiques</h3>
                <div className="flex flex-wrap gap-2">
                  {property.features.map((feature, index) => (
                    <Badge key={index} variant="outline">{feature}</Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="space-y-3">
              {!showAppointment ? (
                <>
                  <Button
                    onClick={() => setShowAppointment(true)}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Planifier une visite
                  </Button>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="flex items-center justify-center">
                      <Phone className="h-4 w-4 mr-2" />
                      Appeler
                    </Button>
                    <Button variant="outline" className="flex items-center justify-center">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </>
              ) : (
                <AppointmentBooking
                  property={property}
                  onClose={() => setShowAppointment(false)}
                />
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PropertyDetailsModal;
