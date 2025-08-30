'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  title: string
  children: ReactNode
  className?: string
}

export default function Card({ title, children, className = '' }: CardProps) {
  return (
    <motion.div 
      whileHover={{ y: -0.5, transition: { duration: 0.2 } }}
      className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-[28px] shadow-[0_8px_30px_rgba(0,0,0,0.35)] p-6 hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)] transition-all duration-300 ${className}`}
    >
      <h3 className="text-white font-semibold text-lg mb-4">{title}</h3>
      {children}
    </motion.div>
  )
}
