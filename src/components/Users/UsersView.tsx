
import { useState } from 'react';
import { Plus, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockUsers } from '../../data/mockData';
import { User } from '../../types';

const UsersView = () => {
  const [users, setUsers] = useState(mockUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    
    return matchesSearch && matchesRole;
  });

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'admin': return 'destructive';
      case 'agent': return 'default';
      case 'client': return 'secondary';
      default: return 'default';
    }
  };

  const getRoleLabel = (role: string) => {
    switch (role) {
      case 'admin': return 'Administrateur';
      case 'agent': return 'Agent';
      case 'client': return 'Client';
      default: return role;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestion des utilisateurs</h1>
          <p className="text-gray-600">Gérez les comptes utilisateurs de votre agence</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Ajouter un utilisateur
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 p-4 bg-gray-50 rounded-lg">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Rechercher par nom ou email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={filterRole} onValueChange={setFilterRole}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Rôle" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les rôles</SelectItem>
            <SelectItem value="admin">Administrateur</SelectItem>
            <SelectItem value="agent">Agent</SelectItem>
            <SelectItem value="client">Client</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Users Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <Card key={user.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">
                      {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">
                      {user.firstName} {user.lastName}
                    </CardTitle>
                  </div>
                </div>
                <Badge variant={getRoleBadgeColor(user.role)}>
                  {getRoleLabel(user.role)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600">{user.email}</p>
                {user.phone && (
                  <p className="text-gray-600">{user.phone}</p>
                )}
                <p className="text-gray-500">
                  Inscrit le {user.createdAt.toLocaleDateString('fr-FR')}
                </p>
              </div>
              <div className="flex gap-2 mt-4">
                <Button size="sm" variant="outline" className="flex-1">
                  Modifier
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  Contacter
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-12">
          <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun utilisateur trouvé</h3>
          <p className="text-gray-600">Essayez de modifier vos critères de recherche</p>
        </div>
      )}
    </div>
  );
};

export default UsersView;
