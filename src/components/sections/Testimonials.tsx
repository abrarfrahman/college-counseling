import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassmorphicCard from '../ui/GlassmorphicCard';

interface Testimonial {
  text: string;
  name: string;
  role: string;
  initial: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      text: "Abrar's guidance transformed my college essays. I felt confident telling my story and got into my top choice!",
      name: "Jenna W.",
      role: "Student",
      initial: "J"
    },
    {
      text: "I was amazed by Abrar's professionalism and personalized approach. My son's applications stood out.",
      name: "R. Smith",
      role: "Parent",
      initial: "R"
    },
    {
      text: "My SAT score improved by 200 points after working with Abrar. His strategies were game-changing!",
      name: "Michael T.",
      role: "Student",
      initial: "M"
    },
    {
      text: "The personalized attention and strategic guidance helped me secure admission to three Ivy League schools.",
      name: "Sophia L.",
      role: "Student",
      initial: "S"
    },
    {
      text: "Abrar has a unique ability to bring out the best in students. The confidence my daughter gained was priceless.",
      name: "David K.",
      role: "Parent",
      initial: "D"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 0.5,
      },
    }),
  };

  const startAutoplay = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex]);

  const handlePrev = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-amber-400/10 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-amber-300/10 blur-3xl animate-blob"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-amber-500 dark:from-amber-500 dark:to-amber-300"
            data-aos="fade-up">
          Testimonials
        </h2>
        
        <div className="max-w-5xl mx-auto relative">
          <div className="relative h-80 md:h-64 overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full"
              >
                <GlassmorphicCard className="text-center mx-auto max-w-3xl">
                  <div className="flex justify-center mb-6">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl font-bold">{testimonials[currentIndex].initial}</span>
                    </div>
                  </div>
                  <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 italic">
                    "{testimonials[currentIndex].text}"
                  </p>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonials[currentIndex].role}
                  </p>
                </GlassmorphicCard>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full glass-button text-amber-600 dark:text-amber-400"
              aria-label="Previous testimonial"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-amber-500 scale-125' 
                      : 'bg-amber-300/50 dark:bg-amber-700/50 hover:bg-amber-400 dark:hover:bg-amber-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="p-2 rounded-full glass-button text-amber-600 dark:text-amber-400"
              aria-label="Next testimonial"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
