
export interface Restaurant {
  id: string;
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  logo?: string;
  qrCodeUrl: string;
  isActive: boolean;
  ownerId: string;
  plan: 'basic' | 'premium' | 'enterprise';
  maxMenuItems: number;
  allowCustomization: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  restaurantId: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  order: number;
  isActive: boolean;
}

export interface MenuItem {
  id: string;
  categoryId: string;
  restaurantId: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  price: number;
  image?: string;
  isAvailable: boolean;
  isVegetarian: boolean;
  isVegan: boolean;
  allergens: string[];
  order: number;
}

export interface MenuStats {
  restaurantId: string;
  date: string;
  views: number;
  scansByHour: { hour: number; scans: number }[];
  topItems: { itemId: string; itemName: string; views: number }[];
  deviceTypes: { mobile: number; desktop: number; tablet: number };
}

export interface Owner {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  plan: 'basic' | 'premium' | 'enterprise';
  restaurantCount: number;
  maxRestaurants: number;
  createdAt: Date;
}

export interface Subscription {
  id: string;
  ownerId: string;
  plan: 'basic' | 'premium' | 'enterprise';
  status: 'active' | 'cancelled' | 'expired';
  startDate: Date;
  endDate: Date;
  monthlyPrice: number;
}
