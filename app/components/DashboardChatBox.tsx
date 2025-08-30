'use client'

import { useState } from 'react'

export default function DashboardChatBox() {
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      console.log('Dashboard message:', message)
      setMessage('')
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative">
        <div className="rounded-full bg-black/70 border border-white/10 px-6 md:px-7 h-[84px] flex items-center">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask PitchMe anything..."
            className="flex-1 bg-transparent text-white placeholder:text-white/50 text-lg outline-none"
          />
          
          <div className="flex items-center space-x-3">
            <button
              type="button"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/15 transition-colors duration-200 flex items-center justify-center"
            >
              <span className="text-white font-bold text-sm">AI</span>
            </button>
            
            <button
              type="submit"
              disabled={!message.trim()}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/15 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
