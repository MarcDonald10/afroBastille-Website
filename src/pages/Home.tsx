import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, MapPin, Utensils } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedCard from '../components/AnimatedCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import heroImg from '../../assets/images/hero.jpg';
import ThieboudienneImg from '../../assets/images/menu/Thiéboudienne.jpg';
import MaffeImg from '../../assets/images/menu/mafe.jpg';
import YassaPouletImg from '../../assets/images/menu/YassaPoulet.jpg';


const Home: React.FC = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();

  const features = [
    {
      icon: <Utensils className="text-yellow-500" size={32} />,
      title: "Cuisine Authentique",
      description: "Plats traditionnels préparés selon les recettes ancestrales"
    },
    {
      icon: <Star className="text-yellow-500" size={32} />,
      title: "Expérience Unique",
      description: "Ambiance chaleureuse dans un décor typiquement sénégalais"
    },
    {
      icon: <Clock className="text-yellow-500" size={32} />,
      title: "Service Rapide",
      description: "Commande à emporter et livraison disponibles"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section avec animation parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background avec motifs bogolan animés */}
        <div className="absolute inset-0">
          {/* Image de fond */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url(${heroImg})`,
            }}
          ></div>
          {/* Overlay sombre */}
          <div className="absolute inset-0 bg-black" style={{ opacity: 0.55 }}></div>
          {/* Motifs bogolan flottants */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute opacity-10 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + i}s`
                }}
              >
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <path d="M30 5L35 20L50 25L35 30L30 45L25 30L10 25L25 20L30 5Z" 
                        fill="white" opacity="0.3"/>
                </svg>
              </div>
            ))}
          </div>
        </div>
        
        {/* Contenu principal */}
        <div ref={heroRef} className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className={`text-6xl md:text-8xl font-bold mb-6 leading-tight ${heroVisible ? 'animate-fade-in-scale' : 'opacity-0'}`}
                style={{ fontFamily: 'Dancing Script, cursive', color: '#FFFFFF' }}>
              <AnimatedText text="Afro Bastille" type="reveal" />
            </h1>
            <p className={`text-2xl md:text-3xl mb-4 font-light ${heroVisible ? 'animate-slide-in-bottom' : 'opacity-0'}`}
               style={{ animationDelay: '0.5s', color: '#FFFFFF' }}>
              <AnimatedText text="Les saveurs du Sénégal et d'ailleur à Grenoble " type="reveal" />
            </p>
          </div>
          
          <p className={`text-xl md:text-2xl mb-12 font-light max-w-3xl mx-auto leading-relaxed ${heroVisible ? 'animate-slide-up-fade' : 'opacity-0'}`}
             style={{ animationDelay: '1s', color: '#FFFFFF' }}>

            <AnimatedText 
              text="Découvrez l'authenticité de la cuisine sénégalaise dans un cadre chaleureux où chaque plat raconte une histoire" 
              type="cascade" 
            />
            
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${heroVisible ? 'animate-bounce-in' : 'opacity-0'}`}
               style={{ animationDelay: '1.5s' }}>
            <Link
              to="/reservation"
              className="group relative px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden btn-magnetic animate-pulse-glow"
              style={{ background: '#E8DD8D', color: '#0C0D0E' }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                <svg viewBox="0 0 100 40" className="w-full h-full">
                  <pattern id="hero-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="3" fill="white"/>
                    <path d="M5 10L10 5L15 10L10 15L5 10Z" stroke="white" strokeWidth="1" fill="none"/>
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#hero-pattern)"/>
                </svg>
              </div>
              <span className="relative z-10 flex items-center">
                Réservez votre table
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </span>
            </Link>
            
            <Link
              to="/menu"
              className="border-2 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 btn-magnetic"
              style={{ borderColor: '#E8DD8D', color: '#FFFFFF' }}
              onMouseOver={e => { (e.currentTarget as HTMLElement).style.background = '#E8DD8D'; (e.currentTarget as HTMLElement).style.color = '#0C0D0E'; }}
              onMouseOut={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#FFFFFF'; }}
            >
              Découvrir la carte
            </Link>
          </div>
        </div>

        {/* Indicateur de scroll animé */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Section Caractéristiques */}
      <AnimatedSection animation="fade-up" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50 relative overflow-hidden">
        {/* Motif de fond */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <defs>
              <pattern id="features-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M25 5L30 20L45 25L30 30L25 45L20 30L5 25L20 20L25 5Z" 
                      stroke="currentColor" strokeWidth="1" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#features-pattern)"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="slide-left" delay={200} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-gradient-shift bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent" 
                style={{ fontFamily: 'Dancing Script, cursive' }}>
              <AnimatedText text="Pourquoi Afro Bastille ?" type="cascade" />
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up-fade">
              <AnimatedText text="Une expérience culinaire authentique qui vous transporte au cœur du Sénégal" type="cascade" />
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedCard key={index} hoverEffect="lift" delay={index * 200} className="group bg-white p-8 rounded-xl shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-4 bg-yellow-100 rounded-full group-hover:bg-yellow-200 transition-colors animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    <AnimatedText text={feature.title} type="cascade" />
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    <AnimatedText text={feature.description} type="cascade" />
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Section Plats Vedettes */}
      <AnimatedSection animation="fade-up" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="zoom-in" delay={300} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-shimmer" 
                style={{ fontFamily: 'Dancing Script, cursive' }}>
              <AnimatedText text="Nos Spécialités" type="typewriter" speed={100} />
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up-fade">
              <AnimatedText text="Découvrez nos plats signature préparés avec passion" type="cascade" />
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Thiéboudienne",
                description: "Le plat national sénégalais, un délicieux riz cassé au poisson et légumes mijotés dans une sauce tomate riche.",
                image: ThieboudienneImg,
                price: "15 €"
              },
              {
                name: "Mafé (Poulet et viande)",
                description: "Un ragoût copieux à base de pâte d'arachide, de poulet ou de viande, et de légumes, offrant une saveur riche et légèrement sucrée.",
                image: MaffeImg,
                price: "12 €"
              },
              {
                name: "Yassa Poulet",
                description: "Un plat sénégalais emblématique où le poulet est mariné et mijoté dans une sauce onctueuse à base d'oignons caramélisés et de citron, servi avec du riz.",
                image: YassaPouletImg,
                price: "12 €"
              }
            ].map((dish, index) => (
              <AnimatedCard key={index} hoverEffect="scale" delay={index * 300} className="group bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 gallery-item"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full font-semibold animate-bounce-in" style={{ animationDelay: `${index * 0.2 + 1}s` }}>
                    {dish.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    <AnimatedText text={dish.name} type="cascade" />
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <AnimatedText text={dish.description} type="cascade" />
                  </p>
                  <Link 
                    to="/menu"
                    className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center group-hover:translate-x-1 transition-transform btn-magnetic"
                  >
                    Voir la carte complète
                    <ArrowRight className="ml-1" size={16} />
                  </Link>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Section CTA */}
      <AnimatedSection animation="slide-right" className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white relative overflow-hidden animate-gradient-shift">
        {/* Motifs de fond animés */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${4 + i * 0.5}s`
              }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40">
                <path d="M20 2L25 15L38 20L25 25L20 38L15 25L2 20L15 15L20 2Z" 
                      fill="white" opacity="0.6"/>
              </svg>
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-wave" 
              style={{ fontFamily: 'Dancing Script, cursive' }}>
            <AnimatedText text="Prêt pour un voyage culinaire ?" type="reveal" />
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-slide-up-fade">
            <AnimatedText text="Réservez dès maintenant votre table et laissez-vous transporter par les saveurs authentiques du Sénégal" type="cascade" />
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in" style={{ animationDelay: '0.8s' }}>
            <Link
              to="/reservation"
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 btn-magnetic animate-pulse-glow"
            >
              Réserver maintenant
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-200 transform hover:scale-105 btn-magnetic"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;