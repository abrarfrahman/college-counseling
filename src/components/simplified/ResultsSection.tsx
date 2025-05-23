

const ResultsSection = () => {
  const achievements = [
    {
      metric: "95%",
      description: "of students admitted to top-20 universities"
    },
    {
      metric: "200+",
      description: "average SAT point improvement"
    },
    {
      metric: "87%",
      description: "of students receive merit scholarships"
    }
  ];

  const legacyQuote = {
    text: "Teaching is how we build legacy. I don't just help students get into colleges; I help them discover their intellectual potential and set the foundation for lifelong achievement.",
    author: "Abrar"
  };

  return (
    <section id="results" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative circle elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-amber-100/30 dark:bg-amber-900/10 -z-10"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-amber-100/50 dark:bg-amber-900/20 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6 text-amber-700 dark:text-amber-500">
          Transformative Results
        </h2>
        
        <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
          Academic excellence isn't just about numbers—it's about unlocking potential and building a foundation for lifelong achievement.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {achievements.map((item, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-amber-50 to-white dark:from-gray-800 dark:to-gray-900 
                        rounded-xl p-8 shadow-lg text-center transform transition-all duration-500 hover:scale-105"
            >
              <div className="text-5xl font-bold text-amber-600 dark:text-amber-400 mb-4">
                {item.metric}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-amber-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto">
          <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic mb-6">
            "{legacyQuote.text}"
          </blockquote>
          <div className="flex items-center justify-end">
            <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-amber-500 mr-4">
              <img 
                src="/images/profile.jpeg" 
                alt="Abrar" 
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-xl font-serif font-semibold text-amber-700 dark:text-amber-500">
              {legacyQuote.author}
            </span>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-6 text-amber-700 dark:text-amber-500">
            Your Success Story Begins Here
          </h3>
          <button
            onClick={() => document.getElementById('scheduling')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-lg shadow-md transition-colors duration-300"
          >
            Schedule Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
