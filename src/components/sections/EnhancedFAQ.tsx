import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassmorphicCard from '../ui/GlassmorphicCard';

interface FAQItem {
  question: string;
  answer: string;
  category: 'admissions' | 'process' | 'results';
}

interface EnhancedFAQProps {
  id?: string;
}

const EnhancedFAQ: React.FC<EnhancedFAQProps> = ({ id }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const faqItems: FAQItem[] = [
    {
      question: "What makes your tutoring approach different from others?",
      answer: "Our approach is fundamentally different because we focus on developing elite cognitive frameworks rather than simply teaching content. We've refined our methodology through years of experience with Ivy League admissions, emphasizing critical thinking, strategic problem-solving, and intellectual curiosity—the exact qualities that top universities seek. Unlike typical programs, we provide personalized mentorship from someone with direct experience in elite academic environments.",
      category: 'process'
    },
    {
      question: "What is your success rate for Ivy League admissions?",
      answer: "Our students have achieved a 94% acceptance rate to Ivy League and equivalent elite universities, significantly outperforming national averages. This exceptional success rate stems from our comprehensive approach that addresses not just academic excellence, but the entire application profile including extracurricular development, personal narrative crafting, and interview preparation. We maintain this high standard by accepting only students whom we believe we can genuinely help succeed.",
      category: 'results'
    },
    {
      question: "How selective is your tutoring program?",
      answer: "Our program is highly selective, maintaining a limited roster to ensure personalized attention and exceptional results. We accept approximately 15% of applicants based on their potential for growth, commitment to excellence, and alignment with our teaching philosophy. This selectivity allows us to maintain our outstanding track record and dedicate sufficient resources to each student's success journey.",
      category: 'process'
    },
    {
      question: "Do you offer standardized test preparation?",
      answer: "Yes, we provide elite-level standardized test preparation as part of our comprehensive approach. Our students consistently score in the top 1% on SAT, ACT, and AP exams. However, we view test preparation as just one component of a successful college application. Our approach integrates test excellence with broader academic and personal development to create standout candidates for elite universities.",
      category: 'admissions'
    },
    {
      question: "How early should we begin working together?",
      answer: "For optimal results, we recommend beginning our work together in the freshman or sophomore year of high school. This timeline allows us to develop a comprehensive strategy, build impressive academic credentials, and craft meaningful extracurricular involvement. However, we do accept exceptional students at later stages and have achieved remarkable results with intensive programs for juniors and seniors with strong potential.",
      category: 'admissions'
    },
    {
      question: "What is your approach to the college application process?",
      answer: "Our approach to college applications is strategic, authentic, and comprehensive. We begin with an in-depth assessment of each student's strengths, interests, and aspirations to identify their unique value proposition. We then develop a tailored roadmap that includes academic excellence, strategic extracurricular development, compelling personal narratives, and sophisticated application execution. Throughout the process, we maintain absolute authenticity while positioning each student's achievements in the most compelling light for admissions committees.",
      category: 'admissions'
    }
  ];

  // Category colors and labels
  const categoryInfo = {
    admissions: {
      color: 'amber',
      label: 'Admissions Strategy'
    },
    process: {
      color: 'blue',
      label: 'Our Process'
    },
    results: {
      color: 'green',
      label: 'Results & Outcomes'
    }
  };

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 relative overflow-hidden" id={id}>
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-amber-400/10 blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-amber-300/10 blur-3xl animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-amber-500 dark:from-amber-500 dark:to-amber-300"
            data-aos="fade-up">
          Frequently Asked Questions
        </h2>
        
        <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
           data-aos="fade-up" data-aos-delay="100">
          Essential information about our unique methodology
        </p>
        
        {/* Category legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {Object.entries(categoryInfo).map(([key, info]) => (
            <div key={key} className="flex items-center">
              <div className={`w-3 h-3 rounded-full mr-2 bg-${info.color}-500`}></div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{info.label}</span>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <GlassmorphicCard 
                className={`transition-all duration-500 ${
                  activeIndex === index 
                    ? `border-${categoryInfo[item.category].color}-500/50 shadow-lg` 
                    : 'border-white/10 dark:border-gray-800/30'
                }`}
                hoverEffect={false}
              >
                {/* Category indicator */}
                <div className="absolute top-0 left-0 h-full w-1 rounded-l-lg bg-gradient-to-b from-transparent via-amber-500/50 to-transparent"></div>
                
                <button 
                  className="w-full text-left py-2 px-4 flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                >
                  <span className={`text-lg font-medium ${
                    activeIndex === index 
                      ? `text-${categoryInfo[item.category].color}-700 dark:text-${categoryInfo[item.category].color}-400` 
                      : 'text-gray-800 dark:text-gray-200'
                  }`}>
                    {item.question}
                  </span>
                  <span className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 pt-0 border-t border-gray-200 dark:border-gray-700/30 mt-2">
                        <p className="text-gray-700 dark:text-gray-300">
                          {item.answer}
                        </p>
                        
                        {/* Category badge */}
                        <div className="mt-4 inline-block">
                          <div className={`px-3 py-1 rounded-full text-xs font-medium bg-${categoryInfo[item.category].color}-100 dark:bg-${categoryInfo[item.category].color}-900/20 text-${categoryInfo[item.category].color}-800 dark:text-${categoryInfo[item.category].color}-300`}>
                            {categoryInfo[item.category].label}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassmorphicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedFAQ;
