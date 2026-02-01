"use client";

import { motion } from 'framer-motion';
import { fadeInUp, slideInLeft, slideInRight } from '@/app/lib/utils/animations';
import { heroContent, businessInfo } from '@/app/lib/constants/content';
import Image from 'next/image';
import { images } from '@/app/lib/constants/images';
import { ArrowRight, Shield, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(30deg, #1e40af 12%, transparent 12.5%, transparent 87%, #1e40af 87.5%, #1e40af),
                           linear-gradient(150deg, #1e40af 12%, transparent 12.5%, transparent 87%, #1e40af 87.5%, #1e40af)`,
          backgroundSize: '80px 140px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInLeft}
          >
            {/* Trust Badge */}
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full mb-6 border border-green-100"
            >
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">15+ Years Warranty • ISO Certified</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              variants={fadeInUp}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight"
            >
              {heroContent.headline}
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl"
            >
              {heroContent.subheadline}
            </motion.p>

            {/* Key Features */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap gap-4 mb-8"
            >
              {[
                'Custom Dimensions',
                'Rust Protection',
                'PAN India Service'
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary text-black font-semibold rounded-lg shadow-lg hover:bg-brand-primary/90 hover:shadow-xl transition-all active:scale-95 gap-2 group"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-primary font-semibold rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95 border-2 border-brand-primary"
              >
                View Products
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200"
            >
              <div>
                <p className="text-3xl font-bold text-brand-primary">500+</p>
                <p className="text-sm text-gray-600 mt-1">Projects Done</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-primary">15+</p>
                <p className="text-sm text-gray-600 mt-1">Years Warranty</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-primary">100%</p>
                <p className="text-sm text-gray-600 mt-1">Quality</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            className="hidden lg:block relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={images.hero.main}
                alt="Custom trapezoidal colour-coated metal profile sheets"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 0vw, 50vw"
              />
              
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 right-8 bg-white p-5 rounded-xl shadow-lg"
              >
                <p className="text-3xl font-bold text-brand-primary">15+</p>
                <p className="text-xs text-gray-600 font-medium">Years Warranty</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
