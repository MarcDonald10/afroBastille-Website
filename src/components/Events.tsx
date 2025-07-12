import React from 'react';
import { Calendar, Clock, Users, Star } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  price?: string;
  featured?: boolean;
}

const Events: React.FC = () => {
  const events: Event[] = [
    {
      id: 1,
      title: "Soirée Tabaski",
      date: "15 Décembre 2024",
      time: "19h30",
      description: "Célébrez la fête du sacrifice avec un menu spécial traditionnel et des animations musicales.",
      image: "https://images.pexels.com/photos/5779568/pexels-photo-5779568.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      price: "35€/personne",
      featured: true
    },
    {
      id: 2,
      title: "Brunch Dominical",
      date: "Tous les dimanches",
      time: "11h - 15h",
      description: "Découvrez notre brunch sénégalais avec plats traditionnels et boissons locales.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      price: "25€/personne"
    },
    {
      id: 3,
      title: "Cours de Cuisine",
      date: "Samedi 20 Janvier",
      time: "14h - 17h",
      description: "Apprenez à préparer le thieboudienne et le yassa poulet avec notre chef.",
      image: "https://images.pexels.com/photos/6419655/pexels-photo-6419655.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      price: "45€/personne"
    },
    {
      id: 4,
      title: "Soirée Musique Mbalax",
      date: "Vendredi 26 Janvier",
      time: "20h - 23h",
      description: "Ambiance musicale avec des artistes locaux et danse traditionnelle sénégalaise.",
      image: "https://images.pexels.com/photos/5779567/pexels-photo-5779567.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      price: "20€/personne"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Événements & Actualités
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Participez à nos événements spéciaux et découvrez la culture sénégalaise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div key={event.id} className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
              event.featured ? 'ring-2 ring-yellow-400' : ''
            }`}>
              {event.featured && (
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 text-sm font-semibold flex items-center">
                  <Star className="mr-2" size={16} />
                  Événement à ne pas manquer
                </div>
              )}
              
              <div className="relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                </div>
              </div>

              <div className="p-6">
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
                  {event.price && (
                    <div className="flex items-center text-green-600 font-semibold">
                      <Users className="mr-2" size={16} />
                      {event.price}
                    </div>
                  )}
                  <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full font-medium hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-105">
                    Réserver
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">Restez informé de nos événements</h3>
          <p className="text-lg mb-6">Inscrivez-vous à notre newsletter pour ne rien manquer</p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-r-lg font-medium transition-colors">
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;