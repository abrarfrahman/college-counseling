import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassmorphicCard from '../ui/GlassmorphicCard';

interface Brand {
  name: string;
  logo: string;
  description: string;
  category: 'university' | 'company' | 'research';
}

const BrandCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const brands: Brand[] = [
    {
      name: "Harvard University",
      logo: "/images/brands/harvard.svg",
      description: "Students accepted to Harvard with our guidance",
      category: "university"
    },
    {
      name: "Stanford University",
      logo: "/images/brands/stanford.svg",
      description: "Students accepted to Stanford with our guidance",
      category: "university"
    },
    {
      name: "MIT",
      logo: "/images/brands/mit.svg",
      description: "Students accepted to MIT with our guidance",
      category: "university"
    },
    {
      name: "Princeton University",
      logo: "/images/brands/princeton.svg",
      description: "Students accepted to Princeton with our guidance",
      category: "university"
    },
    {
      name: "Yale University",
      logo: "/images/brands/yale.svg",
      description: "Students accepted to Yale with our guidance",
      category: "university"
    },
    {
      name: "Google Research",
      logo: "/images/brands/google.svg",
      description: "Former research experience",
      category: "company"
    },
    {
      name: "Microsoft Research",
      logo: "/images/brands/microsoft.svg",
      description: "Former research experience",
      category: "company"
    },
    {
      name: "Berkeley Lab",
      logo: "/images/brands/berkeley.svg",
      description: "Former research experience",
      category: "research"
    }
  ];

  const scrollToBrand = (index: number) => {
    setActiveIndex(index);
    if (containerRef.current) {
      const container = containerRef.current;
      const brandElement = container.children[index] as HTMLElement;
      if (brandElement) {
        container.scrollTo({
          left: brandElement.offsetLeft - container.offsetWidth / 2 + brandElement.offsetWidth / 2,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    // Always autoplay regardless of user interaction
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % brands.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [brands.length]);

  useEffect(() => {
    scrollToBrand(activeIndex);
  }, [activeIndex]);

  // Pause autoplay when user interacts
  const handleInteraction = () => {
    setAutoplay(false);
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setAutoplay(true), 10000);
  };

  // Group brands by category for the legend
  const categories = {
    university: "Elite Universities",
    company: "Industry Leaders",
    research: "Research Institutions"
  };

  return (
    <section className="py-0 relative overflow-hidden" id="prestigious-affiliations">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-amber-400/10 blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-amber-300/10 blur-3xl animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-amber-500 dark:from-amber-500 dark:to-amber-300"
            data-aos="fade-up">
          Prestigious Affiliations
        </h2>
        
        <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
           data-aos="fade-up" data-aos-delay="100">
          Our network includes elite institutions and industry leaders
        </p>
        
        {/* Category legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {Object.entries(categories).map(([key, label]) => (
            <div key={key} className="flex items-center">
              <div className={`w-3 h-3 rounded-full mr-2 ${
                key === 'university' ? 'bg-amber-500' : 
                key === 'company' ? 'bg-blue-500' : 'bg-green-500'
              }`}></div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
            </div>
          ))}
        </div>
        
        <div className="relative max-w-6xl mx-auto" onMouseEnter={handleInteraction} onTouchStart={handleInteraction}>
          {/* Brands carousel */}
          <div 
            ref={containerRef}
            className="flex overflow-x-auto pb-12 pt-4 hide-scrollbar snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex-shrink-0 w-1/6 md:w-1/12"></div> {/* Spacer */}
            
            {brands.map((brand, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-4/5 md:w-1/3 px-4 snap-center"
                onClick={() => scrollToBrand(index)}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: activeIndex === index ? 1 : 0.7,
                      y: 0,
                      scale: activeIndex === index ? 1 : 0.95
                    }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <GlassmorphicCard 
                      className={`relative pt-8 pb-6 h-full transition-all duration-500 ${
                        activeIndex === index 
                          ? `border-${brand.category === 'university' ? 'amber' : brand.category === 'company' ? 'blue' : 'green'}-500/50 shadow-xl` 
                          : 'border-white/10 dark:border-gray-800/30'
                      }`}
                      glowEffect={activeIndex === index}
                    >
                      {/* Category badge */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className={`px-4 py-1 rounded-full glass-effect text-sm font-medium ${
                          brand.category === 'university' 
                            ? 'bg-amber-500/30 text-amber-900 dark:text-amber-100' 
                            : brand.category === 'company'
                              ? 'bg-blue-500/30 text-blue-900 dark:text-blue-100'
                              : 'bg-green-500/30 text-green-900 dark:text-green-100'
                        }`}>
                          {brand.category === 'university' ? 'Elite University' : 
                           brand.category === 'company' ? 'Industry Leader' : 'Research Institution'}
                        </div>
                      </div>
                      
                      {/* Logo placeholder - in production, replace with actual logo images */}
                      <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                        <div className={`w-full h-full rounded-full flex items-center justify-center ${
                          brand.category === 'university' 
                            ? 'bg-amber-100 dark:bg-amber-900/30' 
                            : brand.category === 'company'
                              ? 'bg-blue-100 dark:bg-blue-900/30'
                              : 'bg-green-100 dark:bg-green-900/30'
                        }`}>
                          <span className="text-2xl font-bold text-center">
                            {brand.name.split(' ').map(word => word[0]).join('')}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className={`text-xl font-serif font-semibold mb-1 text-center bg-clip-text text-transparent ${
                        brand.category === 'university' 
                          ? 'bg-gradient-to-r from-amber-700 to-amber-500 dark:from-amber-500 dark:to-amber-300' 
                          : brand.category === 'company'
                            ? 'bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-500 dark:to-blue-300'
                            : 'bg-gradient-to-r from-green-700 to-green-500 dark:from-green-500 dark:to-green-300'
                      }`}>
                        {brand.name}
                      </h3>
                      
                      <p className="text-gray-700 dark:text-gray-300 text-center">
                        {brand.description}
                      </p>
                    </GlassmorphicCard>
                  </motion.div>
                </AnimatePresence>
              </div>
            ))}
            
            <div className="flex-shrink-0 w-1/6 md:w-1/12"></div> {/* Spacer */}
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {brands.map((brand, index) => (
              <button
                key={index}
                onClick={() => scrollToBrand(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? brand.category === 'university' 
                      ? 'bg-amber-500 scale-125' 
                      : brand.category === 'company'
                        ? 'bg-blue-500 scale-125'
                        : 'bg-green-500 scale-125'
                    : 'bg-gray-300/50 dark:bg-gray-700/50 hover:bg-gray-400 dark:hover:bg-gray-600'
                }`}
                aria-label={`Go to brand ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">94%</div>
            <p className="text-gray-700 dark:text-gray-300">Ivy League Acceptance Rate</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="200">
            <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">100+</div>
            <p className="text-gray-700 dark:text-gray-300">Elite University Placements</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="300">
            <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">8+</div>
            <p className="text-gray-700 dark:text-gray-300">Years of Elite Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;
