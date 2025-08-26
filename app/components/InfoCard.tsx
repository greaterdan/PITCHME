'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface DataItem {
  label: string
  value: string
}

interface InfoCardProps {
  title: string
  data: DataItem[]
  badge?: string
  chips?: string[]
  isWide?: boolean
  checklist?: string[]
  loading?: boolean
}

export default function InfoCard({ 
  title, 
  data, 
  badge, 
  chips, 
  isWide = false, 
  checklist,
  loading = false 
}: InfoCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  if (loading) {
    return (
      <motion.div 
        whileHover={{ y: -2, transition: { duration: 0.2 } }}
        className={`bg-zinc-900/70 backdrop-blur-md border border-white/10 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-6 ${
          isWide ? 'col-span-2' : ''
        }`}
      >
        <div className="animate-pulse">
          <div className="h-4 bg-zinc-700 rounded mb-4"></div>
          <div className="space-y-3">
            <div className="h-3 bg-zinc-700 rounded"></div>
            <div className="h-3 bg-zinc-700 rounded"></div>
            <div className="h-3 bg-zinc-700 rounded"></div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <>
      <motion.div 
        whileHover={{ y: -2, transition: { duration: 0.2 } }}
        className={`bg-zinc-900/70 backdrop-blur-md border border-white/10 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-6 cursor-pointer ${
          isWide ? 'col-span-2' : ''
        }`}
        onClick={() => setIsExpanded(true)}
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-white font-semibold tracking-tight">{title}</h3>
          {badge && (
            <span className="bg-neon-teal/20 text-neon-teal text-xs px-2 py-1 rounded-full">
              {badge}
            </span>
          )}
        </div>

        <div className="space-y-3">
          {data.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-zinc-400 text-sm">{item.label}</span>
              <span className="text-zinc-300 font-medium">{item.value}</span>
            </div>
          ))}
        </div>

        {chips && (
          <div className="flex flex-wrap gap-2 mt-4">
            {chips.map((chip, index) => (
              <span 
                key={index}
                className="bg-zinc-800/50 text-zinc-300 text-xs px-2 py-1 rounded-full border border-white/10"
              >
                {chip}
              </span>
            ))}
          </div>
        )}

        {checklist && (
          <div className="mt-4 space-y-2">
            {checklist.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-4 h-4 border border-zinc-600 rounded-sm"></div>
                <span className="text-zinc-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Modal for expanded view */}
      {isExpanded && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-zinc-900/95 backdrop-blur-md border border-white/10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-white font-semibold text-xl">{title}</h2>
              <button 
                onClick={() => setIsExpanded(false)}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {data.map((item, index) => (
                  <div key={index} className="bg-zinc-800/30 rounded-xl p-4">
                    <div className="text-zinc-400 text-sm mb-1">{item.label}</div>
                    <div className="text-white font-medium">{item.value}</div>
                  </div>
                ))}
              </div>
              
              <div className="text-zinc-300 text-sm leading-relaxed">
                <p>This is a detailed view of the {title.toLowerCase()} information. Here you would see comprehensive data, charts, and insights related to this business aspect.</p>
                <p className="mt-4">Additional context and analysis would be displayed here, including trends, recommendations, and actionable insights.</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}
