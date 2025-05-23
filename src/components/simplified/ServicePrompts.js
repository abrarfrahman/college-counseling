import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ServicePrompts = () => {
    const serviceCategories = [
        {
            title: "College Application Strategy",
            description: "Personalized guidance for standout applications that showcase your unique strengths.",
            prompts: [
                {
                    title: "Ivy League Positioning",
                    description: "Strategic narrative development and application positioning for elite institutions."
                },
                {
                    title: "Essay Transformation",
                    description: "Turn ordinary experiences into compelling narratives that captivate admissions committees."
                },
                {
                    title: "Application Portfolio Optimization",
                    description: "Balanced school selection and strategic application planning for maximum acceptance potential."
                }
            ]
        },
        {
            title: "Academic Excellence Coaching",
            description: "Targeted preparation for standardized tests and academic performance improvement.",
            prompts: [
                {
                    title: "SAT/ACT Mastery",
                    description: "Strategic preparation focused on high-yield content and proven test-taking techniques."
                },
                {
                    title: "AP/IB Course Excellence",
                    description: "Subject-specific coaching to secure top scores in advanced coursework."
                },
                {
                    title: "Academic Performance Transformation",
                    description: "Personalized study strategies and content mastery for significant GPA improvement."
                }
            ]
        },
        {
            title: "Communication & Leadership Development",
            description: "Cultivate the presentation and leadership skills that distinguish top candidates.",
            prompts: [
                {
                    title: "Interview Command",
                    description: "Develop poised, articulate responses that showcase your unique value proposition."
                },
                {
                    title: "Leadership Portfolio Building",
                    description: "Strategic extracurricular planning and positioning for maximum impact."
                },
                {
                    title: "Research & Academic Writing",
                    description: "Develop sophisticated research skills and compelling academic writing capabilities."
                }
            ]
        }
    ];
    return (_jsx("section", { id: "guidance-areas", className: "py-20 bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-950", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-serif font-bold text-center mb-6 text-amber-700 dark:text-amber-500", children: "Service Offerings" }), _jsx("p", { className: "text-lg text-center text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto", children: "Select a starting point below or schedule a consultation for a completely personalized approach." }), _jsx("div", { className: "space-y-16", children: serviceCategories.map((category, categoryIndex) => (_jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute -left-4 top-0 w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 -z-10 \n                            animate-pulse opacity-70" }), _jsx("h3", { className: "text-2xl md:text-3xl font-serif font-semibold mb-4 text-amber-700 dark:text-amber-500", children: category.title }), _jsx("p", { className: "text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-4xl", children: category.description }), _jsx("div", { className: "grid md:grid-cols-3 gap-6", children: category.prompts.map((prompt, promptIndex) => (_jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300\n                              hover:-translate-y-1 border border-amber-100 dark:border-amber-900/30", children: [_jsx("h4", { className: "text-xl font-semibold mb-3 text-amber-700 dark:text-amber-500", children: prompt.title }), _jsx("p", { className: "text-gray-700 dark:text-gray-300", children: prompt.description }), _jsx("div", { className: "mt-4 pt-4 border-t border-amber-100 dark:border-gray-700", children: _jsxs("button", { className: "text-amber-600 dark:text-amber-400 font-medium flex items-center hover:text-amber-500", onClick: () => document.getElementById('scheduling')?.scrollIntoView({ behavior: 'smooth' }), children: ["Discuss this approach", _jsx("svg", { className: "w-4 h-4 ml-1", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 5l7 7-7 7" }) })] }) })] }, promptIndex))) })] }, categoryIndex))) }), _jsxs("div", { className: "mt-16 text-center", children: [_jsx("p", { className: "text-lg font-medium text-gray-700 dark:text-gray-300 mb-6", children: "Need a completely customized approach?" }), _jsx("button", { onClick: () => document.getElementById('scheduling')?.scrollIntoView({ behavior: 'smooth' }), className: "px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-lg shadow-md transition-colors duration-300", children: "Schedule a Consultation" })] })] }) }));
};
export default ServicePrompts;
