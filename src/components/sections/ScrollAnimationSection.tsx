import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GlassmorphicCard from '../ui/GlassmorphicCard';

const VectorGraphic: React.FC = () => {
  return (
    <div className="w-full h-64 md:h-80 relative overflow-hidden">
      <svg viewBox="0 0 500 200" className="w-full h-full">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        
        {/* Background wave */}
        <path 
          d="M0,100 C150,180 350,0 500,100 L500,200 L0,200 Z" 
          fill="url(#grad1)" 
          className="animate-pulse-slow"
        />
        
        {/* Foreground wave */}
        <path 
          d="M0,100 C150,30 350,160 500,100 L500,200 L0,200 Z" 
          fill="url(#grad2)" 
          className="animate-pulse-slow animation-delay-2000"
        />
        
        {/* Floating circles */}
        <circle cx="100" cy="80" r="10" fill="#fbbf24" className="animate-float" />
        <circle cx="300" cy="60" r="8" fill="#f59e0b" className="animate-float animation-delay-2000" />
        <circle cx="400" cy="90" r="12" fill="#d97706" className="animate-float animation-delay-4000" />
        
        {/* Academic symbols */}
        <g transform="translate(150, 70)" className="animate-float">
          <rect x="-15" y="-15" width="30" height="30" rx="5" fill="#fbbf24" opacity="0.8" />
          <text x="0" y="5" textAnchor="middle" fill="white" fontSize="16">A+</text>
        </g>
        
        <g transform="translate(250, 50)" className="animate-float animation-delay-2000">
          <circle cx="0" cy="0" r="18" fill="#f59e0b" opacity="0.8" />
          <text x="0" y="5" textAnchor="middle" fill="white" fontSize="14">SAT</text>
        </g>
        
        <g transform="translate(350, 80)" className="animate-float animation-delay-4000">
          <polygon points="0,-20 17,10 -17,10" fill="#d97706" opacity="0.8" />
          <text x="0" y="5" textAnchor="middle" fill="white" fontSize="12">UC</text>
        </g>
      </svg>
    </div>
  );
};

const ScrollAnimationSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5]);
  
  return (
    <div ref={ref} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-amber-400/10 blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-amber-300/10 blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          style={{ opacity, scale, rotateZ }}
          className="max-w-4xl mx-auto"
        >
          <GlassmorphicCard className="text-center">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-amber-500 dark:from-amber-500 dark:to-amber-300">
              Elevate Your College Applications
            </h3>
            
            <VectorGraphic />
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-6">
              With personalized guidance and proven strategies, we'll help you craft applications that truly stand out.
            </p>
          </GlassmorphicCard>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollAnimationSection;
