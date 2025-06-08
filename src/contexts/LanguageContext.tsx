
import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  language: 'fr' | 'en';
  setLanguage: (lang: 'fr' | 'en') => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Navigation
    'nav.dashboard': 'Tableau de bord',
    'nav.menu': 'Menu',
    'nav.categories': 'Catégories',
    'nav.items': 'Plats',
    'nav.qrcode': 'QR Code',
    'nav.stats': 'Statistiques',
    'nav.settings': 'Paramètres',
    'nav.logout': 'Déconnexion',
    
    // Menu public
    'menu.title': 'Notre Menu',
    'menu.category.starters': 'Entrées',
    'menu.category.mains': 'Plats principaux',
    'menu.category.desserts': 'Desserts',
    'menu.category.drinks': 'Boissons',
    'menu.unavailable': 'Temporairement indisponible',
    'menu.vegetarian': 'Végétarien',
    'menu.vegan': 'Végan',
    'menu.allergens': 'Allergènes',
    
    // Admin
    'admin.login': 'Connexion',
    'admin.email': 'Email',
    'admin.password': 'Mot de passe',
    'admin.signin': 'Se connecter',
    'admin.dashboard': 'Tableau de bord',
    'admin.welcome': 'Bienvenue',
    'admin.menu_views': 'Vues du menu',
    'admin.active_items': 'Plats actifs',
    'admin.categories': 'Catégories',
    'admin.add_item': 'Ajouter un plat',
    'admin.add_category': 'Ajouter une catégorie',
    'admin.save': 'Enregistrer',
    'admin.cancel': 'Annuler',
    'admin.edit': 'Modifier',
    'admin.delete': 'Supprimer',
    'admin.name': 'Nom',
    'admin.description': 'Description',
    'admin.price': 'Prix',
    'admin.available': 'Disponible',
    'admin.order': 'Ordre',
    
    // QR Code
    'qr.title': 'QR Code de votre menu',
    'qr.description': 'Scannez ce code pour accéder au menu',
    'qr.download': 'Télécharger',
    'qr.print': 'Imprimer',
  },
  en: {
    // Navigation
    'nav.dashboard': 'Dashboard',
    'nav.menu': 'Menu',
    'nav.categories': 'Categories',
    'nav.items': 'Items',
    'nav.qrcode': 'QR Code',
    'nav.stats': 'Statistics',
    'nav.settings': 'Settings',
    'nav.logout': 'Logout',
    
    // Menu public
    'menu.title': 'Our Menu',
    'menu.category.starters': 'Starters',
    'menu.category.mains': 'Main Courses',
    'menu.category.desserts': 'Desserts',
    'menu.category.drinks': 'Drinks',
    'menu.unavailable': 'Temporarily unavailable',
    'menu.vegetarian': 'Vegetarian',
    'menu.vegan': 'Vegan',
    'menu.allergens': 'Allergens',
    
    // Admin
    'admin.login': 'Login',
    'admin.email': 'Email',
    'admin.password': 'Password',
    'admin.signin': 'Sign In',
    'admin.dashboard': 'Dashboard',
    'admin.welcome': 'Welcome',
    'admin.menu_views': 'Menu Views',
    'admin.active_items': 'Active Items',
    'admin.categories': 'Categories',
    'admin.add_item': 'Add Item',
    'admin.add_category': 'Add Category',
    'admin.save': 'Save',
    'admin.cancel': 'Cancel',
    'admin.edit': 'Edit',
    'admin.delete': 'Delete',
    'admin.name': 'Name',
    'admin.description': 'Description',
    'admin.price': 'Price',
    'admin.available': 'Available',
    'admin.order': 'Order',
    
    // QR Code
    'qr.title': 'Your menu QR Code',
    'qr.description': 'Scan this code to access the menu',
    'qr.download': 'Download',
    'qr.print': 'Print',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  const t = (key: string, fallback?: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
