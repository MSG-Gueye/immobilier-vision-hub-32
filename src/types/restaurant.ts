
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
  createdAt: Date;
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
}
