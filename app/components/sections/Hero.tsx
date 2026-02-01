"use client";

import { motion } from 'framer-motion';
import { fadeInUp, slideInLeft, slideInRight } from '@/app/lib/utils/animations';
import { heroContent, businessInfo } from '@/app/lib/constants/content';
import Image from 'next/image';
import { images } from '@/app/lib/constants/images';


export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(30deg, #1e40af 12%, transparent 12.5%, transparent 87%, #1e40af 87.5%, #1e40af), linear-gradient(150deg, #1e40af 12%, transparent 12.5%, transparent 87%, #1e40af 87.5%, #1e40af)',
          backgroundSize: '80px 140px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Mobile First */}
          <motion.div
  initial="hidden"
  animate="visible"
  variants={slideInRight}
  className="hidden lg:block relative"
>
  <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
    <Image
      src={images.hero.main}
      alt="Custom trapezoidal colour-coated metal profile sheets"
      fill
      className="object-cover"
      priority
      sizes="(max-width: 1024px) 0vw, 50vw"
      unoptimized={false}
    />
    
    {/* Floating Badge */}
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="absolute top-8 right-8 bg-white p-4 rounded-xl shadow-lg"
    >
      <p className="text-2xl font-bold text-industrial-blue">15+</p>
      <p className="text-xs text-gray-600">Years Warranty</p>
    </motion.div>
  </div>
</motion.div>

          {/* Right Visual - Image Placeholder */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-industrial-blue to-industrial-orange rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <p className="text-6xl mb-4">🏗️</p>
                  <p className="text-2xl font-bold">Premium Quality</p>
                  <p className="text-lg">Metal Solutions</p>
                </div>
              </div>
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-xl"
              >
                <p className="text-3xl">✓</p>
                <p className="text-xs font-semibold">ISO Certified</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
