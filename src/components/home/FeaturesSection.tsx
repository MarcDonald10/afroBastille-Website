import React from 'react';
import { Utensils, Star, Clock } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import AnimatedCard from '../AnimatedCard';
import AnimatedText from '../AnimatedText';

const features = [
  {
    icon: <Utensils className="text-yellow-500" size={32} />,
    title: 'Cuisine Authentique',
    description: 'Plats traditionnels préparés selon les recettes ancestrales',
  },
  {
    icon: <Star className="text-yellow-500" size={32} />,
    title: 'Expérience Unique',
    description: 'Ambiance chaleureuse dans un décor typiquement sénégalais',
  },
  {
    icon: <Clock className="text-yellow-500" size={32} />,
    title: 'Service Rapide',
    description: 'Commande à emporter et livraison disponibles',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <AnimatedSection
      animation="fade-up"
      className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <defs>
            <pattern id="features-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path
                d="M25 5L30 20L45 25L30 30L25 45L20 30L5 25L20 20L25 5Z"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#features-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="slide-left" delay={200} className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-gradient-shift bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            <AnimatedText text="Pourquoi Afro Bastille ?" type="cascade" />
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up-fade">
            <AnimatedText
              text="Une expérience culinaire authentique qui vous transporte au cœur de l'Afrique"
              type="cascade"
            />
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedCard
              key={index}
              hoverEffect="lift"
              delay={index * 200}
              className="group bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className="mb-4 p-4 bg-yellow-100 rounded-full group-hover:bg-yellow-200 transition-colors animate-float"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
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
  );
};

export default FeaturesSection;