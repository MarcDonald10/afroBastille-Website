import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';
import AnimatedText from '../../components/AnimatedText';
import ThieboudienneImg from '../../../assets/images/menu/Thiéboudienne.jpg';
import MaffeImg from '../../../assets/images/menu/mafe.jpg';
import YassaPouletImg from '../../../assets/images/menu/YassaPoulet.jpg';

interface MenuItem {
  image: string;
  alt: string;
  title: string;
  description: string;
  price: string;
}

const menuItems: MenuItem[] = [
  {
    image: ThieboudienneImg,
    alt: 'Thiéboudienne',
    title: 'Thiéboudienne',
    description: 'Riz cassé au poisson et légumes mijotés dans une sauce tomate riche.',
    price: '15 €',
  },
  {
    image: MaffeImg,
    alt: 'Mafé',
    title: 'Mafé Poulet',
    description: 'Ragoût d’arachide avec poulet et légumes, saveur riche et légèrement sucrée.',
    price: '12 €',
  },
  {
    image: YassaPouletImg,
    alt: 'Yassa Poulet',
    title: 'Yassa Poulet',
    description: 'Poulet mariné dans une sauce d’oignons caramélisés et citron, servi avec riz.',
    price: '12 €',
  },
];

const MenuCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleItems, setVisibleItems] = useState(1);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Déterminer le nombre d'items visibles selon la taille de l'écran
  const getVisibleItems = () => {
    if (window.innerWidth >= 768) return 3; // md:w-1/3
    if (window.innerWidth >= 640) return 2; // sm:w-1/2
    return 1; // w-full
  };

  // Mettre à jour visibleItems au redimensionnement
  useEffect(() => {
    const updateVisibleItems = () => {
      setVisibleItems(getVisibleItems());
    };
    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => window.removeEventListener('resize', updateVisibleItems);
  }, []);

  // Transition automatique des slides
  useEffect(() => {
    if (menuItems.length <= visibleItems || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        return nextIndex >= menuItems.length - visibleItems + 1 ? 0 : nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, visibleItems]);

  // Gestion de la navigation
  const handlePrev = () => {
    if (isTransitioning || menuItems.length <= visibleItems) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 < 0 ? menuItems.length - visibleItems : prev - 1));
  };

  const handleNext = () => {
    if (isTransitioning || menuItems.length <= visibleItems) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      const nextIndex = prev + 1;
      return nextIndex >= menuItems.length - visibleItems + 1 ? 0 : nextIndex;
    });
  };

  const handleDotClick = (index: number) => {
    if (isTransitioning || menuItems.length <= visibleItems) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  // Réinitialiser l'état de transition après l'animation
  useEffect(() => {
    if (isTransitioning) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, isTransitioning]);

  // Support des gestes de glissement
  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true, // Permet le drag à la souris pour les tests
    preventDefaultTouchmoveEvent: true, // Empêche le défilement de la page sur mobile
  });

  // Gestion de l'état vide
  if (menuItems.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          <AnimatedText text="Menu Midi" type="cascade" />
        </h2>
        <p className="text-gray-600">Aucun plat disponible pour le moment.</p>
      </div>
    );
  }

  const shouldSlide = menuItems.length > visibleItems;

  return (
    <div
      {...handlers}
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Titre */}
      <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6">
        <AnimatedText text="Menu Midi" type="cascade" />
      </h2>

      {/* Conteneur du carrousel */}
      <div className="overflow-hidden w-full">
        <div
          className={`flex ${shouldSlide ? 'transition-transform duration-500 ease-in-out' : ''}`}
          style={{
            transform: shouldSlide ? `translateX(-${currentIndex * (100 / visibleItems)}%)` : 'translateX(0)',
          }}
        >
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-full sm:w-1/2 md:w-1/3 px-0 sm:px-2`} // Pas de padding sur mobile
              role="group"
              aria-label={`Menu item: ${item.title}`}
            >
              <div className="bg-white bg-opacity-90 rounded-xl shadow-lg overflow-hidden group h-full">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-36 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => (e.currentTarget.src = '/path/to/fallback-image.jpg')}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                    {item.price}
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                    <AnimatedText text={item.title} type="cascade" />
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base line-clamp-2">
                    <AnimatedText text={item.description} type="cascade" />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Flèches de navigation */}
      {shouldSlide && (
        <>
          <button
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition ${
              isTransitioning ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={handlePrev}
            disabled={isTransitioning}
            aria-label="Diapositive précédente"
          >
            <ChevronLeft size={20} className="text-gray-800" />
          </button>
          <button
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition ${
              isTransitioning ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={handleNext}
            disabled={isTransitioning}
            aria-label="Diapositive suivante"
          >
            <ChevronRight size={20} className="text-gray-800" />
          </button>
        </>
      )}

      {/* Points de navigation */}
      {shouldSlide && (
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: menuItems.length - visibleItems + 1 }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-yellow-500' : 'bg-white bg-opacity-50'
              }`}
              onClick={() => handleDotClick(index)}
              onKeyDown={(e) => e.key === 'Enter' && handleDotClick(index)}
              aria-label={`Aller à la diapositive ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
              disabled={isTransitioning}
              tabIndex={0}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuCarousel;