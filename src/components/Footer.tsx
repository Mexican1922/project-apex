import React from "react";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "Courses", id: "courses" },
    { name: "Why choose us", id: "why-us" },
    { name: "Testimonials", id: "testimonials" },
    { name: "FAQs", id: "faqs" },
    { name: "Contact us", id: "contact" },
  ];

  const socialLinks = [
    { icon: <Twitter className="w-4 h-4" />, url: "#", name: "Twitter" },
    { icon: <Linkedin className="w-4 h-4" />, url: "#", name: "LinkedIn" },
    { icon: <Instagram className="w-4 h-4" />, url: "#", name: "Instagram" },
    { icon: <Facebook className="w-4 h-4" />, url: "#", name: "Facebook" },
  ];

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const offset = 80;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#0B0012] via-[#2E083A] to-black text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-25 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hologram-bg.jpg')" }}
      />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <img
                src="/images/Footer-logo.png"
                alt="APEX Logo"
                className="h-10 sm:h-12 w-auto"
                style={{
                  filter:
                    "invert(89%) sepia(21%) saturate(529%) hue-rotate(221deg) brightness(102%) contrast(96%)",
                }}
              />

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg">
                At Apex tech hub, our mission is to raise over 1000 youths in the
                tech industry. The Academy is committed to equipping individuals
                with in-demand tech skills through practical training,
                mentorship, and career support.
              </p>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg">
                Whether you're starting out or upskilling, we help you build a
                successful career in tech.
              </p>

              <div className="hidden lg:block">
                <p className="text-gray-400 mb-3 text-sm font-medium">
                  Follow Us
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      aria-label={social.name}
                      className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center hover:bg-primary-600 transition-all"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Quicklinks</h3>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.id}>
                      <button
                        onClick={() => handleNavClick(link.id)}
                        className="text-gray-300 text-sm hover:text-primary-400 transition-colors"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:hidden">
                <p className="text-gray-400 mb-3 text-sm font-medium">
                  Follow Us
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      aria-label={social.name}
                      className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center hover:bg-primary-600 transition-all"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <p className="text-center text-gray-300 text-xs sm:text-sm">
              All rights reserved Apextech {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
