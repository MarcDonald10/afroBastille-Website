import React from 'react';
import { Clock, MapPin, Phone, Mail, Heart, Users, Award, Leaf } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Heart className="text-red-500" size={32} />,
      title: "Teranga",
      description: "L'hospitalité sénégalaise au cœur de notre service"
    },
    {
      icon: <Leaf className="text-green-500" size={32} />,
      title: "Authenticité",
      description: "Recettes traditionnelles et ingrédients authentiques"
    },
    {
      icon: <Users className="text-blue-500" size={32} />,
      title: "Famille",
      description: "Une ambiance familiale et chaleureuse"
    },
    {
      icon: <Award className="text-yellow-500" size={32} />,
      title: "Excellence",
      description: "Qualité et fraîcheur dans chaque assiette"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-yellow-50 to-orange-50 overflow-hidden">
        {/* Motifs bogolan de fond */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" viewBox="0 0 200 200">
            <defs>
              <pattern id="about-hero-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M50 10L60 40L90 50L60 60L50 90L40 60L10 50L40 40L50 10Z" 
                      stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="25" cy="25" r="3" fill="currentColor"/>
                <circle cx="75" cy="75" r="3" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-hero-pattern)"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6" 
                style={{ fontFamily: 'Dancing Script, cursive' }}>
              Notre Histoire
            </h1>
            <p className="text-2xl text-gray-600 mb-8 leading-relaxed">
              Un voyage culinaire qui a commencé à Dakar et qui continue à Grenoble
            </p>
          </div>
        </div>
      </section>

      {/* Histoire principale */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image avec cadre décoratif */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl transform rotate-3"></div>
                <div className="relative bg-white p-4 rounded-xl shadow-lg">
                  <img 
                    src="https://images.pexels.com/photos/5779568/pexels-photo-5779568.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                    alt="Famille Diop"
                    className="w-full h-80 object-cover rounded-lg"
                  />
                  {/* Motif décoratif sur l'image */}
                  <div className="absolute top-2 right-2 w-16 h-16 opacity-20">
                    <svg viewBox="0 0 64 64" className="w-full h-full">
                      <path d="M32 8L40 24L56 32L40 40L32 56L24 40L8 32L24 24L32 8Z" 
                            fill="white" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Contenu */}
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6" 
                    style={{ fontFamily: 'Dancing Script, cursive' }}>
                 
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                   Situé au cœur de Grenoble, Afro Bastille est un restaurant gastronomique Sénégalais . 
                   Nous proposons une cuisine Exotique,authentique, préparée à partir de produits frais, 
                   dans le respect des recettes ancestrales. 
                   
                  </p>
                  <p>
                    Notre établissement offre un cadre chaleureux, convivial et soigné, 
                   propice à la découverte des saveurs d’Afrique et d'ailleurs.
                  </p>
                  {/* <p>
                    Aujourd'hui, notre restaurant est devenu un pont entre deux cultures, un lieu où 
                    l'hospitalité sénégalaise - le <em>Teranga</em> - rencontre la convivialité grenobloise.
                  </p> */}
                </div>

                {/* Citation */}
                <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border-l-4 border-yellow-500">
                  <blockquote className="text-xl italic text-gray-800 font-medium mb-3">
                    "Les saveurs du Sénégal et d'ailleur à Grenoble"
                  </blockquote>
                  {/* <cite className="text-gray-600 font-semibold">- Aminata & Mamadou Diop, Fondateurs</cite> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
        {/* Motifs de fond animés */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + i * 0.2}s`
              }}
            >
              <svg width="30" height="30" viewBox="0 0 30 30">
                <path d="M15 3L18 12L27 15L18 18L15 27L12 18L3 15L12 12L15 3Z" 
                      fill="currentColor" opacity="0.3"/>
              </svg>
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4" 
                style={{ fontFamily: 'Dancing Script, cursive' }}>
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre cuisine et notre service au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="mb-4 p-4 bg-gray-100 rounded-full inline-block group-hover:bg-gray-200 transition-colors">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informations Pratiques */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4" 
                  style={{ fontFamily: 'Dancing Script, cursive' }}>
                Informations Pratiques
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Horaires et Contact */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact & Horaires</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="mt-1 flex-shrink-0" size={24} style={{ color: '#0C0D0Eff' }} />
                    <div>
                      <h4 className="font-semibold mb-2" style={{ color: '#0C0D0Eff' }}>Horaires d'ouverture</h4>
                      <div className="space-y-1" style={{ color: '#0C0D0Eff' }}>
                        <p>Lundi - Samedi : 12h - 14h30 & 19h - 22h</p>
                        <p>Dimanche : 12h - 15h</p>
                        <p className="text-sm mt-2" style={{ color: '#ff4d4f' }}>Fermé le dimanche soir</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="mt-1 flex-shrink-0" size={24} style={{ color: '#0C0D0Eff' }} />
                    <div>
                      <h4 className="font-semibold mb-2" style={{ color: '#0C0D0Eff' }}>Adresse</h4>
                      <p style={{ color: '#0C0D0Eff' }}>
                        Grenoble, France
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="mt-1 flex-shrink-0" size={24} style={{ color: '#0C0D0Eff' }} />
                    <div>
                      <h4 className="font-semibold mb-2" style={{ color: '#0C0D0Eff' }}>Téléphone</h4>
                      <a href="tel:+33758814737" className="hover:underline" style={{ color: '#0C0D0Eff' }}>
                        +33 7 58 81 47 37
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="text-yellow-600 mt-1 flex-shrink-0" size={24}  style={{ color: '#0C0D0Eff' }}/>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                      <a href="mailto:contact@afrobastille.fr" className="text-gray-600 hover:text-yellow-600 transition-colors">
                        contact@afrobastille.fr
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Nos Services</h3>
                
                <div className="space-y-4">
                  {[
                    "🍽️ Service en salle dans une ambiance authentique",
                    "📦 Vente à emporter et livraison",
                    "🎉 Organisation d'événements privés",
                    "👨‍🍳 Cours de cuisine sénégalaise",
                    "🌱 Options végétariennes disponibles",
                    "♿ Accessible aux personnes à mobilité réduite",
                    "📶 WiFi gratuit pour nos clients",
                    "🏠 Terrasse couverte en saison"
                  ].map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="text-lg">{service.split(' ')[0]}</span>
                      <span className="text-gray-700">{service.substring(service.indexOf(' ') + 1)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Équipe */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4" 
                style={{ fontFamily: 'Dancing Script, cursive' }}>
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des passionnés au service de la cuisine sénégalaise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Aminata Diop",
                role: "Chef & Fondatrice",
                description: "Gardienne des recettes familiales, elle apporte son expertise culinaire acquise à Dakar.",
                image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
              },
              {
                name: "Mamadou Diop",
                role: "Gérant & Sommelier",
                description: "Passionné par l'accueil, il veille à ce que chaque client vive une expérience mémorable.",
                image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
              },
              {
                name: "Fatou Sall",
                role: "Sous-chef",
                description: "Spécialiste des grillades et des sauces, elle apporte sa créativité aux plats traditionnels.",
                image: "https://images.pexels.com/photos/4518653/pexels-photo-4518653.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="relative mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-yellow-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;