"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { fadeInUp, slideInLeft, slideInRight } from '@/app/lib/utils/animations';
import { heroContent } from '@/app/lib/constants/content';
import Image from 'next/image';
import { images } from '@/app/lib/constants/images';
import { ArrowRight, Phone } from 'lucide-react';

const allSlides = [images.hero.main, ...images.hero.slides];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % allSlides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // FIND and REPLACE the entire slideVariants object:

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: 'easeInOut' as const },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? '-100%' : '100%',
    opacity: 0,
    transition: { duration: 0.5, ease: 'easeInOut' as const },
  }),
};
  return (
    <section id="home" className="relative bg-[#f5f1eb] overflow-hidden min-h-[85vh] lg:min-h-[90vh] flex flex-col">

      {/* ── MOBILE: Stacked layout ── */}
      <div className="lg:hidden flex flex-col flex-1">

        {/* Image first on mobile — full width, cinematic */}
        <div className="relative w-full h-[52vw] min-h-[220px] max-h-[360px] overflow-hidden">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              <Image
                src={allSlides[currentSlide]}
                alt={`Sudarshana roofing ${currentSlide + 1}`}
                fill
                priority={currentSlide === 0}
                className={currentSlide === 0 ? "object-contain bg-white" : "object-cover"}
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Gradient fade into cream background */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#f5f1eb] to-transparent" />

          {/* Slide dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {allSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === currentSlide
                    ? 'w-5 h-2 bg-brand-primary'
                    : 'w-2 h-2 bg-gray-400/60 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Text below image on mobile */}
        <div className="flex flex-col justify-center px-5 pt-5 pb-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-primary mb-3"
          >
            Raipur, Chhattisgarh
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-[2.1rem] font-bold text-gray-900 leading-[1.08] tracking-tight mb-4"
          >
{heroContent.headline}
</motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-gray-500 leading-relaxed mb-6 max-w-sm"
          >
            Authorised dealer of TATA Steel & APL Apollo. Custom colour-coated sheets for homes, sheds, warehouses — delivered PAN India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-3"
          >
            <a
              href="#contact"
              className="inline-flex min-h-[50px] items-center justify-center px-6 bg-brand-primary text-black font-semibold rounded-xl active:scale-[0.97] transition-all gap-2 group text-sm"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+917000892760"
              className="inline-flex min-h-[50px] items-center justify-center px-6 bg-white text-gray-900 font-semibold rounded-xl border border-gray-200 active:scale-[0.97] transition-all gap-2 text-sm"
            >
              <Phone className="w-4 h-4" />
              +91 70008 92760
            </a>
          </motion.div>
        </div>

        {/* Mobile proof strip */}
        <div className="grid grid-cols-3 border-t border-gray-200 mt-auto">
          {[
            { value: '500+', label: 'Projects' },
            { value: 'TATA & APL', label: 'Authorised' },
            { value: 'PAN India', label: 'Delivery' },
          ].map((stat, i) => (
            <div key={i} className={`py-4 text-center ${i < 2 ? 'border-r border-gray-200' : ''}`}>
              <p className="text-sm font-bold text-gray-900">{stat.value}</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-wide mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP: Diagonal split ── */}
      <div className="hidden lg:flex flex-1 items-stretch min-h-[90vh]">

        {/* Left: Text */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInLeft}
          className="relative z-10 flex flex-col justify-center w-[50%] xl:w-[48%] px-12 xl:px-20 2xl:px-28 py-24"
        >
          <motion.p variants={fadeInUp} className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary mb-5">
            Raipur, Chhattisgarh
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="font-heading text-[clamp(2.8rem,4vw,4.2rem)] font-bold text-gray-900 leading-[1.05] tracking-tight mb-6"
          >
{heroContent.headline}
</motion.h1>

          <motion.p variants={fadeInUp} className="text-base xl:text-lg text-gray-500 leading-relaxed max-w-md mb-10">
          {heroContent.subheadline}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex gap-4 mb-14">
            <a
              href="#contact"
              className="inline-flex min-h-[50px] items-center justify-center px-7 bg-brand-primary text-black font-semibold rounded-xl hover:bg-brand-primary/90 active:scale-[0.97] transition-all gap-2 group text-sm"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+917000892760"
              className="inline-flex min-h-[50px] items-center justify-center px-7 bg-white text-gray-900 font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 active:scale-[0.97] transition-all gap-2 text-sm"
            >
              <Phone className="w-4 h-4" />
              +91 70008 92760
            </a>
          </motion.div>

          {/* Stat row */}
          <motion.div variants={fadeInUp} className="flex gap-10 pt-7 border-t border-gray-200">
            {[
              { value: '500+', label: 'Projects Done' },
              { value: 'PAN India', label: 'Delivery' },
              { value: '100%', label: 'Quality Assured' },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-2xl font-bold text-gray-900">{s.value}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wide mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Diagonal image with animated slider */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInRight}
          className="absolute right-0 top-0 bottom-0 w-[56%]"
          style={{ clipPath: 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
        >
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              <Image
                src={allSlides[currentSlide]}
                alt={`Sudarshana roofing solution ${currentSlide + 1}`}
                fill
                priority={currentSlide === 0}
                className={currentSlide === 0 ? "object-contain bg-gray-50" : "object-cover"}
                sizes="56vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Blend with left panel */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f5f1eb]/70 via-transparent to-transparent pointer-events-none" />

          {/* Slide dots */}
          <div className="absolute bottom-8 right-10 flex gap-2 z-10">
            {allSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === currentSlide
                    ? 'w-6 h-2.5 bg-brand-primary shadow-sm'
                    : 'w-2.5 h-2.5 bg-white/50 hover:bg-white'
                }`}
              />
            ))}
          </div>

          {/* Slide counter */}
          <div className="absolute top-8 right-10 z-10">
            <span className="text-white/60 text-xs font-mono tabular-nums">
              {String(currentSlide + 1).padStart(2, '0')} / {String(allSlides.length).padStart(2, '0')}
            </span>
          </div>
        </motion.div>

      </div>

    </section>
  );
}