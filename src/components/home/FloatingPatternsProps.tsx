import React from 'react';

interface FloatingPatternsProps {
  count: number;
  patternType: 'star' | 'circle';
  opacity?: number;
  size?: number;
}

const FloatingPatterns: React.FC<FloatingPatternsProps> = ({ count, patternType, opacity = 0.1, size = 60 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + i}s`,
          }}
        >
          <svg width={size} height={size} viewBox="0 0 60 60">
            {patternType === 'star' ? (
              <path
                d="M30 5L35 20L50 25L35 30L30 45L25 30L10 25L25 20L30 5Z"
                fill="white"
                opacity={opacity}
              />
            ) : (
              <circle cx="30" cy="30" r="10" fill="white" opacity={opacity} />
            )}
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FloatingPatterns;