import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const SimpleScheduling = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        topic: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real implementation, this would send the data to a scheduling service
        console.log('Scheduling form submitted:', formData);
        setIsSubmitted(true);
        // Reset form after submission
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                date: '',
                time: '',
                topic: ''
            });
            setIsSubmitted(false);
        }, 3000);
    };
    // Generate available dates (next 14 days)
    const generateDates = () => {
        const dates = [];
        const today = new Date();
        for (let i = 1; i <= 14; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            // Skip weekends
            if (date.getDay() !== 0 && date.getDay() !== 6) {
                const formattedDate = date.toISOString().split('T')[0];
                dates.push(formattedDate);
            }
        }
        return dates;
    };
    // Available time slots
    const timeSlots = [
        '09:00 AM', '10:00 AM', '11:00 AM',
        '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
    ];
    return (_jsx("section", { id: "scheduling", className: "py-20 bg-white dark:bg-gray-900", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-serif font-bold text-center mb-6 text-amber-700 dark:text-amber-500", children: "Book a Free Consultation" }), _jsx("p", { className: "text-lg text-center text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto", children: "Schedule a 30-minute introductory call to discuss your goals and how I can help." }), _jsx("div", { className: "max-w-4xl mx-auto", children: _jsx("div", { className: "bg-amber-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg", children: isSubmitted ? (_jsxs("div", { className: "text-center py-8", children: [_jsx("svg", { className: "w-16 h-16 text-green-500 mx-auto mb-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5 13l4 4L19 7" }) }), _jsx("h3", { className: "text-2xl font-medium text-gray-900 dark:text-white mb-2", children: "Consultation Scheduled!" }), _jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "I'll send a confirmation email with meeting details shortly." })] })) : (_jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Your Name" }), _jsx("input", { type: "text", id: "name", name: "name", value: formData.name, onChange: handleChange, required: true, className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Email Address" }), _jsx("input", { type: "email", id: "email", name: "email", value: formData.email, onChange: handleChange, required: true, className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" })] })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "date", className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Preferred Date" }), _jsxs("select", { id: "date", name: "date", value: formData.date, onChange: handleChange, required: true, className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white", children: [_jsx("option", { value: "", children: "Select a date" }), generateDates().map((date) => (_jsx("option", { value: date, children: new Date(date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) }, date)))] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "time", className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Preferred Time" }), _jsxs("select", { id: "time", name: "time", value: formData.time, onChange: handleChange, required: true, className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white", children: [_jsx("option", { value: "", children: "Select a time" }), timeSlots.map((time) => (_jsx("option", { value: time, children: time }, time)))] })] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "topic", className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "What would you like to discuss?" }), _jsxs("select", { id: "topic", name: "topic", value: formData.topic, onChange: handleChange, required: true, className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white", children: [_jsx("option", { value: "", children: "Select a topic" }), _jsx("option", { value: "College Applications", children: "College Applications" }), _jsx("option", { value: "Test Preparation", children: "Test Preparation" }), _jsx("option", { value: "Essay Review", children: "Essay Review" }), _jsx("option", { value: "Interview Preparation", children: "Interview Preparation" }), _jsx("option", { value: "General Inquiry", children: "General Inquiry" })] })] }), _jsx("div", { className: "text-center", children: _jsx("button", { type: "submit", className: "px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-lg shadow-md transition-colors duration-300", children: "Schedule Consultation" }) })] })) }) })] }) }));
};
export default SimpleScheduling;
