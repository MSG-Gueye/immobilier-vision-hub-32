
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Home, TrendingUp, Users, Award } from 'lucide-react';
import AllPropertiesModal from './AllPropertiesModal';

const EnhancedHeroSection = () => {
  const [isAllPropertiesOpen, setIsAllPropertiesOpen] = useState(false);
  const [searchLocation, setSearchLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [transactionType, setTransactionType] = useState('');

  const handleSearch = () => {
    setIsAllPropertiesOpen(true);
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury property"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-blue-900/60" />
        </div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              {/* Badge premium */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
                <Award className="h-5 w-5 text-yellow-400" />
                <span className="text-white font-medium">Agence immobilière de prestige #1 sur la Côte d'Azur</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Votre rêve immobilier
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  devient réalité
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
                Découvrez notre collection exclusive de biens d'exception sur la Côte d'Azur. 
                Villas de luxe, appartements de prestige et terrains constructibles vous attendent.
              </p>
            </div>

            {/* Barre de recherche premium */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Localisation</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Nice, Cannes, Monaco..."
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                      className="pl-10 h-12"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Type de bien</label>
                  <Select value={propertyType} onValueChange={setPropertyType}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Appartement, Villa..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="appartement">Appartement</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="maison">Maison</SelectItem>
                      <SelectItem value="terrain">Terrain</SelectItem>
                      <SelectItem value="penthouse">Penthouse</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Transaction</label>
                  <Select value={transactionType} onValueChange={setTransactionType}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Vente ou Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vente">Achat</SelectItem>
                      <SelectItem value="location">Location</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  onClick={handleSearch}
                  className="h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Rechercher
                </Button>
              </div>
            </div>

            {/* Stats en live */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center mb-2">
                  <Home className="h-8 w-8 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-blue-200 text-sm">Biens vendus</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-white">1200+</div>
                <div className="text-blue-200 text-sm">Clients satisfaits</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-8 w-8 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-blue-200 text-sm">Taux de satisfaction</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-8 w-8 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-blue-200 text-sm">Années d'expérience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Button 
                onClick={() => setIsAllPropertiesOpen(true)}
                size="lg" 
                className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
              >
                Voir tous nos biens
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 text-lg"
              >
                Demander une estimation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <AllPropertiesModal
        isOpen={isAllPropertiesOpen}
        onClose={() => setIsAllPropertiesOpen(false)}
      />
    </>
  );
};

export default EnhancedHeroSection;
