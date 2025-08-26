'use client'

import { motion } from 'framer-motion'
import ChatBox from './ChatBox'

export default function Hero() {
  const animatedSentences = [
    "Ask PitchMe to start a new business in…",
    "Ask PitchMe to generate a full business model for…",
    "Ask PitchMe to register a business in…",
    "Ask PitchMe to launch a side hustle with…",
    "Ask PitchMe to simulate a full startup journey for…",
    "Ask PitchMe to outline a full launch roadmap for…"
  ]

  const handleSend = (message: string) => {
    console.log('Sending message:', message)
    // Handle the message sending logic here
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-teal/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-lime/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 w-full text-center">
                 {/* Main Headline */}
         <motion.h1 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="font-sora font-bold text-4xl sm:text-5xl lg:text-7xl mb-6 leading-tight"
         >
           Pitch Me your{' '}
           <span className="text-neon-teal">idea</span>
         </motion.h1>

         {/* Subtitle */}
         <motion.p 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
         >
           We'll build it into reality
         </motion.p>

                {/* Grok-style ChatBox */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative mb-12"
        >
          <ChatBox 
            placeholder="Type your idea..."
            onSend={handleSend}
            animatedText={animatedSentences}
          />
        </motion.div>

        

        {/* Floating elements */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-4 h-4 bg-neon-teal/30 rounded-full blur-sm"
        ></motion.div>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 left-10 w-6 h-6 bg-neon-lime/20 rounded-full blur-sm"
        ></motion.div>
      </div>
    </section>
  )
}
