
import SearchBar from './SearchBar';

const HeroSection = () => {
  return (
    <section className="relative h-[700px] bg-gradient-to-r from-blue-900/90 to-purple-900/90 flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80" />
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 left-32 w-24 h-24 bg-purple-300/20 rounded-full blur-lg animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-bounce">
              🏆 #1 Agence Côte d'Azur 2023
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Trouvez la maison de 
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> vos rêves</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl">
            Découvrez notre sélection exclusive de biens immobiliers sur la Côte d'Azur. 
            Plus de <strong>500 biens vendus</strong> et <strong>1200+ clients satisfaits</strong>.
          </p>
          
          <div className="mb-8">
            <SearchBar />
          </div>
          
          <div className="flex flex-wrap gap-4 text-blue-100">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Visite virtuelle disponible</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Financement personnalisé</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Accompagnement juridique</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
