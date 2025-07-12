import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('entrees');

  const menuItems: MenuItem[] = [
    // Entrées
    {
      id: 1,
      name: "Yennekett",
      description: "Salade de feuilles de bissap fraîches, tomates et oignons",
      price: "8,50 €",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      category: "entrees"
    },
    {
      id: 2,
      name: "Pastels",
      description: "Beignets de poisson frits, spécialité dakaroise",
      price: "9,00 €",
      image: "https://images.pexels.com/photos/4518653/pexels-photo-4518653.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      category: "entrees"
    },
    {
      id: 3,
      name: "Salade de mangue verte",
      description: "Mangue verte râpée, cacahuètes grillées et piment",
      price: "7,50 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      category: "entrees"
    },
    
    // Plats
    {
      id: 4,
      name: "Thieboudienne",
      description: "Riz au poisson, légumes et sauce tomate, plat national",
      price: "16,50 €",
      image: "https://images.pexels.com/photos/5779568/pexels-photo-5779568.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      category: "plats"
    },
    {
      id: 5,
      name: "Maffé",
      description: "Ragout de boeuf à la pâte d'arachide, riz jasmin",
      price: "15,00 €",
      image: "https://images.pexels.com/photos/6419655/pexels-photo-6419655.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      category: "plats"
    },
    {
      id: 6,
      name: "Yassa Poulet",
      description: "Poulet mariné aux oignons et citron, riz parfumé",
      price: "14,50 €",
      image: "https://images.pexels.com/photos/5779567/pexels-photo-5779567.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      category: "plats"
    },

    // Spécialités
    {
      id: 7,
      name: "Thiou",
      description: "Couscous sénégalais aux légumes et viande",
      price: "13,50 €",
      image: "https://images.pexels.com/photos/6419656/pexels-photo-6419656.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      category: "specialites"
    },
    {
      id: 8,
      name: "Caldou",
      description: "Poisson grillé, sauce à la tomate et légumes",
      price: "17,00 €",
      image: "https://images.pexels.com/photos/5779569/pexels-photo-5779569.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      category: "specialites"
    },

    // Desserts
    {
      id: 9,
      name: "Thiakry",
      description: "Couscous sucré au lait, vanille et noix de coco",
      price: "6,50 €",
      image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      category: "desserts"
    },
    {
      id: 10,
      name: "Dègue",
      description: "Dessert au mil, yaourt et fruits",
      price: "5,50 €",
      image: "https://images.pexels.com/photos/1126360/pexels-photo-1126360.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      category: "desserts"
    }
  ];

  const drinks = [
    { name: "Jus de Bissap", price: "4,50 €", description: "Infusion de fleurs d'hibiscus" },
    { name: "Jus de Bouye", price: "5,00 €", description: "Jus de fruit du baobab" },
    { name: "Jus de Gingembre", price: "4,50 €", description: "Boisson rafraîchissante au gingembre" },
    { name: "Attaya", price: "6,00 €", description: "Thé vert traditionnel sénégalais" }
  ];

  const categories = [
    { id: 'entrees', name: 'Entrées', icon: '🥗' },
    { id: 'plats', name: 'Plats', icon: '🍽️' },
    { id: 'specialites', name: 'Spécialités', icon: '⭐' },
    { id: 'desserts', name: 'Desserts', icon: '🍮' }
  ];

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="carte" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Notre Carte
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez nos plats authentiques préparés avec des ingrédients frais et des épices traditionnelles
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                  <span className="text-lg font-semibold text-green-600">{item.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Drinks Section */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Boissons Traditionnelles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {drinks.map((drink, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-800">{drink.name}</h4>
                  <span className="text-green-600 font-semibold">{drink.price}</span>
                </div>
                <p className="text-gray-600 text-sm">{drink.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Click & Collect */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-xl shadow-lg">
            <ShoppingBag className="mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-4">Commande à Emporter</h3>
            <p className="text-lg mb-6">Profitez de nos plats chez vous ! Commandez en ligne et venez récupérer votre commande.</p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
              Commander en ligne
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;