import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "How do I register at Apex Tech Academy?",
      answer:
        "You can register by clicking the 'Register Now' button on our website, filling out the registration form with your details, and selecting your preferred course. Our team will contact you within 24 hours to complete your enrollment.",
    },
    {
      id: 2,
      question: "Are Certificate issued upon training completion?",
      answer:
        "Yes! Upon successful completion of your course, you will receive a certificate of completion from Apex Tech Academy. This certificate is recognized by industry partners and can be added to your professional portfolio.",
    },
    {
      id: 3,
      question: "Do I need a prior computer knowledge?",
      answer:
        "No prior computer knowledge is required for most of our beginner courses. We design our curriculum to accommodate students at all levels, from complete beginners to those with some experience. Our instructors will guide you step-by-step.",
    },
    {
      id: 4,
      question: "How conducive is the learning environment?",
      answer:
        "Yes! Apex Tech provides a focused, supportive, and resource-rich environment designed to help every student learn effectively and grow their skills.",
    },
    {
      id: 5,
      question: "What is the duration of each course?",
      answer:
        "Course durations vary depending on the program. Most courses range from 2 to 6 months. You can find specific duration details on each course page.",
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faqs"
      className="py-16 lg:py-24 bg-white"
      style={{ fontFamily: "var(--font-ui)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="
              bg-white
              border border-[#2E083A]
              rounded-[24px]
              shadow-lg
              max-w-[382px]
              mx-auto
              px-[29px]
              py-[36px]
              space-y-[10px]
              sm:max-w-[520px]
              sm:px-10
              sm:py-10
              lg:max-w-full
              lg:px-12
              lg:py-12
            "
          >
            <div className="text-center sm:text-left mb-8">
              <h2
                className="text-[16px] lg:text-[32px] font-semibold text-black mb-2 leading-5.5 lg:leading-10"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                Frequently Asked Questions
              </h2>
              <p
                className="text-[12px] lg:text-[16px] text-black font-normal leading-relaxed"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                Your questions are answered
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="border-b border-gray-200 pb-4 last:border-b-0"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex justify-between items-center text-left py-3 transition-colors hover:text-primary-600"
                  >
                    <span
                      className="font-normal text-[12px] lg:text-[20px] text-black leading-4"
                      style={{ fontFamily: "var(--font-ui)" }}
                    >
                      {faq.question}
                    </span>
                    {openId === faq.id ? (
                      <Minus className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    )}
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openId === faq.id
                        ? "max-h-96 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p
                      className="text-[12px] lg:text-[16px] text-black leading-6 pb-2"
                      style={{ fontFamily: "var(--font-ui)" }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/images/faq-illustration.webp"
                alt="FAQ Illustration"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/565x683/a855f7/ffffff?text=Learning+Illustration";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
