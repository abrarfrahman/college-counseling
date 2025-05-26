import React from 'react';

interface EliteResultsSectionProps {
  id?: string;
}

const EliteResultsSection: React.FC<EliteResultsSectionProps> = ({ id }) => {
  const eliteStats = [
    {
      metric: "100-300",
      description: "Point SAT improvements are typical with focused preparation"
    },
    {
      metric: "85%",
      description: "Of students land internships when they frame projects right"
    },
    {
      metric: "Your Story",
      description: "Essays that sound like you actually wrote them, not a consultant or ChatGPT"
    },
  ];

  const eliteUniversities = [
    "UC Berkeley", "Stanford", "MIT", "Yale", "Princeton", 
    "Columbia", "UPenn", "Brown", "Dartmouth", "Cornell",
    "Duke", "Caltech", "Northwestern", "Johns Hopkins"
  ];

  return (
    <section id={id} className="py-8 bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-amber-100/30 dark:bg-amber-900/10 -z-10"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-amber-100/50 dark:bg-amber-900/20 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-amber-800 dark:text-amber-500">
            Unparalleled Results
          </h2>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Our selective approach and proven methodology consistently produce exceptional outcomes for our students.
          </p>
          
          <p className="text-md text-amber-700 dark:text-amber-400 font-medium italic">
            *Results based on students who complete our comprehensive program
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {eliteStats.map((item, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center transform transition-all duration-500 hover:scale-105
                        border border-amber-200 dark:border-amber-900/30"
            >
              <div className="text-5xl font-bold text-amber-700 dark:text-amber-500 mb-4">
                {item.metric}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-amber-50 via-white to-amber-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 
                      rounded-2xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto mb-12 border border-amber-100 dark:border-amber-900/20">
          <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-6 text-center text-amber-800 dark:text-amber-500">
            Our Students Attend Elite Universities
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {eliteUniversities.map((university, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-amber-700 dark:text-amber-400 
                          shadow-sm border border-amber-100 dark:border-amber-900/30 font-medium"
              >
                {university}
              </span>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Due to our selective approach and limited capacity, we only accept students who demonstrate both potential and commitment.
          </p>
          
          <button
            onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-amber-700 hover:bg-amber-600 text-white font-medium rounded-lg shadow-md transition-colors duration-300"
          >
            Apply for Consideration
          </button>
        </div>
      </div>
    </section>
  );
};

export default EliteResultsSection;
