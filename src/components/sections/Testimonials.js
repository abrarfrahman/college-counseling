import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassmorphicCard from '../ui/GlassmorphicCard';
const Testimonials = () => {
    const testimonials = [
        {
            text: "Abrar's guidance transformed my college essays. I felt confident telling my story and got into my top choice!",
            name: "Jenna W.",
            role: "Student",
            initial: "J"
        },
        {
            text: "I was amazed by Abrar's professionalism and personalized approach. My son's applications stood out.",
            name: "R. Smith",
            role: "Parent",
            initial: "R"
        },
        {
            text: "My SAT score improved by 200 points after working with Abrar. His strategies were game-changing!",
            name: "Michael T.",
            role: "Student",
            initial: "M"
        },
        {
            text: "The personalized attention and strategic guidance helped me secure admission to three Ivy League schools.",
            name: "Sophia L.",
            role: "Student",
            initial: "S"
        },
        {
            text: "Abrar has a unique ability to bring out the best in students. The confidence my daughter gained was priceless.",
            name: "David K.",
            role: "Parent",
            initial: "D"
        }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const timeoutRef = useRef(null);
    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.5,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
            },
        },
        exit: (direction) => ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.5,
            transition: {
                duration: 0.5,
            },
        }),
    };
    const startAutoplay = () => {
        if (timeoutRef.current)
            clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setDirection(1);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);
    };
    useEffect(() => {
        startAutoplay();
        return () => {
            if (timeoutRef.current)
                clearTimeout(timeoutRef.current);
        };
    }, [currentIndex]);
    const handlePrev = () => {
        if (timeoutRef.current)
            clearTimeout(timeoutRef.current);
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };
    const handleNext = () => {
        if (timeoutRef.current)
            clearTimeout(timeoutRef.current);
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };
    return (_jsxs("section", { id: "testimonials", className: "py-20 relative overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 -z-10", children: [_jsx("div", { className: "absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-amber-400/10 blur-3xl animate-blob animation-delay-2000" }), _jsx("div", { className: "absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-amber-300/10 blur-3xl animate-blob" })] }), _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-serif font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-amber-500 dark:from-amber-500 dark:to-amber-300", "data-aos": "fade-up", children: "Testimonials" }), _jsxs("div", { className: "max-w-5xl mx-auto relative", children: [_jsx("div", { className: "relative h-80 md:h-64 overflow-hidden", children: _jsx(AnimatePresence, { initial: false, custom: direction, mode: "wait", children: _jsx(motion.div, { custom: direction, variants: variants, initial: "enter", animate: "center", exit: "exit", className: "absolute w-full", children: _jsxs(GlassmorphicCard, { className: "text-center mx-auto max-w-3xl", children: [_jsx("div", { className: "flex justify-center mb-6", children: _jsx("div", { className: "h-16 w-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg", children: _jsx("span", { className: "text-white text-2xl font-bold", children: testimonials[currentIndex].initial }) }) }), _jsxs("p", { className: "text-xl text-gray-700 dark:text-gray-300 mb-6 italic", children: ["\"", testimonials[currentIndex].text, "\""] }), _jsx("p", { className: "text-lg font-medium text-gray-900 dark:text-white", children: testimonials[currentIndex].name }), _jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: testimonials[currentIndex].role })] }) }, currentIndex) }) }), _jsxs("div", { className: "flex justify-center mt-8 space-x-4", children: [_jsx("button", { onClick: handlePrev, className: "p-2 rounded-full glass-button text-amber-600 dark:text-amber-400", "aria-label": "Previous testimonial", children: _jsx("svg", { className: "h-6 w-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15 19l-7-7 7-7" }) }) }), _jsx("div", { className: "flex space-x-2 items-center", children: testimonials.map((_, index) => (_jsx("button", { onClick: () => {
                                                setDirection(index > currentIndex ? 1 : -1);
                                                setCurrentIndex(index);
                                            }, className: `h-3 w-3 rounded-full transition-all duration-300 ${index === currentIndex
                                                ? 'bg-amber-500 scale-125'
                                                : 'bg-amber-300/50 dark:bg-amber-700/50 hover:bg-amber-400 dark:hover:bg-amber-600'}`, "aria-label": `Go to testimonial ${index + 1}` }, index))) }), _jsx("button", { onClick: handleNext, className: "p-2 rounded-full glass-button text-amber-600 dark:text-amber-400", "aria-label": "Next testimonial", children: _jsx("svg", { className: "h-6 w-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 5l7 7-7 7" }) }) })] })] })] })] }));
};
export default Testimonials;
