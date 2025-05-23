

const FloatingCircles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Top-left circle */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-amber-100/30 dark:bg-amber-900/10 
                    animate-float-slow"></div>
      
      {/* Top-right circle */}
      <div className="absolute top-40 -right-10 w-40 h-40 rounded-full bg-amber-100/40 dark:bg-amber-900/20 
                    animate-float-medium"></div>
      
      {/* Bottom-left circle */}
      <div className="absolute -bottom-10 left-1/4 w-52 h-52 rounded-full bg-amber-100/20 dark:bg-amber-900/10 
                    animate-float-fast"></div>
      
      {/* Bottom-right circle */}
      <div className="absolute bottom-20 -right-20 w-72 h-72 rounded-full bg-amber-100/30 dark:bg-amber-900/15 
                    animate-float-slow"></div>
      
      {/* Center circle */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    w-32 h-32 rounded-full bg-amber-100/20 dark:bg-amber-900/10 
                    animate-pulse"></div>
    </div>
  );
};

export default FloatingCircles;
