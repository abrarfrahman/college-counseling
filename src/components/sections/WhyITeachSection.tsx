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
  Teaching has been a constant thread throughout my journey. It started in high school where I served as debate captain and section leader in marching band, then continued at UC Berkeley where I was course staff for CS61b and taught through Computer Science Mentors during the pandemic. What I've discovered is that I naturally gravitate toward helping others unlock their potential.
</p>

<div className="grid md:grid-cols-2 gap-8 mb-8">
  <div className="bg-amber-50 dark:bg-gray-900 p-6 rounded-lg border border-amber-100 dark:border-amber-900/30">
    <h3 className="text-xl font-serif font-semibold mb-3 text-amber-700 dark:text-amber-500">Teaching Experience</h3>
    <ul className="space-y-2">
      <li className="flex items-start">
        <svg className="w-5 h-5 text-amber-600 dark:text-amber-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>Research mentor for 7-8 students annually through Student Association for Applied Statistics</span>
      </li>
      <li className="flex items-start">
        <svg className="w-5 h-5 text-amber-600 dark:text-amber-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>Trained high school team in full-stack development for Bangladesh healthcare project</span>
      </li>
      <li className="flex items-start">
        <svg className="w-5 h-5 text-amber-600 dark:text-amber-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>UC Berkeley CS61b course staff and Computer Science Mentors instructor</span>
      </li>
    </ul>
  </div>
  
  <div className="bg-amber-50 dark:bg-gray-900 p-6 rounded-lg border border-amber-100 dark:border-amber-900/30">
    <h3 className="text-xl font-serif font-semibold mb-3 text-amber-700 dark:text-amber-500">Communication & Results</h3>
    <ul className="space-y-2">
      <li className="flex items-start">
        <svg className="w-5 h-5 text-amber-600 dark:text-amber-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>Perfect English SAT score (1590 overall, 35 ACT) - strong foundation in communication</span>
      </li>
      <li className="flex items-start">
        <svg className="w-5 h-5 text-amber-600 dark:text-amber-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>Students achieved first publications and top lab placements</span>
      </li>
      <li className="flex items-start">
        <svg className="w-5 h-5 text-amber-600 dark:text-amber-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>Cross-functional communication at Tesla, Amazon, and Epic Systems</span>
      </li>
    </ul>
  </div>
</div>

<p className="text-lg leading-relaxed">
  What I've learned across these experiences—from coaching debate teams to mentoring research projects to communicating across stakeholder groups in corporate settings—is that effective education happens when you meet people where they are and help them see what they're capable of achieving. My approach combines strategic thinking with genuine care for individual growth.
</p>

<div className="mt-8 p-4 bg-amber-100/50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500">
  <p className="italic text-gray-700 dark:text-gray-300">
    "I believe the best teaching happens when you help students discover their own voice and learn to communicate their unique value to the world."
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
