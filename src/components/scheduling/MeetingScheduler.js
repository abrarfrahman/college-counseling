import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const MeetingScheduler = ({ onScheduled }) => {
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
    const handleInputChange = (e) => {
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
    const handleSubmit = async (e) => {
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
        }
        catch (error) {
            console.error('Error scheduling meeting:', error);
        }
        finally {
            setIsSubmitting(false);
        }
    };
    if (submitSuccess) {
        return (_jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center", children: [_jsx("div", { className: "flex justify-center mb-6", children: _jsx("div", { className: "bg-green-100 dark:bg-green-900 p-3 rounded-full", children: _jsx("svg", { className: "h-12 w-12 text-green-600 dark:text-green-300", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5 13l4 4L19 7" }) }) }) }), _jsx("h3", { className: "text-2xl font-serif font-semibold mb-4 dark:text-white", children: "Meeting Scheduled!" }), _jsxs("p", { className: "text-gray-600 dark:text-gray-300 mb-6", children: ["Your free consultation has been scheduled for ", formData.date, " at ", formData.time, ". We've sent a confirmation email to ", formData.email, " with all the details."] }), _jsxs("p", { className: "text-gray-600 dark:text-gray-300", children: ["Looking forward to discussing ", formData.topic, " with you!"] })] }));
    }
    return (_jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8", children: [_jsx("h3", { className: "text-2xl font-serif font-semibold mb-6 dark:text-white", children: "Schedule Free Consultation" }), _jsxs("div", { className: "mb-8", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: `flex items-center justify-center h-8 w-8 rounded-full ${step >= 1 ? 'bg-amber-600' : 'bg-gray-300 dark:bg-gray-600'} text-white font-bold text-sm`, children: "1" }), _jsx("div", { className: `flex-1 h-1 mx-2 ${step >= 2 ? 'bg-amber-600' : 'bg-gray-300 dark:bg-gray-600'}` }), _jsx("div", { className: `flex items-center justify-center h-8 w-8 rounded-full ${step >= 2 ? 'bg-amber-600' : 'bg-gray-300 dark:bg-gray-600'} text-white font-bold text-sm`, children: "2" }), _jsx("div", { className: `flex-1 h-1 mx-2 ${step >= 3 ? 'bg-amber-600' : 'bg-gray-300 dark:bg-gray-600'}` }), _jsx("div", { className: `flex items-center justify-center h-8 w-8 rounded-full ${step >= 3 ? 'bg-amber-600' : 'bg-gray-300 dark:bg-gray-600'} text-white font-bold text-sm`, children: "3" })] }), _jsxs("div", { className: "flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400", children: [_jsx("span", { children: "Your Info" }), _jsx("span", { children: "Select Date & Time" }), _jsx("span", { children: "Confirm" })] })] }), _jsxs("form", { onSubmit: handleSubmit, children: [step === 1 && (_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Full Name *" }), _jsx("input", { type: "text", id: "name", name: "name", value: formData.name, onChange: handleInputChange, required: true, className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-800 dark:text-white" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Email Address *" }), _jsx("input", { type: "email", id: "email", name: "email", value: formData.email, onChange: handleInputChange, required: true, className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-800 dark:text-white" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "topic", className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "What would you like to discuss? *" }), _jsxs("select", { id: "topic", name: "topic", value: formData.topic, onChange: handleInputChange, required: true, className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-800 dark:text-white", children: [_jsx("option", { value: "", children: "Select a topic" }), topics.map(topic => (_jsx("option", { value: topic, children: topic }, topic)))] })] }), _jsx("div", { className: "flex justify-end mt-6", children: _jsx("button", { type: "button", onClick: handleNextStep, disabled: !formData.name || !formData.email || !formData.topic, className: "bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300 disabled:opacity-50", children: "Next" }) })] })), step === 2 && (_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "date", className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Select Date *" }), _jsxs("select", { id: "date", name: "date", value: formData.date, onChange: handleInputChange, required: true, className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-800 dark:text-white", children: [_jsx("option", { value: "", children: "Select a date" }), availableDates.map(date => (_jsx("option", { value: date, children: new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }, date)))] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "time", className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Select Time *" }), _jsxs("select", { id: "time", name: "time", value: formData.time, onChange: handleInputChange, required: true, className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-800 dark:text-white", children: [_jsx("option", { value: "", children: "Select a time" }), availableTimes.map(time => (_jsx("option", { value: time, children: time }, time)))] })] }), _jsxs("div", { className: "flex justify-between mt-6", children: [_jsx("button", { type: "button", onClick: handlePrevStep, className: "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white font-medium", children: "Back" }), _jsx("button", { type: "button", onClick: handleNextStep, disabled: !formData.date || !formData.time, className: "bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300 disabled:opacity-50", children: "Next" })] })] })), step === 3 && (_jsxs("div", { children: [_jsxs("div", { className: "bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6", children: [_jsx("h4", { className: "text-lg font-medium mb-4 dark:text-white", children: "Confirm Your Details" }), _jsxs("div", { className: "grid grid-cols-2 gap-4 text-sm", children: [_jsx("div", { className: "text-gray-500 dark:text-gray-400", children: "Name:" }), _jsx("div", { className: "font-medium dark:text-white", children: formData.name }), _jsx("div", { className: "text-gray-500 dark:text-gray-400", children: "Email:" }), _jsx("div", { className: "font-medium dark:text-white", children: formData.email }), _jsx("div", { className: "text-gray-500 dark:text-gray-400", children: "Topic:" }), _jsx("div", { className: "font-medium dark:text-white", children: formData.topic }), _jsx("div", { className: "text-gray-500 dark:text-gray-400", children: "Date:" }), _jsx("div", { className: "font-medium dark:text-white", children: formData.date ? new Date(formData.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : '' }), _jsx("div", { className: "text-gray-500 dark:text-gray-400", children: "Time:" }), _jsx("div", { className: "font-medium dark:text-white", children: formData.time })] })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("button", { type: "button", onClick: handlePrevStep, className: "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white font-medium", children: "Back" }), _jsx("button", { type: "submit", disabled: isSubmitting, className: "bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300 disabled:opacity-50", children: isSubmitting ? 'Scheduling...' : 'Confirm Booking' })] })] }))] })] }));
};
export default MeetingScheduler;
