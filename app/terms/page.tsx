import { Metadata } from "next";
import { businessInfo } from "@/app/lib/constants/content";

export const metadata: Metadata = {
  title: `${businessInfo.name} - Terms of Service | Roofing Sheets Raipur`,
  description: `Terms of service for ${businessInfo.name}. Authorised TATA Steel & APL Apollo dealer in Raipur, Chhattisgarh. Quote requests and product information only.`,
  keywords: [
    "terms of service Raipur roofing",
    "Sudarshana Profile Sheets terms",
    `${businessInfo.gstNumber} terms`,
    "TATA Durashine dealer terms",
    "APL Apollo roofing terms Chhattisgarh",
  ],
  robots: {
    index: true, // ✅ Index it
    follow: true,
  },
};

export default function Terms() {
  return (
    <div className="pt-20 pb-16 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* SEO Hero */}
        <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 mb-12">
          <header className="text-center mb-12">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <div className="flex flex-wrap gap-4 justify-center items-center text-sm text-gray-500 mb-8">
              <span>Last Updated: February 24, 2026</span>
              <span>|</span>
              <span>{businessInfo.fullName}</span>
              <span>|</span>
              <span>GSTIN: {businessInfo.gstNumber}</span>
            </div>
          </header>

          <div className="prose prose-sm max-w-none space-y-8">
            {/* 1. Website Purpose - SEO keywords */}
            <section>
              <h2 className="font-heading text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                1. Website Purpose
              </h2>
              <p>
                This website (<strong>{businessInfo.fullName}</strong>) serves as a product showcase and 
                lead generation platform for our TATA Steel Colors and APL Apollo colour coated profile 
                sheets manufacturing and dealership services in Raipur, Chhattisgarh.
              </p>
              <p className="mt-2 font-semibold">
                <strong>No online orders or e-commerce transactions</strong> are facilitated through this website.
              </p>
            </section>

            {/* 2. Lead Generation Only */}
            <section>
              <h2 className="font-heading text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                2. Quote Requests & Inquiries
              </h2>
              <p>
                Contact forms and phone numbers are provided for quote requests, product inquiries, and 
                service discussions. All quote requests are subject to:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-3 text-sm text-gray-700">
                <li>Verification of business legitimacy</li>
                <li>Site visit and measurement confirmation</li>
                <li>Material availability and pricing approval</li>
                <li>GST compliance and documentation</li>
              </ul>
            </section>

            {/* 3. No Liability */}
            <section>
              <h2 className="font-heading text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                3. No Liability for Information
              </h2>
              <p>
                Product specifications, images, and descriptions are for marketing purposes only and 
                subject to change. Final specifications provided during quote approval are binding.
              </p>
            </section>

            {/* 4. Consumer/Dealer Safety */}
            <section>
              <h2 className="font-heading text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                4. Consumer & Dealer Safety
              </h2>
              <ul className="space-y-3">
                <li>
                  <strong>Installation Responsibility:</strong> Sudarshana Profile Sheets is not liable for 
                  installation workmanship unless contracted through our services.
                </li>
                <li>
                  <strong>Product Usage:</strong> Products must be installed by qualified personnel following 
                  manufacturer guidelines (TATA Steel Colors / APL Apollo specifications).
                </li>
                <li>
                  <strong>Warranty:</strong> Product warranties are provided by respective manufacturers 
                  (TATA Steel Colors / APL Apollo). Installation warranties available through our services.
                </li>
              </ul>
            </section>

            {/* 5. GST Compliance */}
            <section>
              <h2 className="font-heading text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                5. GST & Tax Compliance
              </h2>
              <p>
                All transactions subject to applicable GST as per our registration:{" "}
                <strong>GSTIN: {businessInfo.gstNumber}</strong>.
              </p>
            </section>

            {/* 6. Website Usage */}
            <section>
              <h2 className="font-heading text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                6. Website Usage
              </h2>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Images and content may not be reproduced without permission</li>
                <li>Contact information provided for legitimate business inquiries only</li>
                <li>No automated scraping or data extraction permitted</li>
              </ul>
            </section>

            {/* Contact */}
            <section className="border-t border-gray-200 pt-8 mt-12">
              <div className="text-center">
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-4">
                  Questions About These Terms?
                </h3>
                <p className="text-lg mb-6">
                  Contact our Raipur office directly:
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-center mb-8">
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className="block p-4 bg-brand-primary/10 text-brand-primary font-semibold rounded-xl hover:bg-brand-primary/20 transition"
                  >
                    📞 {businessInfo.phone}
                  </a>
                  <a
                    href={`mailto:${businessInfo.email}`}
                    className="block p-4 bg-brand-secondary/10 text-brand-secondary font-semibold rounded-xl hover:bg-brand-secondary/20 transition"
                  >
                    ✉️ {businessInfo.email}
                  </a>
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="font-mono text-sm font-semibold text-brand-primary">
                      GSTIN: {businessInfo.gstNumber}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-400">
                  {businessInfo.fullName} | {businessInfo.address} | {businessInfo.location}
                </p>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
