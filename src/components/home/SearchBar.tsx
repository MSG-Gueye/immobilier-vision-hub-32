
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const SearchBar = () => {
  const [searchData, setSearchData] = useState({
    type: '',
    location: '',
    budget: ''
  });

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Select onValueChange={(value) => setSearchData({...searchData, type: value})}>
          <SelectTrigger>
            <SelectValue placeholder="Type de bien" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="appartement">Appartement</SelectItem>
            <SelectItem value="maison">Maison</SelectItem>
            <SelectItem value="villa">Villa</SelectItem>
            <SelectItem value="studio">Studio</SelectItem>
            <SelectItem value="terrain">Terrain</SelectItem>
            <SelectItem value="commercial">Local commercial</SelectItem>
          </SelectContent>
        </Select>
        
        <Input 
          placeholder="Localisation"
          value={searchData.location}
          onChange={(e) => setSearchData({...searchData, location: e.target.value})}
        />
        
        <Select onValueChange={(value) => setSearchData({...searchData, budget: value})}>
          <SelectTrigger>
            <SelectValue placeholder="Budget" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-200000">Jusqu'à 200 000€</SelectItem>
            <SelectItem value="200000-500000">200 000€ - 500 000€</SelectItem>
            <SelectItem value="500000-1000000">500 000€ - 1M€</SelectItem>
            <SelectItem value="1000000+">Plus de 1M€</SelectItem>
          </SelectContent>
        </Select>
        
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-full">
          <Search className="h-5 w-5 mr-2" />
          Rechercher
        </Button>
      </div>
      
      <div className="flex gap-2 mt-4">
        <Button variant="outline" size="sm">Vente</Button>
        <Button variant="outline" size="sm">Location</Button>
        <Button variant="outline" size="sm">Neuf</Button>
        <Button variant="outline" size="sm">Prestige</Button>
      </div>
    </div>
  );
};

export default SearchBar;
