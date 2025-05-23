import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
const TutorSourceForm = () => {
    const [formData, setFormData] = useState({
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
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubjectDropdownChange = (e) => {
        const value = e.target.value;
        setSelectedSubject(value);
        if (value && !formData.subjects.includes(value)) {
            setFormData(prev => ({
                ...prev,
                subjects: [...prev.subjects, value]
            }));
        }
    };
    const removeSubject = (subjectToRemove) => {
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
        }
        catch (error) {
            setSubmitError(error instanceof Error ? error.message : 'There was an error submitting your request. Please try again.');
        }
        finally {
            setIsSubmitting(false);
        }
    };
    return (_jsxs("div", { className: "tutor-form", children: [_jsx("h1", { children: "Get Started with Tutoring" }), _jsx("p", { style: { marginBottom: '32px', color: '#6b7280', fontSize: '16px' }, children: "Tell us a bit about yourself and what you'd like to work on. We'll match you with the perfect tutor!" }), submitSuccess ? (_jsx("div", { className: "success-message", children: _jsxs("div", { style: { display: 'flex', alignItems: 'center' }, children: [_jsx("svg", { style: { width: '20px', height: '20px', marginRight: '12px' }, viewBox: "0 0 20 20", fill: "currentColor", children: _jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }), _jsx("span", { children: "Thanks for reaching out! We've got your info and someone will be in touch within 24 hours to get you started." })] }) })) : (_jsxs(_Fragment, { children: [submitError && (_jsx("div", { className: "error-message", children: submitError })), _jsxs("div", { className: "form-grid", children: [_jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "name", children: "Your Name *" }), _jsx("input", { type: "text", id: "name", name: "name", value: formData.name, onChange: handleInputChange, placeholder: "What should we call you?" })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "email", children: "Email *" }), _jsx("input", { type: "email", id: "email", name: "email", value: formData.email, onChange: handleInputChange, placeholder: "your.email@example.com" })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "phone", children: "Phone Number (optional)" }), _jsx("input", { type: "tel", id: "phone", name: "phone", value: formData.phone, onChange: handleInputChange, placeholder: "We can text or call you here" })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "grade", children: "What grade are you in? *" }), _jsxs("select", { id: "grade", name: "grade", value: formData.grade, onChange: handleInputChange, children: [_jsx("option", { value: "", children: "Choose your grade level" }), _jsx("option", { value: "9", children: "9th Grade (Freshman)" }), _jsx("option", { value: "10", children: "10th Grade (Sophomore)" }), _jsx("option", { value: "11", children: "11th Grade (Junior)" }), _jsx("option", { value: "12", children: "12th Grade (Senior)" }), _jsx("option", { value: "college", children: "College Student" }), _jsx("option", { value: "other", children: "Other" })] })] })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { children: "What subjects do you need help with? *" }), _jsxs("select", { value: selectedSubject, onChange: handleSubjectDropdownChange, style: { marginBottom: '16px' }, children: [_jsx("option", { value: "", children: "Choose a subject to add..." }), subjectOptions.filter(subject => !formData.subjects.includes(subject)).map(subject => (_jsx("option", { value: subject, children: subject }, subject)))] }), formData.subjects.length > 0 && (_jsxs("div", { style: { marginTop: '12px' }, children: [_jsx("p", { style: { fontSize: '14px', color: '#6b7280', marginBottom: '8px' }, children: "Selected subjects:" }), _jsx("div", { style: { display: 'flex', flexWrap: 'wrap', gap: '8px' }, children: formData.subjects.map(subject => (_jsxs("div", { style: {
                                                backgroundColor: '#dbeafe',
                                                color: '#1e40af',
                                                padding: '6px 12px',
                                                borderRadius: '16px',
                                                fontSize: '14px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px'
                                            }, children: [subject, _jsx("button", { type: "button", onClick: () => removeSubject(subject), style: {
                                                        background: 'none',
                                                        border: 'none',
                                                        color: '#1e40af',
                                                        cursor: 'pointer',
                                                        padding: '0',
                                                        fontSize: '16px',
                                                        lineHeight: '1'
                                                    }, title: "Remove this subject", children: "\u00D7" })] }, subject))) })] }))] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "goals", children: "What are your goals? *" }), _jsx("textarea", { id: "goals", name: "goals", value: formData.goals, onChange: handleInputChange, rows: 4, placeholder: "Tell us what you want to achieve! For example: 'I want to improve my SAT math score from 650 to 750' or 'I need help understanding chemistry concepts for my upcoming exam'..." })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "preferredTime", children: "When's the best time to reach you?" }), _jsxs("select", { id: "preferredTime", name: "preferredTime", value: formData.preferredTime, onChange: handleInputChange, children: [_jsx("option", { value: "", children: "No preference" }), _jsx("option", { value: "morning", children: "Mornings work best (8am-12pm)" }), _jsx("option", { value: "afternoon", children: "Afternoons are good (12pm-5pm)" }), _jsx("option", { value: "evening", children: "Evenings are better (5pm-9pm)" }), _jsx("option", { value: "anytime", children: "Anytime is fine!" })] })] }), _jsx("div", { style: { textAlign: 'center', marginTop: '32px' }, children: _jsx("button", { type: "button", onClick: handleSubmit, disabled: isSubmitting, children: isSubmitting ? 'Sending your info...' : 'Let\'s Get Started!' }) })] }))] }));
};
export default TutorSourceForm;
