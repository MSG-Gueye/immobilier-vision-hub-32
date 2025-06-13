
import SearchBar from './SearchBar';

const HeroSection = () => {
  return (
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
          
          <SearchBar />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
