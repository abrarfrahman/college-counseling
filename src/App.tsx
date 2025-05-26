import { useState, useEffect } from 'react';
import SimpleNavbar from './components/simplified/SimpleNavbar';
import HumbleHero from './components/sections/HumbleHero';
import EliteResultsSection from './components/sections/EliteResultsSection';
import SimpleTestimonials from './components/simplified/SimpleTestimonials';
import SelectiveApplicationProcess from './components/sections/SelectiveApplicationProcess';
import TutorSourceForm from './components/forms/TutorSourceForm';
import ExclusivityBanner from './components/ui/ExclusivityBanner';
import EnhancedFAQ from './components/sections/EnhancedFAQ';
import StaticBackground from './components/animations/StaticBackground';
import WhyITeachSection from './components/sections/WhyITeachSection';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedMode = localStorage.getItem('darkMode');
    
    if (savedMode !== null) {
      setIsDarkMode(savedMode === 'true');
    } else {
      setIsDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    // Apply dark mode to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save preference
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative">
      {/* Background */}
      <StaticBackground />
      
      {/* Navbar first */}
      <SimpleNavbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Empty div to create space for fixed navbar */}
      <div className="h-16 md:h-20"></div>
      
      {/* Exclusivity banner moved below navbar */}
      <ExclusivityBanner />
      
      <main className="space-y-0">
        <section className="relative" id="home">
          <HumbleHero />
        </section>
        
        <WhyITeachSection id="why-i-teach" />
        
        <EliteResultsSection id="results" />
                
        <SimpleTestimonials />
        
        <SelectiveApplicationProcess id="application" />
        
        <TutorSourceForm></TutorSourceForm>
        
        <EnhancedFAQ id="faq" />
      </main>
      
      <footer className="py-8 bg-amber-50 dark:bg-gray-950 border-t border-amber-100 dark:border-gray-800 relative">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-4">
            <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-amber-500 mr-2">
              <img 
                src="/images/profile-irl.jpeg" 
                alt="Abrar" 
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-xl font-serif font-bold text-amber-700 dark:text-amber-500">
              Abrar
            </span>
          </div>
          
          {/* Social links */}
          <div className="flex justify-center space-x-4 mb-4">
            <a 
              href="https://www.linkedin.com/in/abrarfrahman/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-600 hover:text-amber-500 transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="https://abrarrahman.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-600 hover:text-amber-500 transition-colors duration-300"
              aria-label="Portfolio Website"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z"/>
              </svg>
            </a>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Abrar's Tutoring. All rights reserved.
          </p>
          <p className="text-sm text-amber-700 dark:text-amber-500 mt-2 font-medium">
            Helping students reach their potential
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
