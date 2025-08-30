'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const summaryTabs = [
  { id: 'model', label: 'Model', color: 'from-blue-500 to-blue-600' },
  { id: 'audience', label: 'Audience', color: 'from-green-500 to-green-600' },
  { id: 'pricing', label: 'Pricing', color: 'from-purple-500 to-purple-600' },
  { id: 'gtm', label: 'GTM', color: 'from-orange-500 to-orange-600' },
  { id: 'ops', label: 'Ops', color: 'from-red-500 to-red-600' },
  { id: 'legal', label: 'Legal', color: 'from-yellow-500 to-yellow-600' },
  { id: 'risks', label: 'Risks', color: 'from-pink-500 to-pink-600' },
  { id: 'metrics', label: 'Metrics', color: 'from-teal-500 to-teal-600' }
]

const summaryContent = {
  model: "SaaS subscription model with freemium tier. Primary revenue from monthly subscriptions targeting micro-businesses.",
  audience: "Small business owners (1-10 employees) who need simple inventory management. Focus on ease of use over feature complexity.",
  pricing: "Free: 100 items, $29/month: 1,000 items, $79/month: Unlimited. Targets underserved micro-business segment.",
  gtm: "Digital-first approach: Content marketing, SEO, and partnerships with accounting software. Free trial to reduce friction.",
  ops: "Cloud-based infrastructure with automated onboarding. Customer support via chat and email. Minimal human intervention.",
  legal: "Standard SaaS terms, GDPR compliance, data protection policies. Clear refund and cancellation policies.",
  risks: "Market saturation, large competitors, customer acquisition costs. Mitigation through niche focus and superior UX.",
  metrics: "MRR growth, churn rate, CAC, LTV. Target 5% monthly growth, <5% churn, CAC payback <12 months."
}

export default function SummaryPanel() {
  const [activeTab, setActiveTab] = useState('model')

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-zinc-900/70 backdrop-blur border border-white/10 rounded-2xl shadow-lg h-[52vh] flex flex-col"
    >
      {/* Header */}
      <div className="p-6 border-b border-white/5">
        <h3 className="text-white font-bold tracking-tight text-lg mb-4">Conclusion / Solution</h3>
        
        {/* Tabs */}
        <div className="flex flex-wrap gap-2">
          {summaryTabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                activeTab === tab.id 
                  ? `bg-gradient-to-r ${tab.color} text-white border-transparent shadow-lg` 
                  : 'bg-zinc-800/50 text-zinc-400 border-white/10 hover:text-white hover:bg-zinc-700/50'
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 space-y-6">
        {/* Active Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-800/30 rounded-xl p-4 border border-white/5"
        >
          <h4 className="text-white font-bold mb-3 capitalize">{activeTab}</h4>
          <p className="text-zinc-300 text-sm leading-relaxed">
            {summaryContent[activeTab as keyof typeof summaryContent]}
          </p>
        </motion.div>

        {/* Mind-map placeholder */}
        <div className="flex-1 bg-zinc-800/20 rounded-xl border border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-30" />
          
          {/* Dotted grid background */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(0,245,212,0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(0,245,212,0.1) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(0,245,212,0.05) 0%, transparent 70%)
            `,
            backgroundSize: '200px 200px, 150px 150px, 100px 100px'
          }} />
          
          {/* Dotted connections */}
          <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.3 }}>
            <defs>
              <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.3)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
            
            {/* Connection lines */}
            <path 
              d="M 50 30 Q 150 50 250 70 Q 350 90 450 110" 
              stroke="rgba(0,245,212,0.2)" 
              strokeWidth="1" 
              fill="none" 
              strokeDasharray="5,5"
            />
            <path 
              d="M 100 150 Q 200 130 300 110 Q 400 90 500 70" 
              stroke="rgba(0,245,212,0.2)" 
              strokeWidth="1" 
              fill="none" 
              strokeDasharray="5,5"
            />
          </svg>
          
          <div className="relative z-10 p-6 flex items-center justify-center h-full">
            <div className="text-center">
              <div className="text-zinc-500 text-sm mb-2 font-medium">Mind Map Visualization</div>
              <div className="text-zinc-600 text-xs">Connections between business elements</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
