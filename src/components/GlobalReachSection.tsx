import React from "react";

interface CertifiedStudent {
  name: string;
  role: string;
  location: string;
  image: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  mobileTop?: string;
  mobileLeft?: string;
  mobileRight?: string;
  mobileBottom?: string;

  width?: number;
  height?: number;
  shape?: "circle" | "ellipse";
  textScale?: number;
}

const GlobalReachSection: React.FC = () => {
  const certifiedStudents: CertifiedStudent[] = [
    {
      name: "Christian Onenkhare",
      role: "Software Developer",
      location: "USA",
      image: "/images/student1.webp",
      top: "0",
      left: "24%",
      mobileTop: "-2%",
      mobileLeft: "18%",
      width: 59,
      height: 58,
      shape: "circle",
      textScale: 0.8,
    },
    {
      name: "Grace Austin",
      role: "Data Analyst",
      location: "UK",
      image: "/images/student2.webp",
      top: "0",
      right: "18%",
      mobileTop: "-5%",
      mobileRight: "12%",
      width: 69,
      height: 64,
      shape: "ellipse",
      textScale: 0.8,
    },
    {
      name: "Sarah",
      role: "Graphic Designer",
      location: "USA",
      image: "/images/student4.webp",
      top: "30%",
      left: "5%",
      mobileTop: "15%",
      mobileLeft: "-3%",
      width: 69,
      height: 64,
      shape: "ellipse",
      textScale: 0.9,
    },
    {
      name: "James",
      role: "Software Developer",
      location: "Brazil",
      image: "/images/student5.webp",
      bottom: "28%",
      left: "35%",
      mobileBottom: "42%",
      mobileLeft: "32%",
      width: 69,
      height: 64,
      shape: "ellipse",
      textScale: 0.9,
    },
    {
      name: "Esther",
      role: "Digital Marketer",
      location: "Kenya",
      image: "/images/student6.webp",
      bottom: "30%",
      left: "54%",
      mobileBottom: "45%",
      mobileLeft: "50%",
      width: 32,
      height: 32,
      shape: "circle",
      textScale: 0.7,
    },
    {
      name: "Queen",
      role: "Product Designer",
      location: "Australia",
      image: "/images/student3.webp",
      bottom: "50%",
      right: "0",
      mobileBottom: "60%",
      mobileRight: "-1%",
      width: 69,
      height: 64,
      shape: "ellipse",
      textScale: 0.9,
    },
  ];

  const handleRegisterNow = () => {
    const contactSection = document.getElementById("courses");
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="bg-secondary-50 pt-[200px] md:pt-[450px] lg:pt-[500px] pb-16 lg:pb-24"
      style={{ fontFamily: "var(--font-ui)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full min-h-[420px] sm:min-h-[480px] lg:min-h-[500px] overflow-visible">
              <img
                src="/images/world-map.webp"
                alt="Global Reach"
                className="w-full h-auto"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(29%) sepia(62%) saturate(1234%) hue-rotate(241deg) brightness(85%) contrast(90%)",
                }}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/800x500/7e22ce/ffffff?text=World+Map";
                }}
              />

              {certifiedStudents.map((student, index) => (
                <div
                  key={index}
                  className="absolute animate-pulse scale-75 sm:scale-90 lg:scale-100"
                  style={{
                    top: student.mobileTop ?? student.top,
                    left: student.mobileLeft ?? student.left,
                    right: student.mobileRight ?? student.right,
                    bottom: student.mobileBottom ?? student.bottom,
                    animationDelay: `${index * 0.3}s`,
                    animationDuration: "3s",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div
                      className="bg-white p-1 shadow-lg mb-2"
                      style={{
                        width: student.width,
                        height: student.height,
                        borderRadius:
                          student.shape === "circle" ? "50%" : "9999px",
                      }}
                    >
                      <img
                        src={student.image}
                        alt={student.name}
                        className="w-full h-full object-cover"
                        style={{
                          borderRadius:
                            student.shape === "circle" ? "50%" : "9999px",
                        }}
                      />
                    </div>

                    <div
                      className="bg-white rounded-lg shadow-md px-2 py-1"
                      style={{
                        transform: `scale(${student.textScale ?? 0.9})`,
                        transformOrigin: "top center",
                      }}
                    >
                      <div className="flex items-center gap-1 mb-1">
                        <h4 className="text-gray-900 text-xs">
                          {student.name}
                        </h4>
                        <span className="text-[0.3rem] px-1.5 py-0.5 bg-orange-100 text-orange-600 rounded border border-orange-300">
                          {student.location}
                        </span>
                      </div>
                      <p className="text-primary-500 text-[0.5rem] font-medium">
                        {student.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h3 className="text-[20px] lg:text-[32px] font-semibold text-black mb-4 leading-5.5 lg:leading-10 max-w-xl">
              With over <span className="text-primary-500">1,000</span>{" "}
              individuals certified, join Apex Tech Academy and take your place
              as the next tech star.
            </h3>

            <button
              onClick={handleRegisterNow}
              className="bg-primary-800 hover:bg-primary-900 text-white font-normal py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg cursor-pointer text-[12px] lg:text-[16px]"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReachSection;
