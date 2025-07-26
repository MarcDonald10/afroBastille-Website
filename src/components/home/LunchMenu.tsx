import React from 'react';
import AnimatedText from '../../components/AnimatedText';

interface LunchMenuItem {
  name: string;
  description: string;
  price: string;
}

const lunchMenuItems: LunchMenuItem[] = [
  {
    name: 'Thiéboudienne Express',
    description: 'Riz au poisson avec légumes, sauce tomate légère.',
    price: '10 €',
  },
  {
    name: 'Mafé Poulet',
    description: 'Ragoût d’arachide avec poulet et légumes.',
    price: '8 €',
  },
  {
    name: 'Yassa Végétarien',
    description: 'Oignons caramélisés et citron, servi avec riz.',
    price: '7 €',
  },
];

const LunchMenu: React.FC = () => {
  return (
    <div className="absolute left-4 top-1/4 bg-white bg-opacity-90 p-6 rounded-lg shadow-lg max-w-xs animate-slide-in-left">
      <h3
        className="text-2xl font-bold text-gray-800 mb-4"
        style={{ fontFamily: 'Dancing Script, cursive' }}
      >
        <AnimatedText text="Menu du Midi" type="reveal" />
      </h3>
      <ul className="space-y-4">
        {lunchMenuItems.map((item, index) => (
          <li key={index} className="text-gray-700">
            <div className="flex justify-between">
              <span>
                <AnimatedText text={item.name} type="cascade" />
              </span>
              <span className="font-semibold">{item.price}</span>
            </div>
            <p className="text-sm">
              <AnimatedText text={item.description} type="cascade" />
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LunchMenu;