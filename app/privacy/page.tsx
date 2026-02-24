import { Metadata } from "next";
import { businessInfo } from "@/app/lib/constants/content";

export const metadata: Metadata = {
  title: "Privacy Policy - Sudarshana Profile Sheets",
  description: "Privacy Policy for Sudarshana Profile Sheets. Your data protection is our priority.",
};

export default function Privacy() {
  return (
    <div className="pt-20 pb-16 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          
          <div className="text-center mb-12">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-500 mb-8">
              <span>Last Updated: February 24, 2026</span>
              <span>{businessInfo.fullName}</span>
              <span>{businessInfo.gstNumber}</span>
            </div>
          </div>

          <div className="prose prose-sm max-w-none space-y-6">
            <section>
              <h2 className="font-heading text-xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p>
                We collect minimal information necessary to serve you better:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Contact details when you request quotes or services</li>
                <li>Basic analytics (IP address, browser type, pages visited) for site improvement</li>
                <li>No personal data collection without your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p>Your information is used solely for:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Processing quote requests and service inquiries</li>
                <li>Improving our website and services</li>
                <li>Compliance with Indian tax laws (GST requirements)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-gray-900 mb-4">3. Data Sharing</h2>
              <p>We do not sell or share your personal data with third parties except:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Law enforcement or government authorities when legally required</li>
                <li>Business partners for order fulfillment (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-gray-900 mb-4">4. Cookies</h2>
              <p>
                This website uses essential cookies only for functionality. No tracking cookies or advertising trackers.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Request access to your data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="text-sm font-semibold mt-2">
                Contact: {businessInfo.email}
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-gray-900 mb-4">6. Security</h2>
              <p>
                We implement industry-standard security measures to protect your information. However, no online transmission is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-gray-900 mb-4">7. Changes to This Policy</h2>
              <p>
                We may update this policy. Significant changes will be notified via this page.
              </p>
            </section>

            <section className="border-t border-gray-200 pt-8 mt-8">
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-4">
                  Questions? Contact us at {businessInfo.email}
                </p>
                <p className="text-xs text-gray-400">
                  {businessInfo.fullName} | GSTIN: {businessInfo.gstNumber} | {businessInfo.location}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
