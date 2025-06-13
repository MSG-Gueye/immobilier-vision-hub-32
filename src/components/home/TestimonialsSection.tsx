
import { Star, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
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

  return (
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
  );
};

export default TestimonialsSection;
