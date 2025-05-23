import React, { useState, useEffect } from 'react';

const SimpleTestimonials: React.FC = () => {
  const testimonials = [
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

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-0 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6 text-amber-700 dark:text-amber-500">
          Testimonials
        </h2>
        
        <div className="max-w-5xl mx-auto relative">
          <div className="relative h-auto overflow-hidden">
            <div className="w-full">
              <div className="bg-amber-50 dark:bg-gray-800 rounded-xl p-6 shadow-md text-center mx-auto max-w-3xl">
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
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-white dark:bg-gray-800 text-amber-600 dark:text-amber-400 shadow-md"
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
                  onClick={() => setCurrentIndex(index)}
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
              className="p-2 rounded-full bg-white dark:bg-gray-800 text-amber-600 dark:text-amber-400 shadow-md"
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

export default SimpleTestimonials;
