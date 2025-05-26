import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
const SimpleTestimonials = () => {
    const testimonials = [
        {
            text: "Abrar's guidance transformed my grad essays. I felt confident telling my story and got into my top choice!",
            name: "Melody S.",
            role: "Student",
            initial: "M"
          },
          {
            text: "Abrar guided me through my first ML paper as a PI. He completely changed the trajectory of my career.",
            name: "Arnav G.",
            role: "Student",
            initial: "A"
          },
          {
            text: "My son's SAT score improved by 200 points after working with Abrar. His strategies were game-changing!",
            name: "Qiuming X.",
            role: "Student",
            initial: "Q"
          },
          {
            text: "With Abrar's help, my sister got into every target she dreamed of — and helped us pick the right one.",
            name: "Ranesh P.",
            role: "Brother",
            initial: "R"
          },
          {
            text: "Abrar has a unique ability to bring out the best in students. The confidence my daughter gained was priceless.",
            name: "David K.",
            role: "Parent",
            initial: "D"
          }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    // Auto-scroll testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000); // Change testimonial every 5 seconds
        return () => clearInterval(interval);
    }, [testimonials.length]);
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };
    return (_jsx("section", { id: "testimonials", className: "py-0 bg-white dark:bg-gray-900", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-serif font-bold text-center mb-6 text-amber-700 dark:text-amber-500", children: "Testimonials" }), _jsxs("div", { className: "max-w-5xl mx-auto relative", children: [_jsx("div", { className: "relative h-auto overflow-hidden", children: _jsx("div", { className: "w-full", children: _jsxs("div", { className: "bg-amber-50 dark:bg-gray-800 rounded-xl p-6 shadow-md text-center mx-auto max-w-3xl", children: [_jsx("div", { className: "flex justify-center mb-6", children: _jsx("div", { className: "h-16 w-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg", children: _jsx("span", { className: "text-white text-2xl font-bold", children: testimonials[currentIndex].initial }) }) }), _jsxs("p", { className: "text-xl text-gray-700 dark:text-gray-300 mb-6 italic", children: ["\"", testimonials[currentIndex].text, "\""] }), _jsx("p", { className: "text-lg font-medium text-gray-900 dark:text-white", children: testimonials[currentIndex].name }), _jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: testimonials[currentIndex].role })] }) }) }), _jsxs("div", { className: "flex justify-center mt-8 space-x-4", children: [_jsx("button", { onClick: handlePrev, className: "p-2 rounded-full bg-white dark:bg-gray-800 text-amber-600 dark:text-amber-400 shadow-md", "aria-label": "Previous testimonial", children: _jsx("svg", { className: "h-6 w-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15 19l-7-7 7-7" }) }) }), _jsx("div", { className: "flex space-x-2 items-center", children: testimonials.map((_, index) => (_jsx("button", { onClick: () => setCurrentIndex(index), className: `h-3 w-3 rounded-full transition-all duration-300 ${index === currentIndex
                                            ? 'bg-amber-500 scale-125'
                                            : 'bg-amber-300/50 dark:bg-amber-700/50 hover:bg-amber-400 dark:hover:bg-amber-600'}`, "aria-label": `Go to testimonial ${index + 1}` }, index))) }), _jsx("button", { onClick: handleNext, className: "p-2 rounded-full bg-white dark:bg-gray-800 text-amber-600 dark:text-amber-400 shadow-md", "aria-label": "Next testimonial", children: _jsx("svg", { className: "h-6 w-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 5l7 7-7 7" }) }) })] })] })] }) }));
};
export default SimpleTestimonials;
