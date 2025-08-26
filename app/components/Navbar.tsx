'use client'

import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Far Left */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <span className="font-sora font-bold text-xl text-white">PitchMe</span>
          </motion.div>

          {/* Navigation Links - Far Right */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.a 
              href="#features"
              whileHover={{ color: '#00f5d4' }}
              className="text-gray-300 hover:text-neon-teal transition-colors duration-300"
            >
              Features
            </motion.a>
            <motion.a 
              href="#pricing"
              whileHover={{ color: '#00f5d4' }}
              className="text-gray-300 hover:text-neon-teal transition-colors duration-300"
            >
              Pricing
            </motion.a>
            <motion.a 
              href="#community"
              whileHover={{ color: '#00f5d4' }}
              className="text-gray-300 hover:text-neon-teal transition-colors duration-300"
            >
              Community
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-teal-lime text-black px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-neon-teal/25 transition-all duration-300"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
