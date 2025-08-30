'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface DataItem {
  label: string
  value: string
  accent?: string
}

interface ChipItem {
  name: string
  color: string
}

interface ChecklistItem {
  text: string
  completed: boolean
}

interface InfoCardProps {
  title: string
  data: DataItem[]
  badge?: string
  chips?: ChipItem[]
  isWide?: boolean
  checklist?: ChecklistItem[]
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
        whileHover={{ y: -1, transition: { duration: 0.2 } }}
        className={`bg-zinc-900/70 backdrop-blur border border-white/10 rounded-2xl shadow-lg p-6 ${
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
        whileHover={{ y: -1, transition: { duration: 0.2 } }}
        className={`bg-zinc-900/70 backdrop-blur border border-white/10 rounded-2xl shadow-lg p-6 cursor-pointer group ${
          isWide ? 'col-span-2' : ''
        }`}
        onClick={() => setIsExpanded(true)}
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-white font-bold tracking-tight text-lg">{title}</h3>
          {badge && (
            <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full border border-green-400/30">
              {badge}
            </span>
          )}
        </div>

        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-zinc-400 text-sm">{item.label}</span>
              <span className={`font-semibold text-lg ${item.accent || 'text-white'}`}>{item.value}</span>
            </div>
          ))}
        </div>

        {chips && (
          <div className="flex flex-wrap gap-2 mt-4">
            {chips.map((chip, index) => (
              <span 
                key={index}
                className={`px-3 py-1 rounded-full text-xs font-medium border ${chip.color} bg-black/20`}
              >
                {chip.name}
              </span>
            ))}
          </div>
        )}

        {checklist && (
          <div className="mt-6 space-y-4">
            {checklist.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-sm border-2 flex items-center justify-center ${
                    item.completed 
                      ? 'bg-green-500 border-green-500' 
                      : 'border-zinc-600'
                  }`}>
                    {item.completed && (
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span className={`text-sm ${item.completed ? 'text-zinc-300 line-through' : 'text-zinc-300'}`}>
                    {item.text}
                  </span>
                </div>
                
                {/* Progress bar for phases */}
                {index < 3 && (
                  <div className="w-full bg-zinc-800 rounded-full h-1.5">
                    <div 
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        index === 0 ? 'bg-green-500 w-full' : 
                        index === 1 ? 'bg-blue-500 w-1/3' : 
                        'bg-zinc-600 w-0'
                      }`}
                    />
                  </div>
                )}
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
            className="bg-zinc-900/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-white font-bold text-xl">{title}</h2>
              <button 
                onClick={() => setIsExpanded(false)}
                className="text-zinc-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-zinc-800/50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {data.map((item, index) => (
                  <div key={index} className="bg-zinc-800/30 rounded-xl p-4 border border-white/5">
                    <div className="text-zinc-400 text-sm mb-1">{item.label}</div>
                    <div className={`font-semibold text-lg ${item.accent || 'text-white'}`}>{item.value}</div>
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
