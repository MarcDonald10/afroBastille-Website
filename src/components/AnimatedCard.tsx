import React from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: 'lift' | 'glow' | 'flip' | 'scale' | 'rotate';
  delay?: number;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = 'lift',
  delay = 0
}) => {
  const getHoverClass = () => {
    switch (hoverEffect) {
      case 'lift':
        return 'card-hover';
      case 'glow':
        return 'hover:animate-pulse-glow';
      case 'flip':
        return 'card-flip';
      case 'scale':
        return 'hover:scale-105 transition-transform duration-300';
      case 'rotate':
        return 'hover:rotate-1 hover:scale-105 transition-all duration-300';
      default:
        return 'card-hover';
    }
  };

  return (
    <div 
      className={`${getHoverClass()} ${className} animate-bounce-in`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;