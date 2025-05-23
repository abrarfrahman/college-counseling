import React from 'react';

interface SelectiveApplicationProcessProps {
  id?: string;
}

const SelectiveApplicationProcess: React.FC<SelectiveApplicationProcessProps> = ({ id }) => {
  return (
    <section id={id} className="py-8 bg-white dark:bg-gray-900 relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-amber-100/30 dark:bg-amber-900/10 -z-10"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-amber-100/50 dark:bg-amber-900/20 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6 text-amber-800 dark:text-amber-500">
            Application Process
          </h2>
          
          <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            Due to high demand and our commitment to delivering exceptional results, we maintain a selective admissions process.
          </p>
          
          <div className="space-y-8 mb-12">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-16 h-16 flex-shrink-0 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <span className="text-2xl font-serif font-bold text-amber-700 dark:text-amber-500">1</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-semibold mb-2 text-amber-700 dark:text-amber-500">
                  Initial Application
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Submit your application for consideration, including your student's academic background, goals, and timeline. We carefully review each application to ensure we can deliver exceptional results.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-16 h-16 flex-shrink-0 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <span className="text-2xl font-serif font-bold text-amber-700 dark:text-amber-500">2</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-semibold mb-2 text-amber-700 dark:text-amber-500">
                  Consultation Interview
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Selected applicants are invited for an in-depth consultation to assess fit, discuss specific needs, and determine if our exclusive methodology aligns with your student's potential and goals.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-16 h-16 flex-shrink-0 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <span className="text-2xl font-serif font-bold text-amber-700 dark:text-amber-500">3</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-semibold mb-2 text-amber-700 dark:text-amber-500">
                  Customized Strategy Development
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  For accepted students, we develop a comprehensive, personalized strategy designed to maximize their unique strengths and address specific areas for growth.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-16 h-16 flex-shrink-0 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <span className="text-2xl font-serif font-bold text-amber-700 dark:text-amber-500">4</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-semibold mb-2 text-amber-700 dark:text-amber-500">
                  Exclusive Enrollment
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Upon mutual agreement, students are enrolled in our exclusive program with guaranteed access to our proven methodology and personalized guidance.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default SelectiveApplicationProcess;
