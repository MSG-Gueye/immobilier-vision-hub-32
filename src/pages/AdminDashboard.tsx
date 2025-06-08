
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Eye, Utensils, QrCode, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { mockStats, mockMenuItems, mockCategories } from '../data/restaurantData';
import MenuManagement from '../components/Admin/MenuManagement';
import CategoryManagement from '../components/Admin/CategoryManagement';
import QRCodeManager from '../components/Admin/QRCodeManager';

const AdminDashboard = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('dashboard');

  const activeItems = mockMenuItems.filter(item => item.isAvailable).length;
  const totalCategories = mockCategories.filter(cat => cat.isActive).length;

  const statsCards = [
    {
      title: t('admin.menu_views'),
      value: mockStats.views,
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
      value: mockStats.scansByHour.reduce((total, hour) => total + hour.scans, 0),
      icon: QrCode,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {t('admin.dashboard')}
          </h1>
          <p className="text-gray-600">
            {t('admin.welcome')} - Gérez votre menu électronique
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard">{t('nav.dashboard')}</TabsTrigger>
            <TabsTrigger value="categories">{t('nav.categories')}</TabsTrigger>
            <TabsTrigger value="menu">{t('nav.items')}</TabsTrigger>
            <TabsTrigger value="qrcode">{t('nav.qrcode')}</TabsTrigger>
            <TabsTrigger value="stats">{t('nav.stats')}</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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

            {/* Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Scans par heure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={mockStats.scansByHour}>
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
          </TabsContent>

          <TabsContent value="categories">
            <CategoryManagement />
          </TabsContent>

          <TabsContent value="menu">
            <MenuManagement />
          </TabsContent>

          <TabsContent value="qrcode">
            <QRCodeManager />
          </TabsContent>

          <TabsContent value="stats">
            <Card>
              <CardHeader>
                <CardTitle>Statistiques détaillées</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-800">Vues aujourd'hui</h3>
                      <p className="text-2xl font-bold text-blue-600">{mockStats.views}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-green-800">Heure de pointe</h3>
                      <p className="text-2xl font-bold text-green-600">19h-20h</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-purple-800">Taux de scan</h3>
                      <p className="text-2xl font-bold text-purple-600">78%</p>
                    </div>
                  </div>
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
