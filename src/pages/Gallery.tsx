import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Camera, Heart, Eye } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedCard from '../components/AnimatedCard';
import { useStaggeredAnimation, useCountUp } from '../hooks/useScrollAnimation';
import mafe from '../../assets/images/menu/mafe.jpg';
import samoussa from '../../assets/images/menu/samoussa.jpg';
import thieboudienne from '../../assets/images/menu/thieboudienne.jpeg';
import YassaPoulet from '../../assets/images/menu/YassaPoulet.jpg';
import thiakery from '../../assets/images/menu/Thiakéry.jpg';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: string;
  likes: number;
  views: number;
}

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const images: GalleryImage[] = [
    {
      id: 1,
      src: thieboudienne,
      alt: "Thiéboudienne",
      title: "Thiéboudienne - Riz au poisson et légumes",
      category: "plats",
      likes: 127,
      views: 1543
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/6419655/pexels-photo-6419655.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Salle du restaurant",
      title: "Ambiance chaleureuse avec tissus sénégalais",
      category: "ambiance",
      likes: 89,
      views: 892
    },
    {
      id: 3,
      src: YassaPoulet,
      alt: "Yassa Poulet",
      title: "Yassa Poulet - Un plat sénégalais emblématique",
      category: "plats",
      likes: 156,
      views: 2103
    },
    {
      id: 4,
      src: samoussa,
      alt: "Samoussas",
      title: "Samoussas - Accompagné de salade , tomate, sauce vermicelle",
      category: "entrees",
      likes: 94,
      views: 1267
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Équipe du restaurant",
      title: "Notre équipe passionnée",
      category: "equipe",
      likes: 203,
      views: 3456
    },
    {
      id: 6,
      src: mafe,
      alt: "Mafé (poulet et viande)",
      title: "Mafé (poulet et viande)",
      category: "plats",
      likes: 178,
      views: 2891
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Décoration sénégalaise",
      title: "Décoration authentique du restaurant",
      category: "ambiance",
      likes: 67,
      views: 743
    },
    {
      id: 8,
      src: thiakery,
      alt: "Thiakry dessert",
      title: "Thiakry - Dessert traditionnel",
      category: "desserts",
      likes: 112,
      views: 1456
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Boissons traditionnelles",
      title: "Bissap et jus de bouye",
      category: "boissons",
      likes: 85,
      views: 967
    }
  ];

  const categories = [
    { id: 'all', name: 'Tout', icon: '🖼️', count: images.length },
    { id: 'plats', name: 'Plats', icon: '🍽️', count: images.filter(img => img.category === 'plats').length },
    { id: 'ambiance', name: 'Ambiance', icon: '🏠', count: images.filter(img => img.category === 'ambiance').length },
    { id: 'entrees', name: 'Entrées', icon: '🥗', count: images.filter(img => img.category === 'entrees').length },
    { id: 'desserts', name: 'Desserts', icon: '🍮', count: images.filter(img => img.category === 'desserts').length },
    { id: 'boissons', name: 'Boissons', icon: '🥤', count: images.filter(img => img.category === 'boissons').length },
    { id: 'equipe', name: 'Équipe', icon: '👥', count: images.filter(img => img.category === 'equipe').length }
  ];

  const filteredImages = activeFilter === 'all' ? images : images.filter(img => img.category === activeFilter);
  const { ref: galleryRef, visibleItems } = useStaggeredAnimation(filteredImages.length, 100);
  const { ref: statsRef, count: totalLikes } = useCountUp(images.reduce((sum, img) => sum + img.likes, 0));
  const { count: totalViews } = useCountUp(images.reduce((sum, img) => sum + img.views, 0));

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20" style={{ background: 'linear-gradient(135deg, #E8DD8D 0%, #fffbe6 100%)' }}>
        {/* Motifs photographiques animés */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${2 + i * 0.05}s`
              }}
            >
              <Camera size={20 + Math.random() * 20} />
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-gradient-shift" 
                style={{ fontFamily: 'Dancing Script, cursive', color: '#0C0D0E' }}>
              <AnimatedText text="Galerie Photo" type="typewriter" speed={100} />
            </h1>
            <p className="text-2xl mb-8 leading-relaxed animate-slide-up-fade" style={{ color: '#0C0D0E' }}>
              <AnimatedText text="Plongez dans l'univers visuel d'Afro Bastille à travers nos plus belles images" type="cascade" />
            </p>
            <div ref={statsRef} className="flex items-center justify-center space-x-8 animate-bounce-in" style={{ color: '#0C0D0E' }}>
              <div className="flex items-center animate-slide-in-left">
                <Camera className="mr-2" size={20} />
                <span>{images.length} photos</span>
              </div>
              <div className="flex items-center animate-slide-in-bottom" style={{ animationDelay: '0.2s' }}>
                <Heart className="mr-2" size={20} />
                <span className="counter-animate">{totalLikes} likes</span>
              </div>
              <div className="flex items-center animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
                <Eye className="mr-2" size={20} />
                <span className="counter-animate">{totalViews} vues</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtres de catégories */}
      <section className="py-12 bg-white sticky top-20 z-40 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 overflow-hidden group ${
                  activeFilter === category.id
                    ? 'shadow-lg transform scale-105'
                    : 'bg-[#E8DD8D] text-[#0C0D0E] hover:bg-[#0C0D0E] hover:text-[#E8DD8D] hover:scale-105'
                }`}
                style={activeFilter === category.id ? { background: '#0C0D0E', color: '#E8DD8D' } : {}}
              >
                {/* Motif pour la catégorie active */}
                {activeFilter === category.id && (
                  <div className="absolute inset-0 opacity-20">
                    <svg viewBox="0 0 100 40" className="w-full h-full">
                      <pattern id={`gallery-pattern-${category.id}`} x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                        <circle cx="7.5" cy="7.5" r="2" fill="white"/>
                        <rect x="5" y="5" width="5" height="5" stroke="white" strokeWidth="0.5" fill="none"/>
                      </pattern>
                      <rect width="100%" height="100%" fill={`url(#gallery-pattern-${category.id})`}/>
                    </svg>
                  </div>
                )}
                <span className="relative z-10 flex items-center">
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                  <span className="ml-2 text-xs bg-[#E8DD8D] text-[#0C0D0E] px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille d'images */}
      <AnimatedSection animation="fade-up" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div ref={galleryRef} className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <AnimatedCard
                key={image.id} 
                hoverEffect="rotate"
                delay={visibleItems.includes(index) ? index * 100 : 0}
                className={`group relative cursor-pointer overflow-hidden rounded-xl shadow-lg ${visibleItems.includes(index) ? 'animate-flip-in' : 'opacity-0'}`}
                onClick={() => openModal(index)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 gallery-item"
                  />
                  
                  {/* Overlay avec motifs */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {/* Motifs décoratifs */}
                    <div className="absolute inset-0 opacity-20">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <pattern id={`image-pattern-${image.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                          <circle cx="10" cy="10" r="2" fill="white"/>
                          <path d="M5 10L10 5L15 10L10 15L5 10Z" stroke="white" strokeWidth="0.5" fill="none"/>
                        </pattern>
                        <rect width="100%" height="100%" fill={`url(#image-pattern-${image.id})`}/>
                      </svg>
                    </div>
                  </div>

                  {/* Informations sur l'image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-lg font-semibold mb-2 animate-slide-up-fade">
                      <AnimatedText text={image.title} type="cascade" />
                    </h3>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4 animate-slide-in-left">
                        <div className="flex items-center animate-pulse-glow">
                          <Heart size={14} className="mr-1" />
                          {image.likes}
                        </div>
                        <div className="flex items-center">
                          <Eye size={14} className="mr-1" />
                          {image.views}
                        </div>
                      </div>
                      <span className="bg-white/20 px-2 py-1 rounded-full text-xs animate-shimmer">
                        Cliquez pour agrandir
                      </span>
                    </div>
                  </div>

                  {/* Icône de zoom */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-float">
                    <Camera size={20} className="text-white animate-wave" />
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Modal de visualisation */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full w-full">
            {/* Bouton de fermeture */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-20 bg-black/50 p-2 rounded-full backdrop-blur-sm"
            >
              <X size={32} />
            </button>

            {/* Flèches de navigation */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-20 bg-black/50 p-3 rounded-full backdrop-blur-sm"
            >
              <ChevronLeft size={32} />
            </button>

            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-20 bg-black/50 p-3 rounded-full backdrop-blur-sm"
            >
              <ChevronRight size={32} />
            </button>

            {/* Image principale */}
            <div className="flex items-center justify-center h-full">
              <img 
                src={filteredImages[currentIndex]?.src} 
                alt={filteredImages[currentIndex]?.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Informations de l'image */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-2">{filteredImages[currentIndex]?.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                      <Heart size={18} className="mr-2" />
                      {filteredImages[currentIndex]?.likes} likes
                    </div>
                    <div className="flex items-center">
                      <Eye size={18} className="mr-2" />
                      {filteredImages[currentIndex]?.views} vues
                    </div>
                  </div>
                  <span className="text-sm opacity-75">
                    {currentIndex + 1} / {filteredImages.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Indicateurs de navigation */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {filteredImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Section Instagram */}
      <AnimatedSection animation="slide-left" className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white animate-gradient-shift">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-wave" 
              style={{ fontFamily: 'Dancing Script, cursive' }}>
            <AnimatedText text="Suivez-nous sur Instagram" type="typewriter" speed={80} />
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-slide-up-fade">
            <AnimatedText text="Découvrez nos dernières créations culinaires et l'ambiance de notre restaurant" type="cascade" />
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 btn-magnetic animate-pulse-glow">
            @afrobastille_grenoble
          </button>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Gallery;