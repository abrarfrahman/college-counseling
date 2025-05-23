import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MeetingScheduler from '../scheduling/MeetingScheduler';
const Scheduling = () => {
    return (_jsx("section", { id: "scheduling", className: "py-16 bg-gray-50 dark:bg-gray-800", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h2", { className: "text-4xl font-serif font-bold text-center mb-4 dark:text-white", children: "Book a Free Consultation" }), _jsx("p", { className: "text-lg text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto", children: "Schedule a 30-minute free consultation to discuss your goals and how we can help you achieve them." }), _jsx("div", { className: "max-w-2xl mx-auto", children: _jsx(MeetingScheduler, {}) })] }) }));
};
export default Scheduling;
