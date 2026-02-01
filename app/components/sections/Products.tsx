"use client";

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/app/lib/utils/animations';
import { products } from '@/app/lib/constants/content';
import AnimatedCard from '../ui/AnimatedCard';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Products() {
  return (
    <section id="products" className="py-20 md:py-28 lg:py-32 bg-white">
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
            className="inline-block px-4 py-1.5 bg-brand-secondary/10 text-brand-secondary text-sm font-semibold rounded-full mb-4"
          >
            Our Products
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight"
          >
            Premium Quality Products
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Metal profile sheets and accessories for every construction need
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <AnimatedCard 
              key={product.id} 
              delay={index * 0.15}
              className="overflow-hidden group bg-white"
            >
              {/* Product Image */}
              <div className="aspect-video relative overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-semibold rounded-full mb-3">
                  {product.category}
                </span>

                {/* Product Name */}
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 tracking-tight">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-5 leading-relaxed line-clamp-3">
                  {product.description}
                </p>

                {/* Specifications */}
                <div className="space-y-2 mb-5 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  {product.thickness && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 font-medium">Thickness</span>
                      <span className="font-semibold text-gray-900">{product.thickness}</span>
                    </div>
                  )}
                  {product.widths && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 font-medium">Widths</span>
                      <span className="font-semibold text-gray-900">{product.widths}</span>
                    </div>
                  )}
                  {product.colors && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 font-medium">Colors</span>
                      <span className="font-semibold text-gray-900">{product.colors}</span>
                    </div>
                  )}
                  {product.warranty && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 font-medium">Warranty</span>
                      <span className="font-semibold text-brand-secondary">{product.warranty}</span>
                    </div>
                  )}
                </div>

                {/* Applications */}
                <div className="mb-5">
                  <p className="text-xs font-semibold text-gray-600 mb-2">Applications</p>
                  <div className="flex flex-wrap gap-1.5">
                    {product.applications.slice(0, 3).map((app, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-blue-50 text-brand-primary text-xs rounded-md">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full py-3 bg-brand-primary text-white font-semibold text-sm rounded-lg hover:bg-brand-primary/90 transition-all active:scale-95 flex items-center justify-center gap-2 group">
                  Get Details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </AnimatedCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
