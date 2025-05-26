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
      "question": "What makes your coaching approach different from others?",
      "answer": "I focus on helping students tell their authentic stories rather than trying to fit them into a mold. Having gone through the process myself and helped friends navigate it, I've learned that the best applications showcase who you genuinely are. I combine my test-taking strategies with personalized essay guidance to help students present their strongest, most authentic selves.",
      "category": "process"
    },
    {
      "question": "Do you work with students outside the Bay Area?",
      "answer": "Absolutely! While I'm based in the San Francisco Bay Area and offer in-person sessions locally, I work with students across the US and internationally. My remote students get the same personalized attention and comprehensive support. For test prep and essay coaching, location doesn't matter - we can accomplish everything online.",
      "category": "process"
    },
    {
      "question": "What kind of results do your students see?",
      "answer": "I'm just starting my coaching practice, but I've helped several peers significantly improve their SAT scores and craft compelling essays. My own experience achieving a 1590 SAT and getting into Berkeley, plus my background in research and debate, gives me practical insights I can share. I'm committed to being transparent about outcomes as I build my track record.",
      "category": "results"
    },
    {
      "question": "Do you only work with high-achieving students?",
      "answer": "I work with motivated students at various levels. Whether you're aiming for your dream school or trying to maximize your options, I tailor my approach to your specific goals and starting point. What matters most is that you're committed to putting in the work.",
      "category": "process"
    },
    {
      "question": "How do you structure your coaching sessions?",
      "answer": "It depends on what you need most. Some students want intensive SAT prep, others need help brainstorming and drafting essays, and many want overall application strategy. We'll start with a free consultation to figure out where you are and create a plan that makes sense for your timeline and goals.",
      "category": "process"
    },
    {
      "question": "When should students start working with you?",
      "answer": "The earlier the better for comprehensive planning, but I can help at any stage. Ideally, we'd start freshman or sophomore year to build a strong foundation, but I've seen great results working with juniors and seniors too. Even a few months can make a significant difference in application quality.",
      "category": "admissions"
    },
    {
      "question": "What's the difference between in-person and remote coaching?",
      "answer": "The core coaching is identical whether we meet in person or online. Bay Area students have the option of meeting face-to-face, which some prefer for intensive essay sessions or test prep. Remote students often appreciate the flexibility of scheduling across time zones. Both formats include the same level of personalized attention and comprehensive support.",
      "category": "process"
    },
    {
      "question": "What are your rates and how do you charge?",
      "answer": "I offer flexible pricing based on what services you need. I have hourly rates for targeted help and package deals for comprehensive support. I always start with a free 30-minute consultation to understand your needs and explain how I can help before any commitment.",
      "category": "process"
    },
    {
      "question": "Can you guarantee admission to specific schools?",
      "answer": "No one can guarantee college admissions - the process is too competitive and unpredictable. What I can promise is that I'll help you put together the strongest possible application that authentically represents who you are. My goal is to maximize your chances while keeping expectations realistic.",
      "category": "results"
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
