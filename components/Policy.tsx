import React from 'react';

const Policy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black pt-24 pb-16">
      <div className="container mx-auto px-8 md:px-16 max-w-4xl">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-7xl font-medium mb-6 leading-tight">Policies & Terms</h1>
          <p className="text-gray-600 text-lg italic">Understanding our commitment to your experience</p>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 border border-black/10 p-8 mb-16 rounded">
          <h3 className="text-xl font-bold mb-6">Contents</h3>
          <ul className="space-y-3">
            {[
              'Privacy Policy',
              'Terms of Service',
              'Booking & Cancellation',
              'Payment Policy',
              'Health & Safety',
              'Liability'
            ].map((item, idx) => (
              <li key={idx}>
                <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-accent hover:text-black transition-colors">
                  {idx + 1}. {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Privacy Policy */}
        <section id="privacy-policy" className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Privacy Policy</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              At Luxe Barber, we respect your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your data.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-3">Information We Collect</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Contact information (name, email, phone)</li>
              <li>Booking preferences and history</li>
              <li>Payment information (processed securely)</li>
              <li>Usage analytics</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-3">How We Use Your Information</h3>
            <p>
              We use your information solely to provide and improve our services, process bookings, send appointment reminders, and maintain security. We never share your data with third parties without consent.
            </p>
          </div>
        </section>

        {/* Terms of Service */}
        <section id="terms-of-service" className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Terms of Service</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              By booking with Luxe Barber, you agree to our terms and conditions. Our services are provided exclusively to clients who meet our professional standards.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-3">Code of Conduct</h3>
            <p>
              We maintain a professional environment dedicated to excellence. We reserve the right to decline service to any client whose behavior violates our standards of respect and professionalism.
            </p>
          </div>
        </section>

        {/* Booking & Cancellation */}
        <section id="booking-cancellation" className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Booking & Cancellation Policy</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <h3 className="text-2xl font-semibold mt-6 mb-3">Reservation Requirements</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Advance booking recommended (24 hours)</li>
              <li>Full contact information required</li>
              <li>Valid phone number for confirmations</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-3">Cancellation & Rescheduling</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Free cancellation up to 24 hours before appointment</li>
              <li>Less than 24 hours: 50% cancellation fee</li>
              <li>No-show: Full appointment charge</li>
              <li>Reschedule anytime (subject to availability)</li>
            </ul>
          </div>
        </section>

        {/* Payment Policy */}
        <section id="payment-policy" className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Payment Policy</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <h3 className="text-2xl font-semibold mt-6 mb-3">Payment Methods</h3>
            <p>
              We accept all major credit cards, digital wallets, and cash. Payment is due upon service completion.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-3">Pricing</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Prices listed are inclusive of services mentioned</li>
              <li>Additional services charged separately</li>
              <li>Group discounts available for corporate bookings</li>
            </ul>
          </div>
        </section>

        {/* Health & Safety */}
        <section id="health-safety" className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Health & Safety Standards</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Luxe Barber maintains the highest health and safety standards. All tools are sterilized using industry-standard protocols, and we follow all local health regulations.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-3">Our Commitment</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Disposable tools for each client</li>
              <li>Regular equipment sterilization</li>
              <li>Professional-grade sanitizers</li>
              <li>Hygienic workspace maintained throughout</li>
            </ul>
          </div>
        </section>

        {/* Liability */}
        <section id="liability" className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Limitation of Liability</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              While we take every precaution to ensure your safety and satisfaction, Luxe Barber is not responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Adverse reactions to products (provide all allergies upfront)</li>
              <li>Hair damage from chemical treatments (consultations provided)</li>
              <li>Personal injury on premises (report immediately)</li>
              <li>Lost or damaged personal items</li>
            </ul>
            <p className="mt-4">
              For any concerns, contact us immediately at <strong>concierge@luxebarber.com</strong> or <strong>+1 (212) 888 7766</strong>
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <div className="bg-black text-white p-12 rounded mt-16">
          <h3 className="text-2xl font-bold mb-4">Questions?</h3>
          <p className="mb-6">Contact our concierge team for any policy clarifications</p>
          <div className="space-y-2">
            <p><strong>Email:</strong> concierge@luxebarber.com</p>
            <p><strong>Phone:</strong> +1 (212) 888 7766</p>
            <p><strong>Hours:</strong> Mon-Sat 9:00 AM - 10:00 PM | Sun by appointment</p>
          </div>
        </div>

        {/* Last Updated */}
        <p className="text-gray-500 text-sm mt-8 italic">
          Last updated: January 5, 2026 | © Luxe Barber Collective. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Policy;
