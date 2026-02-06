import React, { useState } from "react";
import { CheckCircle, Mail, Download, X } from "lucide-react";
import jsPDF from "jspdf";

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

  // Download receipt as PDF
  const downloadReceipt = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();

    // Set colors
    const primaryColor = [147, 51, 234]; // Purple
    const darkGray = [51, 51, 51];
    const lightGray = [128, 128, 128];

    // Header with logo/title
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(0, 0, pageWidth, 40, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text("APEX TECH ACADEMY", pageWidth / 2, 20, { align: "center" });

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("Payment Receipt", pageWidth / 2, 30, { align: "center" });

    // Reset text color
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);

    // Receipt Title
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("Payment Confirmation", 20, 60);

    // Divider line
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.5);
    doc.line(20, 65, pageWidth - 20, 65);

    // Payment Details
    let yPos = 80;
    const lineHeight = 12;

    // Student Information
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text("Student Information:", 20, yPos);
    yPos += lineHeight;

    doc.setFont("helvetica", "normal");
    doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
    doc.text("Name:", 25, yPos);
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    doc.text(studentName, 70, yPos);
    yPos += lineHeight;

    doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
    doc.text("Email:", 25, yPos);
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    doc.text(studentEmail, 70, yPos);
    yPos += lineHeight + 5;

    // Course Information
    doc.setFont("helvetica", "bold");
    doc.text("Course Information:", 20, yPos);
    yPos += lineHeight;

    doc.setFont("helvetica", "normal");
    doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
    doc.text("Course Name:", 25, yPos);
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    doc.text(courseName, 70, yPos);
    yPos += lineHeight;

    doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
    doc.text("Amount Paid:", 25, yPos);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 150, 0);
    doc.setFontSize(14);
    doc.text(coursePrice, 70, yPos);
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    yPos += lineHeight + 5;

    // Transaction Details
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    doc.setFont("helvetica", "bold");
    doc.text("Transaction Details:", 20, yPos);
    yPos += lineHeight;

    doc.setFont("helvetica", "normal");
    doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
    doc.text("Reference:", 25, yPos);
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    doc.setFont("courier", "normal");
    doc.text(reference, 70, yPos);
    doc.setFont("helvetica", "normal");
    yPos += lineHeight;

    doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
    doc.text("Payment Date:", 25, yPos);
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    doc.text(currentDate, 70, yPos);
    yPos += lineHeight;

    doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
    doc.text("Payment Time:", 25, yPos);
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    doc.text(currentTime, 70, yPos);
    yPos += lineHeight + 10;

    // Info Box
    doc.setFillColor(240, 248, 255);
    doc.roundedRect(20, yPos, pageWidth - 40, 40, 3, 3, "F");

    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    doc.setFontSize(10);
    yPos += 10;
    doc.text("✓ Payment successfully processed", 25, yPos);
    yPos += 8;
    doc.text("✓ Confirmation email sent to " + studentEmail, 25, yPos);
    yPos += 8;
    doc.text("✓ Our team will contact you within 24 hours", 25, yPos);
    yPos += 8;
    doc.text("✓ Course access details will be provided soon", 25, yPos);

    // Footer
    yPos = doc.internal.pageSize.getHeight() - 40;
    doc.setDrawColor(200, 200, 200);
    doc.line(20, yPos, pageWidth - 20, yPos);

    yPos += 10;
    doc.setFontSize(9);
    doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
    doc.text("Thank you for choosing Apex Tech Academy!", pageWidth / 2, yPos, {
      align: "center",
    });

    yPos += 8;
    doc.text(
      "For support: apextechhub1@gmail.com | www.apextechacademy.com",
      pageWidth / 2,
      yPos,
      { align: "center" },
    );

    yPos += 8;
    doc.setFontSize(8);
    doc.text(
      "This is an automated receipt. Please keep it for your records.",
      pageWidth / 2,
      yPos,
      { align: "center" },
    );

    // Save the PDF
    doc.save(`ApexTech_Receipt_${reference}.pdf`);
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
            Payment Successful! 🎉
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
            Download PDF Receipt
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
