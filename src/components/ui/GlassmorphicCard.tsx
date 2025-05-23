import React from 'react';

interface GlassmorphicCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowEffect?: boolean;
}

const GlassmorphicCard: React.FC<GlassmorphicCardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = true,
  glowEffect = false
}) => {
  return (
    <div 
      className={`
        glass-card rounded-2xl p-6 transition-all duration-500
        ${hoverEffect ? 'hover:shadow-2xl hover:scale-[1.02]' : ''}
        ${glowEffect ? 'hover:shadow-amber-500/20' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassmorphicCard;
