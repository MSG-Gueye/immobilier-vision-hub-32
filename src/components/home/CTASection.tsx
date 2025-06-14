
import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à concrétiser votre projet immobilier ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Notre équipe d'experts vous accompagne dans toutes vos démarches. 
            Contactez-nous dès maintenant pour une consultation gratuite.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-3 text-lg">
              <Phone className="h-5 w-5 mr-2" />
              04 93 XX XX XX
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3 text-lg">
              <Mail className="h-5 w-5 mr-2" />
              Nous contacter
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 font-semibold px-8 py-3 text-lg">
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp
            </Button>
          </div>
          
          <div className="text-blue-200 text-sm">
            <p>📍 123 Promenade des Anglais, 06000 Nice</p>
            <p>🕒 Ouvert du lundi au samedi de 9h à 19h</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
