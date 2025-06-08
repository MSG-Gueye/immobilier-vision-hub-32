
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Leaf, Utensils, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { mockRestaurant, mockCategories, mockMenuItems } from '../data/restaurantData';

const PublicMenu = () => {
  const { restaurantId } = useParams();
  const { language, setLanguage, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = mockCategories.filter(cat => cat.isActive);
  const menuItems = mockMenuItems.filter(item => 
    selectedCategory ? item.categoryId === selectedCategory : true
  );

  const getCategoryName = (category: any) => {
    return language === 'en' ? category.nameEn : category.name;
  };

  const getItemName = (item: any) => {
    return language === 'en' ? item.nameEn : item.name;
  };

  const getItemDescription = (item: any) => {
    return language === 'en' ? item.descriptionEn : item.description;
  };

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <Utensils className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{mockRestaurant.name}</h1>
                <p className="text-gray-600">{mockRestaurant.description}</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2"
            >
              <Languages className="h-4 w-4" />
              {language === 'fr' ? 'English' : 'Français'}
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              className="mb-2"
            >
              {t('menu.title')}
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="mb-2"
              >
                {getCategoryName(category)}
              </Button>
            ))}
          </div>
        </div>

        {/* Menu Items by Category */}
        {categories.map((category) => {
          const categoryItems = menuItems.filter(item => item.categoryId === category.id);
          
          if (selectedCategory && selectedCategory !== category.id) return null;
          if (categoryItems.length === 0) return null;

          return (
            <div key={category.id} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                {getCategoryName(category)}
              </h2>
              <p className="text-gray-600 text-center mb-8">
                {language === 'en' ? category.descriptionEn : category.description}
              </p>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {categoryItems.map((item) => (
                  <Card 
                    key={item.id} 
                    className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${
                      !item.isAvailable ? 'opacity-60' : ''
                    }`}
                  >
                    {item.image && (
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={getItemName(item)}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-gray-800">
                          {getItemName(item)}
                        </h3>
                        <span className="text-2xl font-bold text-orange-600">
                          {item.price.toFixed(2)}€
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">
                        {getItemDescription(item)}
                      </p>

                      {!item.isAvailable && (
                        <Badge variant="destructive" className="mb-3">
                          {t('menu.unavailable')}
                        </Badge>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {item.isVegetarian && (
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Leaf className="h-3 w-3" />
                            {t('menu.vegetarian')}
                          </Badge>
                        )}
                        {item.isVegan && (
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Leaf className="h-3 w-3" />
                            {t('menu.vegan')}
                          </Badge>
                        )}
                        {item.allergens.length > 0 && (
                          <Badge variant="outline" className="text-xs">
                            {t('menu.allergens')}: {item.allergens.join(', ')}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Utensils className="h-5 w-5 text-orange-500" />
            <span className="font-semibold">{mockRestaurant.name}</span>
          </div>
          <p className="text-gray-600 mb-2">{mockRestaurant.address}</p>
          <p className="text-gray-600">{mockRestaurant.phone}</p>
        </div>
      </footer>
    </div>
  );
};

export default PublicMenu;
