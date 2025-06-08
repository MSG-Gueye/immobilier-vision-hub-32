
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
    <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200/60 px-6 py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuToggle}
          className="lg:hidden hover:bg-slate-100"
        >
          {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
        
        <div className="hidden md:flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-2 border border-slate-200">
          <Search className="h-4 w-4 text-slate-400" />
          <Input
            placeholder="Rechercher un bien, un client..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64 border-0 bg-transparent focus:ring-0 placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="relative hover:bg-slate-100">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-lg">
            3
          </span>
        </Button>
        
        <Button variant="ghost" size="icon" className="hover:bg-slate-100">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <User className="h-4 w-4 text-white" />
          </div>
        </Button>
      </div>
    </header>
  );
};

export default Header;
