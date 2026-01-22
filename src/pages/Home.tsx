
import HeroSection from "../components/HeroSection";
import CoursesSection from "../components/CoursesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import TestimonialsSection from "../components/TestimonialsSection";
import GlobalReachSection from "../components/GlobalReachSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CoursesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <GlobalReachSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
