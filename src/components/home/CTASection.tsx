import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../AnimatedSection';
import AnimatedText from '../AnimatedText';
import FloatingPatterns from './FloatingPatternsProps';

const CTASection: React.FC = () => {
  return (
    <AnimatedSection
      animation="slide-right"
      className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white relative overflow-hidden animate-gradient-shift"
    >
      <FloatingPatterns count={8} patternType="star" opacity={0.6} size={40} />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2
          className="text-4xl md:text-5xl font-bold mb-6 animate-wave"
          style={{ fontFamily: 'Dancing Script, cursive' }}
        >
          <AnimatedText text="Prêt pour un voyage culinaire ?" type="reveal" />
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto animate-slide-up-fade">
          <AnimatedText
            text="Réservez dès maintenant votre table et laissez-vous transporter par les saveurs authentiques du Sénégal"
            type="cascade"
          />
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
  );
};

export default CTASection;