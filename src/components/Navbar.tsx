import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import logo from "/images/Logo.png";

interface NavItem {
  name: string;
  id: string;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems: NavItem[] = [
    { name: "Home", id: "home" },
    { name: "Courses", id: "courses" },
    { name: "Why choose us", id: "why-us" },
    { name: "Testimonials", id: "testimonials" },
    { name: "FAQs", id: "faqs" },
    { name: "Contact us", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = navItems.map((item) => item.id);
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleContactClick = () => {
    setIsMenuOpen(false);
    handleNavClick("contact");
  };

  return (
    <>
      <nav
        className={`
          sticky top-0 z-50 w-full 
          transition-all duration-300
          ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"}
          border-b border-gray-100
        `}
        style={{fontFamily: "var(--font-ui)"}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <div className="flex-shrink-0">
              <button
                onClick={() => handleNavClick("home")}
                className="flex items-center focus:outline-none transition-transform hover:scale-105"
                aria-label="Go to home"
              >
                <img
                  src={logo}
                  alt="APEX Logo"
                  className="h-20 w-auto lg:h-[73.18px]"
                />
              </button>
            </div>

            <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.id)}
                  className={`
                    font-medium transition-all duration-200 relative text-base cursor-pointer
                    
                  `}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex flex-shrink-0">
              <button
                onClick={handleContactClick}
                className="px-6 py-2 border-2 border-[#2E083A] text-black rounded-lg font-medium transition-all duration-200 cursor-pointer"
              >
                Contact Us
              </button>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-primary-500 transition-colors focus:outline-none"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span
                    className={`
                    block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out
                    ${
                      isMenuOpen
                        ? "rotate-45 translate-y-1.5"
                        : "-translate-y-1"
                    }
                  `}
                  ></span>
                  <span
                    className={`
                    block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out
                    ${isMenuOpen ? "opacity-0" : "opacity-100"}
                  `}
                  ></span>
                  <span
                    className={`
                    block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out
                    ${
                      isMenuOpen
                        ? "-rotate-45 -translate-y-1.5"
                        : "translate-y-1"
                    }
                  `}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`
          lg:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      style={{fontFamily: "var(--font-ui)"}}>
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          <div className="flex-1 px-8 py-4 space-y-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.id)}
                className={`
                  block w-full text-left text-lg font-medium cursor-pointer
                  ${
                    activeSection === item.id
                      ? "text-primary-500"
                      : "text-gray-700"
                  }
                `}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="p-8">
            <button
              onClick={handleContactClick}
              className="w-full px-6 py-3 border-2 border-[#2E083A] text-black rounded-lg font-semibold transition-all duration-200"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
