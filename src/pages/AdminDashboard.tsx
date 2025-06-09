
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Eye, Utensils, QrCode, Calendar, Building, Settings, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { mockStats, mockMenuItems, mockCategories, mockRestaurants } from '../data/restaurantData';
import MenuManagement from '../components/Admin/MenuManagement';
import CategoryManagement from '../components/Admin/CategoryManagement';
import QRCodeManager from '../components/Admin/QRCodeManager';
import RestaurantSelector from '../components/RestaurantSelector';
import MultiRestaurantStats from '../components/Dashboard/MultiRestaurantStats';

const AdminDashboard = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedRestaurant, setSelectedRestaurant] = useState('1');

  // Stats pour le restaurant sélectionné
  const currentStats = mockStats.find(s => s.restaurantId === selectedRestaurant) || mockStats[0];
  const activeItems = mockMenuItems.filter(item => 
    item.restaurantId === selectedRestaurant && item.isAvailable
  ).length;
  const totalCategories = mockCategories.filter(cat => 
    cat.restaurantId === selectedRestaurant && cat.isActive
  ).length;

  const statsCards = [
    {
      title: t('admin.menu_views'),
      value: currentStats.views,
      icon: Eye,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: t('admin.active_items'),
      value: activeItems,
      icon: Utensils,
      color: 'from-green-500 to-green-600'
    },
    {
      title: t('admin.categories'),
      value: totalCategories,
      icon: Calendar,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'QR Scans',
      value: currentStats.scansByHour.reduce((total, hour) => total + hour.scans, 0),
      icon: QrCode,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Gestion Multi-Restaurants
              </h1>
              <p className="text-gray-600">
                Gérez tous vos restaurants depuis une interface unique
              </p>
            </div>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              <Plus className="h-4 w-4 mr-2" />
              Nouveau Restaurant
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="dashboard">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
            <TabsTrigger value="categories">Catégories</TabsTrigger>
            <TabsTrigger value="menu">Menu</TabsTrigger>
            <TabsTrigger value="qrcode">QR Codes</TabsTrigger>
            <TabsTrigger value="settings">Paramètres</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <MultiRestaurantStats />
          </TabsContent>

          <TabsContent value="restaurants" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Gestion des Restaurants
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RestaurantSelector 
                  selectedRestaurant={selectedRestaurant}
                  onRestaurantChange={setSelectedRestaurant}
                />
                
                {/* Stats pour le restaurant sélectionné */}
                <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {statsCards.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <Card key={index} className="overflow-hidden">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                              <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                            </div>
                            <div className={`p-3 bg-gradient-to-r ${stat.color} rounded-full`}>
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {/* Chart pour le restaurant sélectionné */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Scans par heure - {mockRestaurants.find(r => r.id === selectedRestaurant)?.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={currentStats.scansByHour}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="hour" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="scans" fill="#f97316" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="categories">
            <RestaurantSelector 
              selectedRestaurant={selectedRestaurant}
              onRestaurantChange={setSelectedRestaurant}
            />
            <CategoryManagement />
          </TabsContent>

          <TabsContent value="menu">
            <RestaurantSelector 
              selectedRestaurant={selectedRestaurant}
              onRestaurantChange={setSelectedRestaurant}
            />
            <MenuManagement />
          </TabsContent>

          <TabsContent value="qrcode">
            <RestaurantSelector 
              selectedRestaurant={selectedRestaurant}
              onRestaurantChange={setSelectedRestaurant}
            />
            <QRCodeManager />
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Paramètres Globaux
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Abonnement</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-2xl font-bold text-blue-600">Premium</p>
                        <p className="text-gray-600">Plan actuel</p>
                        <p className="text-sm text-gray-500">
                          {mockRestaurants.length}/10 restaurants utilisés
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Statistiques Globales</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Restaurants actifs:</span>
                          <span className="font-semibold">{mockRestaurants.filter(r => r.isActive).length}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Total vues:</span>
                          <span className="font-semibold">{mockStats.reduce((sum, s) => sum + s.views, 0)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Total items menu:</span>
                          <span className="font-semibold">{mockMenuItems.length}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
