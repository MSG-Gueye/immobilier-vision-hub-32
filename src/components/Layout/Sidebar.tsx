
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
      "bg-slate-900 text-white w-64 min-h-screen transition-transform duration-300 ease-in-out fixed lg:relative z-30",
      isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
    )}>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <Building className="h-8 w-8 text-blue-400" />
          <h1 className="text-xl font-bold">AgenceImmo Pro</h1>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3 text-left",
                  activeTab === item.id
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                )}
                onClick={() => onTabChange(item.id)}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Button>
            );
          })}
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <Button variant="ghost" className="w-full justify-start gap-3 text-gray-300 hover:text-white hover:bg-gray-800">
            <LogOut className="h-5 w-5" />
            Déconnexion
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
