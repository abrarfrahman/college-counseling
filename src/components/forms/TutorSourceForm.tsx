import React, { useState } from 'react';

interface TutorSourceFormData {
  name: string;
  email: string;
  phone: string;
  grade: string;
  subjects: string[];
  goals: string;
  preferredTime: string;
}

const TutorSourceForm = () => {
  const [formData, setFormData] = useState<TutorSourceFormData>({
    name: '',
    email: '',
    phone: '',
    grade: '',
    subjects: [],
    goals: '',
    preferredTime: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [submitError, setSubmitError] = useState('');
  
  const subjectOptions = [
    'SAT Test Prep', 
    'ACT Test Prep', 
    'College Application Essays', 
    'College Interview Practice',
    'Math (Algebra, Geometry, Calculus, etc.)', 
    'Science (Biology, Chemistry, Physics, etc.)', 
    'English & Writing Skills', 
    'History & Social Studies',
    'Public Speaking & Communication',
    'Study Skills & Organization',
    'Other (please specify in goals section)'
  ];
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubjectDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedSubject(value);
    if (value && !formData.subjects.includes(value)) {
      setFormData(prev => ({
        ...prev,
        subjects: [...prev.subjects, value]
      }));
    }
  };

  const removeSubject = (subjectToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.filter(subject => subject !== subjectToRemove)
    }));
  };
  
  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.grade || !formData.goals) {
        throw new Error('Please fill in all required fields');
      }
      
      if (formData.subjects.length === 0) {
        throw new Error('Please select at least one subject you need help with');
      }
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would normally send to your API
      // await fetch('https://api.abrarrahman.com/tutoring-leads', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        grade: '',
        subjects: [],
        goals: '',
        preferredTime: ''
      });
      setSelectedSubject('');
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="tutor-form">
      <h1>Get Started with Tutoring</h1>
      <p style={{ marginBottom: '32px', color: '#6b7280', fontSize: '16px' }}>
        Tell us a bit about yourself and what you'd like to work on. We'll match you with the perfect tutor!
      </p>
      
      {submitSuccess ? (
        <div className="success-message">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <svg style={{ width: '20px', height: '20px', marginRight: '12px' }} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Thanks for reaching out! We've got your info and someone will be in touch within 24 hours to get you started.</span>
          </div>
        </div>
      ) : (
        <>
          {submitError && (
            <div className="error-message">
              {submitError}
            </div>
          )}
          
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Your Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="What should we call you?"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number (optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="We can text or call you here"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="grade">What grade are you in? *</label>
              <select
                id="grade"
                name="grade"
                value={formData.grade}
                onChange={handleInputChange}
              >
                <option value="">Choose your grade level</option>
                <option value="9">9th Grade (Freshman)</option>
                <option value="10">10th Grade (Sophomore)</option>
                <option value="11">11th Grade (Junior)</option>
                <option value="12">12th Grade (Senior)</option>
                <option value="college">College Student</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label>What subjects do you need help with? *</label>
            <select
              value={selectedSubject}
              onChange={handleSubjectDropdownChange}
              style={{ marginBottom: '16px' }}
            >
              <option value="">Choose a subject to add...</option>
              {subjectOptions.filter(subject => !formData.subjects.includes(subject)).map(subject => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
            
            {formData.subjects.length > 0 && (
              <div style={{ marginTop: '12px' }}>
                <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '8px' }}>
                  Selected subjects:
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {formData.subjects.map(subject => (
                    <div
                      key={subject}
                      style={{
                        backgroundColor: '#dbeafe',
                        color: '#1e40af',
                        padding: '6px 12px',
                        borderRadius: '16px',
                        fontSize: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      {subject}
                      <button
                        type="button"
                        onClick={() => removeSubject(subject)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#1e40af',
                          cursor: 'pointer',
                          padding: '0',
                          fontSize: '16px',
                          lineHeight: '1'
                        }}
                        title="Remove this subject"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="goals">What are your goals? *</label>
            <textarea
              id="goals"
              name="goals"
              value={formData.goals}
              onChange={handleInputChange}
              rows={4}
              placeholder="Tell us what you want to achieve! For example: 'I want to improve my SAT math score from 650 to 750' or 'I need help understanding chemistry concepts for my upcoming exam'..."
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="preferredTime">When's the best time to reach you?</label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleInputChange}
            >
              <option value="">No preference</option>
              <option value="morning">Mornings work best (8am-12pm)</option>
              <option value="afternoon">Afternoons are good (12pm-5pm)</option>
              <option value="evening">Evenings are better (5pm-9pm)</option>
              <option value="anytime">Anytime is fine!</option>
            </select>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending your info...' : 'Let\'s Get Started!'}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TutorSourceForm;