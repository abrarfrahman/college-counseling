import React from 'react';

interface WhyITeachSectionProps {
  id: string;
}

const WhyITeachSection: React.FC<WhyITeachSectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-8 bg-amber-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-amber-800 dark:text-amber-500 text-center">
            Why I Teach
          </h2>
          
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-8 border border-amber-100 dark:border-amber-900/30 shadow-lg">
            <div className="prose prose-amber dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                My journey as an educator began at UC Berkeley, where I served as course staff for CS61b (Data Structures) and taught through Computer Science Mentors (CSM) throughout the pandemic. This experience showed me the power of personalized guidance during challenging times.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-amber-50 dark:bg-gray-900 p-6 rounded-lg border border-amber-100 dark:border-amber-900/30">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-amber-700 dark:text-amber-500">Academic Background</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-amber-600 dark:text-amber-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>CS61b Course Staff at UC Berkeley</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-amber-600 dark:text-amber-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>Computer Science Mentors teacher during pandemic</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-amber-600 dark:text-amber-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>Speech and debate coach</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-amber-50 dark:bg-gray-900 p-6 rounded-lg border border-amber-100 dark:border-amber-900/30">
                  <h3 className="text-xl font-serif font-semibold mb-3 text-amber-700 dark:text-amber-500">My Approach</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-amber-600 dark:text-amber-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>Work across stakeholder groups for holistic support</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-amber-600 dark:text-amber-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>Produce outcomes beyond typical tutoring expectations</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-amber-600 dark:text-amber-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>Focus on genuine connection and student growth</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <p className="text-lg leading-relaxed">
                What truly drives me is helping people reach their potential. I've had an interesting journey that's given me unique insights into both academic excellence and personal development. My experience allows me to connect with students on multiple levels, understanding not just the academic challenges they face, but also the personal growth they're seeking.
              </p>
              
              <div className="mt-8 p-4 bg-amber-100/50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500">
                <p className="italic text-gray-700 dark:text-gray-300">
                  "I believe education is about more than just achieving academic goals—it's about discovering your unique strengths and learning how to apply them to create meaningful impact in the world."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyITeachSection;
