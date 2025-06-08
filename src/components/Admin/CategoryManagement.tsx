
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { mockCategories } from '../../data/restaurantData';

const CategoryManagement = () => {
  const { t } = useLanguage();
  const [categories, setCategories] = useState(mockCategories);
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [editingCategory, setEditingCategory] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    nameEn: '',
    description: '',
    descriptionEn: '',
    isActive: true
  });

  const handleSubmit = () => {
    if (editingCategory) {
      // Update category
      setCategories(categories.map(cat => 
        cat.id === editingCategory 
          ? { ...cat, ...formData }
          : cat
      ));
      setEditingCategory(null);
    } else {
      // Add new category
      const newCategory = {
        id: Date.now().toString(),
        restaurantId: '1',
        ...formData,
        order: categories.length + 1
      };
      setCategories([...categories, newCategory]);
      setIsAddingCategory(false);
    }
    
    setFormData({
      name: '',
      nameEn: '',
      description: '',
      descriptionEn: '',
      isActive: true
    });
  };

  const handleEdit = (category: any) => {
    setFormData({
      name: category.name,
      nameEn: category.nameEn,
      description: category.description,
      descriptionEn: category.descriptionEn,
      isActive: category.isActive
    });
    setEditingCategory(category.id);
    setIsAddingCategory(true);
  };

  const handleDelete = (categoryId: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette catégorie ?')) {
      setCategories(categories.filter(cat => cat.id !== categoryId));
    }
  };

  const handleCancel = () => {
    setIsAddingCategory(false);
    setEditingCategory(null);
    setFormData({
      name: '',
      nameEn: '',
      description: '',
      descriptionEn: '',
      isActive: true
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Gestion des catégories</h2>
        <Button 
          onClick={() => setIsAddingCategory(true)}
          className="flex items-center gap-2"
          disabled={isAddingCategory}
        >
          <Plus className="h-4 w-4" />
          {t('admin.add_category')}
        </Button>
      </div>

      {/* Add/Edit Form */}
      {isAddingCategory && (
        <Card>
          <CardHeader>
            <CardTitle>
              {editingCategory ? 'Modifier la catégorie' : 'Ajouter une catégorie'}
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
                  placeholder="ex: Entrées"
                />
              </div>
              <div>
                <Label htmlFor="nameEn">Nom (Anglais)</Label>
                <Input
                  id="nameEn"
                  value={formData.nameEn}
                  onChange={(e) => setFormData({...formData, nameEn: e.target.value})}
                  placeholder="ex: Starters"
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
                  placeholder="Description de la catégorie..."
                />
              </div>
              <div>
                <Label htmlFor="descriptionEn">Description (Anglais)</Label>
                <Textarea
                  id="descriptionEn"
                  value={formData.descriptionEn}
                  onChange={(e) => setFormData({...formData, descriptionEn: e.target.value})}
                  placeholder="Category description..."
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="isActive"
                checked={formData.isActive}
                onCheckedChange={(checked) => setFormData({...formData, isActive: checked})}
              />
              <Label htmlFor="isActive">Catégorie active</Label>
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

      {/* Categories List */}
      <div className="grid gap-4">
        {categories.map((category) => (
          <Card key={category.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold">{category.name}</h3>
                    <span className="text-sm text-gray-500">/ {category.nameEn}</span>
                    {!category.isActive && (
                      <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded">
                        Inactive
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-1">{category.description}</p>
                  <p className="text-gray-500 text-sm">{category.descriptionEn}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(category)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(category.id)}
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

export default CategoryManagement;
