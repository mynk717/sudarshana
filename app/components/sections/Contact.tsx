"use client";

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/app/lib/utils/animations';
import { businessInfo } from '@/app/lib/constants/content';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-mobile-h1 md:text-desktop-h1 font-bold text-gray-900 mb-4"
            >
              Get In Touch
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Ready to start your project? Contact us for a free consultation and quote
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-industrial-blue focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-industrial-blue focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-industrial-blue focus:border-transparent transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-industrial-blue focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-industrial-orange text-white font-semibold rounded-xl hover:bg-orange-600 transition-all active:scale-95 min-h-[56px]"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div variants={fadeInUp} className="space-y-8">
              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="flex items-start p-6 bg-blue-50 rounded-xl">
                  <div className="text-3xl mr-4">📍</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-700">{businessInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-orange-50 rounded-xl">
                  <div className="text-3xl mr-4">📞</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a 
                      href={`tel:${businessInfo.phone}`}
                      className="text-gray-700 hover:text-industrial-blue transition-colors"
                    >
                      {businessInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-green-50 rounded-xl">
                  <div className="text-3xl mr-4">✉️</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a 
                      href={`mailto:${businessInfo.email}`}
                      className="text-gray-700 hover:text-industrial-blue transition-colors break-all"
                    >
                      {businessInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Map Placeholder */}
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <p className="text-4xl mb-2">🗺️</p>
                    <p className="text-sm">Google Maps Integration</p>
                    <p className="text-xs mt-1">Add your GMB place ID</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
