import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
const Hero = () => {
    const parallaxRef = useRef(null);
    const profileRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            if (parallaxRef.current) {
                parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
            }
            if (profileRef.current) {
                profileRef.current.style.transform = `translateY(${-window.scrollY * 0.2}px) rotate(${window.scrollY * 0.02}deg)`;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const scrollToContact = () => {
        const contactSection = document.getElementById('scheduling');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (_jsxs("section", { id: "hero", className: "relative min-h-screen flex items-center justify-center overflow-hidden pt-20", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx("div", { ref: parallaxRef, className: "absolute inset-0 z-0", style: {
                            backgroundImage: 'linear-gradient(to bottom right, rgba(251, 191, 36, 0.2), rgba(245, 158, 11, 0.1))',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        } }), _jsx("div", { className: "absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-amber-300/20 to-amber-500/10 blur-3xl animate-blob" }), _jsx("div", { className: "absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-gradient-to-l from-amber-400/10 to-amber-600/5 blur-3xl animate-blob animation-delay-2000" }), _jsx("div", { className: "absolute bottom-1/4 right-1/3 w-60 h-60 rounded-full bg-gradient-to-t from-amber-200/10 to-amber-400/5 blur-3xl animate-blob animation-delay-4000" })] }), _jsxs("div", { className: "container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between", children: [_jsxs("div", { className: "md:w-1/2 text-center md:text-left mb-10 md:mb-0", children: [_jsxs("h1", { className: "text-4xl md:text-6xl font-serif font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-amber-500 dark:from-amber-500 dark:to-amber-300", children: [_jsx("span", { className: "block transform transition-all duration-700 hover:scale-105", children: "Abrar \u2013" }), _jsx("span", { className: "block mt-2 transform transition-all duration-700 hover:scale-105", children: "Elite College Prep Coach" })] }), _jsx("p", { className: "text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light italic mb-8 max-w-xl", children: "Unleashing standout applications from standout students." }), _jsxs("div", { className: "flex flex-wrap justify-center md:justify-start gap-4", children: [_jsx("button", { onClick: scrollToContact, className: "px-8 py-3 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 text-white font-bold shadow-lg hover:shadow-amber-500/30 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm", children: "Book Free Consult" }), _jsx("button", { onClick: () => document.getElementById("application")?.scrollIntoView({ behavior: "smooth" }), className: "px-8 py-3 rounded-full bg-white/80 dark:bg-gray-800/80 text-amber-600 dark:text-amber-400 font-bold shadow-lg backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transform hover:scale-105 transition-all duration-300", children: "Learn More" })] })] }), _jsx("div", { className: "md:w-1/2 flex justify-center md:justify-end", children: _jsxs("div", { ref: profileRef, className: "relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-amber-500/50 shadow-2xl transform transition-all duration-700 hover:scale-105 hover:rotate-3", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-amber-300/30 to-amber-600/30 mix-blend-overlay z-10" }), _jsx("img", { src: "/images/profile.jpeg", alt: "Abrar", className: "w-full h-full object-cover" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-amber-900/50 to-transparent z-10" })] }) })] }), _jsxs("div", { className: "absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce", children: [_jsx("span", { className: "text-sm text-gray-600 dark:text-gray-400 mb-2", children: "Scroll to explore" }), _jsx("svg", { className: "w-6 h-6 text-amber-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 14l-7 7m0 0l-7-7m7 7V3" }) })] })] }));
};
export default Hero;
