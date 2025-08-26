'use client'

import { motion } from 'framer-motion'

interface SectionTitleProps {
  icon: string
  title: string
}

export default function SectionTitle({ icon, title }: SectionTitleProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center space-x-2 mb-4"
    >
      <span className="text-lg">{icon}</span>
      <h2 className="text-white font-semibold tracking-tight text-lg">{title}</h2>
    </motion.div>
  )
}
