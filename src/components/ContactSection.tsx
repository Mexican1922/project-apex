import React, { useState } from "react";

interface FormData {
  fullName: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.fullName || !formData.email || !formData.message) {
      alert("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitStatus("success");

      setFormData({
        fullName: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 lg:py-24"
    style={{fontFamily: "var(--font-ui)"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-5">
          <h2 className="text-[16px] lg:text-4xl font-semibold text-black mb-1 leading-5.5 lg:leading-10">
            Get in Touch with Us
          </h2>
          <p className="text-black text-lg text-[12px] lg:text-[16px] font-normal leading-relaxed">
            Want to enquire more? Send us a message
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="hidden lg:block relative rounded-3xl border-2 border-primary-500 overflow-hidden shadow-lg">
            <img
              src="/images/contact-illustration.webp"
              alt="Contact Us Illustration"
              className="w-full h-full object-cover"
              style={{
                filter: "drop-shadow(0 10px 30px rgba(168, 85, 247, 0.4))",
              }}
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/565x683/f3e8ff/9333ea?text=Contact+Illustration";
              }}
            />
          </div>

          <div className="bg-[#20032C] rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-5 py-4 bg-purple-800/30 border-2 border-purple-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full px-5 py-4 bg-purple-800/30 border-2 border-purple-600/50 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  rows={6}
                  className="w-full px-5 py-4 bg-purple-800/30 border-2 border-purple-600/50 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all resize-none"
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-primary-600 text-white font-bold text-lg py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <div className="text-center text-white bg-green-500/30 border-2 border-green-400 rounded-xl py-3 px-4 font-medium">
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
