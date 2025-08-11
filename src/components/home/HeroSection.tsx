import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedText from '../../components/AnimatedText';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import heroImg from '../../../assets/images/hero.jpg';
import FloatingPatterns from './FloatingPatternsProps';
import MenuCarousel from './MenuCarousel';


const HeroSection: React.FC = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();

  return (
   <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden pt-16 pb-28 px-4 sm:px-6 lg:px-8">
  {/* Background image + overlay */}
  <div className="absolute inset-0">
    <div
      className="absolute inset-0 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${heroImg})` }}
    />
    <div className="absolute inset-0 bg-black opacity-60" />
    <FloatingPatterns count={6} patternType="star" opacity={0.1} />
  </div>

  {/* Main content */}
  <div ref={heroRef} className="relative z-10 text-center text-white w-full max-w-6xl mx-auto">
    <div className="mb-10">
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight ${
          heroVisible ? 'animate-fade-in-scale' : 'opacity-0'
        }`}
        style={{ fontFamily: 'Dancing Script, cursive' }}
      >
        <AnimatedText text="Afro Bastille" type="reveal" />
      </h1>

      <p
        className={`text-lg sm:text-xl md:text-2xl lg:text-2xl font-light mb-2 ${
          heroVisible ? 'animate-slide-in-bottom' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.5s' }}
      >
        <AnimatedText text="Les saveurs du Sénégal et d'ailleurs à Grenoble" type="reveal" />
      </p>
    </div>

    <p
      className={`text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-3xl mx-auto leading-relaxed mb-10 ${
        heroVisible ? 'animate-slide-up-fade' : 'opacity-0'
      }`}
      style={{ animationDelay: '1s' }}
    >
      <AnimatedText
        text="Découvrez l'authenticité de la cuisine africaine dans un cadre chaleureux où chaque plat raconte une histoire"
        type="cascade"
      />
    </p>

    {/* Buttons */}
    <div
      className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${
        heroVisible ? 'animate-bounce-in' : 'opacity-0'
      }`}
      style={{ animationDelay: '1.5s' }}
    >
      <Link
        to="/reservation"
        className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden btn-magnetic animate-pulse-glow"
        style={{ background: '#E8DD8D', color: '#0C0D0E' }}
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
          <svg viewBox="0 0 100 40" className="w-full h-full">
            <pattern id="hero-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="3" fill="white" />
              <path d="M5 10L10 5L15 10L10 15L5 10Z" stroke="white" strokeWidth="1" fill="none" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#hero-pattern)" />
          </svg>
        </div>
        <span className="relative z-10 flex items-center">
          Réservez votre table
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
        </span>
      </Link>

      <Link
        to="/menu"
        className="border-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 btn-magnetic"
        style={{ borderColor: '#E8DD8D', color: '#FFFFFF' }}
        onMouseOver={(e) => {
          (e.currentTarget as HTMLElement).style.background = '#E8DD8D';
          (e.currentTarget as HTMLElement).style.color = '#0C0D0E';
        }}
        onMouseOut={(e) => {
          (e.currentTarget as HTMLElement).style.background = 'transparent';
          (e.currentTarget as HTMLElement).style.color = '#FFFFFF';
        }}
      >
        Découvrir la carte
      </Link>
    </div>

    {/* Menu carousel */}
    <div className="mt-10 w-full px-2 sm:px-4">
      <MenuCarousel />
    </div>
  </div>

  {/* Scroll indicator */}
  <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
    <div className="w-5 h-9 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
      <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
    </div>
  </div>
</section>

  );
};

export default HeroSection;