import React, { useEffect, useRef, useState } from 'react';

const InteractiveWaveform = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (svgRef.current) {
        const { width, height } = svgRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent) => {
    if (svgRef.current) {
      const { left, top } = svgRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - left,
        y: e.clientY - top
      });
    }
  };
  
  // Generate wave points based on mouse position
  const generateWavePath = () => {
    if (dimensions.width === 0) return '';
    
    const { width, height } = dimensions;
    const { x, y } = mousePosition;
    
    // Calculate influence based on mouse position
    const influenceX = x / width;
    const influenceY = y / height;
    
    // Number of points in the wave
    const points = 10;
    const pointsArray = [];
    
    for (let i = 0; i <= points; i++) {
      const pointX = (width / points) * i;
      
      // Calculate wave amplitude based on mouse position
      // Higher amplitude near mouse X position
      const distanceFromMouseX = Math.abs(pointX / width - influenceX);
      const amplitudeModifier = isHovering ? Math.max(0, 1 - distanceFromMouseX * 2) : 0.5;
      
      // Base amplitude is 5% of height, modified by mouse position
      const baseAmplitude = height * 0.05;
      const amplitude = baseAmplitude * (1 + amplitudeModifier * 2);
      
      // Wave frequency changes based on mouse Y position
      const frequency = 2 + influenceY * 2;
      
      // Calculate Y position with sine wave
      const waveY = height / 2 + Math.sin(i / points * Math.PI * frequency) * amplitude;
      
      pointsArray.push(`${pointX},${waveY}`);
    }
    
    return `M0,${height/2} L${pointsArray.join(' L')} L${width},${height/2}`;
  };
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg 
        ref={svgRef}
        className="w-full h-full opacity-40 dark:opacity-30"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{ pointerEvents: 'auto' }}
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(217, 119, 6, 0.2)" />
            <stop offset="50%" stopColor="rgba(217, 119, 6, 0.4)" />
            <stop offset="100%" stopColor="rgba(217, 119, 6, 0.2)" />
          </linearGradient>
        </defs>
        
        {/* Top wave */}
        <path 
          d={generateWavePath()} 
          fill="none" 
          stroke="url(#waveGradient)" 
          strokeWidth="2"
          strokeLinecap="round"
          className="transition-all duration-300 ease-in-out"
        />
        
        {/* Bottom wave (inverted) */}
        <path 
          d={generateWavePath()} 
          fill="none" 
          stroke="url(#waveGradient)" 
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="5,5"
          className="transition-all duration-300 ease-in-out"
          transform={`translate(0, ${dimensions.height * 0.4}) scale(1, -0.7)`}
        />
      </svg>
    </div>
  );
};

export default InteractiveWaveform;
