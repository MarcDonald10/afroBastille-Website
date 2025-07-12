import React from 'react';
import { useTypewriterEffect } from '../hooks/useScrollAnimation';

interface AnimatedTextProps {
  text: string;
  className?: string;
  speed?: number;
  type?: 'typewriter' | 'cascade' | 'reveal';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = '', 
  speed = 50, 
  type = 'cascade' 
}) => {
  const { displayText } = useTypewriterEffect(text, speed);

  if (type === 'typewriter') {
    return (
      <span className={`animate-typewriter ${className}`}>
        {displayText}
      </span>
    );
  }

  if (type === 'cascade') {
    const words = text.split(' ');
    return (
      <span className={`cascade-text ${className}`}>
        {words.map((word, index) => (
          <span key={index} className="word mr-2">
            {word}
          </span>
        ))}
      </span>
    );
  }

  if (type === 'reveal') {
    const letters = text.split('');
    return (
      <span className={`text-reveal ${className}`}>
        {letters.map((letter, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </span>
    );
  }

  return <span className={className}>{text}</span>;
};

export default AnimatedText;