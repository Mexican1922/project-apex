import React, { useState } from "react";
import { usePaystackPayment } from "react-paystack";

interface Course {
  id: number;
  title: string;
  description: string;
  price: string;
  priceValue: number;
  duration: string;
  image: string;
}

const CoursesSection: React.FC = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const courses: Course[] = [
    {
      id: 1,
      title: "Digital Marketing",
      description:
        "Grow your online influence and connect with the right audience.\n\nYou'll learn: Social Media Management, Content Creation, and SEO Optimization to create engaging campaigns and turn clicks into deals or gigs.",
      price: "₦60,000",
      priceValue: 60000,
      duration: "2 Months",
      image: "/images/digital-marketing.webp",
    },
    {
      id: 2,
      title: "Cyber Security",
      description:
        "Protect businesses and secure data in the digital world.\n\nYou'll learn: Network Security, Threat Analysis, Ethical Hacking, and Cybersecurity Best Practices to prepare for high-demand roles globally.",
      price: "₦200,000",
      priceValue: 200000,
      duration: "3 Months",
      image: "/images/cyber-security.webp",
    },
    {
      id: 3,
      title: "Graphic Designing",
      description:
        "Create visually stunning designs and communicate ideas effectively.\n\nYou'll learn: Photoshop and Lightroom, wireframing, prototyping, and designing graphics for web, mobile, and branding projects.",
      price: "₦80,000",
      priceValue: 80000,
      duration: "2 Months",
      image: "/images/graphic-design.webp",
    },
    {
      id: 4,
      title: "Web Development - Frontend",
      description:
        "Learn modern frontend development and build platforms that matter.\n\nCourses include: HTML, CSS, JavaScript, React, Git/GitHub, Responsive Design, API Integration, and Deployment.",
      price: "₦250,000",
      priceValue: 250000,
      duration: "3 Months",
      image: "/images/frontend.webp",
    },
    {
      id: 5,
      title: "Web Development - Backend",
      description:
        "Learn backend development and power websites behind the scenes.\n\nCourses include: NodeJS and MongoDB. Build secure APIs, manage databases, and create scalable systems.",
      price: "₦200,000",
      priceValue: 200000,
      duration: "3 Months",
      image: "/images/backend.webp",
    },
    {
      id: 6,
      title: "Data Analysis",
      description:
        "Learn data analysis and turn raw data into meaningful insights.\n\nCourses include: Excel Logic, Power BI, and MySQL. Build dashboards, analyze trends, and support smarter business decisions.",
      price: "₦160,000",
      priceValue: 160000,
      duration: "3 Months",
      image: "/images/data-analysis.webp",
    },
    {
      id: 7,
      title: "Video Editing",
      description:
        "Become a skilled video editor and bring stories to life.\n\nYou'll learn: Premiere Pro and Adobe After Effects, editing techniques, motion graphics, and real-world projects to build your portfolio and earn from your skills.",
      price: "₦80,000",
      priceValue: 80000,
      duration: "2 Months",
      image: "/images/video-editing.webp",
    },
    {
      id: 8,
      title: "Product Design",
      description:
        "Design products that solve real problems and delight users.\n\nYou'll learn: User Research, Wireframing, Prototyping, UI/UX Principles, and Product Strategy to create market-ready designs.",
      price: "₦100,000",
      priceValue: 100000,
      duration: "2 Months",
      image: "/images/uiux-design.webp",
    },
    {
      id: 9,
      title: "WordPress Development",
      description:
        "Build responsive, professional websites with WordPress.\n\nYou'll learn: Theme customization, plugin integration, website management, and real-world project development to gain practical, job-ready skills.",
      price: "₦120,000",
      priceValue: 120000,
      duration: "2 Months",
      image: "/images/wordpress.webp",
    },
  ];

  const publicKey = "pk_live_1df8047b9d337af3bfaa81a5a8f6bcc02482094f";

  const handleEnrollNow = (course: Course) => {
    setSelectedCourse(course);
    setShowPaymentModal(true);
  };

  const config = selectedCourse
    ? {
        reference: new Date().getTime().toString(),
        email: userEmail,
        amount: selectedCourse.priceValue * 100,
        publicKey: publicKey,
        metadata: {
          custom_fields: [
            {
              display_name: "Course",
              variable_name: "course_name",
              value: selectedCourse.title,
            },
            {
              display_name: "Student Name",
              variable_name: "student_name",
              value: userName,
            },
          ],
        },
      }
    : null;

  const initializePayment = usePaystackPayment(
    config || { reference: "", email: "", amount: 0, publicKey: "" },
  );

  const onSuccess = (reference: string) => {
    console.log("Payment successful:", reference);
    alert(
      `Payment successful! Welcome to ${selectedCourse?.title}. We'll send course details to ${userEmail}`,
    );
    setShowPaymentModal(false);
    setUserEmail("");
    setUserName("");
    setSelectedCourse(null);
  };

  const onClose = () => {
    console.log("Payment closed");
    alert("Payment cancelled");
  };

  const handlePaymentSubmit = () => {
    if (!userEmail || !userName) {
      alert("Please enter your name and email");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(userEmail)) {
      alert("Please enter a valid email address");
      return;
    }
    initializePayment({ onSuccess, onClose });
  };

  return (
    <section id="courses" className="py-12 md:py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-8 md:mb-12"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          <h2 className="text-[16px] md:text-2xl lg:text-[32px] font-semibold text-gray-900 mb-2 md:mb-3">
            Explore All Courses
          </h2>
          <p className="text-black text-[12px] md:text-lg leading-4 md:leading-5">
            Know more about courses
          </p>
        </div>

        {/* Mobile */}
        <div className="grid grid-cols-2 md:hidden gap-3 justify-items-center">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`bg-white rounded-xl overflow-hidden shadow-sm border border-gray-300 hover:shadow-md transition-all duration-300 ${
                course.id === 9 ? "col-span-2" : ""
              }`}
              style={{
                width: "100%",
                maxWidth: "183px",
                height: "256px",
              }}
            >
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

              <div
                className="p-3 flex flex-col h-[176px]"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                <h3 className="text-[12px] font-semibold text-gray-900 leading-5 truncate w-full max-w-[170px]">
                  {course.title}
                </h3>

                <p className="text-[8px] text-gray-600 line-clamp-3 py-1 leading-3 flex-grow">
                  {course.description}
                </p>

                <div className="space-y-1">
                  <div className="flex justify-between items-center text-xs mb-2">
                    <span className="font-medium text-gray-900">
                      {course.price}
                    </span>
                    <span className="text-gray-600 text-[8px]">
                      Duration: {course.duration}
                    </span>
                  </div>

                  <button
                    onClick={() => handleEnrollNow(course)}
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
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6 justify-items-center">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                course.id === 9 ? "col-span-2" : ""
              }`}
            >
              <div className="relative h-40 overflow-hidden bg-gray-200">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/400x300?text=" +
                      course.title;
                  }}
                />
              </div>

              <div className="p-5" style={{ fontFamily: "var(--font-ui)" }}>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>

                <p className="text-gray-700 text-sm mb-3 line-clamp-3">
                  {course.description}
                </p>

                <div className="flex justify-between items-center mb-2">
                  <span className="text-xl font-semibold text-gray-900">
                    {course.price}
                  </span>
                  <span className="text-gray-600 text-xs">
                    Duration: {course.duration}
                  </span>
                </div>

                <button
                  onClick={() => handleEnrollNow(course)}
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
                      "https://via.placeholder.com/400x300?text=" +
                      course.title;
                  }}
                />
              </div>

              <div className="p-6" style={{ fontFamily: "var(--font-ui)" }}>
                <h3 className="text-2xl font-semibold text-black mb-3">
                  {course.title}
                </h3>

                <p className="text-[#474747] text-base mb-4">
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
                  onClick={() => handleEnrollNow(course)}
                  className="w-full py-3 px-6 border-2 border-[#2E083A] text-black rounded-lg font-semibold transition-all duration-200 cursor-pointer hover:bg-[#2E083A] hover:text-white"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && selectedCourse && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Enroll in {selectedCourse.title}
            </h3>

            <div className="mb-4">
              <p className="text-gray-700 mb-2">
                <strong>Price:</strong> {selectedCourse.price}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Duration:</strong> {selectedCourse.duration}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => {
                    setShowPaymentModal(false);
                    setUserEmail("");
                    setUserName("");
                    setSelectedCourse(null);
                  }}
                  className="flex-1 py-3 px-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handlePaymentSubmit}
                  className="flex-1 py-3 px-4 bg-primary-800 hover:bg-primary-900 text-white font-normal  rounded-lg font-semibold transition-all"
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CoursesSection;
