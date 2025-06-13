
import { Building, Calculator, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Building className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">AgenceImmo Pro</h1>
              <p className="text-xs text-gray-600">Votre partenaire immobilier</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Accueil</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Biens à vendre</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">À louer</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden md:flex items-center gap-2">
              <Calculator className="h-4 w-4" />
              Simulation
            </Button>
            <Button 
              onClick={handleLogin}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex items-center gap-2"
            >
              <User className="h-4 w-4" />
              Connexion
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
