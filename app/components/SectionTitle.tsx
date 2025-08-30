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
      className="flex items-center space-x-3 mb-6"
    >
      <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
        <span className="text-white text-sm">{icon}</span>
      </div>
      <h2 className="text-white font-bold tracking-tight text-xl">{title}</h2>
    </motion.div>
  )
}
