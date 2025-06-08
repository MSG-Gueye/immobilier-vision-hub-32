
import { useState } from 'react';
import { Calendar, Clock, MapPin, User, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { mockVisits, mockProperties, mockUsers } from '../../data/mockData';
import { Visit } from '../../types';

const VisitsView = () => {
  const [visits, setVisits] = useState(mockVisits);
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredVisits = visits.filter(visit => {
    return filterStatus === 'all' || visit.status === filterStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'secondary';
      case 'confirmed': return 'default';
      case 'completed': return 'default';
      case 'cancelled': return 'destructive';
      default: return 'default';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'pending': return 'En attente';
      case 'confirmed': return 'Confirmée';
      case 'completed': return 'Terminée';
      case 'cancelled': return 'Annulée';
      default: return status;
    }
  };

  const handleConfirm = (visitId: string) => {
    setVisits(visits.map(visit => 
      visit.id === visitId ? { ...visit, status: 'confirmed' } : visit
    ));
  };

  const handleCancel = (visitId: string) => {
    setVisits(visits.map(visit => 
      visit.id === visitId ? { ...visit, status: 'cancelled' } : visit
    ));
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestion des visites</h1>
          <p className="text-gray-600">Planifiez et gérez les visites de biens</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Programmer une visite
        </Button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Statut de la visite" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les statuts</SelectItem>
            <SelectItem value="pending">En attente</SelectItem>
            <SelectItem value="confirmed">Confirmée</SelectItem>
            <SelectItem value="completed">Terminée</SelectItem>
            <SelectItem value="cancelled">Annulée</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Visits List */}
      <div className="space-y-4">
        {filteredVisits.map((visit) => {
          const property = mockProperties.find(p => p.id === visit.propertyId);
          const client = mockUsers.find(u => u.id === visit.clientId);
          const agent = mockUsers.find(u => u.id === visit.agentId);
          
          return (
            <Card key={visit.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{property?.title}</CardTitle>
                  <Badge variant={getStatusColor(visit.status)}>
                    {getStatusLabel(visit.status)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">
                      {visit.requestedDate.toLocaleDateString('fr-FR')}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">
                      {visit.requestedDate.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{property?.city}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">
                      {client?.firstName} {client?.lastName}
                    </span>
                  </div>
                </div>
                
                {visit.notes && (
                  <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">{visit.notes}</p>
                  </div>
                )}

                <div className="flex gap-2 mt-4">
                  {visit.status === 'pending' && (
                    <>
                      <Button 
                        size="sm" 
                        onClick={() => handleConfirm(visit.id)}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        Confirmer
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleCancel(visit.id)}
                      >
                        Refuser
                      </Button>
                    </>
                  )}
                  <Button size="sm" variant="outline">
                    Modifier
                  </Button>
                  <Button size="sm" variant="outline">
                    Contacter le client
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredVisits.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Aucune visite trouvée</h3>
          <p className="text-gray-600">Aucune visite ne correspond à vos critères</p>
        </div>
      )}
    </div>
  );
};

export default VisitsView;
