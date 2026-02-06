import React, { useState } from "react";
import { CheckCircle, Mail, Download, X } from "lucide-react";

interface PaymentSuccessProps {
  courseName: string;
  coursePrice: string;
  studentName: string;
  studentEmail: string;
  reference: string;
  onClose: () => void;
}

const PaymentSuccess: React.FC<PaymentSuccessProps> = ({
  courseName,
  coursePrice,
  studentName,
  studentEmail,
  reference,
  onClose,
}) => {
  const [emailSent, setEmailSent] = useState(false);
  const [sendingEmail, setSendingEmail] = useState(false);

  const sendConfirmationEmail = async () => {
    setSendingEmail(true);

    const serviceId = "service_lk6tos2";
    const templateId = "template_3pt3vmv";
    const publicKey = "QhFh5DvdmemxLTi9d";

    const emailData = {
      to_name: studentName,
      to_email: studentEmail,
      course_name: courseName,
      course_price: coursePrice,
      transaction_reference: reference,
      payment_date: new Date().toLocaleDateString(),
      payment_time: new Date().toLocaleTimeString(),
      from_name: "Apex Tech Academy",
      reply_to: "apextechhub1@gmail.com",
    };

    try {
      // Using fetch to send email via EmailJS
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: emailData,
          }),
        },
      );

      if (response.ok) {
        setEmailSent(true);
      } else {
        console.error("Email sending failed");
        alert(
          "Unable to send confirmation email. Please contact support with your reference number.",
        );
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert(
        "Unable to send confirmation email. Please contact support with your reference number.",
      );
    } finally {
      setSendingEmail(false);
    }
  };

  // Download receipt as text file
  const downloadReceipt = () => {
    const receiptContent = `
APEX TECH ACADEMY - PAYMENT RECEIPT
=====================================

Student Name: ${studentName}
Email: ${studentEmail}
Course: ${courseName}
Amount Paid: ${coursePrice}
Transaction Reference: ${reference}
Payment Date: ${new Date().toLocaleDateString()}
Payment Time: ${new Date().toLocaleTimeString()}

Thank you for enrolling with Apex Tech Academy!
We will contact you within 24 hours with course access details.

For support, contact: apextechhub1@gmail.com
Website: www.apextechacademy.com
    `;

    const blob = new Blob([receiptContent], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `ApexTech_Receipt_${reference}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  // Auto-send email on component mount
  React.useEffect(() => {
    sendConfirmationEmail();
  }, []);

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-all"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        <div className="flex justify-center mb-6">
          <div className="bg-green-100 rounded-full p-4">
            <CheckCircle className="w-16 h-16 text-green-600" />
          </div>
        </div>

        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Payment Successful!
          </h2>
          <p className="text-gray-600 text-lg">Welcome to Apex Tech Academy</p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 mb-6 space-y-3">
          <div className="flex justify-between items-center pb-3 border-b border-gray-200">
            <span className="text-gray-600 font-medium">Course:</span>
            <span className="text-gray-900 font-semibold text-right">
              {courseName}
            </span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-gray-200">
            <span className="text-gray-600 font-medium">Amount Paid:</span>
            <span className="text-green-600 font-bold text-xl">
              {coursePrice}
            </span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-gray-200">
            <span className="text-gray-600 font-medium">Student Name:</span>
            <span className="text-gray-900 font-semibold text-right">
              {studentName}
            </span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-gray-200">
            <span className="text-gray-600 font-medium">Email:</span>
            <span className="text-gray-900 text-sm text-right">
              {studentEmail}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-medium">Reference:</span>
            <span className="text-gray-900 font-mono text-sm">{reference}</span>
          </div>
        </div>

        <div className="mb-6">
          {sendingEmail && (
            <div className="flex items-center gap-3 text-blue-600 bg-blue-50 p-4 rounded-lg">
              <Mail className="w-5 h-5 animate-pulse" />
              <span className="text-sm font-medium">
                Sending confirmation email...
              </span>
            </div>
          )}
          {emailSent && (
            <div className="flex items-center gap-3 text-green-600 bg-green-50 p-4 rounded-lg">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">
                Confirmation email sent to {studentEmail}
              </span>
            </div>
          )}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
          <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-blue-600">📧</span> What Happens Next?
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">1.</span>
              <span>You'll receive a confirmation email with your receipt</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">2.</span>
              <span>Our team will contact you within 24 hours</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">3.</span>
              <span>You'll get access to course materials and resources</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">4.</span>
              <span>Join our student community and start learning!</span>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <button
            onClick={downloadReceipt}
            className="w-full py-3 px-6 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Receipt
          </button>
          <button
            onClick={onClose}
            className="w-full py-3 px-6 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200"
          >
            Close
          </button>
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          Need help? Contact us at{" "}
          <a
            href="mailto:apextechhub1@gmail.com"
            className="text-primary-600 hover:underline"
          >
            apextechhub1@gmail.com
          </a>
        </p>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default PaymentSuccess;
