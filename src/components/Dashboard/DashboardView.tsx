
import { Building, Users, Calendar, Euro } from 'lucide-react';
import StatsCard from './StatsCard';
import { mockDashboardStats, mockProperties, mockVisits } from '../../data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const DashboardView = () => {
  const stats = mockDashboardStats;
  const recentProperties = mockProperties.slice(0, 3);
  const pendingVisits = mockVisits.filter(visit => visit.status === 'pending');

  const formatPrice = (price: number, type: string) => {
    return type === 'location' ? `${price}€/mois` : `${price.toLocaleString()}€`;
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Tableau de bord</h1>
        <p className="text-gray-600">Vue d'ensemble de votre agence immobilière</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Biens disponibles"
          value={stats.availableProperties}
          icon={Building}
          trend="+3 ce mois"
          trendUp={true}
        />
        <StatsCard
          title="Total clients"
          value={stats.totalClients}
          icon={Users}
          trend="+12% vs mois dernier"
          trendUp={true}
        />
        <StatsCard
          title="Visites en attente"
          value={stats.pendingVisits}
          icon={Calendar}
        />
        <StatsCard
          title="Chiffre d'affaires"
          value={`${stats.monthlyRevenue.toLocaleString()}€`}
          icon={Euro}
          trend="+8% vs mois dernier"
          trendUp={true}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Properties */}
        <Card>
          <CardHeader>
            <CardTitle>Biens récents</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentProperties.map((property) => (
              <div key={property.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{property.title}</h3>
                  <p className="text-sm text-gray-600">{property.city}</p>
                  <p className="text-sm font-medium text-blue-600">
                    {formatPrice(property.price, property.transactionType)}
                  </p>
                </div>
                <Badge 
                  variant={property.status === 'disponible' ? 'default' : 'secondary'}
                >
                  {property.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Pending Visits */}
        <Card>
          <CardHeader>
            <CardTitle>Visites en attente</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {pendingVisits.length > 0 ? (
              pendingVisits.map((visit) => {
                const property = mockProperties.find(p => p.id === visit.propertyId);
                return (
                  <div key={visit.id} className="p-4 border rounded-lg">
                    <h3 className="font-medium">{property?.title}</h3>
                    <p className="text-sm text-gray-600">
                      {visit.requestedDate.toLocaleDateString('fr-FR')} à {visit.requestedDate.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                    <Badge variant="outline" className="mt-2">
                      En attente
                    </Badge>
                  </div>
                );
              })
            ) : (
              <p className="text-gray-500 text-center py-4">Aucune visite en attente</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardView;
