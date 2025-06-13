
import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';

interface Property {
  id: number;
  title: string;
  location: string;
}

interface AppointmentBookingProps {
  property: Property;
  onClose: () => void;
}

const AppointmentBooking = ({ property, onClose }: AppointmentBookingProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime || !formData.firstName || !formData.email || !formData.phone) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    // Ici on enverrait les données à l'API
    console.log('Rendez-vous demandé:', {
      property: property.id,
      date: selectedDate,
      time: selectedTime,
      ...formData
    });

    alert('Votre demande de rendez-vous a été envoyée ! Nous vous contacterons sous 24h.');
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Button
          size="icon"
          variant="ghost"
          onClick={onClose}
          className="h-8 w-8"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h3 className="text-lg font-semibold">Planifier une visite</h3>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium">{property.title}</h4>
        <p className="text-sm text-gray-600">{property.location}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Sélection de date */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium mb-2">
            <Calendar className="h-4 w-4" />
            Choisir une date
          </label>
          <CalendarComponent
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            disabled={(date) => date < new Date() || date.getDay() === 0}
            className="rounded-md border"
          />
        </div>

        {/* Sélection d'heure */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium mb-2">
            <Clock className="h-4 w-4" />
            Choisir un créneau
          </label>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => setSelectedTime(time)}
                className={`p-2 text-sm border rounded ${
                  selectedTime === time
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white border-gray-300 hover:border-blue-300'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Informations personnelles */}
        <div className="space-y-4">
          <h4 className="flex items-center gap-2 text-sm font-medium">
            <User className="h-4 w-4" />
            Vos informations
          </h4>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">Prénom *</label>
              <Input
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                placeholder="Votre prénom"
                required
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Nom *</label>
              <Input
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                placeholder="Votre nom"
                required
              />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-1 text-sm text-gray-600">
              <Mail className="h-3 w-3" />
              Email *
            </label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="votre@email.com"
              required
            />
          </div>

          <div>
            <label className="flex items-center gap-1 text-sm text-gray-600">
              <Phone className="h-3 w-3" />
              Téléphone *
            </label>
            <Input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="06 12 34 56 78"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Message (optionnel)</label>
            <textarea
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Précisions sur votre projet, questions..."
              className="w-full p-2 border border-gray-300 rounded-md resize-none h-20"
            />
          </div>
        </div>

        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
          Confirmer le rendez-vous
        </Button>
      </form>
    </div>
  );
};

export default AppointmentBooking;
