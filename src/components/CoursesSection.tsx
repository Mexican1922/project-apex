import React from "react";

interface Course {
  id: number;
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
}

const CoursesSection: React.FC = () => {
  const courses: Course[] = [
    {
      id: 1,
      title: "Digital Marketing",
      description:
        "Master the art of online influence, connect with the right audience, create content that resonates, and turn clicks into deals or gigs.",
      price: "₦60,000",
      duration: "2 Months",
      image: "/images/digital-marketing.webp",
    },
    {
      id: 2,
      title: "Cyber Security",
      description:
        "Learn Cybersecurity, an in-demand skill that protects businesses, secures data, and positions you for high-paying global opportunities.",
      price: "₦200,000",
      duration: "3 Months",
      image: "/images/cyber-security.webp",
    },
    {
      id: 3,
      title: "Graphic Designing",
      description:
        "Master Graphic Design a high-demand creative skill that lets you earn, build brands people love, and create opportunities worldwide.",
      price: "₦60,000",
      duration: "2 Months",
      image: "/images/graphic-design.webp",
    },
    {
      id: 4,
      title: "Web Development-Frontend",
      description:
        "Master Web Development, build platforms that matter, access worldwide opportunities, and turn your skills into profit.",
      price: "₦160,000",
      duration: "2 Months",
      image: "/images/frontend.webp",
    },
    {
      id: 5,
      title: "Web Development-Backend",
      description:
        "Learn Backend Web Development power websites behind the scenes, secure data, build scalable systems, and earn from high-demand skills.",
      price: "₦120,000",
      duration: "2 Months",
      image: "/images/backend.webp",
    },
    {
      id: 6,
      title: "Data Analysis",
      description:
        "Learn Data Analysis transform raw data into insights, make smarter decisions, boost business growth, and earn with in-demand skills.",
      price: "₦120,000",
      duration: "3 Months",
      image: "/images/data-analysis.webp",
    },
    {
      id: 7,
      title: "Video Editing",
      description:
        "Learn how to edit videos like a pro, craft eye-catching stories, and transform your skills into steady income.",
      price: "₦60,000",
      duration: "2 Months",
      image: "/images/video-editing.webp",
    },
    {
      id: 8,
      title: "UI/UX Design",
      description:
        "Learn the skill of designing seamless user interfaces, master the art of detailed user research, and earn in high-paying currencies.",
      price: "₦80,000",
      duration: "2 Months",
      image: "/images/uiux-design.webp",
    },
    {
      id: 9,
      title: "Wordpress Development",
      description:
        "Learn WordPress development and build responsive, professional websites. From customizing themes and plugins to real-world projects",
      price: "₦120,000",
      duration: "2 Months",
      image: "/images/wordpress.webp",
    },
  ];

  const handleEnrollNow = (courseTitle: string) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    console.log(`Enrolling in: ${courseTitle}`);
  };

  return (
    <section id="courses" className="py-12 md:py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8 md:mb-12"
        style={{fontFamily: "var(--font-ui)"}}>
          <h2 className="text-[16px] md:text-2xl lg:text-[32px] font-semibold text-gray-900 mb-2 md:mb-3">
            Explore All Courses
          </h2>
          <p className="text-black text-[12px] md:text-lg  leading-4 md:leading-5">
            Know more about courses
          </p>
        </div>

        {/* Mobile*/}
        <div className="grid grid-cols-2 md:hidden gap-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-300 hover:shadow-md transition-all duration-300"
              style={{
                width: "100%",
                maxWidth: "183px",
                height: "256px",
              }}
            >
              {/* Course Image - Compact */}
              <div className="relative h-20 overflow-hidden bg-gray-200">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/183x80?text=" + course.title;
                  }}
                />
              </div>

              
              <div className="p-3 flex flex-col h-[176px]"
              style={{fontFamily: "var(--font-ui)"}}>
                <h3
  className="text-[12px] font-semibold text-gray-900 leading-5
             truncate w-full max-w-[170px]"
>
  {course.title}
</h3>


                <p className="text-[8px] text-gray-600 line-clamp-3 py-1 leading-3 flex-grow">
                  {course.description}
                </p>

                <div className="space-y-1 ">
                  <div className="flex justify-between items-center text-xs mb-3">
                    <span className="font-medium text-gray-900">
                      {course.price}
                    </span>
                    <span className="text-gray-600 text-[8px]">
                      Duration: {course.duration}
                    </span>
                  </div>

                  <button
                    onClick={() => handleEnrollNow(course.title)}
                    className="w-full py-1.5 px-2 border border-[#2E083A] text-black rounded text-[10px] font-normal transition-all duration-200 leading-3 cursor-pointer"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-40 overflow-hidden bg-gray-200">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/400x300?text=" + course.title;
                  }}
                />
              </div>

              <div className="p-5"
              style={{fontFamily: "var(--font-ui)"}}>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>

                <p className="text-gray-700 text-sm mb-3 line-clamp-3">
                  {course.description}
                </p>

                <div className="flex justify-between items-center mb-3">
                  <span className="text-xl font-semibold text-gray-900">
                    {course.price}
                  </span>
                  <span className="text-gray-600 text-xs">
                    Duration: {course.duration}
                  </span>
                </div>

                <button
                  onClick={() => handleEnrollNow(course.title)}
                  className="w-full py-2.5 px-4 border-2 border-[#2E083A] text-black rounded-lg font-semibold transition-all duration-200 cursor-pointer"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-3 gap-6 lg:gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/400x300?text=" + course.title;
                  }}
                />
              </div>

              <div className="p-2 lg:p-6"
              style={{fontFamily: "var(--font-ui)"}}>
                <h3 className="text-[2px] lg:text-2xl font-medium lg:font-semibold text-black lg:mb-3 leading-5"
                style={{fontFamily: "var(--font-ui)"}}>
                  {course.title}
                </h3>

                <p className="text-[#474747] text-[8px] font-normal lg:text-base mb-4 ">
                  {course.description}
                </p>

                <div className="flex justify-between items-center mb-3">
                  <span className="text-2xl font-semibold text-gray-900">
                    {course.price}
                  </span>
                  <span className="text-gray-600 text-xs">
                    Duration: {course.duration}
                  </span>
                </div>

                <button
                  onClick={() => handleEnrollNow(course.title)}
                  className="w-full py-3 px-6 border-2 border-[#2E083A] text-black rounded-lg font-semibold transition-all duration-200 cursor-pointer"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;