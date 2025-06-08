
import { Home, Building, Users, Calendar, FileText, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Tableau de bord', icon: Home },
  { id: 'properties', label: 'Biens immobiliers', icon: Building },
  { id: 'users', label: 'Utilisateurs', icon: Users },
  { id: 'visits', label: 'Visites', icon: Calendar },
  { id: 'contracts', label: 'Contrats', icon: FileText },
  { id: 'settings', label: 'Paramètres', icon: Settings },
];

const Sidebar = ({ isOpen, activeTab, onTabChange }: SidebarProps) => {
  return (
    <aside className={cn(
      "bg-white/95 backdrop-blur-sm border-r border-slate-200/60 w-72 min-h-screen transition-transform duration-300 ease-in-out fixed lg:relative z-30 shadow-xl",
      isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
    )}>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8 p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl">
          <div className="p-2 bg-white/20 rounded-lg">
            <Building className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">AgenceImmo Pro</h1>
            <p className="text-blue-100 text-sm">Gestion moderne</p>
          </div>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <Button
                key={item.id}
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-3 text-left h-12 rounded-xl transition-all duration-200",
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:from-blue-600 hover:to-purple-700"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                )}
                onClick={() => onTabChange(item.id)}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </Button>
            );
          })}
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 text-slate-600 hover:text-red-600 hover:bg-red-50 h-12 rounded-xl transition-all duration-200"
          >
            <LogOut className="h-5 w-5" />
            <span className="font-medium">Déconnexion</span>
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
