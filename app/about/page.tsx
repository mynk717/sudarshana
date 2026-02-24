import { Metadata } from "next";
import { businessInfo, heroContent } from "@/app/lib/constants/content";
import Image from "next/image";

export const metadata: Metadata = {
  title: `About Us - ${businessInfo.fullName}`,
  description: `Learn about ${businessInfo.fullName}, authorised TATA Steel and APL Apollo dealer in Raipur, Chhattisgarh. Manufacturing excellence since ${businessInfo.establishedYear}.`,
};

export default function About() {
  return (
    <div className="pt-20 pb-16 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero */}
        <section className="text-center mb-16 md:mb-24">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About {businessInfo.name}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {heroContent.answer}
          </p>
          <p className="text-sm font-semibold text-brand-primary mt-4 uppercase tracking-wide">
            {businessInfo.dealerTagline}
          </p>
        </section>

        {/* Company stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-brand-primary mb-1">500+</div>
            <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-brand-secondary mb-1">15+</div>
            <div className="text-sm text-gray-600 font-medium">Years Warranty</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-gray-900 mb-1">{businessInfo.establishedYear}</div>
            <div className="text-sm text-gray-600 font-medium">Established</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {businessInfo.serviceArea}
            </div>
            <div className="text-sm text-gray-600 font-medium">Service Area</div>
          </div>
        </section>

        {/* GST & Legal */}
        <section className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
              Business Information
            </h2>
            <div className="space-y-3 text-sm">
              <p>
                <span className="font-semibold text-gray-700">GSTIN:</span>{" "}
                <span className="font-mono text-sm font-semibold text-brand-primary">
                  {businessInfo.gstNumber}
                </span>
              </p>
              <p>
                <span className="font-semibold text-gray-700">Entity:</span>{" "}
                {businessInfo.entityType}
              </p>
              <p>
                <span className="font-semibold text-gray-700">Location:</span>{" "}
                {businessInfo.location}
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 p-8 rounded-2xl border border-brand-primary/20">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Authorised TATA Steel Colors & APL Apollo dealer
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Premium AZ-70 / AZ-150 coating technology
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Complete shed construction services
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                PAN India service network
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact our Raipur team for TATA & APL Apollo roofing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-brand-primary text-white font-semibold text-lg rounded-xl hover:bg-brand-primary/90 transition-all flex-1 text-center"
              >
                Get Quote
              </a>
              <a
                href="tel:+917000892760"
                className="px-8 py-4 border-2 border-gray-200 text-gray-900 font-semibold text-lg rounded-xl hover:bg-gray-50 transition-all flex-1 text-center"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
