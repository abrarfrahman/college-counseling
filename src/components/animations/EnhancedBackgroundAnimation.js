import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
const EnhancedBackgroundAnimation = () => {
    const svgRef = useRef(null);
    useEffect(() => {
        if (!svgRef.current)
            return;
        // Animation timing
        const duration = 20000; // 20 seconds for a full cycle
        const now = Date.now();
        // Get all elements
        const circles = svgRef.current.querySelectorAll('circle');
        const paths = svgRef.current.querySelectorAll('path');
        // Animate circles
        const animateElements = () => {
            // Animate circles with subtle movements
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
            // Animate paths with morphing effect
            paths.forEach((path, index) => {
                const offset = index * (duration / paths.length);
                const cyclePosition = ((Date.now() - now + offset) % duration) / duration;
                // Subtle scale and rotation
                const scale = 1 + Math.sin(cyclePosition * Math.PI * 2) * 0.05;
                const rotation = Math.sin(cyclePosition * Math.PI * 2) * 5;
                // Apply transformation
                path.setAttribute('transform', `rotate(${rotation}, 500, 500) scale(${scale})`);
                // Subtle opacity change
                const opacityChange = 0.15 + (Math.sin(cyclePosition * Math.PI * 2) * 0.05);
                path.setAttribute('opacity', opacityChange.toString());
            });
            requestAnimationFrame(animateElements);
        };
        const animationFrame = requestAnimationFrame(animateElements);
        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, []);
    return (_jsx("div", { className: "fixed inset-0 -z-10 overflow-hidden pointer-events-none", children: _jsxs("svg", { ref: svgRef, className: "w-full h-full opacity-30 dark:opacity-20", viewBox: "0 0 1000 1000", preserveAspectRatio: "xMidYMid slice", children: [_jsxs("defs", { children: [_jsxs("radialGradient", { id: "circleGradient1", cx: "50%", cy: "50%", r: "50%", fx: "50%", fy: "50%", children: [_jsx("stop", { offset: "0%", stopColor: "rgb(251, 191, 36)", stopOpacity: "0.6" }), _jsx("stop", { offset: "100%", stopColor: "rgb(251, 191, 36)", stopOpacity: "0" })] }), _jsxs("radialGradient", { id: "circleGradient2", cx: "50%", cy: "50%", r: "50%", fx: "50%", fy: "50%", children: [_jsx("stop", { offset: "0%", stopColor: "rgb(245, 158, 11)", stopOpacity: "0.5" }), _jsx("stop", { offset: "100%", stopColor: "rgb(245, 158, 11)", stopOpacity: "0" })] }), _jsxs("radialGradient", { id: "circleGradient3", cx: "50%", cy: "50%", r: "50%", fx: "50%", fy: "50%", children: [_jsx("stop", { offset: "0%", stopColor: "rgb(217, 119, 6)", stopOpacity: "0.4" }), _jsx("stop", { offset: "100%", stopColor: "rgb(217, 119, 6)", stopOpacity: "0" })] }), _jsxs("linearGradient", { id: "pathGradient1", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [_jsx("stop", { offset: "0%", stopColor: "rgb(251, 191, 36)", stopOpacity: "0.3" }), _jsx("stop", { offset: "100%", stopColor: "rgb(251, 191, 36)", stopOpacity: "0" })] }), _jsxs("linearGradient", { id: "pathGradient2", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [_jsx("stop", { offset: "0%", stopColor: "rgb(245, 158, 11)", stopOpacity: "0.2" }), _jsx("stop", { offset: "100%", stopColor: "rgb(245, 158, 11)", stopOpacity: "0" })] })] }), _jsx("circle", { cx: "200", cy: "150", r: "100", fill: "url(#circleGradient1)", opacity: "0.15" }), _jsx("circle", { cx: "800", cy: "300", r: "150", fill: "url(#circleGradient2)", opacity: "0.1" }), _jsx("circle", { cx: "500", cy: "800", r: "180", fill: "url(#circleGradient3)", opacity: "0.12" }), _jsx("circle", { cx: "950", cy: "750", r: "120", fill: "url(#circleGradient1)", opacity: "0.08" }), _jsx("circle", { cx: "100", cy: "650", r: "90", fill: "url(#circleGradient2)", opacity: "0.1" }), _jsx("circle", { cx: "600", cy: "500", r: "70", fill: "url(#circleGradient3)", opacity: "0.07" }), _jsx("path", { d: "M300,200 Q400,50 500,200 T700,300 Q800,400 700,500 T500,600 Q300,700 200,600 T100,400 Q50,300 300,200Z", fill: "none", stroke: "url(#pathGradient1)", strokeWidth: "2", opacity: "0.15" }), _jsx("path", { d: "M400,100 Q600,150 700,300 T800,600 Q750,800 600,850 T400,800 Q250,750 200,600 T250,300 Q300,150 400,100Z", fill: "none", stroke: "url(#pathGradient2)", strokeWidth: "1.5", opacity: "0.1" }), _jsx("path", { d: "M100,100 L150,150 L100,200 L150,250", fill: "none", stroke: "rgba(251, 191, 36, 0.2)", strokeWidth: "1", opacity: "0.1" }), _jsx("path", { d: "M850,100 L800,150 L850,200 L800,250", fill: "none", stroke: "rgba(251, 191, 36, 0.2)", strokeWidth: "1", opacity: "0.1" }), _jsx("path", { d: "M100,850 L150,800 L200,850 L250,800", fill: "none", stroke: "rgba(251, 191, 36, 0.2)", strokeWidth: "1", opacity: "0.1" }), _jsx("path", { d: "M850,850 L800,800 L850,750 L800,700", fill: "none", stroke: "rgba(251, 191, 36, 0.2)", strokeWidth: "1", opacity: "0.1" })] }) }));
};
export default EnhancedBackgroundAnimation;
