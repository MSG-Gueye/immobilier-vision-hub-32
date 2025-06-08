
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Leaf } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { mockMenuItems, mockCategories } from '../../data/restaurantData';

const MenuManagement = () => {
  const { t } = useLanguage();
  const [menuItems, setMenuItems] = useState(mockMenuItems);
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [editingItem, setEditingItem] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [formData, setFormData] = useState({
    name: '',
    nameEn: '',
    description: '',
    descriptionEn: '',
    price: 0,
    categoryId: '',
    isAvailable: true,
    isVegetarian: false,
    isVegan: false,
    allergens: [] as string[]
  });

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.categoryId === selectedCategory);

  const handleSubmit = () => {
    if (editingItem) {
      setMenuItems(menuItems.map(item => 
        item.id === editingItem 
          ? { ...item, ...formData }
          : item
      ));
      setEditingItem(null);
    } else {
      const newItem = {
        id: Date.now().toString(),
        restaurantId: '1',
        ...formData,
        order: menuItems.length + 1
      };
      setMenuItems([...menuItems, newItem]);
      setIsAddingItem(false);
    }
    
    setFormData({
      name: '',
      nameEn: '',
      description: '',
      descriptionEn: '',
      price: 0,
      categoryId: '',
      isAvailable: true,
      isVegetarian: false,
      isVegan: false,
      allergens: []
    });
  };

  const handleEdit = (item: any) => {
    setFormData({
      name: item.name,
      nameEn: item.nameEn,
      description: item.description,
      descriptionEn: item.descriptionEn,
      price: item.price,
      categoryId: item.categoryId,
      isAvailable: item.isAvailable,
      isVegetarian: item.isVegetarian,
      isVegan: item.isVegan,
      allergens: item.allergens
    });
    setEditingItem(item.id);
    setIsAddingItem(true);
  };

  const handleDelete = (itemId: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce plat ?')) {
      setMenuItems(menuItems.filter(item => item.id !== itemId));
    }
  };

  const handleCancel = () => {
    setIsAddingItem(false);
    setEditingItem(null);
    setFormData({
      name: '',
      nameEn: '',
      description: '',
      descriptionEn: '',
      price: 0,
      categoryId: '',
      isAvailable: true,
      isVegetarian: false,
      isVegan: false,
      allergens: []
    });
  };

  const getCategoryName = (categoryId: string) => {
    const category = mockCategories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Sans catégorie';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Gestion du menu</h2>
        <Button 
          onClick={() => setIsAddingItem(true)}
          className="flex items-center gap-2"
          disabled={isAddingItem}
        >
          <Plus className="h-4 w-4" />
          {t('admin.add_item')}
        </Button>
      </div>

      {/* Category Filter */}
      <div className="flex gap-4 items-center">
        <Label>Filtrer par catégorie:</Label>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Toutes les catégories</SelectItem>
            {mockCategories.map(category => (
              <SelectItem key={category.id} value={category.id}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Add/Edit Form */}
      {isAddingItem && (
        <Card>
          <CardHeader>
            <CardTitle>
              {editingItem ? 'Modifier le plat' : 'Ajouter un plat'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="name">Nom (Français)</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="ex: Boeuf Bourguignon"
                />
              </div>
              <div>
                <Label htmlFor="nameEn">Nom (Anglais)</Label>
                <Input
                  id="nameEn"
                  value={formData.nameEn}
                  onChange={(e) => setFormData({...formData, nameEn: e.target.value})}
                  placeholder="ex: Beef Bourguignon"
                />
              </div>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="description">Description (Français)</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Description du plat..."
                />
              </div>
              <div>
                <Label htmlFor="descriptionEn">Description (Anglais)</Label>
                <Textarea
                  id="descriptionEn"
                  value={formData.descriptionEn}
                  onChange={(e) => setFormData({...formData, descriptionEn: e.target.value})}
                  placeholder="Dish description..."
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <Label htmlFor="price">Prix (€)</Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: parseFloat(e.target.value)})}
                />
              </div>
              <div>
                <Label htmlFor="category">Catégorie</Label>
                <Select value={formData.categoryId} onValueChange={(value) => setFormData({...formData, categoryId: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choisir une catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockCategories.map(category => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="isAvailable"
                  checked={formData.isAvailable}
                  onCheckedChange={(checked) => setFormData({...formData, isAvailable: checked})}
                />
                <Label htmlFor="isAvailable">Disponible</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="isVegetarian"
                  checked={formData.isVegetarian}
                  onCheckedChange={(checked) => setFormData({...formData, isVegetarian: checked})}
                />
                <Label htmlFor="isVegetarian">Végétarien</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="isVegan"
                  checked={formData.isVegan}
                  onCheckedChange={(checked) => setFormData({...formData, isVegan: checked})}
                />
                <Label htmlFor="isVegan">Végan</Label>
              </div>
            </div>

            <div className="flex gap-2">
              <Button onClick={handleSubmit}>
                {t('admin.save')}
              </Button>
              <Button variant="outline" onClick={handleCancel}>
                {t('admin.cancel')}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Menu Items List */}
      <div className="grid gap-4">
        {filteredItems.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <span className="text-sm text-gray-500">/ {item.nameEn}</span>
                    <Badge variant="outline">{getCategoryName(item.categoryId)}</Badge>
                    <span className="text-lg font-bold text-orange-600">{item.price.toFixed(2)}€</span>
                  </div>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {!item.isAvailable && (
                      <Badge variant="destructive">Indisponible</Badge>
                    )}
                    {item.isVegetarian && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Leaf className="h-3 w-3" />
                        Végétarien
                      </Badge>
                    )}
                    {item.isVegan && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Leaf className="h-3 w-3" />
                        Végan
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(item)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(item.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MenuManagement;
