import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
}

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/5779568/pexels-photo-5779568.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Thieboudienne fumant",
      title: "Thieboudienne - Notre plat signature"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/6419655/pexels-photo-6419655.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Salle du restaurant",
      title: "Ambiance chaleureuse avec tissus sénégalais"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/5779567/pexels-photo-5779567.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Yassa Poulet",
      title: "Yassa Poulet aux oignons caramélisés"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/4518653/pexels-photo-4518653.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Pastels frits",
      title: "Pastels - Beignets de poisson croustillants"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Équipe du restaurant",
      title: "Notre équipe passionnée"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/5779569/pexels-photo-5779569.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Caldou poisson grillé",
      title: "Caldou - Poisson grillé sauce tomate"
    }
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="galerie" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Galerie
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Plongez dans l'univers visuel d'Afro Bastille : nos plats authentiques et notre ambiance chaleureuse
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={image.id} 
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openModal(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm">Cliquez pour agrandir</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close Button */}
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X size={32} />
              </button>

              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft size={48} />
              </button>

              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight size={48} />
              </button>

              {/* Image */}
              <img 
                src={images[currentIndex].src} 
                alt={images[currentIndex].alt}
                className="max-w-full max-h-full object-contain"
              />

              {/* Title */}
              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <h3 className="text-xl font-semibold">{images[currentIndex].title}</h3>
              </div>

              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
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
      </div>
    </section>
  );
};

export default Gallery;