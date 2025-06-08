
import { useState } from 'react';
import { Plus, Filter } from 'lucide-react';
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
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestion des biens</h1>
          <p className="text-gray-600">Gérez votre portfolio immobilier</p>
        </div>
        <Button onClick={handleAddProperty} className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Ajouter un bien
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 p-4 bg-gray-50 rounded-lg">
        <div className="flex-1">
          <Input
            placeholder="Rechercher par titre ou ville..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={filterType} onValueChange={setFilterType}>
          <SelectTrigger className="w-full md:w-48">
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
          <SelectTrigger className="w-full md:w-48">
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
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filtres avancés
        </Button>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {filteredProperties.length === 0 && (
        <div className="text-center py-12">
          <Building className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun bien trouvé</h3>
          <p className="text-gray-600">Essayez de modifier vos critères de recherche</p>
        </div>
      )}
    </div>
  );
};

export default PropertiesView;
