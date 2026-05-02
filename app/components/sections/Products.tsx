"use client";

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/app/lib/utils/animations';
import { products, type Product } from '@/app/lib/constants/content';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Layers, Palette, Wrench } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  "Roofing Solutions": <Layers className="w-4 h-4" />,
  "Premium Roofing": <Palette className="w-4 h-4" />,
  "Construction Components": <Wrench className="w-4 h-4" />,
};

export default function Products() {
  return (
    <section id="products" className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-primary/10 text-brand-primary text-sm font-semibold rounded-full mb-4"
          >
            Our Products
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight"
          >
            Premium Quality Products
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Roofing sheets and accessories engineered for durability, strength, and lasting value.
          </motion.p>
        </motion.div>

        {/* Products — Stacked on mobile, grid on larger */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8"
        >
          {products.map((product: Product, index: number) => (
            <motion.div
              key={product.id}
              variants={fadeInUp}
              custom={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 active:scale-[0.99] transition-transform duration-150"
            >
              {/* Image */}
              <div className="relative w-full h-52 sm:h-48 overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-primary text-xs font-semibold rounded-full shadow-sm">
                    {categoryIcons[product.category]}
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="font-display text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-snug">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed line-clamp-2">
                  {product.description}
                </p>

                {/* Specs — only colors pill remains (thickness & warranty removed) */}
                {product.colors && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-orange-50 text-orange-700 text-xs font-medium rounded-full">
                      {product.colors}
                    </span>
                  </div>
                )}

                {/* Applications */}
                <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-5">
                  {product.applications.slice(0, 4).map((app, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary flex-shrink-0" />
                      <span className="text-xs text-gray-600 truncate">{app}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full py-3 bg-brand-primary text-white font-semibold text-sm rounded-xl hover:bg-brand-primary/90 active:scale-95 transition-all flex items-center justify-center gap-2 group">
                  Get Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}