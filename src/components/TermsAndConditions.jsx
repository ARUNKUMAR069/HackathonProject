import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className=" flex justify-center w-screen mt-5">

    <div className="flex items-center justify-center  min-h-screen text-white   p-6 font-bold ">
      <div className="bg-gradient-to-r from-black to-metal-600 shadow-lg rounded-lg p-6 max-w-4xl w-full">
        <h1 className="text-4xl font-extrabold text-gray-300 mb-6">Terms and Conditions</h1>
        <p className="text-lg  mb-6">
          Welcome to the PMSSS Scholarship Portal. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please review them carefully.
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold  mb-2">1. Acceptance of Terms</h2>
            <p className="text-gray-400">
              By accessing or using the PMSSS Scholarship Portal, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold  mb-2">2. Eligibility</h2>
            <p className="text-gray-400">
              To be eligible for the PMSSS Scholarship, you must be a student enrolled in an eligible institution and meet the criteria set forth by the scholarship program.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold  mb-2">3. User Responsibilities</h2>
            <p className="text-gray-400">
              You agree to provide accurate and complete information when using the scholarship application and to update your information as needed. You are responsible for maintaining the confidentiality of your account details and for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold  mb-2">4. Application Process</h2>
            <p className="text-gray-400">
              All applications for the PMSSS Scholarship must be submitted through the online portal. Incomplete or late applications will not be considered. The scholarship committee reserves the right to reject any application at its discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold  mb-2">5. Privacy Policy</h2>
            <p className="text-gray-400">
              We are committed to protecting your privacy. Our Privacy Policy explains how we collect, use, and disclose your personal information. By using our website, you consent to our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold  mb-2">6. Changes to Terms</h2>
            <p className="text-gray-400">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of the website following any changes constitutes your acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold  mb-2">7. Contact Information</h2>
            <p className="text-gray-400">
              If you have any questions or concerns about these Terms and Conditions, please contact us at{' '}
              <a href="mailto:support@pmsss.com" className="text-blue-500 hover:underline">
                support@pmsss.com
              </a>.
            </p>
          </section>
        </div>

        <p className="text-gray-600 mt-6">
          Last updated: September 1, 2024
        </p>
      </div>
    </div>
    </div>
  );
};

export default TermsAndConditions;
