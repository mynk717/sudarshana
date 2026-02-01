"use client";

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/app/lib/utils/animations';
import { businessInfo } from '@/app/lib/constants/content';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span 
            variants={fadeInUp}
            className="inline-block px-4 py-1.5 bg-brand-secondary/10 text-brand-secondary text-sm font-semibold rounded-full mb-4"
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight"
          >
            Contact Us
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Ready to start your project? Contact us for a free consultation
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <form className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all placeholder:text-gray-400"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all placeholder:text-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all placeholder:text-gray-400"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all resize-none placeholder:text-gray-400"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-brand-primary text-white font-semibold rounded-lg hover:bg-brand-primary/90 transition-all active:scale-95 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Location */}
              <div className="flex items-start p-5 bg-blue-50 rounded-xl border border-blue-100">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                  <p className="text-sm text-gray-700">{businessInfo.address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start p-5 bg-orange-50 rounded-xl border border-orange-100">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className="text-sm text-gray-700 hover:text-brand-primary transition-colors"
                  >
                    {businessInfo.phone}
                  </a>
                  {businessInfo.phoneAlt && (
                    <>
                      <br />
                      <a
                        href={`tel:${businessInfo.phoneAlt}`}
                        className="text-sm text-gray-700 hover:text-brand-primary transition-colors"
                      >
                        {businessInfo.phoneAlt}
                      </a>
                    </>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start p-5 bg-green-50 rounded-xl border border-green-100">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a
                    href={`mailto:${businessInfo.email}`}
                    className="text-sm text-gray-700 hover:text-brand-primary transition-colors break-all"
                  >
                    {businessInfo.email}
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start p-5 bg-purple-50 rounded-xl border border-purple-100">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                  <p className="text-sm text-gray-700">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm text-gray-700">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Google Map Placeholder */}
            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden border border-gray-300">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                  <p className="text-sm font-medium">Google Maps Integration</p>
                  <p className="text-xs mt-1">Kushalpur Chowk, Raipur</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
