import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import AnimatedCard from '../AnimatedCard';
import AnimatedText from '../AnimatedText';
import ThieboudienneImg from '../../../assets/images/menu/Thiéboudienne.jpg';
import MaffeImg from '../../../assets/images/menu/mafe.jpg';
import YassaPouletImg from '../../../assets/images/menu/YassaPoulet.jpg';

const dishes = [
  {
    name: 'Thiéboudienne',
    description:
      'Le plat national sénégalais, un délicieux riz cassé au poisson et légumes mijotés dans une sauce tomate riche.',
    image: ThieboudienneImg,
    price: '15 €',
  },
  {
    name: 'Mafé (Poulet et viande)',
    description:
      'Un ragoût copieux à base de pâte d’arachide, de poulet ou de viande, et de légumes, offrant une saveur riche et légèrement sucrée.',
    image: MaffeImg,
    price: '12 €',
  },
  {
    name: 'Yassa Poulet',
    description:
      'Un plat sénégalais emblématique où le poulet est mariné et mijoté dans une sauce onctueuse à base d’oignons caramélisés et de citron, servi avec du riz.',
    image: YassaPouletImg,
    price: '12 €',
  },
];

const FeaturedDishesSection: React.FC = () => {
  return (
    <AnimatedSection animation="fade-up" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="zoom-in" delay={300} className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-shimmer"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            <AnimatedText text="Nos Spécialités" type="typewriter" speed={100} />
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up-fade">
            <AnimatedText text="Découvrez nos plats signature préparés avec passion" type="cascade" />
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <AnimatedCard
              key={index}
              hoverEffect="scale"
              delay={index * 300}
              className="group bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 gallery-item"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div
                  className="absolute bottom-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full font-semibold animate-bounce-in"
                  style={{ animationDelay: `${index * 0.2 + 1}s` }}
                >
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
  );
};

export default FeaturedDishesSection;