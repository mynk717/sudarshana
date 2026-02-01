"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { staggerContainer, fadeInUp } from '@/app/lib/utils/animations';
import { faqs } from '@/app/lib/constants/content';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Everything you need to know about our metal profile sheets and services
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              {/* Question Button */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus-ring"
              >
                <span className="font-semibold text-gray-900 text-base md:text-lg pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-industrial-blue transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5 text-gray-700 text-sm md:text-base leading-relaxed border-t border-gray-100 pt-4"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-industrial-blue text-white font-semibold rounded-xl hover:bg-blue-700 transition-all active:scale-95 min-h-[56px]"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
