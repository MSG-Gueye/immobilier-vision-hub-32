
import { useState } from 'react';
import { Plus, Search, Filter, Users } from 'lucide-react';
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
    <div className="p-8 space-y-8 bg-gradient-to-br from-slate-50 to-emerald-50 min-h-screen">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Gestion des utilisateurs
          </h1>
          <p className="text-lg text-slate-600">Administrez les comptes de votre agence</p>
        </div>
        <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
          <Plus className="h-5 w-5 mr-2" />
          Ajouter un utilisateur
        </Button>
      </div>

      {/* Filters */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Rechercher par nom ou email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-slate-200 focus:border-emerald-400 focus:ring-emerald-400/20"
            />
          </div>
          <Select value={filterRole} onValueChange={setFilterRole}>
            <SelectTrigger className="w-full md:w-48 border-slate-200">
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
      </div>

      {/* Users Grid */}
      {filteredUsers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <Card key={user.id} className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">
                        {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <CardTitle className="text-lg text-slate-700">
                        {user.firstName} {user.lastName}
                      </CardTitle>
                    </div>
                  </div>
                  <Badge variant={getRoleBadgeColor(user.role)} className="shadow-sm">
                    {getRoleLabel(user.role)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <p className="text-slate-600 font-medium">{user.email}</p>
                  {user.phone && (
                    <p className="text-slate-600">{user.phone}</p>
                  )}
                  <p className="text-slate-500">
                    Inscrit le {user.createdAt.toLocaleDateString('fr-FR')}
                  </p>
                </div>
                <div className="flex gap-2 mt-6">
                  <Button size="sm" variant="outline" className="flex-1 border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                    Modifier
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                    Contacter
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl p-12 max-w-md mx-auto">
            <Users className="h-16 w-16 text-slate-400 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-slate-700 mb-3">Aucun utilisateur trouvé</h3>
            <p className="text-slate-500">Essayez de modifier vos critères de recherche</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersView;
