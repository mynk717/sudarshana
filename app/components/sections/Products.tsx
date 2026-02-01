"use client";

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/app/lib/utils/animations';
import { products } from '@/app/lib/constants/content';
import AnimatedCard from '../ui/AnimatedCard';
import Image from 'next/image';
import { images, imageAlts } from '@/app/lib/constants/images';

export default function Products() {
  return (
    <section id="products" className="py-16 md:py-24 bg-white">
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
            Our Products
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Premium quality metal profile sheets and accessories for every construction need
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {products.map((product, index) => (
            <AnimatedCard 
              key={product.id} 
              delay={index * 0.15}
              className="overflow-hidden group"
            >
              {/* Product Image Placeholder */}
              <div className="aspect-video relative overflow-hidden">
  <Image
    src={product.image}
    alt={product.name}
    fill
    className="object-cover group-hover:scale-105 transition-transform duration-300"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  />
  <div className="absolute inset-0 bg-industrial-blue/0 group-hover:bg-industrial-blue/10 transition-all duration-300"></div>
</div>

              <div className="p-6 md:p-8">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-industrial-orange/10 text-industrial-orange text-xs font-semibold rounded-full mb-3">
                  {product.category}
                </span>

                {/* Product Name */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Specifications */}
                <div className="space-y-2 mb-6 p-4 bg-gray-50 rounded-lg">
                  {product.thickness && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Thickness:</span>
                      <span className="font-semibold text-gray-900">{product.thickness}</span>
                    </div>
                  )}
                  {product.widths && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Widths:</span>
                      <span className="font-semibold text-gray-900">{product.widths}</span>
                    </div>
                  )}
                  {product.colors && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Colors:</span>
                      <span className="font-semibold text-gray-900">{product.colors}</span>
                    </div>
                  )}
                  {product.range && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Range:</span>
                      <span className="font-semibold text-gray-900">{product.range}</span>
                    </div>
                  )}
                  {product.materials && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Materials:</span>
                      <span className="font-semibold text-gray-900">{product.materials}</span>
                    </div>
                  )}
                </div>

                {/* Applications */}
                <div>
                  <p className="text-xs font-semibold text-gray-600 mb-2">Applications:</p>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-industrial-blue text-xs rounded-full"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="mt-6 w-full py-3 bg-industrial-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-all active:scale-95">
                  Get Details
                </button>
              </div>
            </AnimatedCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
