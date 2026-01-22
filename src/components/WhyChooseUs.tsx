import React from "react";
import { User, Briefcase, TrendingUp } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WhyChooseUs: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <User className="w-4 h-4" />,
      title: "Expert Mentorship",
      description:
        "Learn from certified tech professionals with real industry experience. They share practical strategies and insights that give you an edge.",
    },
    {
      icon: <Briefcase className="w-4 h-4" />,
      title: "Hands-On Training",
      description:
        "The best way to master tech is by doing. That's why we train you with real projects and case studies, so you graduate confident and job-ready.",
    },
    {
      icon: <TrendingUp className="w-4 h-4" />,
      title: "Career Growth Support",
      description:
        "We support your growth beyond training with mentorship, resume reviews, and internships, helping you secure the right opportunities for your career.",
    },
  ];

  return (
    <section
      id="why-us"
      className="relative bg-secondary-950 pb-[400px] md:pb-[450px] lg:pb-[500px]"
   style={{ fontFamily: "var(--font-ui)" }} >
      <div className="max-w-7xl h-[405px] md:h-[300px] lg:h-[286px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24">
        <div className="text-center mb-12">
          <h2
            className="text-[16px] lg:text-[32px] font-semibold text-white mb-3 leading-5.5 lg:leading-10"
            
          >
            Why Choose Apex Tech Academy
          </h2>
          <p
            className="text-white text-[12px] lg:text-[16px] leading-4 lg:leading-5 font-normal"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            Here is what sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-primary-300 rounded-2xl px-6 py-4 hover:bg-white/15 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="flex gap-2 items-center mb-3">
                <div className="text-white">{feature.icon}</div>
                <h3
                  className="text-[16px] md:text-[13px] lg:text-xl font-semibold md:font-bold lg:font-bold text-white leading-5.5 lg:leading-7"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  {feature.title}
                </h3>
              </div>
              <p
                className="text-white text-[12px] md:text-[11px] lg:text-[16px] leading-5 font-normal"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
