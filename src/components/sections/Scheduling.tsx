import React from 'react';
import MeetingScheduler from '../scheduling/MeetingScheduler';

const Scheduling: React.FC = () => {
  return (
    <section id="scheduling" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-4 dark:text-white">Book a Free Consultation</h2>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Schedule a 30-minute free consultation to discuss your goals and how we can help you achieve them.
        </p>
        
        <div className="max-w-2xl mx-auto">
          <MeetingScheduler />
        </div>
      </div>
    </section>
  );
};

export default Scheduling;
