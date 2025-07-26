import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import FeaturedDishesSection from '../components/home/FeaturedDishesSection';
import CTASection from '../components/home/CTASection';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      <HeroSection />
      <FeaturesSection />
      <FeaturedDishesSection />
      <CTASection />
    </div>
  );
};

export default Home;