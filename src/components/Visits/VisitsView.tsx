
import { useState } from 'react';
import { Calendar, Clock, MapPin, User, Plus, CheckCircle, XCircle } from 'lucide-react';
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
    <div className="p-8 space-y-8 bg-gradient-to-br from-slate-50 to-amber-50 min-h-screen">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Gestion des visites
          </h1>
          <p className="text-lg text-slate-600">Planifiez et gérez les visites de biens</p>
        </div>
        <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
          <Plus className="h-5 w-5 mr-2" />
          Programmer une visite
        </Button>
      </div>

      {/* Filters */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl p-6">
        <div className="flex gap-4">
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-64 border-slate-200">
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
      </div>

      {/* Visits List */}
      {filteredVisits.length > 0 ? (
        <div className="space-y-6">
          {filteredVisits.map((visit) => {
            const property = mockProperties.find(p => p.id === visit.propertyId);
            const client = mockUsers.find(u => u.id === visit.clientId);
            const agent = mockUsers.find(u => u.id === visit.agentId);
            
            return (
              <Card key={visit.id} className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-slate-800 flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-amber-500" />
                      {property?.title}
                    </CardTitle>
                    <Badge variant={getStatusColor(visit.status)} className="shadow-sm">
                      {getStatusLabel(visit.status)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                      <Calendar className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="text-sm font-medium text-slate-700">Date</p>
                        <p className="text-sm text-slate-600">
                          {visit.requestedDate.toLocaleDateString('fr-FR')}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl">
                      <Clock className="h-5 w-5 text-emerald-500" />
                      <div>
                        <p className="text-sm font-medium text-slate-700">Heure</p>
                        <p className="text-sm text-slate-600">
                          {visit.requestedDate.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl">
                      <MapPin className="h-5 w-5 text-purple-500" />
                      <div>
                        <p className="text-sm font-medium text-slate-700">Lieu</p>
                        <p className="text-sm text-slate-600">{property?.city}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-xl">
                      <User className="h-5 w-5 text-orange-500" />
                      <div>
                        <p className="text-sm font-medium text-slate-700">Client</p>
                        <p className="text-sm text-slate-600">
                          {client?.firstName} {client?.lastName}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {visit.notes && (
                    <div className="mb-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <h4 className="font-medium text-slate-700 mb-2">Notes</h4>
                      <p className="text-sm text-slate-600">{visit.notes}</p>
                    </div>
                  )}

                  <div className="flex gap-3">
                    {visit.status === 'pending' && (
                      <>
                        <Button 
                          size="sm" 
                          onClick={() => handleConfirm(visit.id)}
                          className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-md"
                        >
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Confirmer
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleCancel(visit.id)}
                          className="border-red-200 text-red-600 hover:bg-red-50"
                        >
                          <XCircle className="h-4 w-4 mr-2" />
                          Refuser
                        </Button>
                      </>
                    )}
                    <Button size="sm" variant="outline" className="border-slate-200 hover:bg-slate-50">
                      Modifier
                    </Button>
                    <Button size="sm" variant="outline" className="border-slate-200 hover:bg-slate-50">
                      Contacter le client
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl p-12 max-w-md mx-auto">
            <Calendar className="h-16 w-16 text-slate-400 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-slate-700 mb-3">Aucune visite trouvée</h3>
            <p className="text-slate-500">Aucune visite ne correspond à vos critères</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisitsView;
