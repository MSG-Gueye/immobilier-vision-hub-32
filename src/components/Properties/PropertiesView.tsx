
import { useState } from 'react';
import { Plus, Filter, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import PropertyCard from './PropertyCard';
import { mockProperties } from '../../data/mockData';
import { Property } from '../../types';

const PropertiesView = () => {
  const [properties, setProperties] = useState(mockProperties);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || property.type === filterType;
    const matchesStatus = filterStatus === 'all' || property.status === filterStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const handleEdit = (property: Property) => {
    console.log('Éditer le bien:', property);
    // TODO: Ouvrir le modal d'édition
  };

  const handleDelete = (id: string) => {
    setProperties(properties.filter(p => p.id !== id));
    console.log('Bien supprimé:', id);
  };

  const handleView = (property: Property) => {
    console.log('Voir le bien:', property);
    // TODO: Ouvrir le modal de détails
  };

  const handleAddProperty = () => {
    console.log('Ajouter un nouveau bien');
    // TODO: Ouvrir le modal d'ajout
  };

  return (
    <div className="p-8 space-y-8 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Gestion des biens
          </h1>
          <p className="text-lg text-slate-600">Gérez votre portfolio immobilier avec style</p>
        </div>
        <Button 
          onClick={handleAddProperty} 
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Plus className="h-5 w-5 mr-2" />
          Ajouter un bien
        </Button>
      </div>

      {/* Filters */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Rechercher par titre ou ville..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-slate-200 focus:border-blue-400 focus:ring-blue-400/20"
            />
          </div>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-full lg:w-48 border-slate-200">
              <SelectValue placeholder="Type de bien" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les types</SelectItem>
              <SelectItem value="appartement">Appartement</SelectItem>
              <SelectItem value="maison">Maison</SelectItem>
              <SelectItem value="terrain">Terrain</SelectItem>
              <SelectItem value="bureau">Bureau</SelectItem>
              <SelectItem value="commerce">Commerce</SelectItem>
            </SelectContent>
          </Select>
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-full lg:w-48 border-slate-200">
              <SelectValue placeholder="Statut" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les statuts</SelectItem>
              <SelectItem value="disponible">Disponible</SelectItem>
              <SelectItem value="reserve">Réservé</SelectItem>
              <SelectItem value="vendu">Vendu</SelectItem>
              <SelectItem value="loue">Loué</SelectItem>
            </SelectContent>
          </Select>
          <Button 
            variant="outline" 
            className="border-slate-200 hover:bg-slate-50"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filtres avancés
          </Button>
        </div>
      </div>

      {/* Properties Grid */}
      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onView={handleView}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl p-12 max-w-md mx-auto">
            <Building className="h-16 w-16 text-slate-400 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-slate-700 mb-3">Aucun bien trouvé</h3>
            <p className="text-slate-500">Essayez de modifier vos critères de recherche</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertiesView;
