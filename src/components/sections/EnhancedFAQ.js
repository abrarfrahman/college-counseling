import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassmorphicCard from '../ui/GlassmorphicCard';
const EnhancedFAQ = ({ id }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const faqItems = [
        {
            "question": "What makes your coaching approach different from others?",
            "answer": "I focus on helping students tell their authentic stories rather than trying to fit them into a mold. Having gone through the process myself and helped friends navigate it, I've learned that the best applications showcase who you genuinely are. I combine my test-taking strategies with personalized essay guidance to help students present their strongest, most authentic selves.",
            "category": "process"
          },
          {
            "question": "What kind of results do your students see?",
            "answer": "I'm just starting my coaching practice, but I've helped several peers significantly improve their SAT scores and craft compelling essays. My own experience achieving a 1590 SAT and getting into Berkeley, plus my background in research and debate, gives me practical insights I can share. I'm committed to being transparent about outcomes as I build my track record.",
            "category": "results"
          },
          {
            "question": "Do you only work with high-achieving students?",
            "answer": "I work with motivated students at various levels. Whether you're aiming for your dream school or trying to maximize your options, I tailor my approach to your specific goals and starting point. What matters most is that you're committed to putting in the work.",
            "category": "process"
          },
          {
            "question": "How do you structure your coaching sessions?",
            "answer": "It depends on what you need most. Some students want intensive SAT prep, others need help brainstorming and drafting essays, and many want overall application strategy. We'll start with a free consultation to figure out where you are and create a plan that makes sense for your timeline and goals.",
            "category": "process"
          },
          {
            "question": "When should students start working with you?",
            "answer": "The earlier the better for comprehensive planning, but I can help at any stage. Ideally, we'd start freshman or sophomore year to build a strong foundation, but I've seen great results working with juniors and seniors too. Even a few months can make a significant difference in application quality.",
            "category": "admissions"
          },
          {
            "question": "Do you offer both test prep and application guidance?",
            "answer": "Yes, I provide both SAT/ACT preparation and comprehensive application support including essay development, activity planning, and interview prep. Many students benefit from the integrated approach, but you can also work with me on specific areas like just test prep or just essays.",
            "category": "admissions"
          },
          {
            "question": "What are your rates and how do you charge?",
            "answer": "I offer flexible pricing based on what services you need. I have hourly rates for targeted help and package deals for comprehensive support. I always start with a free 30-minute consultation to understand your needs and explain how I can help before any commitment.",
            "category": "process"
          },
          {
            "question": "Can you guarantee admission to specific schools?",
            "answer": "No one can guarantee college admissions - the process is too competitive and unpredictable. What I can promise is that I'll help you put together the strongest possible application that authentically represents who you are. My goal is to maximize your chances while keeping expectations realistic.",
            "category": "results"
          }
    ];
    // Category colors and labels
    const categoryInfo = {
        admissions: {
            color: 'amber',
            label: 'Admissions Strategy'
        },
        process: {
            color: 'blue',
            label: 'Our Process'
        },
        results: {
            color: 'green',
            label: 'Results & Outcomes'
        }
    };
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (_jsxs("section", { className: "py-16 relative overflow-hidden", id: id, children: [_jsxs("div", { className: "absolute inset-0 -z-10", children: [_jsx("div", { className: "absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-amber-400/10 blur-3xl animate-blob animation-delay-4000" }), _jsx("div", { className: "absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-amber-300/10 blur-3xl animate-blob animation-delay-2000" })] }), _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-serif font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-amber-500 dark:from-amber-500 dark:to-amber-300", "data-aos": "fade-up", children: "Frequently Asked Questions" }), _jsx("p", { className: "text-lg text-center text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto", "data-aos": "fade-up", "data-aos-delay": "100", children: "Essential information about our unique methodology" }), _jsx("div", { className: "flex flex-wrap justify-center gap-4 mb-10", children: Object.entries(categoryInfo).map(([key, info]) => (_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: `w-3 h-3 rounded-full mr-2 bg-${info.color}-500` }), _jsx("span", { className: "text-sm font-medium text-gray-700 dark:text-gray-300", children: info.label })] }, key))) }), _jsx("div", { className: "max-w-4xl mx-auto space-y-6", children: faqItems.map((item, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.1 }, className: "relative", "data-aos": "fade-up", "data-aos-delay": index * 100, children: _jsxs(GlassmorphicCard, { className: `transition-all duration-500 ${activeIndex === index
                                    ? `border-${categoryInfo[item.category].color}-500/50 shadow-lg`
                                    : 'border-white/10 dark:border-gray-800/30'}`, hoverEffect: false, children: [_jsx("div", { className: "absolute top-0 left-0 h-full w-1 rounded-l-lg bg-gradient-to-b from-transparent via-amber-500/50 to-transparent" }), _jsxs("button", { className: "w-full text-left py-2 px-4 flex justify-between items-center", onClick: () => toggleFAQ(index), "aria-expanded": activeIndex === index, children: [_jsx("span", { className: `text-lg font-medium ${activeIndex === index
                                                    ? `text-${categoryInfo[item.category].color}-700 dark:text-${categoryInfo[item.category].color}-400`
                                                    : 'text-gray-800 dark:text-gray-200'}`, children: item.question }), _jsx("span", { className: `transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`, children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: _jsx("path", { fillRule: "evenodd", d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", clipRule: "evenodd" }) }) })] }), _jsx(AnimatePresence, { children: activeIndex === index && (_jsx(motion.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: 'auto' }, exit: { opacity: 0, height: 0 }, transition: { duration: 0.3 }, className: "overflow-hidden", children: _jsxs("div", { className: "p-4 pt-0 border-t border-gray-200 dark:border-gray-700/30 mt-2", children: [_jsx("p", { className: "text-gray-700 dark:text-gray-300", children: item.answer }), _jsx("div", { className: "mt-4 inline-block", children: _jsx("div", { className: `px-3 py-1 rounded-full text-xs font-medium bg-${categoryInfo[item.category].color}-100 dark:bg-${categoryInfo[item.category].color}-900/20 text-${categoryInfo[item.category].color}-800 dark:text-${categoryInfo[item.category].color}-300`, children: categoryInfo[item.category].label }) })] }) })) })] }) }, index))) })] })] }));
};
export default EnhancedFAQ;
