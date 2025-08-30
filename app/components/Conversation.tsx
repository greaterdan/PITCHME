'use client'

import { motion } from 'framer-motion'

interface Message {
  id: number
  text: string
  isUser: boolean
  timestamp: string
}

const sampleMessages: Message[] = [
  {
    id: 1,
    text: "I want to build a SaaS platform for small businesses to manage their inventory and sales.",
    isUser: true,
    timestamp: "2:30 PM"
  },
  {
    id: 2,
    text: "Great idea! Let me analyze the market opportunity and create a comprehensive business plan for your inventory management SaaS.",
    isUser: false,
    timestamp: "2:31 PM"
  },
  {
    id: 3,
    text: "What's the target market size and who are the main competitors?",
    isUser: true,
    timestamp: "2:32 PM"
  },
  {
    id: 4,
    text: "The global inventory management market is valued at $2.4B with 24% YoY growth. Key competitors include QuickBooks, Zoho, and Square. Your opportunity lies in targeting micro-businesses (1-10 employees) who find existing solutions too complex.",
    isUser: false,
    timestamp: "2:33 PM"
  },
  {
    id: 5,
    text: "What should be the pricing strategy?",
    isUser: true,
    timestamp: "2:35 PM"
  },
  {
    id: 6,
    text: "I recommend a freemium model: Free tier for up to 100 items, $29/month for up to 1,000 items, and $79/month for unlimited. This targets the underserved micro-business segment while providing clear upgrade paths.",
    isUser: false,
    timestamp: "2:36 PM"
  }
]

export default function Conversation() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-zinc-900/70 backdrop-blur border border-white/10 rounded-2xl shadow-lg h-[52vh] flex flex-col"
    >
      {/* Header */}
      <div className="p-6 border-b border-white/5">
        <h3 className="text-white font-bold tracking-tight text-lg">Conversation</h3>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {sampleMessages.map((message, index) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] ${message.isUser ? 'order-2' : 'order-1'}`}>
              <div className={`rounded-2xl px-4 py-3 shadow-sm ${
                message.isUser 
                  ? 'bg-gradient-to-r from-teal-400 to-blue-500 text-black' 
                  : 'bg-zinc-800/50 border border-white/10 text-zinc-300'
              }`}>
                <p className="text-sm leading-relaxed font-medium">{message.text}</p>
              </div>
              <div className={`text-xs text-zinc-500 mt-2 ${
                message.isUser ? 'text-right' : 'text-left'
              }`}>
                {message.timestamp}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
