import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const SimpleContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
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
        // In a real implementation, this would send the data to a server
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        // Reset form after submission
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            setIsSubmitted(false);
        }, 3000);
    };
    return (_jsx("section", { id: "contact", className: "py-16 bg-amber-50 dark:bg-gray-950", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-serif font-bold text-center mb-6 text-amber-700 dark:text-amber-500", children: "Contact Me" }), _jsx("p", { className: "text-lg text-center text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto", children: "Have questions or ready to start your journey? Reach out today." }), _jsx("div", { className: "max-w-4xl mx-auto", children: _jsx("div", { className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg", children: isSubmitted ? (_jsxs("div", { className: "text-center py-8", children: [_jsx("svg", { className: "w-16 h-16 text-green-500 mx-auto mb-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5 13l4 4L19 7" }) }), _jsx("h3", { className: "text-2xl font-medium text-gray-900 dark:text-white mb-2", children: "Message Sent!" }), _jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Thank you for reaching out. I'll get back to you soon." })] })) : (_jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Your Name" }), _jsx("input", { type: "text", id: "name", name: "name", value: formData.name, onChange: handleChange, required: true, className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Email Address" }), _jsx("input", { type: "email", id: "email", name: "email", value: formData.email, onChange: handleChange, required: true, className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" })] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "subject", className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Subject" }), _jsxs("select", { id: "subject", name: "subject", value: formData.subject, onChange: handleChange, required: true, className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white", children: [_jsx("option", { value: "", children: "Select a subject" }), _jsx("option", { value: "College Application Help", children: "College Application Help" }), _jsx("option", { value: "Test Prep Coaching", children: "Test Prep Coaching" }), _jsx("option", { value: "Communication Coaching", children: "Communication Coaching" }), _jsx("option", { value: "Other", children: "Other" })] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "Your Message" }), _jsx("textarea", { id: "message", name: "message", value: formData.message, onChange: handleChange, required: true, rows: 5, className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" })] }), _jsx("div", { className: "text-center", children: _jsx("button", { type: "submit", className: "px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-lg shadow-md transition-colors duration-300", children: "Send Message" }) })] })) }) })] }) }));
};
export default SimpleContact;
