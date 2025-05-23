

const ServicePrompts = () => {
  const serviceCategories = [
    {
      title: "College Application Strategy",
      description: "Personalized guidance for standout applications that showcase your unique strengths.",
      prompts: [
        {
          title: "Ivy League Positioning",
          description: "Strategic narrative development and application positioning for elite institutions."
        },
        {
          title: "Essay Transformation",
          description: "Turn ordinary experiences into compelling narratives that captivate admissions committees."
        },
        {
          title: "Application Portfolio Optimization",
          description: "Balanced school selection and strategic application planning for maximum acceptance potential."
        }
      ]
    },
    {
      title: "Academic Excellence Coaching",
      description: "Targeted preparation for standardized tests and academic performance improvement.",
      prompts: [
        {
          title: "SAT/ACT Mastery",
          description: "Strategic preparation focused on high-yield content and proven test-taking techniques."
        },
        {
          title: "AP/IB Course Excellence",
          description: "Subject-specific coaching to secure top scores in advanced coursework."
        },
        {
          title: "Academic Performance Transformation",
          description: "Personalized study strategies and content mastery for significant GPA improvement."
        }
      ]
    },
    {
      title: "Communication & Leadership Development",
      description: "Cultivate the presentation and leadership skills that distinguish top candidates.",
      prompts: [
        {
          title: "Interview Command",
          description: "Develop poised, articulate responses that showcase your unique value proposition."
        },
        {
          title: "Leadership Portfolio Building",
          description: "Strategic extracurricular planning and positioning for maximum impact."
        },
        {
          title: "Research & Academic Writing",
          description: "Develop sophisticated research skills and compelling academic writing capabilities."
        }
      ]
    }
  ];

  return (
    <section id="guidance-areas" className="py-20 bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6 text-amber-700 dark:text-amber-500">
          Service Offerings
        </h2>
        
        <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Select a starting point below or schedule a consultation for a completely personalized approach.
        </p>
        
        <div className="space-y-16">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="relative">
              {/* Decorative circle element */}
              <div className="absolute -left-4 top-0 w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 -z-10 
                            animate-pulse opacity-70"></div>
              
              <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4 text-amber-700 dark:text-amber-500">
                {category.title}
              </h3>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-4xl">
                {category.description}
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {category.prompts.map((prompt, promptIndex) => (
                  <div 
                    key={promptIndex} 
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300
                              hover:-translate-y-1 border border-amber-100 dark:border-amber-900/30"
                  >
                    <h4 className="text-xl font-semibold mb-3 text-amber-700 dark:text-amber-500">
                      {prompt.title}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {prompt.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-amber-100 dark:border-gray-700">
                      <button 
                        className="text-amber-600 dark:text-amber-400 font-medium flex items-center hover:text-amber-500"
                        onClick={() => document.getElementById('scheduling')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        Discuss this approach
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-6">
            Need a completely customized approach?
          </p>
          <button
            onClick={() => document.getElementById('scheduling')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-lg shadow-md transition-colors duration-300"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicePrompts;
