import React, { useState } from 'react';

interface SchedulingProps {
  onScheduled?: () => void;
}

const MeetingScheduler: React.FC<SchedulingProps> = ({ onScheduled }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    topic: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const availableDates = [
    '2025-05-25',
    '2025-05-26',
    '2025-05-27',
    '2025-05-28',
    '2025-05-29',
    '2025-05-30',
  ];
  
  const availableTimes = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
  ];
  
  const topics = [
    'College Application Strategy',
    'Test Prep Planning',
    'Essay Review',
    'Interview Preparation',
    'General Consultation'
  ];
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleNextStep = () => {
    setStep(step + 1);
  };
  
  const handlePrevStep = () => {
    setStep(step - 1);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real implementation, this would be an API call to your backend
      // or to a scheduling service like Calendly
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Scheduling submitted:', formData);
      setSubmitSuccess(true);
      
      if (onScheduled) {
        onScheduled();
      }
    } catch (error) {
      console.error('Error scheduling meeting:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (submitSuccess) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
            <svg className="h-12 w-12 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        </div>
        <h3 className="text-2xl font-serif font-semibold mb-4 dark:text-white">Meeting Scheduled!</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Your free consultation has been scheduled for {formData.date} at {formData.time}. 
          We've sent a confirmation email to {formData.email} with all the details.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          Looking forward to discussing {formData.topic} with you!
        </p>
      </div>
    );
  }
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-serif font-semibold mb-6 dark:text-white">Schedule Free Consultation</h3>
      
      <div className="mb-8">
        <div className="flex items-center">
          <div className={`flex items-center justify-center h-8 w-8 rounded-full ${step >= 1 ? 'bg-amber-600' : 'bg-gray-300 dark:bg-gray-600'} text-white font-bold text-sm`}>
            1
          </div>
          <div className={`flex-1 h-1 mx-2 ${step >= 2 ? 'bg-amber-600' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
          <div className={`flex items-center justify-center h-8 w-8 rounded-full ${step >= 2 ? 'bg-amber-600' : 'bg-gray-300 dark:bg-gray-600'} text-white font-bold text-sm`}>
            2
          </div>
          <div className={`flex-1 h-1 mx-2 ${step >= 3 ? 'bg-amber-600' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
          <div className={`flex items-center justify-center h-8 w-8 rounded-full ${step >= 3 ? 'bg-amber-600' : 'bg-gray-300 dark:bg-gray-600'} text-white font-bold text-sm`}>
            3
          </div>
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
          <span>Your Info</span>
          <span>Select Date & Time</span>
          <span>Confirm</span>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              />
            </div>
            
            <div>
              <label htmlFor="topic" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                What would you like to discuss? *
              </label>
              <select
                id="topic"
                name="topic"
                value={formData.topic}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              >
                <option value="">Select a topic</option>
                {topics.map(topic => (
                  <option key={topic} value={topic}>{topic}</option>
                ))}
              </select>
            </div>
            
            <div className="flex justify-end mt-6">
              <button
                type="button"
                onClick={handleNextStep}
                disabled={!formData.name || !formData.email || !formData.topic}
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
        
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Select Date *
              </label>
              <select
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              >
                <option value="">Select a date</option>
                {availableDates.map(date => (
                  <option key={date} value={date}>{new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Select Time *
              </label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              >
                <option value="">Select a time</option>
                {availableTimes.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
            
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={handlePrevStep}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white font-medium"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNextStep}
                disabled={!formData.date || !formData.time}
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
        
        {step === 3 && (
          <div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-medium mb-4 dark:text-white">Confirm Your Details</h4>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-gray-500 dark:text-gray-400">Name:</div>
                <div className="font-medium dark:text-white">{formData.name}</div>
                
                <div className="text-gray-500 dark:text-gray-400">Email:</div>
                <div className="font-medium dark:text-white">{formData.email}</div>
                
                <div className="text-gray-500 dark:text-gray-400">Topic:</div>
                <div className="font-medium dark:text-white">{formData.topic}</div>
                
                <div className="text-gray-500 dark:text-gray-400">Date:</div>
                <div className="font-medium dark:text-white">
                  {formData.date ? new Date(formData.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : ''}
                </div>
                
                <div className="text-gray-500 dark:text-gray-400">Time:</div>
                <div className="font-medium dark:text-white">{formData.time}</div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handlePrevStep}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white font-medium"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Scheduling...' : 'Confirm Booking'}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default MeetingScheduler;
