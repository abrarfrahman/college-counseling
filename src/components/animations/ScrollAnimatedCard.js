import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
const ScrollAnimatedCard = ({ children, className = '', delay = 0, threshold = 0.2, animation = 'fade', direction = 'up' }) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    // Define animation variants based on type and direction
    const getVariants = () => {
        const baseVariants = {
            hidden: {},
            visible: {
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
                rotate: 0,
                transition: {
                    duration: 0.8,
                    ease: [0.25, 0.1, 0.25, 1.0],
                    delay: delay / 1000
                }
            }
        };
        // Add specific animation properties
        if (animation === 'fade' || animation === 'slide' || animation === 'scale' || animation === 'rotate') {
            baseVariants.hidden.opacity = 0;
        }
        if (animation === 'slide') {
            if (direction === 'up')
                baseVariants.hidden.y = 50;
            if (direction === 'down')
                baseVariants.hidden.y = -50;
            if (direction === 'left')
                baseVariants.hidden.x = 50;
            if (direction === 'right')
                baseVariants.hidden.x = -50;
        }
        if (animation === 'scale') {
            baseVariants.hidden.scale = 0.8;
        }
        if (animation === 'rotate') {
            baseVariants.hidden.rotate = direction === 'left' ? -10 : 10;
        }
        if (animation === 'glow') {
            baseVariants.hidden = {
                opacity: 0.7,
                boxShadow: '0 0 0 rgba(251, 191, 36, 0)'
            };
            baseVariants.visible = {
                ...baseVariants.visible,
                opacity: 1,
                boxShadow: '0 0 20px rgba(251, 191, 36, 0.3)',
                transition: {
                    ...baseVariants.visible.transition,
                    boxShadow: {
                        duration: 1.2,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }
                }
            };
        }
        return baseVariants;
    };
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !isVisible) {
                setIsVisible(true);
                controls.start('visible');
            }
        }, { threshold });
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [controls, isVisible, threshold]);
    return (_jsx(motion.div, { ref: ref, className: className, initial: "hidden", animate: controls, variants: getVariants(), children: children }));
};
export default ScrollAnimatedCard;
