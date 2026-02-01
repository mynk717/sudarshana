"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeInUp, scaleOnHover } from '@/app/lib/utils/animations';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export default function AnimatedCard({ 
  children, 
  className = "", 
  delay = 0,
  hover = true 
}: AnimatedCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      transition={{ delay }}
      whileHover={hover ? "hover" : undefined}
      className={`rounded-2xl bg-white shadow-lg border border-gray-100 ${className}`}
    >
      {children}
    </motion.div>
  );
}
