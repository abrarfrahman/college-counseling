

const PremiumHero = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-950 -z-20"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-80 h-80 rounded-full bg-amber-100/40 dark:bg-amber-900/20 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-10 w-60 h-60 rounded-full bg-amber-200/30 dark:bg-amber-800/20 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-amber-800 dark:text-amber-500 leading-tight">
              Elite College Admissions Mastery
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 font-light">
              Exclusive coaching for exceptional students seeking admission to the world's most prestigious universities.
            </p>
            
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-xl p-6 border border-amber-100 dark:border-amber-900/30 mb-8">
              <p className="text-gray-700 dark:text-gray-300 italic mb-2">
                "I don't just help students get into elite colleges; I transform potential into extraordinary achievement."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-amber-500 mr-3">
                  <img 
                    src="/images/profile.jpeg" 
                    alt="Abrar" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="text-lg font-serif font-semibold text-amber-700 dark:text-amber-500">
                  Abrar
                </span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-amber-700 hover:bg-amber-600 text-white font-medium rounded-lg shadow-md transition-colors duration-300"
              >
                Apply for Consideration
              </button>
              <button
                onClick={() => document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-white dark:bg-gray-800 text-amber-700 dark:text-amber-400 font-medium rounded-lg shadow-md border border-amber-200 dark:border-amber-900/30 transition-colors duration-300 hover:bg-amber-50 dark:hover:bg-gray-700"
              >
                View Elite Results
              </button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="absolute -top-10 -left-10 w-full h-full rounded-full bg-amber-100 dark:bg-amber-900/30 blur-3xl -z-10"></div>
            <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-amber-100 dark:border-amber-900/30 transform rotate-1">
              <img 
                src="/images/profile.jpeg" 
                alt="Abrar" 
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-amber-50 dark:bg-gray-900 px-6 py-3 rounded-lg shadow-lg border border-amber-100 dark:border-amber-900/30 transform -rotate-2">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {['Harvard', 'Stanford', 'MIT'].map((university, index) => (
                      <div 
                        key={index}
                        className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center border-2 border-white dark:border-gray-800 text-xs font-bold text-amber-800 dark:text-amber-400"
                      >
                        {university.charAt(0)}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-amber-700 dark:text-amber-500">
                    Proven Results
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-amber-700 dark:text-amber-500 animate-bounce"
        >
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
          <span className="text-sm">Discover More</span>
        </button>
      </div>
    </section>
  );
};

export default PremiumHero;
