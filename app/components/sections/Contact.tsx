"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { staggerContainer, fadeInUp } from '@/app/lib/utils/animations';
import { businessInfo } from '@/app/lib/constants/content';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     const text = 
 `Hello Sudarshana Profile Sheets,

 👤 Name: ${formData.name}
 📧 Email: ${formData.email}
 📞 Phone: ${formData.phone}
 💬 Project Details: ${formData.message}

 Sent via sudarshanaprofile.com`;
     window.open(`https://wa.me/917000892760?text=${encodeURIComponent(text)}`, "_blank");
   };
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
            <form className="space-y-5" onSubmit={handleSubmit}>
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
                  value={formData.name} onChange={handleChange}
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
                  value={formData.name} onChange={handleChange}
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
                  value={formData.name} onChange={handleChange}
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
                  value={formData.name} onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all resize-none placeholder:text-gray-400"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              {/* Submit Button */}
<button
  type="submit"
  className="w-full px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all active:scale-95 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
>
  Send via WhatsApp
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.135.561 4.14 1.541 5.875L0 24l6.322-1.522A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.817 9.817 0 01-5.007-1.374l-.36-.214-3.722.896.934-3.619-.235-.373A9.796 9.796 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
  </svg>
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

         {/* Google Map Integration */}
<div className="aspect-video bg-gray-200 rounded-xl overflow-hidden border border-gray-300 shadow-sm">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.862192962125!2d81.61288567431113!3d21.19763268195888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd65c7b55cb7%3A0x1259a6ccff418796!2sSudarshana%20Profile%20Sheets!5e0!3m2!1sen!2sin!4v1771581026234!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Sudarshana Profile Sheets Location"
  ></iframe>
</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
