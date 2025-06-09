
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Eye, TrendingUp, Users, Calendar } from 'lucide-react';
import { mockRestaurants, mockStats } from '../../data/restaurantData';

const MultiRestaurantStats = () => {
  const totalViews = mockStats.reduce((sum, stat) => sum + stat.views, 0);
  const totalScans = mockStats.reduce((sum, stat) => 
    sum + stat.scansByHour.reduce((hourSum, hour) => hourSum + hour.scans, 0), 0
  );
  const activeRestaurants = mockRestaurants.filter(r => r.isActive).length;
  const averageViews = Math.round(totalViews / mockRestaurants.length);

  const restaurantStats = mockRestaurants.map(restaurant => {
    const stats = mockStats.find(s => s.restaurantId === restaurant.id);
    return {
      ...restaurant,
      views: stats?.views || 0,
      scans: stats?.scansByHour.reduce((sum, hour) => sum + hour.scans, 0) || 0,
    };
  }).sort((a, b) => b.views - a.views);

  return (
    <div className="space-y-6">
      {/* Global Stats */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Restaurants actifs</p>
                <p className="text-3xl font-bold text-gray-800">{activeRestaurants}</p>
              </div>
              <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full">
                <Building className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Vues totales</p>
                <p className="text-3xl font-bold text-gray-800">{totalViews}</p>
              </div>
              <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full">
                <Eye className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Scans QR totaux</p>
                <p className="text-3xl font-bold text-gray-800">{totalScans}</p>
              </div>
              <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Moyenne par restaurant</p>
                <p className="text-3xl font-bold text-gray-800">{averageViews}</p>
              </div>
              <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full">
                <Users className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Restaurant Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Performance par restaurant</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {restaurantStats.map((restaurant, index) => (
              <div key={restaurant.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold">{restaurant.name}</h3>
                    <p className="text-sm text-gray-600">{restaurant.address.split(',')[0]}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-semibold">{restaurant.views} vues</p>
                    <p className="text-sm text-gray-600">{restaurant.scans} scans</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Badge variant={restaurant.isActive ? 'default' : 'secondary'}>
                      {restaurant.isActive ? 'Actif' : 'Inactif'}
                    </Badge>
                    <Badge variant="outline">
                      {restaurant.plan}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MultiRestaurantStats;
