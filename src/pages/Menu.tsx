import React, { useState } from 'react';
import { ShoppingBag, Star, Leaf, Flame } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedCard from '../components/AnimatedCard';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  spicy?: boolean;
  vegetarian?: boolean;
  signature?: boolean;
}

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('entrees');

  const menuItems: MenuItem[] = [
    // Entrées
    {
      id: 1,
      name: "Pastel Boufi",
      description: "Banane plantain accompagné de salade, tomate sauce vermicelle",
      price: "4,50 €",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "entrees",
      vegetarian: true
    },
    {
      id: 2,
      name: "Samoussas",
      description: "Accompagné de salade , tomate, sauce vermicelle",
      price: "4,80 €",
      image: "https://images.pexels.com/photos/4518653/pexels-photo-4518653.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "entrees",
      signature: true,
      spicy: true
    },
    {
      id: 3,
      name: "Alocko",
      description: "Banane plantain accompagné de salade, tomate sauce vermicelle",
      price: "3,50 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "entrees",
      vegetarian: true,
      spicy: true
    },
    {
      id: 4,
      name: "Salade crevette",
      description: "Accompagné de salade, tomate, mais",
      price: "4,50 €",
      image: "https://images.pexels.com/photos/6419656/pexels-photo-6419656.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "entrees"
    },
    
    // Plats
    {
      id: 5,
      name: "Mafe",
      description: "Riz blanc,  accompagnement : sauce d'arachide, carotte, pomme de terre",
      price: "7,50 €",
      image: "https://images.pexels.com/photos/5779568/pexels-photo-5779568.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      signature: true
    },
    {
      id: 6,
      name: "Thieb au poulet",
      description: "Riz cuisiné dans sa sauce vermicelle, accompagnement : sauce à base de l'oignons, cuisse de poulet",
      price: "8,50 €",
      image: "https://images.pexels.com/photos/6419655/pexels-photo-6419655.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      signature: true
    },
    {
      id: 7,
      name: "Yassa Poulet",
      description: "Riz blanc, accompagnement : sauce à base de l'oignons, citron, poulet",
      price: "7,50 €",
      image: "https://images.pexels.com/photos/5779567/pexels-photo-5779567.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    {
      id: 8,
      name: "Thieb au poisson",
      description: "Riz cuisiné dans la sauce tomate avec ses légumes, poisson Merlu, accompagnement : sauce tomate",
      price: "8,50 €",
      image: "https://images.pexels.com/photos/6419656/pexels-photo-6419656.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats"
    },

    // Spécialités
    {
      id: 9,
      name: "Poulet braisé",
      description: "Cuisse de poulet marinée, accompagnement au choix (salade ou riz blanc ou banane plantain)",
      price: "9,50 €",
      image: "https://images.pexels.com/photos/5779569/pexels-photo-5779569.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      signature: true
    },
    {
      id: 10,
      name: "Miam miam",
      description: "Pilons de poulet marinée, accompagnement au choix (salade ou riz blanc ou banane plantain)",
      price: "11,50 €",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      vegetarian: true
    },,
    {
      id: 11,
      name: "Dibi",
      description: "Brochettes de viande de veau grillée, accompagnement au choix (salade ou riz blanc ou banane plantain)",
      price: "12,50 €",
      image: "https://images.pexels.com/photos/5779569/pexels-photo-5779569.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats"
    },
    {
      id: 12,
      name: "Menu africa",
      description: "Plat au choix (Yassa, Mafé, Thieb au poulet, thieb au poisson) + Boisson 33 CL",
      price: "8,50 €",
      image: "https://images.pexels.com/photos/5779569/pexels-photo-5779569.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "specialites"
    },

    // Desserts
    {
      id: 13,
      name: "Thiakry",
      description: "A base de semoule de mil, fromage blanc et de crème fraiche",
      price: "3,50 €",
      image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "desserts",
      signature: true
    },
    {
      id: 14,
      name: "Salade de fruits",
      description: "Fait maison",
      price: "3,50 €",
      image: "https://images.pexels.com/photos/1126360/pexels-photo-1126360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "desserts"
    },
    {
      id: 15,
      name: "Formule midi",
      description: "Entrée ou Dessert + Plat au choix (Yassa, Mafé, Thieb au poulet, thieb au poisson)",
      price: "11,50 €",
      image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "specialites"
    },,
    {
      id: 16,
      name: "Menu terangua",
      description: "Entrée + Plat au choix (Yassa, Mafé, Thieb au poulet, thieb au poisson) + Dessert",
      price: "15,50 €",
      image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "specialites"
    }
  ];

  const drinks = [
    { name: "Jus de Bissap", price: "4,50 €", description: "Infusion de fleurs d'hibiscus, menthe fraîche" },
    { name: "Jus de Bouye", price: "5,00 €", description: "Jus de fruit du baobab, riche en vitamine C" },
    { name: "Jus de Gingembre", price: "4,50 €", description: "Boisson rafraîchissante au gingembre et citron" },
    { name: "Attaya", price: "6,00 €", description: "Thé vert traditionnel sénégalais en trois services" },
    { name: "Café Touba", price: "3,50 €", description: "Café épicé au poivre de Guinée" },
    { name: "Kinkeliba", price: "4,00 €", description: "Tisane détox aux feuilles de kinkeliba" }
  ];

  const categories = [
    { 
      id: 'entrees', 
      name: 'Entrées', 
      icon: '🥗',
      pattern: 'M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z'
    },
    { 
      id: 'plats', 
      name: 'Plats', 
      icon: '🍽️',
      pattern: 'M3 12H21M3 6H21M3 18H21'
    },
    { 
      id: 'specialites', 
      name: 'Spécialités', 
      icon: '⭐',
      pattern: 'M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z'
    },
    { 
      id: 'desserts', 
      name: 'Desserts', 
      icon: '🍮',
      pattern: 'M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21S3 16.97 3 12S7.03 3 12 3S21 7.03 21 12Z'
    }
  ];

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  const { ref: menuRef, visibleItems } = useStaggeredAnimation(filteredItems.length, 150);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20" style={{ background: 'linear-gradient(135deg, #E8DD8D 0%, #fffbe6 100%)' }}>
        {/* Motifs bogolan animés */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${3 + i * 0.1}s`
              }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40">
                <path d="M20 4L25 15L36 20L25 25L20 36L15 25L4 20L15 15L20 4Z" 
                      fill="currentColor" opacity="0.4"/>
              </svg>
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-gradient-shift" 
                style={{ fontFamily: 'Dancing Script, cursive', color: '#0C0D0E' }}>
              <AnimatedText text="Notre Carte" type="typewriter" speed={80} />
            </h1>
            <p className="text-2xl mb-8 leading-relaxed animate-slide-up-fade" style={{ color: '#0C0D0E' }}>
              <AnimatedText text="Découvrez les saveurs authentiques du Sénégal préparées avec passion" type="cascade" />
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center bg-[#E8DD8D] px-4 py-2 rounded-full shadow-md">
                <Star className="text-[#0C0D0E] mr-2" size={16} />
                <span className="text-[#0C0D0E]">Plats signature</span>
              </div>
              <div className="flex items-center bg-[#E8DD8D] px-4 py-2 rounded-full shadow-md">
                <Leaf className="text-[#0C0D0E] mr-2" size={16} />
                <span className="text-[#0C0D0E]">Options végétariennes</span>
              </div>
              <div className="flex items-center bg-[#E8DD8D] px-4 py-2 rounded-full shadow-md">
                <Flame className="text-[#0C0D0E] mr-2" size={16} />
                <span className="text-[#0C0D0E]">Plats épicés</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation des catégories */}
      <section className="py-12 bg-white sticky top-20 z-40 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-8 py-4 rounded-full font-medium transition-all duration-300 overflow-hidden group ${
                  activeCategory === category.id
                    ? 'shadow-lg transform scale-105'
                    : 'bg-[#E8DD8D] text-[#0C0D0E] hover:bg-[#0C0D0E] hover:text-[#E8DD8D] hover:scale-105'
                }`}
                style={activeCategory === category.id ? { background: '#0C0D0E', color: '#E8DD8D' } : {}}
              >
                {/* Motif pour la catégorie active */}
                {activeCategory === category.id && (
                  <div className="absolute inset-0 opacity-20">
                    <svg viewBox="0 0 100 40" className="w-full h-full">
                      <defs>
                        <pattern id={`menu-pattern-${category.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d={category.pattern} stroke="white" strokeWidth="1" fill="none" transform="scale(0.8)"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#menu-pattern-${category.id})`}/>
                    </svg>
                  </div>
                )}
                <span className="relative z-10 flex items-center">
                  <span className="mr-2 text-xl">{category.icon}</span>
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille des plats */}
      <AnimatedSection animation="fade-up" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item,index) => (
              <AnimatedCard 
                key={item.id} 
                hoverEffect="lift" 
                delay={visibleItems.includes(index) ? index * 100 : 0}
                className={`group bg-white rounded-xl shadow-lg overflow-hidden ${visibleItems.includes(index) ? 'animate-bounce-in' : 'opacity-0'}`}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 gallery-item"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2 animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                    {item.signature && (
                      <div className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center animate-pulse-glow">
                        <Star size={12} className="mr-1" />
                        Signature
                      </div>
                    )}
                    {item.vegetarian && (
                      <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                        <Leaf size={12} className="mr-1" />
                        Végé
                      </div>
                    )}
                    {item.spicy && (
                      <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                        <Flame size={12} className="mr-1" />
                        Épicé
                      </div>
                    )}
                  </div>

                  {/* Prix */}
                  <div className="absolute bottom-3 right-3 bg-white text-gray-800 px-3 py-1 rounded-full font-bold shadow-lg animate-bounce-in" style={{ animationDelay: `${index * 0.1 + 0.5}s` }}>
                    {item.price}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors animate-slide-up-fade">
                    <AnimatedText text={item.name} type="cascade" />
                  </h3>
                  <p className="text-gray-600 leading-relaxed animate-slide-up-fade" style={{ animationDelay: '0.2s' }}>
                    <AnimatedText text={item.description} type="cascade" />
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Section Boissons */}
      <AnimatedSection animation="slide-left" className="py-20 bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
        {/* Motifs de fond */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" viewBox="0 0 200 200">
            <defs>
              <pattern id="drinks-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="15" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M25 40L40 25L55 40L40 55L25 40Z" stroke="currentColor" strokeWidth="1" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#drinks-pattern)"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="zoom-in" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-wave" 
                style={{ fontFamily: 'Dancing Script, cursive' }}>
              <AnimatedText text="Boissons Traditionnelles" type="reveal" />
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up-fade">
              <AnimatedText text="Rafraîchissez-vous avec nos boissons authentiques du Sénégal" type="cascade" />
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {drinks.map((drink, index) => (
              <AnimatedCard key={index} hoverEffect="glow" delay={index * 150} className="bg-white p-6 rounded-xl shadow-lg group">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-600 transition-colors animate-slide-in-left">
                    <AnimatedText text={drink.name} type="cascade" />
                  </h3>
                  <span className="text-green-600 font-bold text-lg animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>{drink.price}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed animate-slide-up-fade" style={{ animationDelay: '0.3s' }}>
                  <AnimatedText text={drink.description} type="cascade" />
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Section Click & Collect */}
      {/* <AnimatedSection animation="zoom-in" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-12 rounded-2xl shadow-2xl text-center relative overflow-hidden animate-gradient-shift">
              {/* Motifs décoratifs * }
              <div className="absolute inset-0 opacity-10">
                {[...Array(8)].map((_, i) => (
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
                    <ShoppingBag size={24} />
                  </div>
                ))}
              </div>

              <div className="relative z-10">
                <ShoppingBag className="mx-auto mb-6 animate-float" size={64} />
                <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-wave" 
                    style={{ fontFamily: 'Dancing Script, cursive' }}>
                  <AnimatedText text="Commande à Emporter" type="typewriter" speed={100} />
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto animate-slide-up-fade">
                  <AnimatedText text="Savourez nos délicieux plats chez vous ! Commandez en ligne et venez récupérer votre commande." type="cascade" />
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in" style={{ animationDelay: '1s' }}>
                  <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 btn-magnetic animate-pulse-glow">
                    Commander en ligne
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-200 transform hover:scale-105 btn-magnetic">
                    Appeler le restaurant
                  </button>
                </div>
                <p className="text-sm mt-6 opacity-90 animate-slide-up-fade" style={{ animationDelay: '1.5s' }}>
                  <AnimatedText text="Livraison disponible dans un rayon de 5km • Frais de livraison : 3€" type="cascade" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection> */}
    </div>
  );
};

export default Menu;