
import { useState } from 'react';
import { Bell, Search, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  onMenuToggle: () => void;
  isSidebarOpen: boolean;
}

const Header = ({ onMenuToggle, isSidebarOpen }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuToggle}
          className="lg:hidden"
        >
          {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
        
        <div className="hidden md:flex items-center gap-2">
          <Search className="h-4 w-4 text-gray-400" />
          <Input
            placeholder="Rechercher un bien, un client..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            3
          </span>
        </Button>
        
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
