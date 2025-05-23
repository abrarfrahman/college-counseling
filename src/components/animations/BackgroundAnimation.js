import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
const BackgroundAnimation = () => {
    const svgRef = useRef(null);
    useEffect(() => {
        if (!svgRef.current)
            return;
        // Animation timing
        const duration = 20000; // 20 seconds for a full cycle
        const now = Date.now();
        // Get all circle elements
        const circles = svgRef.current.querySelectorAll('circle');
        // Animate circles
        const animateCircles = () => {
            circles.forEach((circle, index) => {
                // Create different animation patterns for each circle
                const offset = index * (duration / circles.length);
                const cyclePosition = ((Date.now() - now + offset) % duration) / duration;
                // Subtle movement
                const xMovement = Math.sin(cyclePosition * Math.PI * 2) * 10;
                const yMovement = Math.cos(cyclePosition * Math.PI * 2) * 10;
                // Apply transformation
                circle.setAttribute('transform', `translate(${xMovement}, ${yMovement})`);
                // Subtle opacity change
                const opacityChange = 0.1 + (Math.sin(cyclePosition * Math.PI * 2) * 0.05);
                circle.setAttribute('opacity', opacityChange.toString());
            });
            requestAnimationFrame(animateCircles);
        };
        const animationFrame = requestAnimationFrame(animateCircles);
        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, []);
    return (_jsx("div", { className: "fixed inset-0 -z-10 overflow-hidden pointer-events-none", children: _jsxs("svg", { ref: svgRef, className: "w-full h-full opacity-30 dark:opacity-20", viewBox: "0 0 1000 1000", preserveAspectRatio: "xMidYMid slice", children: [_jsxs("defs", { children: [_jsxs("radialGradient", { id: "circleGradient1", cx: "50%", cy: "50%", r: "50%", fx: "50%", fy: "50%", children: [_jsx("stop", { offset: "0%", stopColor: "rgb(251, 191, 36)", stopOpacity: "0.6" }), _jsx("stop", { offset: "100%", stopColor: "rgb(251, 191, 36)", stopOpacity: "0" })] }), _jsxs("radialGradient", { id: "circleGradient2", cx: "50%", cy: "50%", r: "50%", fx: "50%", fy: "50%", children: [_jsx("stop", { offset: "0%", stopColor: "rgb(245, 158, 11)", stopOpacity: "0.5" }), _jsx("stop", { offset: "100%", stopColor: "rgb(245, 158, 11)", stopOpacity: "0" })] }), _jsxs("radialGradient", { id: "circleGradient3", cx: "50%", cy: "50%", r: "50%", fx: "50%", fy: "50%", children: [_jsx("stop", { offset: "0%", stopColor: "rgb(217, 119, 6)", stopOpacity: "0.4" }), _jsx("stop", { offset: "100%", stopColor: "rgb(217, 119, 6)", stopOpacity: "0" })] })] }), _jsx("circle", { cx: "200", cy: "150", r: "100", fill: "url(#circleGradient1)", opacity: "0.15" }), _jsx("circle", { cx: "800", cy: "300", r: "150", fill: "url(#circleGradient2)", opacity: "0.1" }), _jsx("circle", { cx: "500", cy: "800", r: "180", fill: "url(#circleGradient3)", opacity: "0.12" }), _jsx("circle", { cx: "950", cy: "750", r: "120", fill: "url(#circleGradient1)", opacity: "0.08" }), _jsx("circle", { cx: "100", cy: "650", r: "90", fill: "url(#circleGradient2)", opacity: "0.1" }), _jsx("circle", { cx: "600", cy: "500", r: "70", fill: "url(#circleGradient3)", opacity: "0.07" })] }) }));
};
export default BackgroundAnimation;
