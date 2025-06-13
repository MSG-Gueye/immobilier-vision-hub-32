
import { Building, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
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
  );
};

export default Footer;
