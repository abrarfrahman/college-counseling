import React from 'react';

const HumbleHero = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-950 -z-20"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-80 h-80 rounded-full bg-amber-100/40 dark:bg-amber-900/20 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-10 w-60 h-60 rounded-full bg-amber-200/30 dark:bg-amber-800/20 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-amber-800 dark:text-amber-500 leading-tight">
              Helping Students Find Their Path{" "}
              <span className="relative inline-block">
                <span className="relative z-10">to Success</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-amber-300/60 dark:text-amber-700/60 z-0" viewBox="0 0 100 15" preserveAspectRatio="none">
                  <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 font-light">
              From exceptional student to standout applicant • Bay Area & Remote
            </p>
            
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-xl p-6 border border-amber-100 dark:border-amber-900/30 mb-8 relative">
              {/* Hand-drawn highlight effect */}
              <div className="absolute -top-3 -left-3 w-16 h-16">
                <svg viewBox="0 0 100 100" className="w-full h-full text-amber-400/70 dark:text-amber-600/50">
                  <path d="M20,50 C20,20 80,20 80,50 C80,80 20,80 20,50 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="5,5" className="animate-spin-slow" />
                </svg>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 italic mb-2">
                "I believe every student has unique gifts. My joy is helping them discover these talents and build confidence in their own abilities."
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
                  Abrar R.
                </span>
              </div>
            </div>
            
            {/* Social links in hero section */}
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://www.linkedin.com/in/abrarfrahman/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 text-amber-700 dark:text-amber-400 rounded-lg shadow-md border border-amber-200 dark:border-amber-900/30 hover:bg-amber-50 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="mr-2">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
              <a 
                href="https://abrarrahman.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 text-amber-700 dark:text-amber-400 rounded-lg shadow-md border border-amber-200 dark:border-amber-900/30 hover:bg-amber-50 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="mr-2">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z"/>
                </svg>
                Portfolio
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-amber-700 hover:bg-amber-600 text-white font-medium rounded-lg shadow-md transition-colors duration-300"
              >
                Let's Chat About Your Goals
              </button>
              <button
                onClick={() => document.getElementById('why-i-teach')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-white dark:bg-gray-800 text-amber-700 dark:text-amber-400 font-medium rounded-lg shadow-md border border-amber-200 dark:border-amber-900/30 transition-colors duration-300 hover:bg-amber-50 dark:hover:bg-gray-700"
              >
                Why I Teach
              </button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="absolute -top-10 -left-10 w-full h-full rounded-full bg-amber-100 dark:bg-amber-900/30 blur-3xl -z-10"></div>
            
            {/* Hand-drawn frame effect */}
            <div className="absolute -top-6 -left-6 -bottom-6 -right-6 z-0">
              <svg viewBox="0 0 100 100" className="w-full h-full text-amber-500/30 dark:text-amber-700/30">
                <rect x="10" y="10" width="80" height="80" rx="10" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
                <circle cx="10" cy="10" r="3" fill="currentColor" />
                <circle cx="90" cy="10" r="3" fill="currentColor" />
                <circle cx="10" cy="90" r="3" fill="currentColor" />
                <circle cx="90" cy="90" r="3" fill="currentColor" />
              </svg>
            </div>
            
            <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-amber-100 dark:border-amber-900/30 transform rotate-1">
              <img 
                src="/images/profile-irl.jpeg" 
                alt="Abrar" 
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-amber-50 dark:bg-gray-900 px-6 py-3 rounded-lg shadow-lg border border-amber-100 dark:border-amber-900/30 transform -rotate-2">
                <a 
                  href="#why-i-teach"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('why-i-teach')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center gap-2 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300"
                >
                  <div className="flex -space-x-2">
                    {['Growth', 'Support', 'Care'].map((value, index) => (
                      <div 
                        key={index}
                        className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center border-2 border-white dark:border-gray-800 text-xs font-bold text-amber-800 dark:text-amber-400"
                      >
                        {value.charAt(0)}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-amber-700 dark:text-amber-500">
                    Why I Teach
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default HumbleHero;
