import React, { useState, useEffect } from 'react';
import ThieboudienneImg from '../../../assets/images/menu/Thiéboudienne.jpg';
import MaffeImg from '../../../assets/images/menu/mafe.jpg';
import YassaPouletImg from '../../../assets/images/menu/YassaPoulet.jpg';

interface Slide {
  image: string;
  alt: string;
  caption: string;
}

const slides: Slide[] = [
  {
    image: ThieboudienneImg,
    alt: 'Thiéboudienne',
    caption: 'Découvrez notre Thiéboudienne authentique',
  },
  {
    image: MaffeImg,
    alt: 'Mafé',
    caption: 'Savourez le goût riche du Mafé',
  },
  {
    image: YassaPouletImg,
    alt: 'Yassa Poulet',
    caption: 'Laissez-vous tenter par notre Yassa Poulet',
  },
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic slide transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Handle dot click
  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 h-1/3 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <p className="text-white text-xl font-semibold">
              {slide.caption}
            </p>
          </div>
        </div>
      ))}
      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-yellow-500' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;