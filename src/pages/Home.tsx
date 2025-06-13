
import { useState } from 'react';
import { Search, MapPin, Euro, Building, Home, Users, Calendar, Star, Phone, Mail, Clock, Facebook, Twitter, Instagram, ArrowRight, Bed, Bath, Maximize, Calculator, FileText, Heart, Eye, Share2, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    type: '',
    location: '',
    budget: ''
  });

  // Données mockées pour les biens récents
  const recentProperties = [
    {
      id: 1,
      title: "Villa moderne avec piscine",
      price: 850000,
      location: "Cannes",
      surface: 180,
      rooms: 5,
      bathrooms: 3,
      image: "/placeholder.svg",
      type: "Vente",
      isFavorite: false,
      views: 245
    },
    {
      id: 2,
      title: "Appartement centre-ville",
      price: 2500,
      location: "Nice",
      surface: 75,
      rooms: 3,
      bathrooms: 2,
      image: "/placeholder.svg",
      type: "Location",
      isFavorite: true,
      views: 189
    },
    {
      id: 3,
      title: "Maison avec jardin",
      price: 450000,
      location: "Antibes",
      surface: 120,
      rooms: 4,
      bathrooms: 2,
      image: "/placeholder.svg",
      type: "Vente",
      isFavorite: false,
      views: 167
    },
    {
      id: 4,
      title: "Studio vue mer",
      price: 1200,
      location: "Monaco",
      surface: 35,
      rooms: 1,
      bathrooms: 1,
      image: "/placeholder.svg",
      type: "Location",
      isFavorite: false,
      views: 298
    }
  ];

  const services = [
    {
      icon: Home,
      title: "Vendre votre bien",
      description: "Estimation gratuite et accompagnement personnalisé pour la vente de votre propriété."
    },
    {
      icon: Building,
      title: "Location",
      description: "Trouvez le logement idéal parmi notre sélection de biens à louer."
    },
    {
      icon: Calculator,
      title: "Simulation prêt",
      description: "Calculez votre capacité d'emprunt et simulez votre financement immobilier."
    },
    {
      icon: FileText,
      title: "Expertise juridique",
      description: "Accompagnement juridique complet pour tous vos projets immobiliers."
    },
    {
      icon: Euro,
      title: "Estimation gratuite",
      description: "Obtenez une estimation précise de la valeur de votre bien immobilier."
    },
    {
      icon: Users,
      title: "Gestion locative",
      description: "Confiez-nous la gestion complète de vos biens locatifs en toute sérénité."
    }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      text: "Service exceptionnel ! L'équipe m'a accompagnée tout au long de l'achat de ma maison. Je recommande vivement.",
      rating: 5,
      role: "Propriétaire"
    },
    {
      name: "Pierre Martin",
      text: "Très professionnels et à l'écoute. Ils ont vendu mon appartement en moins de 2 mois au prix souhaité.",
      rating: 5,
      role: "Vendeur"
    },
    {
      name: "Sophie Laurent",
      text: "Excellent suivi pour la location de mon studio. Une équipe réactive et de confiance.",
      rating: 5,
      role: "Locataire"
    }
  ];

  const formatPrice = (price: number, type: string) => {
    return type === "Location" ? `${price}€/mois` : `${price.toLocaleString()}€`;
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const toggleFavorite = (propertyId: number) => {
    // Logique pour ajouter/retirer des favoris (à implémenter avec le backend)
    console.log(`Toggle favorite for property ${propertyId}`);
  };

  const shareProperty = (propertyId: number) => {
    // Logique pour partager un bien
    if (navigator.share) {
      navigator.share({
        title: 'Découvrez ce bien immobilier',
        url: `${window.location.origin}/property/${propertyId}`
      });
    } else {
      // Fallback pour les navigateurs qui ne supportent pas l'API de partage
      navigator.clipboard.writeText(`${window.location.origin}/property/${propertyId}`);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Building className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">AgenceImmo Pro</h1>
                <p className="text-xs text-gray-600">Votre partenaire immobilier</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Accueil</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Biens à vendre</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">À louer</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</a>
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="outline" className="hidden md:flex items-center gap-2">
                <Calculator className="h-4 w-4" />
                Simulation
              </Button>
              <Button 
                onClick={handleLogin}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex items-center gap-2"
              >
                <User className="h-4 w-4" />
                Connexion
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Section Héros */}
      <section className="relative h-[600px] bg-gradient-to-r from-blue-900/90 to-purple-900/90 flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Trouvez la maison de vos rêves
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Découvrez notre sélection exclusive de biens immobiliers sur la Côte d'Azur. 
              Nous vous accompagnons dans tous vos projets immobiliers.
            </p>
            
            {/* Barre de recherche */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Select onValueChange={(value) => setSearchData({...searchData, type: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Type de bien" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="appartement">Appartement</SelectItem>
                    <SelectItem value="maison">Maison</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="studio">Studio</SelectItem>
                    <SelectItem value="terrain">Terrain</SelectItem>
                    <SelectItem value="commercial">Local commercial</SelectItem>
                  </SelectContent>
                </Select>
                
                <Input 
                  placeholder="Localisation"
                  value={searchData.location}
                  onChange={(e) => setSearchData({...searchData, location: e.target.value})}
                />
                
                <Select onValueChange={(value) => setSearchData({...searchData, budget: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-200000">Jusqu'à 200 000€</SelectItem>
                    <SelectItem value="200000-500000">200 000€ - 500 000€</SelectItem>
                    <SelectItem value="500000-1000000">500 000€ - 1M€</SelectItem>
                    <SelectItem value="1000000+">Plus de 1M€</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-full">
                  <Search className="h-5 w-5 mr-2" />
                  Rechercher
                </Button>
              </div>
              
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm">Vente</Button>
                <Button variant="outline" size="sm">Location</Button>
                <Button variant="outline" size="sm">Neuf</Button>
                <Button variant="outline" size="sm">Prestige</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biens récents */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Biens récents</h2>
            <p className="text-xl text-gray-600">Découvrez notre sélection de biens immobiliers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recentProperties.map((property) => (
              <Card key={property.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600">
                    {property.type}
                  </Badge>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="bg-white/80 hover:bg-white h-8 w-8"
                      onClick={() => toggleFavorite(property.id)}
                    >
                      <Heart className={`h-4 w-4 ${property.isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="bg-white/80 hover:bg-white h-8 w-8"
                      onClick={() => shareProperty(property.id)}
                    >
                      <Share2 className="h-4 w-4 text-gray-600" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded text-xs">
                    <Eye className="h-3 w-3" />
                    <span>{property.views}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-blue-600">
                      {formatPrice(property.price, property.type)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Maximize className="h-4 w-4 mr-1" />
                      <span>{property.surface}m²</span>
                    </div>
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span>{property.rooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span>{property.bathrooms}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      Voir le bien
                    </Button>
                    <Button size="icon" variant="outline" className="group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Voir tous les biens
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nos services</h2>
            <p className="text-xl text-gray-600">Un accompagnement sur mesure pour tous vos projets</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="text-center p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button variant="outline" className="group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    En savoir plus
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Restez informé</h2>
          <p className="text-xl text-blue-100 mb-8">Recevez nos dernières offres et actualités immobilières</p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input 
              placeholder="Votre adresse email"
              className="bg-white/90 border-0 flex-1"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              S'inscrire
            </Button>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Ils nous font confiance</h2>
            <p className="text-xl text-gray-600">Les avis de nos clients satisfaits</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo et description */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">AgenceImmo Pro</h3>
                  <p className="text-sm text-gray-400">Votre partenaire immobilier</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Spécialiste de l'immobilier sur la Côte d'Azur depuis plus de 15 ans. 
                Nous vous accompagnons dans tous vos projets d'achat, vente et location.
              </p>
            </div>

            {/* Services rapides */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <div className="space-y-3">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Vente immobilière</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Location</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Gestion locative</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Estimation gratuite</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Simulation prêt</a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span>+33 4 93 XX XX XX</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span>contact@agenceimmo.fr</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span>123 Av. des Palmiers, 06400 Cannes</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <span>Lun-Ven: 9h-18h, Sam: 9h-16h</span>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Suivez-nous</h4>
              <div className="flex gap-4 mb-6">
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
              <div className="space-y-3">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Mentions légales</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Politique de confidentialité</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">CGV</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2024 AgenceImmo Pro. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
