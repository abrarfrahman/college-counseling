import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const EliteResultsSection = ({ id }) => {
    const eliteStats = [
        {
            metric: "100-300",
            description: "Point SAT improvements are typical with focused preparation"
        },
        {
            metric: "85%",
            description: "Of students land internships when they frame projects right"
        },
        {
            metric: "Your Story",
            description: "Essays that sound like you actually wrote them, not a consultant or ChatGPT"
        }
    ];
    const eliteUniversities = [
        "UC Berkeley", "Stanford", "MIT", "Yale", "Princeton",
        "Columbia", "UPenn", "Brown", "Dartmouth", "Cornell",
        "Duke", "Caltech", "Northwestern", "Johns Hopkins"
    ];
    return (_jsxs("section", { id: id, className: "py-8 bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-950 relative overflow-hidden", children: [_jsx("div", { className: "absolute top-20 right-10 w-64 h-64 rounded-full bg-amber-100/30 dark:bg-amber-900/10 -z-10" }), _jsx("div", { className: "absolute bottom-20 left-10 w-40 h-40 rounded-full bg-amber-100/50 dark:bg-amber-900/20 -z-10" }), _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "max-w-3xl mx-auto text-center mb-12", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-serif font-bold mb-6 text-amber-800 dark:text-amber-500", children: "Unparalleled Results" }), _jsx("p", { className: "text-lg text-gray-700 dark:text-gray-300 mb-4", children: "Our selective approach and proven methodology consistently produce exceptional outcomes for our students." }), _jsx("p", { className: "text-md text-amber-700 dark:text-amber-400 font-medium italic", children: "*Results based on students who complete our comprehensive program" })] }), _jsx("div", { className: "grid md:grid-cols-3 gap-8 mb-12", children: eliteStats.map((item, index) => (_jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center transform transition-all duration-500 hover:scale-105\n                        border border-amber-200 dark:border-amber-900/30", children: [_jsx("div", { className: "text-5xl font-bold text-amber-700 dark:text-amber-500 mb-4", children: item.metric }), _jsx("p", { className: "text-gray-700 dark:text-gray-300 text-lg", children: item.description })] }, index))) }), _jsxs("div", { className: "bg-gradient-to-r from-amber-50 via-white to-amber-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 \n                      rounded-2xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto mb-12 border border-amber-100 dark:border-amber-900/20", children: [_jsx("h3", { className: "text-2xl md:text-3xl font-serif font-semibold mb-6 text-center text-amber-800 dark:text-amber-500", children: "Our Students Attend Elite Universities" }), _jsx("div", { className: "flex flex-wrap justify-center gap-3 md:gap-4", children: eliteUniversities.map((university, index) => (_jsx("span", { className: "px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-amber-700 dark:text-amber-400 \n                          shadow-sm border border-amber-100 dark:border-amber-900/30 font-medium", children: university }, index))) })] }), _jsxs("div", { className: "text-center", children: [_jsx("p", { className: "text-lg font-medium text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto", children: "Due to our selective approach and limited capacity, we only accept students who demonstrate both potential and commitment." }), _jsx("button", { onClick: () => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' }), className: "px-8 py-3 bg-amber-700 hover:bg-amber-600 text-white font-medium rounded-lg shadow-md transition-colors duration-300", children: "Apply for Consideration" })] })] })] }));
};
export default EliteResultsSection;