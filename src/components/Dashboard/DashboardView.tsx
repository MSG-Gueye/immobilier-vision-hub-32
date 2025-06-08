
import { Building, Users, Calendar, Euro, TrendingUp, Clock } from 'lucide-react';
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
    <div className="p-8 space-y-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Tableau de bord
        </h1>
        <p className="text-lg text-slate-600">Vue d'ensemble de votre agence immobilière</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
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

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Recent Properties */}
        <Card className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-semibold text-slate-700 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-blue-500" />
                Biens récents
              </CardTitle>
              <Badge variant="outline" className="text-blue-600 border-blue-200">
                {recentProperties.length} nouveaux
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentProperties.map((property) => (
              <div key={property.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300">
                <div className="space-y-1">
                  <h3 className="font-semibold text-slate-800">{property.title}</h3>
                  <p className="text-sm text-slate-600 flex items-center">
                    <Building className="h-3 w-3 mr-1" />
                    {property.city}
                  </p>
                  <p className="text-sm font-bold text-blue-600">
                    {formatPrice(property.price, property.transactionType)}
                  </p>
                </div>
                <Badge 
                  variant={property.status === 'disponible' ? 'default' : 'secondary'}
                  className="shadow-sm"
                >
                  {property.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Pending Visits */}
        <Card className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-semibold text-slate-700 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-amber-500" />
                Visites en attente
              </CardTitle>
              <Badge variant="outline" className="text-amber-600 border-amber-200">
                {pendingVisits.length} en attente
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {pendingVisits.length > 0 ? (
              pendingVisits.map((visit) => {
                const property = mockProperties.find(p => p.id === visit.propertyId);
                return (
                  <div key={visit.id} className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-100 hover:shadow-md transition-all duration-300">
                    <h3 className="font-semibold text-slate-800 mb-2">{property?.title}</h3>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-slate-600">
                        <p className="flex items-center mb-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          {visit.requestedDate.toLocaleDateString('fr-FR')}
                        </p>
                        <p className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {visit.requestedDate.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                      <Badge variant="outline" className="bg-amber-100 text-amber-700 border-amber-300">
                        En attente
                      </Badge>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-8">
                <Calendar className="h-12 w-12 text-slate-300 mx-auto mb-3" />
                <p className="text-slate-500">Aucune visite en attente</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardView;
