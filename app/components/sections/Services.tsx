"use client";

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/app/lib/utils/animations';
import { services } from '@/app/lib/constants/content';
import AnimatedCard from '../ui/AnimatedCard';
import { Settings, Palette, Warehouse } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<number, LucideIcon> = {
  0: Settings,
  1: Palette,
  2: Warehouse,
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span 
            variants={fadeInUp}
            className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary text-sm font-semibold rounded-full mb-4"
          >
            What We Offer
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight"
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

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = iconMap[index] || Settings;
            return (
              <AnimatedCard 
                key={service.id} 
                delay={index * 0.1}
                className="p-8 hover:shadow-xl transition-all duration-300 group bg-white"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-brand-primary to-brand-primary/80 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 text-white" strokeWidth={2} />
                </div>

                {/* Service Title */}
                <h3 className="font-heading text-xl md:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-green-500 mr-2 mt-0.5 flex-shrink-0">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Stats */}
                <div className="pt-5 border-t border-gray-100">
                  <p className="text-sm font-bold text-brand-secondary">
                    {service.stat}
                  </p>
                </div>
              </AnimatedCard>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-secondary text-black font-semibold rounded-lg shadow-md hover:bg-brand-secondary/90 hover:shadow-lg transition-all active:scale-95"
          >
            Request a Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
