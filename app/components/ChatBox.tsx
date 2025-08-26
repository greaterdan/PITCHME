'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ChatBox() {
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      // Add message to conversation (UI only for now)
      console.log('Message sent:', message)
      setMessage('')
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky bottom-0 bg-zinc-900/50 backdrop-blur-md border-t border-white/5 p-4"
    >
      <form onSubmit={handleSubmit} className="max-w-[900px] w-full mx-auto">
        <div className="rounded-full bg-black/70 border border-white/10 px-6 py-4 backdrop-blur-xl flex items-center space-x-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask PitchMe anything..."
            className="flex-1 bg-transparent text-white placeholder:text-white/50 text-base md:text-lg outline-none"
          />
          
          <div className="flex items-center space-x-2">
            {/* Model chip */}
            <button
              type="button"
              className="w-8 h-8 rounded-full bg-zinc-800/50 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
            >
              <span className="text-xs">AI</span>
            </button>
            
            {/* Send button */}
            <button
              type="submit"
              disabled={!message.trim()}
              className="w-8 h-8 rounded-full bg-neon-teal/20 border border-neon-teal/30 flex items-center justify-center text-neon-teal hover:bg-neon-teal/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  )
}
