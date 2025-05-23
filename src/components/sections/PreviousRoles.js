import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import GlassmorphicCard from '../ui/GlassmorphicCard';
const PreviousRoles = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);
    const roles = [
        {
            title: "Research Intern",
            organization: "Tesla",
            description: "Worked on NLP models for autonomous vehicle communication systems.",
            year: "2023"
        },
        {
            title: "Data Science Intern",
            organization: "Amazon",
            description: "Developed recommendation algorithms for educational content.",
            year: "2022"
        },
        {
            title: "Research Assistant",
            organization: "Lawrence Berkeley Lab",
            description: "Contributed to NLP research projects focused on scientific literature analysis.",
            year: "2021"
        },
        {
            title: "Software Engineering Intern",
            organization: "Epic Systems",
            description: "Helped develop healthcare communication tools using machine learning.",
            year: "2020"
        },
        {
            title: "NLP Researcher",
            organization: "UC Berkeley",
            description: "Conducted research on natural language processing applications in education.",
            year: "2019"
        }
    ];
    const scrollToRole = (index) => {
        setActiveIndex(index);
        if (containerRef.current) {
            const container = containerRef.current;
            const roleElement = container.children[index];
            if (roleElement) {
                container.scrollTo({
                    left: roleElement.offsetLeft - container.offsetWidth / 2 + roleElement.offsetWidth / 2,
                    behavior: 'smooth'
                });
            }
        }
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % roles.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [roles.length]);
    useEffect(() => {
        scrollToRole(activeIndex);
    }, [activeIndex]);
    return (_jsxs("section", { className: "py-20 relative overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 -z-10", children: [_jsx("div", { className: "absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-amber-400/10 blur-3xl animate-blob animation-delay-4000" }), _jsx("div", { className: "absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-amber-300/10 blur-3xl animate-blob animation-delay-2000" })] }), _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-serif font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-amber-500 dark:from-amber-500 dark:to-amber-300", "data-aos": "fade-up", children: "Professional Experience" }), _jsx("p", { className: "text-lg text-center text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto", "data-aos": "fade-up", "data-aos-delay": "100", children: "A glimpse into my professional journey and research experience." }), _jsxs("div", { className: "relative max-w-6xl mx-auto", children: [_jsx("div", { className: "absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-amber-300/30 via-amber-500/50 to-amber-300/30 transform -translate-y-1/2 rounded-full" }), _jsxs("div", { ref: containerRef, className: "flex overflow-x-auto pb-8 pt-4 hide-scrollbar snap-x snap-mandatory", style: { scrollbarWidth: 'none', msOverflowStyle: 'none' }, children: [_jsx("div", { className: "flex-shrink-0 w-1/6 md:w-1/12" }), " ", roles.map((role, index) => (_jsx("div", { className: "flex-shrink-0 w-4/5 md:w-2/5 px-4 snap-center", onClick: () => scrollToRole(index), children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: {
                                                opacity: activeIndex === index ? 1 : 0.7,
                                                y: 0,
                                                scale: activeIndex === index ? 1 : 0.95
                                            }, transition: { duration: 0.5 }, children: _jsxs(GlassmorphicCard, { className: `relative pt-8 pb-6 h-full transition-all duration-500 ${activeIndex === index
                                                    ? 'border-amber-500/50 shadow-xl shadow-amber-500/10'
                                                    : 'border-white/10 dark:border-gray-800/30'}`, children: [_jsx("div", { className: "absolute -top-4 left-1/2 transform -translate-x-1/2", children: _jsx("div", { className: `px-4 py-1 rounded-full glass-effect text-sm font-medium ${activeIndex === index
                                                                ? 'bg-amber-500/30 text-amber-900 dark:text-amber-100'
                                                                : 'text-gray-700 dark:text-gray-300'}`, children: role.year }) }), _jsx("h3", { className: "text-xl font-serif font-semibold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-amber-500 dark:from-amber-500 dark:to-amber-300", children: role.title }), _jsx("h4", { className: "text-lg font-medium text-gray-800 dark:text-gray-200 mb-4", children: role.organization }), _jsx("p", { className: "text-gray-700 dark:text-gray-300", children: role.description })] }) }) }, index))), _jsx("div", { className: "flex-shrink-0 w-1/6 md:w-1/12" }), " "] }), _jsx("div", { className: "flex justify-center mt-8 space-x-2", children: roles.map((_, index) => (_jsx("button", { onClick: () => scrollToRole(index), className: `h-3 w-3 rounded-full transition-all duration-300 ${index === activeIndex
                                        ? 'bg-amber-500 scale-125'
                                        : 'bg-amber-300/50 dark:bg-amber-700/50 hover:bg-amber-400 dark:hover:bg-amber-600'}`, "aria-label": `Go to role ${index + 1}` }, index))) })] })] })] }));
};
export default PreviousRoles;
