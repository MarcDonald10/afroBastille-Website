import React, { useState } from 'react';
import { ShoppingBag, Star, Leaf, Flame, MapPin } from 'lucide-react';
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

interface Restaurant {
  id: string;
  name: string;
  address: string;
}

const Menu: React.FC = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState('afro-bastille-1');
  const [activeCategory, setActiveCategory] = useState('entrees');

  const restaurants: Restaurant[] = [
    {
      id: 'afro-bastille-1',
      name: 'Afro Bastille 1',
      address: '87 rue Saint Laurent, 38000 Grenoble, France',
    },
    {
      id: 'afro-bastille-2',
      name: 'Afro Bastille 2',
      address: '1 Rue Amiral Courbet, 38000 Grenoble, France',
    },
  ];

  const menuItemsAfro1: MenuItem[] = [
    {
      id: 1,
      name: "Pastel Boeuf",
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
      name: "Aloko",
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
      name: "Mafé (poulet et viande)",
      description: "Un ragoût copieux à base de pâte d'arachide, de poulet ou de viande, et de légumes, offrant une saveur riche et légèrement sucrée.",
      price: "15 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      signature: true
    },
    // {
    //   id: 6,
    //   name: "Thiép au poulet",
    //   description: "Un délicieux riz cassé avec du poulet tendre cuit dans une sauce tomate parfumée et servi avec du riz et des légumes.",
    //   price: "20€",
    //   image: "https://images.pexels.com/photos/6419655/pexels-photo-6419655.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    //   category: "plats",
    //   signature: true
    // },
    {
      id: 7,
      name: "Yassa Poulet",
      description: "Un plat sénégalais emblématique où le poulet est mariné et mijoté dans une sauce onctueuse à base d'oignons caramélisés et de citron, servi avec du riz.",
      price: "15 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    {
      id: 8,
      name: "Thiép au viande",
      description: "Un plat national sénégalais, un délicieux riz cassé au viande et légumes mijotés dans la sauce tomate riche.",
      price: "20 €",
      image: "https://images.pexels.com/photos/6419656/pexels-photo-6419656.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats"
    },

    // Spécialités
    {
      id: 9,
      name: "Poulet braisé",
      description: "Un classique incontournable : un poulet mariné puis braisé à la perfection, pour une peau croustillante et une chair juteuse.",
      price: "18 €",
      image: "https://images.pexels.com/photos/5779569/pexels-photo-5779569.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      signature: true
    },
    {
      id: 10,
      name: "Couscous marocain",
      description: "Un couscous moelleux et parfumé, accompagné d'un bouillon aux épices délicates et de légumes variés, dans la pure tradition marocaine.",
      price: "15 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    {
      id: 11,
      name: "Pâte méditerranéennes",
      description: "Des pâtes cuites d'un mélange de légumes frais du soleil méditerranéen et d'une sauce lèger.",
      price: "15 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    {
      id: 12,
      name: "Bastille d'afrique",
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
      name: "Belledonne-Dakar",
      description: "Entrée ou Dessert + Plat au choix (Yassa, Mafé, Thieb au poulet, thieb au poisson)",
      price: "11,50 €",
      image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "specialites"
    },,
    {
      id: 16,
      name: "Teranga Alpin",
      description: "Entrée + Plat au choix (Yassa, Mafé, Thieb au poulet, thieb au poisson) + Dessert",
      price: "15,50 €",
      image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "specialites"
    },
     {
      id: 17,
      name: "Attiéké viande",
      description: "L'Attiéké est agrémenté de morceau de viande tendre et savoureuse, offrant une alternative consistante pour les amateurs de viande.",
      price: "20 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    {
      id: 18,
      name: "Thiéboudienne",
      description: "Le plat national sénégalais, un délicieux riz cassé au poisson et légumes mijotés dans une sauce tomate riche.",
      price: "20 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    {
      id: 19,
      name: "C'est bon",
      description: "Riz avec poisson briasé  et sauce à base d'oignon , huile de palme.",
      price: "20 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    {
      id: 20,
      name: "Attiéké au poisson",
      description: "Le couscous de manioc ivoirien, l'attiéké, est ici servi avec du poisson frit ou braisé, accompagné de légumes et d'une sauce piquante.",
      price: "20 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    {
      id: 21,
      name: "Attiéké poulet",
      description: "Un plat simple et délicieux composé d'attiéké moelleux servi avec du poulet braisé ou frit, idéal pour un repas léger et savoureux.",
      price: "15 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    {
      id: 22,
      name: "Soupe Yelle",
      description: "Une soupe traditionnelle sénégalaise, riche et consistante, souvent à base de viande ou de poisson, et de légumes locaux.",
      price: "20 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    {
      id: 23,
      name: "Couscous sénégalais",
      description: "Un couscous fin et aérien, servi avec un bouillon riche et une variété de viandes et légumes, selon la tradition sénégalaise.",
      price: "20 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    {
      id: 24,
      name: "Vermicelles viande",
      description: "Une variation des vermicelles, où des morceaux de viande généreux sont mélangés aux vermicelles et aux légumes, pour un repas plus copieux.",
      price: "20 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    // {
    //   id: 25,
    //   name: "Dibi agneau",
    //   description: "De l'agneau grillé à la perfection, assaisonné d'épices sénégalaises croustillant à l'exterieur et juteux à l'interieux, généralement servi avec des oignons.",
    //   price: "18 €",
    //   image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    //   category: "plats",
    //   spicy: true
    // },
    {
      id: 26,
      name: "Saka Saka (viande)",
      description: "Un ragoût africain riche et feuillu, préparé à base de feuilles de manioc pilées et de morceaux de viande tendre, plein de saveurs.",
      price: "15 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    {
      id: 27,
      name: "Thiou Curry",
      description: "Un plat parfumé inspiré des saveurs indiennes et africaines, où la viande est cuisinée dans une sauce curry douce et aromatique.",
      price: "15 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    {
      id: 29,
      name: "Fouti",
      description: "Plat emblématique de la guinée à base de riz blanc, gombo.",
      price: "15 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    {
      id: 30,
      name: "Mbaxal Saloum",
      description: "Plat preparé à base du riz, de la poudre d'arrachide, viande, haricot.",
      price: "15 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    {
      id: 31,
      name: "Vermicelles poulet",
      description: "Des vermicelles fins et délicats sautés avec du poulet tendre et des légumes croquants, pour un plat léger et savoureux.",
      price: "15 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    {
      id: 32,
      name: "Soupa Kandia (fruits de mer)",
      description: "Une soupe sénégalaise onctueuse et gourmande à base de gombo et d'huile de palme, généreusement garnie de fruits de mer frais.",
      price: "20 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    // {
    //   id: 33,
    //   name: "Thiou Diwtiir",
    //   description: "Un plat réconfortant de poulet fumé mijoté dans une sauce savoureuse offrant des arômes profond et authentique.",
    //   price: "18 €",
    //   image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    //   category: "plats",
    //   spicy: true
    // },
  ];

  const menuItemsAfro2: MenuItem[] = [
    {
      id: 1,
      name: "Pastel Boeuf",
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
      name: "Aloko",
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
      name: "Mafé (poulet et viande)",
      description: "Un ragoût copieux à base de pâte d'arachide, de poulet ou de viande, et de légumes, offrant une saveur riche et légèrement sucrée.",
      price: "12 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      signature: true
    },
    // {
    //   id: 6,
    //   name: "Thiép au poulet",
    //   description: "Un délicieux riz cassé avec du poulet tendre cuit dans une sauce tomate parfumée et servi avec du riz et des légumes.",
    //   price: "18 €",
    //   image: "https://images.pexels.com/photos/6419655/pexels-photo-6419655.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    //   category: "plats",
    //   signature: true
    // },
    {
      id: 7,
      name: "Yassa Poulet",
      description: "Un plat sénégalais emblématique où le poulet est mariné et mijoté dans une sauce onctueuse à base d'oignons caramélisés et de citron, servi avec du riz.",
      price: "12 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    {
      id: 8,
      name: "Thiép au viande",
      description: "Un plat national sénégalais, un délicieux riz cassé au viande et légumes mijotés dans la sauce tomate riche.",
      price: "18 €",
      image: "https://images.pexels.com/photos/6419656/pexels-photo-6419656.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats"
    },

    // Spécialités
    {
      id: 9,
      name: "Poulet braisé",
      description: "Un classique incontournable : un poulet mariné puis braisé à la perfection, pour une peau croustillante et une chair juteuse.",
      price: "15 €",
      image: "https://images.pexels.com/photos/5779569/pexels-photo-5779569.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      signature: true
    },
    {
      id: 10,
      name: "Couscous marocain",
      description: "Un couscous moelleux et parfumé, accompagné d'un bouillon aux épices délicates et de légumes variés, dans la pure tradition marocaine.",
      price: "12 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    {
      id: 11,
      name: "Pâte méditerranéennes",
      description: "Des pâtes cuites d'un mélange de légumes frais du soleil méditerranéen et d'une sauce lèger.",
      price: "12 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    {
      id: 12,
      name: "Bastille d'afrique",
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
      name: "Belledonne-Dakar",
      description: "Entrée ou Dessert + Plat au choix (Yassa, Mafé, Thieb au poulet, thieb au poisson)",
      price: "11,50 €",
      image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "specialites"
    },,
    {
      id: 16,
      name: "Teranga Alpin",
      description: "Entrée + Plat au choix (Yassa, Mafé, Thieb au poulet, thieb au poisson) + Dessert",
      price: "15,50 €",
      image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "specialites"
    },
     {
      id: 17,
      name: "Attiéké viande",
      description: "L'Attiéké est agrémenté de morceau de viande tendre et savoureuse, offrant une alternative consistante pour les amateurs de viande.",
      price: "15 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    {
      id: 18,
      name: "Thiéboudienne",
      description: "Le plat national sénégalais, un délicieux riz cassé au poisson et légumes mijotés dans une sauce tomate riche.",
      price: "15 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    {
      id: 19,
      name: "C'est bon",
      description: "Riz avec poisson briasé  et sauce à base d'oignon , huile de palme.",
      price: "18 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    {
      id: 20,
      name: "Attiéké au poisson",
      description: "Le couscous de manioc ivoirien, l'attiéké, est ici servi avec du poisson frit ou braisé, accompagné de légumes et d'une sauce piquante.",
      price: "18 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    {
      id: 21,
      name: "Attiéké poulet",
      description: "Un plat simple et délicieux composé d'attiéké moelleux servi avec du poulet braisé ou frit, idéal pour un repas léger et savoureux.",
      price: "12 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    {
      id: 22,
      name: "Soupe Yelle",
      description: "Une soupe traditionnelle sénégalaise, riche et consistante, souvent à base de viande ou de poisson, et de légumes locaux.",
      price: "18 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    {
      id: 23,
      name: "Couscous sénégalais",
      description: "Un couscous fin et aérien, servi avec un bouillon riche et une variété de viandes et légumes, selon la tradition sénégalaise.",
      price: "18 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    {
      id: 24,
      name: "Vermicelles viande",
      description: "Une variation des vermicelles, où des morceaux de viande généreux sont mélangés aux vermicelles et aux légumes, pour un repas plus copieux.",
      price: "18 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    // {
    //   id: 25,
    //   name: "Dibi agneau",
    //   description: "De l'agneau grillé à la perfection, assaisonné d'épices sénégalaises croustillant à l'exterieur et juteux à l'interieux, généralement servi avec des oignons.",
    //   price: "18 €",
    //   image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    //   category: "plats",
    //   spicy: true
    // },
    {
      id: 26,
      name: "Saka Saka (viande)",
      description: "Un ragoût africain riche et feuillu, préparé à base de feuilles de manioc pilées et de morceaux de viande tendre, plein de saveurs.",
      price: "12 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    {
      id: 27,
      name: "Thiou Curry",
      description: "Un plat parfumé inspiré des saveurs indiennes et africaines, où la viande est cuisinée dans une sauce curry douce et aromatique.",
      price: "12 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    {
      id: 29,
      name: "Fouti",
      description: "Plat emblématique de la guinée à base de riz blanc, gombo.",
      price: "12 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    {
      id: 30,
      name: "Mbaxal Saloum",
      description: "Plat preparé à base du riz, de la poudre d'arrachide, viande, haricot.",
      price: "12 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    {
      id: 31,
      name: "Vermicelles poulet",
      description: "Des vermicelles fins et délicats sautés avec du poulet tendre et des légumes croquants, pour un plat léger et savoureux.",
      price: "12 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    {
      id: 32,
      name: "Soupa Kandia (fruits de mer)",
      description: "Une soupe sénégalaise onctueuse et gourmande à base de gombo et d'huile de palme, généreusement garnie de fruits de mer frais.",
      price: "18 €",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "plats",
      spicy: true
    },
    // {
    //   id: 33,
    //   name: "Thiou Diwtiir",
    //   description: "Un plat réconfortant de poulet fumé mijoté dans une sauce savoureuse offrant des arômes profond et authentique.",
    //   price: "18 €",
    //   image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    //   category: "plats",
    //   spicy: true
    // },
  ];

  const drinks = [
    { name: 'Jus de Bissap', price: '4,50 €', description: 'Infusion de fleurs d\'hibiscus, menthe fraîche' },
    { name: 'Jus de Bouye', price: '5,00 €', description: 'Jus de fruit du baobab, riche en vitamine C' },
  ];

  const categories = [
    { id: 'entrees', name: 'Entrées', icon: '🥗', pattern: 'M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z' },
    { id: 'plats', name: 'Plats', icon: '🍽️', pattern: 'M3 12H21M3 6H21M3 18H21' },
    { id: 'specialites', name: 'Spécialités', icon: '⭐', pattern: 'M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z' },
    { id: 'desserts', name: 'Desserts', icon: '🍮', pattern: 'M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21S3 16.97 3 12S7.03 3 12 3S21 7.03 21 12Z' },
  ];

  const menuItems = selectedRestaurant === 'afro-bastille-1' ? menuItemsAfro1 : menuItemsAfro2;
  const filteredItems = menuItems.filter((item) => item.category === activeCategory);

  const { ref: menuRef, visibleItems } = useStaggeredAnimation(filteredItems.length, 150);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20" style={{ background: 'linear-gradient(135deg, #E8DD8D 0%, #fffbe6 100%)' }}>
        <div className="absolute inset-0 opacity-5">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${3 + i * 0.1}s`,
              }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40">
                <path d="M20 4L25 15L36 20L25 25L20 36L15 25L4 20L15 15L20 4Z" fill="currentColor" opacity="0.4" />
              </svg>
            </div>
          ))}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-5xl md:text-7xl font-bold mb-6 animate-gradient-shift"
              style={{ fontFamily: 'Dancing Script, cursive', color: '#0C0D0E' }}
            >
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

      {/* Restaurant Selector and Category Navigation */}
      <section className="py-12 bg-white shadow-md">
        <div className="container mx-auto px-4">
          {/* Restaurant Selector */}
          <AnimatedSection animation="zoom-in" className="text-center mb-8">
            <h2
              className="text-3xl font-bold text-gray-800 mb-4"
              style={{ fontFamily: 'Dancing Script, cursive' }}
            >
              <AnimatedText text="Choisissez votre restaurant" type="reveal" />
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {restaurants.map((restaurant) => (
                <button
                  key={restaurant.id}
                  onClick={() => setSelectedRestaurant(restaurant.id)}
                  className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 overflow-hidden group ${
                    selectedRestaurant === restaurant.id
                      ? 'bg-[#0C0D0E] text-[#E8DD8D] shadow-lg transform scale-105'
                      : 'bg-[#E8DD8D] text-[#0C0D0E] hover:bg-[#0C0D0E] hover:text-[#E8DD8D] hover:scale-105'
                  }`}
                >
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='pattern' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z' stroke='white' stroke-width='1' fill='none' transform='scale(0.8)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23pattern)'/%3E%3C/svg%3E")`,
                    }}
                  ></div>
                  <span className="relative z-10 flex items-center">
                    <MapPin className="mr-2" size={18} />
                    {restaurant.name} - {restaurant.address}
                  </span>
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Category Navigation */}
          <AnimatedSection animation="fade-up" className="text-center">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative px-8 py-4 rounded-full font-medium transition-all duration-300 overflow-hidden group ${
                    activeCategory === category.id
                      ? 'bg-[#0C0D0E] text-[#E8DD8D] shadow-lg transform scale-105'
                      : 'bg-[#E8DD8D] text-[#0C0D0E] hover:bg-[#0C0D0E] hover:text-[#E8DD8D] hover:scale-105'
                  }`}
                >
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='menu-pattern-${category.id}' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='${category.pattern}' stroke='white' stroke-width='1' fill='none' transform='scale(0.8)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23menu-pattern-${category.id})'/%3E%3C/svg%3E")`,
                    }}
                  ></div>
                  <span className="relative z-10 flex items-center">
                    <span className="mr-2 text-xl">{category.icon}</span>
                    {category.name}
                  </span>
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Grille des plats */}
      <AnimatedSection animation="fade-up" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div ref={menuRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <AnimatedCard
                key={item.id}
                hoverEffect="lift"
                delay={visibleItems.includes(index) ? index * 100 : 0}
                className={`group bg-white rounded-xl shadow-lg overflow-hidden ${
                  visibleItems.includes(index) ? 'animate-bounce-in' : 'opacity-0'
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 gallery-item"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div
                    className="absolute top-3 left-3 flex flex-col gap-2 animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
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
                  <div
                    className="absolute bottom-3 right-3 bg-white text-gray-800 px-3 py-1 rounded-full font-bold shadow-lg animate-bounce-in"
                    style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
                  >
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
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" viewBox="0 0 200 200">
            <defs>
              <pattern id="drinks-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M25 40L40 25L55 40L40 55L25 40Z" stroke="currentColor" strokeWidth="1" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#drinks-pattern)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="zoom-in" className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-wave"
              style={{ fontFamily: 'Dancing Script, cursive' }}
            >
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
                  <span
                    className="text-green-600 font-bold text-lg animate-bounce-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {drink.price}
                  </span>
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
      <AnimatedSection animation="zoom-in" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-12 rounded-2xl shadow-2xl text-center relative overflow-hidden animate-gradient-shift">
              <div className="absolute inset-0 opacity-10">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute animate-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${3 + i * 0.3}s`,
                    }}
                  >
                    <ShoppingBag size={24} />
                  </div>
                ))}
              </div>
              <div className="relative z-10">
                <ShoppingBag className="mx-auto mb-6 animate-float" size={64} />
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4 animate-wave"
                  style={{ fontFamily: 'Dancing Script, cursive' }}
                >
                  <AnimatedText text="Commande à Emporter" type="typewriter" speed={100} />
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto animate-slide-up-fade">
                  <AnimatedText
                    text="Savourez nos délicieux plats chez vous ! Commandez en ligne et venez récupérer votre commande."
                    type="cascade"
                  />
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
      </AnimatedSection>
    </div>
  );
};

export default Menu;