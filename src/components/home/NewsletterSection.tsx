
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NewsletterSection = () => {
  return (
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
  );
};

export default NewsletterSection;
