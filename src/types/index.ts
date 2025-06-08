
export type UserRole = 'admin' | 'agent' | 'client';

export type PropertyType = 'appartement' | 'maison' | 'terrain' | 'bureau' | 'commerce';

export type PropertyStatus = 'disponible' | 'reserve' | 'vendu' | 'loue';

export type TransactionType = 'vente' | 'location';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: UserRole;
  avatar?: string;
  createdAt: Date;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  type: PropertyType;
  transactionType: TransactionType;
  price: number;
  surface: number;
  rooms: number;
  bathrooms: number;
  address: string;
  city: string;
  zipCode: string;
  images: string[];
  status: PropertyStatus;
  agentId: string;
  features: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Visit {
  id: string;
  propertyId: string;
  clientId: string;
  agentId: string;
  requestedDate: Date;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
  createdAt: Date;
}

export interface DashboardStats {
  totalProperties: number;
  availableProperties: number;
  totalClients: number;
  totalAgents: number;
  monthlyRevenue: number;
  pendingVisits: number;
}
