

const ExclusivityBanner = () => {
  return (
    <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-white py-3 px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
      <div className="container mx-auto relative z-10">
        <p className="text-sm md:text-base font-medium">
          <span className="font-serif italic mr-2">Limited Availability:</span> 
          Now accepting applications for Summer/Fall 2025 admissions cycle
          <span className="hidden md:inline"> — Only 8 positions remaining</span>
        </p>
      </div>
    </div>
  );
};

export default ExclusivityBanner;
