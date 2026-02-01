"use client";

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/app/lib/utils/animations';
import { services } from '@/app/lib/constants/content';
import AnimatedCard from '../ui/AnimatedCard';

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - AEO Optimized */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-mobile-h1 md:text-desktop-h1 font-bold text-gray-900 mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive metal roofing solutions from manufacturing to installation
          </motion.p>
        </motion.div>

        {/* Services Grid - Mobile First */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <AnimatedCard 
              key={service.id} 
              delay={index * 0.1}
              className="p-6 md:p-8 hover:shadow-2xl transition-shadow"
            >
              {/* Icon */}
              <div className="text-5xl md:text-6xl mb-4">
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* AEO: Question Format */}
              <div className="mb-4 p-3 bg-blue-50 rounded-lg border-l-4 border-industrial-blue">
                <p className="text-xs font-semibold text-gray-600 mb-1">
                  {service.shortAnswer}
                </p>
                <p className="text-sm text-gray-700">
                  {service.description}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-700">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* GEO: Statistics */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-bold text-industrial-orange">
                  {service.stat}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-12 md:mt-16"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-industrial-orange text-white font-semibold rounded-xl shadow-lg hover:bg-orange-600 transition-all active:scale-95 min-h-[56px]"
          >
            Request a Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
