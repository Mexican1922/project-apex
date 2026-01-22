import React from "react";

const HeroSection: React.FC = () => {
  const handleBrowseCourse = () => {
    const coursesSection = document.getElementById("courses");
    if (coursesSection) {
      const offset = 80;
      const elementPosition = coursesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative w-full overflow-hidden">
      
      <div className="md:hidden relative w-full h-[315px]">
        
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero-bg-mobile.webp')",
          }}
        >
         
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold text-white leading-tight"
            style={{fontFamily: "var(--font-heading)"}}>
              Invest in Tech Skills your Future Self will be Proud of.
            </h1>

            <p className="text-sm text-white/90 font-medium leading-5"
            style={{fontFamily: "var(--font-ui)"}}>
              Gain hands-on experience and become the future of tech
            </p>

            <div className="pt-2">
              <button
                onClick={handleBrowseCourse}
                className="px-6 py-2.5 bg-primary-50 text-secondary-950 rounded-lg font-normal text-[12px] hover:bg-primary-100 transition-all duration-200 shadow-lg cursor-pointer leading-4"
              style={{fontFamily: "var(--font-ui)"}}>
                Browse Course
              </button>
            </div>
          </div>
        </div>
      </div>

      
      <div className="hidden md:flex relative w-full h-screen min-h-[600px] items-center justify-center">
       
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero-bg.webp')",
          }}
        >
      
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

       
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
            style={{fontFamily: "var(--font-heading)"}}>
              Invest in Tech Skills your Future
              <br />
              Self will be Proud of.
            </h1>

            <p className="text-2xl text-white/90 font-semibold max-w-3xl mx-auto leading-8"
            style={{fontFamily: "var(--font-ui)"}}>
              Gain hands-on experience and become the future of tech
            </p>

            <div className="pt-4">
              <button
                onClick={handleBrowseCourse}
                className="px-8 py-3 bg-primary-50 text-secondary-950 rounded-lg font-normal text-[16px] hover:bg-primary-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 leading-5 cursor-pointer"
              style={{fontFamily: "var(--font-ui)"}}>
                Browse Course
              </button>
            </div>
          </div>
        </div>

        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/70"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;