"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { staggerContainer, fadeInUp } from '@/app/lib/utils/animations';
import { faqs } from '@/app/lib/constants/content';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-gray-50">
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
            className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary text-sm font-semibold rounded-full mb-4"
          >
            FAQ
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Everything you need to know about our metal profile sheets
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
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
            >
              {/* Question Button */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-heading font-semibold text-gray-900 text-base md:text-lg pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-brand-primary transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100 pt-4"
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
            className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-primary text-black font-semibold rounded-lg shadow-md hover:bg-brand-primary/90 hover:shadow-lg transition-all active:scale-95"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
