
import { User, Property, Visit, DashboardStats } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@agenceimmo.fr',
    firstName: 'Marie',
    lastName: 'Dubois',
    phone: '01 23 45 67 89',
    role: 'admin',
    createdAt: new Date('2024-01-15')
  },
  {
    id: '2',
    email: 'pierre.martin@agenceimmo.fr',
    firstName: 'Pierre',
    lastName: 'Martin',
    phone: '01 23 45 67 90',
    role: 'agent',
    createdAt: new Date('2024-02-01')
  },
  {
    id: '3',
    email: 'sarah.rousseau@agenceimmo.fr',
    firstName: 'Sarah',
    lastName: 'Rousseau',
    phone: '01 23 45 67 91',
    role: 'agent',
    createdAt: new Date('2024-02-15')
  },
  {
    id: '4',
    email: 'client1@email.fr',
    firstName: 'Jean',
    lastName: 'Dupont',
    phone: '06 12 34 56 78',
    role: 'client',
    createdAt: new Date('2024-03-01')
  }
];

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Appartement moderne centre-ville',
    description: 'Magnifique appartement de 3 pièces entièrement rénové avec terrasse, cuisine équipée et parking.',
    type: 'appartement',
    transactionType: 'vente',
    price: 285000,
    surface: 75,
    rooms: 3,
    bathrooms: 1,
    address: '15 rue des Lilas',
    city: 'Lyon',
    zipCode: '69002',
    images: ['/placeholder.svg'],
    status: 'disponible',
    agentId: '2',
    features: ['Parking', 'Terrasse', 'Cuisine équipée', 'Ascenseur'],
    createdAt: new Date('2024-05-01'),
    updatedAt: new Date('2024-05-01')
  },
  {
    id: '2',
    title: 'Maison familiale avec jardin',
    description: 'Belle maison de 5 pièces avec grand jardin, garage et cave. Quartier calme proche des écoles.',
    type: 'maison',
    transactionType: 'vente',
    price: 450000,
    surface: 130,
    rooms: 5,
    bathrooms: 2,
    address: '22 avenue des Roses',
    city: 'Villeurbanne',
    zipCode: '69100',
    images: ['/placeholder.svg'],
    status: 'disponible',
    agentId: '3',
    features: ['Jardin', 'Garage', 'Cave', 'Cheminée'],
    createdAt: new Date('2024-05-02'),
    updatedAt: new Date('2024-05-02')
  },
  {
    id: '3',
    title: 'Studio étudiant proche métro',
    description: 'Studio meublé idéal pour étudiant, proche université et transports.',
    type: 'appartement',
    transactionType: 'location',
    price: 650,
    surface: 25,
    rooms: 1,
    bathrooms: 1,
    address: '8 rue Pasteur',
    city: 'Lyon',
    zipCode: '69007',
    images: ['/placeholder.svg'],
    status: 'loue',
    agentId: '2',
    features: ['Meublé', 'Proche métro', 'Internet inclus'],
    createdAt: new Date('2024-04-15'),
    updatedAt: new Date('2024-05-15')
  }
];

export const mockVisits: Visit[] = [
  {
    id: '1',
    propertyId: '1',
    clientId: '4',
    agentId: '2',
    requestedDate: new Date('2024-06-10T14:00:00'),
    status: 'pending',
    notes: 'Client intéressé par le parking',
    createdAt: new Date('2024-06-08')
  },
  {
    id: '2',
    propertyId: '2',
    clientId: '4',
    agentId: '3',
    requestedDate: new Date('2024-06-12T10:30:00'),
    status: 'confirmed',
    notes: 'Première visite',
    createdAt: new Date('2024-06-09')
  }
];

export const mockDashboardStats: DashboardStats = {
  totalProperties: 3,
  availableProperties: 2,
  totalClients: 1,
  totalAgents: 2,
  monthlyRevenue: 125000,
  pendingVisits: 1
};
