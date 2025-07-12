import React, { useState } from 'react';
import { Calendar, Clock, Users, Star, MapPin, Music, ChefHat, Heart } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  longDescription: string;
  image: string;
  price?: string;
  featured?: boolean;
  category: string;
  capacity: number;
  location: string;
}

const Events: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const events: Event[] = [
    {
      id: 1,
      title: "Soirée Tabaski",
      date: "15 Décembre 2024",
      time: "19h30",
      description: "Célébrez la fête du sacrifice avec un menu spécial traditionnel et des animations musicales.",
      longDescription: "Rejoignez-nous pour une soirée exceptionnelle célébrant la Tabaski, l'une des fêtes les plus importantes du calendrier musulman. Au programme : menu traditionnel avec méchoui d'agneau, thieboudienne festif, et animations musicales avec des artistes sénégalais. Une soirée authentique dans une ambiance familiale et chaleureuse.",
      image: "https://images.pexels.com/photos/5779568/pexels-photo-5779568.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      price: "35€/personne",
      featured: true,
      category: "culturel",
      capacity: 80,
      location: "Salle principale"
    },
    {
      id: 2,
      title: "Brunch Dominical",
      date: "Tous les dimanches",
      time: "11h - 15h",
      description: "Découvrez notre brunch sénégalais avec plats traditionnels et boissons locales.",
      longDescription: "Chaque dimanche, découvrez notre brunch sénégalais unique à Grenoble. Au menu : pastels, thiakry, café touba, jus de bissap, et bien d'autres spécialités. Un moment convivial pour découvrir la cuisine sénégalaise dans une ambiance détendue.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      price: "25€/personne",
      category: "gastronomie",
      capacity: 40,
      location: "Terrasse & Salle"
    },
    {
      id: 3,
      title: "Cours de Cuisine",
      date: "Samedi 20 Janvier",
      time: "14h - 17h",
      description: "Apprenez à préparer le thieboudienne et le yassa poulet avec notre chef.",
      longDescription: "Participez à un atelier culinaire unique avec notre chef Aminata Diop. Apprenez les secrets du thieboudienne, plat national sénégalais, et du yassa poulet. Repartez avec les recettes et tous les conseils pour reproduire ces plats chez vous.",
      image: "https://images.pexels.com/photos/6419655/pexels-photo-6419655.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      price: "45€/personne",
      category: "atelier",
      capacity: 12,
      location: "Cuisine ouverte"
    },
    {
      id: 4,
      title: "Soirée Musique Mbalax",
      date: "Vendredi 26 Janvier",
      time: "20h - 23h",
      description: "Ambiance musicale avec des artistes locaux et danse traditionnelle sénégalaise.",
      longDescription: "Plongez dans l'univers musical sénégalais avec une soirée dédiée au Mbalax, genre musical emblématique du Sénégal. Concert live, initiation aux danses traditionnelles, et ambiance festive garantie. Dîner-spectacle avec menu spécial de la soirée.",
      image: "https://images.pexels.com/photos/5779567/pexels-photo-5779567.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      price: "20€/personne",
      category: "musique",
      capacity: 60,
      location: "Salle principale"
    },
    {
      id: 5,
      title: "Dégustation Vins & Mets",
      date: "Jeudi 8 Février",
      time: "19h - 21h30",
      description: "Accord mets et vins avec nos spécialités sénégalaises.",
      longDescription: "Découvrez des accords surprenants entre vins français et cuisine sénégalaise. Notre sommelier vous guidera à travers une dégustation de 5 vins soigneusement sélectionnés, accompagnés de nos spécialités. Une expérience gustative unique.",
      image: "https://images.pexels.com/photos/5779569/pexels-photo-5779569.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      price: "38€/personne",
      category: "gastronomie",
      capacity: 24,
      location: "Salon privé"
    },
    {
      id: 6,
      title: "Atelier Enfants",
      date: "Mercredi 14 Février",
      time: "14h - 16h",
      description: "Initiation à la cuisine sénégalaise pour les 8-12 ans.",
      longDescription: "Un atelier ludique et éducatif pour initier les enfants à la cuisine sénégalaise. Préparation de pastels, découverte des épices, et dégustation. Les enfants repartent avec leur tablier personnalisé et un livret de recettes adaptées.",
      image: "https://images.pexels.com/photos/4518653/pexels-photo-4518653.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      price: "15€/enfant",
      category: "atelier",
      capacity: 8,
      location: "Cuisine ouverte"
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous', icon: '📅', count: events.length },
    { id: 'culturel', name: 'Culturel', icon: '🎭', count: events.filter(e => e.category === 'culturel').length },
    { id: 'gastronomie', name: 'Gastronomie', icon: '🍽️', count: events.filter(e => e.category === 'gastronomie').length },
    { id: 'musique', name: 'Musique', icon: '🎵', count: events.filter(e => e.category === 'musique').length },
    { id: 'atelier', name: 'Ateliers', icon: '👨‍🍳', count: events.filter(e => e.category === 'atelier').length }
  ];

  const filteredEvents = activeCategory === 'all' ? events : events.filter(event => event.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'culturel': return <Heart className="text-red-500" size={20} />;
      case 'gastronomie': return <ChefHat className="text-green-500" size={20} />;
      case 'musique': return <Music className="text-purple-500" size={20} />;
      case 'atelier': return <Users className="text-blue-500" size={20} />;
      default: return <Calendar className="text-gray-500" size={20} />;
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
        {/* Motifs d'événements animés */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(18)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${2.5 + i * 0.1}s`
              }}
            >
              <Star size={20 + Math.random() * 15} />
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6" 
                style={{ fontFamily: 'Dancing Script, cursive' }}>
              Événements & Actualités
            </h1>
            <p className="text-2xl text-gray-600 mb-8 leading-relaxed">
              Participez à nos événements spéciaux et découvrez la richesse de la culture sénégalaise
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
                <Music className="text-purple-500 mr-2" size={16} />
                <span>Soirées musicales</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
                <ChefHat className="text-green-500 mr-2" size={16} />
                <span>Ateliers culinaires</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
                <Heart className="text-red-500 mr-2" size={16} />
                <span>Événements culturels</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtres de catégories */}
      <section className="py-12 bg-white sticky top-20 z-40 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 overflow-hidden group ${
                  activeCategory === category.id
                    ? 'text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                {/* Motif pour la catégorie active */}
                {activeCategory === category.id && (
                  <div className="absolute inset-0 opacity-20">
                    <svg viewBox="0 0 100 40" className="w-full h-full">
                      <pattern id={`events-pattern-${category.id}`} x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                        <star cx="7.5" cy="7.5" r="2" fill="white"/>
                        <circle cx="7.5" cy="7.5" r="4" stroke="white" strokeWidth="0.5" fill="none"/>
                      </pattern>
                      <rect width="100%" height="100%" fill={`url(#events-pattern-${category.id})`}/>
                    </svg>
                  </div>
                )}
                <span className="relative z-10 flex items-center">
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille des événements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div key={event.id} className={`group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                event.featured ? 'ring-2 ring-yellow-400' : ''
              }`}>
                {event.featured && (
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 text-sm font-semibold flex items-center">
                    <Star className="mr-2" size={16} />
                    Événement à ne pas manquer
                  </div>
                )}
                
                <div className="relative overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Badge catégorie */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                    {getCategoryIcon(event.category)}
                    <span className="ml-1 text-sm font-medium capitalize">{event.category}</span>
                  </div>

                  {/* Informations sur l'overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {event.location}
                      </div>
                      <div className="flex items-center">
                        <Users size={14} className="mr-1" />
                        {event.capacity} places
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                      {event.title}
                    </h3>
                    {event.price && (
                      <span className="text-green-600 font-bold">{event.price}</span>
                    )}
                  </div>

                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="mr-2" size={16} />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2" size={16} />
                      {event.time}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <button 
                      onClick={() => setSelectedEvent(event)}
                      className="text-purple-600 hover:text-purple-700 font-medium text-sm"
                    >
                      En savoir plus
                    </button>
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105">
                      Réserver
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal détail événement */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedEvent.image} 
                alt={selectedEvent.title}
                className="w-full h-64 object-cover"
              />
              <button 
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h2 className="text-3xl font-bold mb-2">{selectedEvent.title}</h2>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <Calendar className="mr-1" size={16} />
                    {selectedEvent.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1" size={16} />
                    {selectedEvent.time}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <MapPin className="text-gray-500 mr-2" size={18} />
                    <span>{selectedEvent.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="text-gray-500 mr-2" size={18} />
                    <span>{selectedEvent.capacity} places disponibles</span>
                  </div>
                  {selectedEvent.price && (
                    <div className="flex items-center">
                      <span className="text-green-600 font-bold text-lg">{selectedEvent.price}</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center">
                  {getCategoryIcon(selectedEvent.category)}
                  <span className="ml-2 capitalize font-medium">{selectedEvent.category}</span>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-8">
                {selectedEvent.longDescription}
              </p>
              
              <div className="flex space-x-4">
                <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
                  Réserver maintenant
                </button>
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white relative overflow-hidden">
        {/* Motifs de fond animés */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.3}s`
              }}
            >
              <Calendar size={30} />
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" 
              style={{ fontFamily: 'Dancing Script, cursive' }}>
            Restez informé de nos événements
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Inscrivez-vous à notre newsletter pour recevoir toutes nos actualités et être les premiers informés de nos événements spéciaux
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-6 py-4 rounded-l-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 px-8 py-4 rounded-r-lg font-medium transition-colors">
              S'inscrire
            </button>
          </div>
          <p className="text-sm mt-4 opacity-90">
            Pas de spam, juste nos meilleures actualités culinaires et culturelles
          </p>
        </div>
      </section>
    </div>
  );
};

export default Events;