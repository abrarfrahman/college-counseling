import React from 'react';

const SVGLinePattern = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-15 dark:opacity-10">
      <svg 
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path 
              d="M 40 0 L 0 0 0 40" 
              fill="none" 
              stroke="rgba(217, 119, 6, 0.1)" 
              strokeWidth="0.5"
            />
          </pattern>
          
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(217, 119, 6, 0.2)" />
            <stop offset="100%" stopColor="rgba(217, 119, 6, 0)" />
          </linearGradient>
        </defs>
        
        {/* Background grid pattern */}
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        
        {/* Diagonal lines */}
        <line 
          x1="0" y1="0" 
          x2="1920" y2="1080" 
          stroke="url(#line-gradient)" 
          strokeWidth="1"
          strokeDasharray="5,15"
        />
        
        <line 
          x1="1920" y1="0" 
          x2="0" y2="1080" 
          stroke="url(#line-gradient)" 
          strokeWidth="1"
          strokeDasharray="5,15"
        />
        
        {/* Curved paths */}
        <path 
          d="M0,400 Q960,300 1920,600" 
          fill="none" 
          stroke="rgba(217, 119, 6, 0.07)" 
          strokeWidth="1.5"
          strokeDasharray="1,15"
        />
        
        <path 
          d="M0,800 Q960,700 1920,900" 
          fill="none" 
          stroke="rgba(217, 119, 6, 0.05)" 
          strokeWidth="1.5"
          strokeDasharray="1,15"
        />
        
        {/* Horizontal lines with varying opacity */}
        <line 
          x1="0" y1="200" 
          x2="1920" y2="200" 
          stroke="rgba(217, 119, 6, 0.03)" 
          strokeWidth="1"
        />
        
        <line 
          x1="0" y1="600" 
          x2="1920" y2="600" 
          stroke="rgba(217, 119, 6, 0.04)" 
          strokeWidth="1"
        />
        
        <line 
          x1="0" y1="1000" 
          x2="1920" y2="1000" 
          stroke="rgba(217, 119, 6, 0.03)" 
          strokeWidth="1"
        />
        
        {/* Vertical lines with varying opacity */}
        <line 
          x1="400" y1="0" 
          x2="400" y2="1080" 
          stroke="rgba(217, 119, 6, 0.02)" 
          strokeWidth="1"
        />
        
        <line 
          x1="1200" y1="0" 
          x2="1200" y2="1080" 
          stroke="rgba(217, 119, 6, 0.02)" 
          strokeWidth="1"
        />
        
        <line 
          x1="1600" y1="0" 
          x2="1600" y2="1080" 
          stroke="rgba(217, 119, 6, 0.02)" 
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export default SVGLinePattern;
