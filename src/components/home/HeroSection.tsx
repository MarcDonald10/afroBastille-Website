import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedText from '../../components/AnimatedText';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import heroImg from '../../../assets/images/hero.jpg';
import FloatingPatterns from './FloatingPatternsProps';
import LunchMenu from './LunchMenu';
import MenuCarousel from './MenuCarousel';

const HeroSection: React.FC = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pb-24 pt-20">
      {/* Background avec motifs bogolan animés */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${heroImg})` }}
        ></div>
        <div className="absolute inset-0 bg-black" style={{ opacity: 0.55 }}></div>
        <FloatingPatterns count={6} patternType="star" opacity={0.1} />
      </div>

      {/* Lunch Menu */}
      {/* <LunchMenu /> */}

      {/* Contenu principal */}
      <div ref={heroRef} className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="mb-8">
          <h1
            className={`text-6xl md:text-8xl font-bold mb-6 leading-tight ${
              heroVisible ? 'animate-fade-in-scale' : 'opacity-0'
            }`}
            style={{ fontFamily: 'Dancing Script, cursive', color: '#FFFFFF' }}
          >
            <AnimatedText text="Afro Bastille" type="reveal" />
          </h1>
          <p
            className={`text-2xl md:text-3xl mb-4 font-light ${
              heroVisible ? 'animate-slide-in-bottom' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.5s', color: '#FFFFFF' }}
          >
            <AnimatedText text="Les saveurs du Sénégal et d'ailleurs à Grenoble" type="reveal" />
          </p>
        </div>

        <p
          className={`text-xl md:text-2xl mb-12 font-light max-w-3xl mx-auto leading-relaxed ${
            heroVisible ? 'animate-slide-up-fade' : 'opacity-0'
          }`}
          style={{ animationDelay: '1s', color: '#FFFFFF' }}
        >
          <AnimatedText
            text="Découvrez l'authenticité de la cuisine africaine dans un cadre chaleureux où chaque plat raconte une histoire"
            type="cascade"
          />
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${
            heroVisible ? 'animate-bounce-in' : 'opacity-0'
          }`}
          style={{ animationDelay: '1.5s' }}
        >
          <Link
            to="/reservation"
            className="group relative px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden btn-magnetic animate-pulse-glow"
            style={{ background: '#E8DD8D', color: '#0C0D0E' }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
              <svg viewBox="0 0 100 40" className="w-full h-full">
                <pattern id="hero-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="3" fill="white" />
                  <path
                    d="M5 10L10 5L15 10L10 15L5 10Z"
                    stroke="white"
                    strokeWidth="1"
                    fill="none"
                  />
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
            className="border-2 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 btn-magnetic"
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

        {/* Menu Carousel */}
        <MenuCarousel />
      </div>

      {/* Indicateur de scroll animé */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;