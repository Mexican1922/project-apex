import React, { useState, useRef } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
}

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sandra Onyekwelu",
      role: "UI/UX Designer",
      content:
        "I never imagined I could design apps this well. Apex Tech made learning simple and practical, and now I take on real design projects with confidence.",
    },
    {
      id: 2,
      name: "Ifeanyi Nwosu",
      role: "Web Developer",
      content:
        "I joined without knowing how to code a single line. Today, I can build full websites on my own. All thanks to the way the instructors taught us.",
    },
    {
      id: 3,
      name: "Eze Amarachi",
      role: "Data Analyst",
      content:
        "The mentorship was my best part. My mentor guided me step by step, and shortly after, I got my first internship in data analysis.",
    },
    {
      id: 4,
      name: "Adaobi Nwachukwu",
      role: "Digital Marketer",
      content:
        "I never understood how to run proper campaigns before. Apex Tech broke everything down so well, and now I manage social media ads that actually convert.",
    },
    {
      id: 5,
      name: "Ibiyeomi Wisdom",
      role: "Video Editor",
      content:
        "The practical approach helped me a lot. We worked on real projects, and now I can call myself a professional video editor.",
    },
    {
      id: 6,
      name: "Oghenetega Christian",
      role: "Digital Marketer",
      content:
        "The classes were practical, not just theory. I worked on real campaigns during training, and today I confidently handle digital marketing for small businesses.",
    },
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const containerWidth = scrollContainerRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / containerWidth);
      setCurrentIndex(newIndex);
    }
  };

  return (
    <section id="testimonials" className="relative w-full h-0">
      <div className="absolute left-0 right-0 top-0 -translate-y-1/2 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="sm:hidden bg-white rounded-3xl shadow-2xl mx-auto"
            style={{ maxWidth: "382px" }}
          >
            <div className="text-center pt-6 pb-4 px-6">
              <h2 className="text-base font-semibold text-gray-900 mb-2">
                Student's Testimonial
              </h2>
              <p className="text-gray-600 text-xs">
                Here is what our students think about us
              </p>
            </div>

            <div className="px-6 pb-6">
              <div
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto snap-x snap-mandatory gap-4 scrollbar-hide"
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="flex-shrink-0 snap-center bg-gray-50 border-[0.5px] border-gray-300 rounded-2xl"
                    style={{
                      width: "288px",
                      minHeight: "150px",
                      padding: "21px 14px",
                    }}
                  >
                    <div className="flex flex-col h-full">
                      <p className="text-gray-700 text-xs leading-relaxed mb-3 flex-grow">
                        {testimonial.content}
                      </p>
                      <div className="mt-auto">
                        <h4 className="font-medium text-gray-900 text-xs mb-0.5">
                          {testimonial.name}
                        </h4>
                        <p className="text-primary-500 text-xs">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-1.5 mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (scrollContainerRef.current) {
                        const containerWidth =
                          scrollContainerRef.current.offsetWidth;
                        scrollContainerRef.current.scrollTo({
                          left: containerWidth * index,
                          behavior: "smooth",
                        });
                      }
                    }}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      index === currentIndex ? "bg-gray-900" : "bg-gray-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="hidden sm:block lg:hidden bg-white rounded-3xl p-6 shadow-2xl h-[805px]">
            <div className="text-center mb-7">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Student's Testimonials
              </h2>
              <p className="text-gray-600 text-sm">
                Here what our students think about us
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-gray-50 rounded-2xl p-5 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-300"
                >
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {testimonial.content}
                  </p>
                  <div className="border-t border-gray-300 pt-3">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-primary-500 text-xs font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block bg-white rounded-3xl p-12 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">
                Student's Testimonials
              </h2>
              <p className="text-gray-600 text-lg">
                Here what our students think about us
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-300"
                >
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    {testimonial.content}
                  </p>
                  <div className="border-t border-gray-300 pt-4">
                    <h4 className="font-bold text-gray-900 mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-primary-500 text-sm font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
