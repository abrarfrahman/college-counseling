import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);
  
  const toggleItem = (index: number) => {
    if (openItem === index) {
      setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  };
  
  const faqItems = [
    {
      question: "Do you only work with seniors?",
      answer: "No, I work with students at all high school grade levels. In fact, starting earlier (sophomore or junior year) can be advantageous as it allows more time for test prep, extracurricular development, and strategic planning. However, I do specialize in college applications, so seniors are a significant portion of my clients."
    },
    {
      question: "What if I just need help with essays?",
      answer: "Absolutely! While I offer comprehensive guidance, many students come to me specifically for essay help. I can assist with brainstorming topics, structuring narratives, editing drafts, and polishing final submissions. Essay-only assistance is available as a standalone option."
    },
    {
      question: "Do you guarantee admission?",
      answer: "No ethical college consultant can guarantee admission to any specific school, especially highly selective institutions. What I do guarantee is that I will help you present your strongest, most authentic application that highlights your unique strengths and story. My approach has helped many students gain admission to their top-choice schools, but final decisions rest with admissions committees."
    },
    {
      question: "How do payments work?",
      answer: "Payment is processed securely through Stripe. You can choose from several guidance options, and payment is required at the time of booking. For longer-term engagements, payment plans may be available upon request."
    },
    {
      question: "Can we meet in person?",
      answer: "All consultations and coaching sessions are conducted virtually via video conferencing, which allows for flexible scheduling and the ability to work with students anywhere. This format has proven highly effective and enables screen sharing for real-time document collaboration."
    }
  ];
  
  return (
    <section id="FAQ" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12 dark:text-white">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleItem(index)}
                className="flex justify-between items-center w-full p-5 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all focus:outline-none"
              >
                <span className="text-lg font-medium text-left dark:text-white">{item.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${openItem === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {openItem === index && (
                <div className="mt-2 p-5 bg-white dark:bg-gray-900 rounded-lg shadow-md">
                  <p className="text-gray-700 dark:text-gray-300">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
