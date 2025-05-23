import { jsx as _jsx } from "react/jsx-runtime";
const GlassmorphicCard = ({ children, className = '', hoverEffect = true, glowEffect = false }) => {
    return (_jsx("div", { className: `
        glass-card rounded-2xl p-6 transition-all duration-500
        ${hoverEffect ? 'hover:shadow-2xl hover:scale-[1.02]' : ''}
        ${glowEffect ? 'hover:shadow-amber-500/20' : ''}
        ${className}
      `, children: children }));
};
export default GlassmorphicCard;
