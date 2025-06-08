
import { useState } from 'react';
import Header from '@/components/Layout/Header';
import Sidebar from '@/components/Layout/Sidebar';
import DashboardView from '@/components/Dashboard/DashboardView';
import PropertiesView from '@/components/Properties/PropertiesView';
import UsersView from '@/components/Users/UsersView';
import VisitsView from '@/components/Visits/VisitsView';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView />;
      case 'properties':
        return <PropertiesView />;
      case 'users':
        return <UsersView />;
      case 'visits':
        return <VisitsView />;
      case 'contracts':
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Contrats</h1>
            <div className="text-center py-12">
              <p className="text-gray-600">Fonctionnalité en cours de développement</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Paramètres</h1>
            <div className="text-center py-12">
              <p className="text-gray-600">Fonctionnalité en cours de développement</p>
            </div>
          </div>
        );
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex w-full">
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      <Sidebar
        isOpen={isSidebarOpen}
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          if (window.innerWidth < 1024) {
            setIsSidebarOpen(false);
          }
        }}
      />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header onMenuToggle={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <main className="flex-1 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Index;
