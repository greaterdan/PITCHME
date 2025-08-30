'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import Modal from './Modal'

export default function Navbar() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            {/* Logo - Far Left */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <Link href="/" className="font-sora font-bold text-lg text-white">
                PitchMe
              </Link>
            </motion.div>

            {/* Navigation Links - Far Right */}
            <div className="hidden md:flex items-center space-x-6">
              <motion.a 
                href="#features"
                whileHover={{ color: '#00f5d4' }}
                className="text-gray-300 hover:text-neon-teal transition-colors duration-300 text-sm"
              >
                Features
              </motion.a>
              <motion.div
                whileHover={{ color: '#00f5d4' }}
              >
                <Link 
                  href="/pricing"
                  className="text-gray-300 hover:text-neon-teal transition-colors duration-300 text-sm"
                >
                  Pricing
                </Link>
              </motion.div>
              <motion.a 
                href="#community"
                whileHover={{ color: '#00f5d4' }}
                className="text-gray-300 hover:text-neon-teal transition-colors duration-300 text-sm"
              >
                Community
              </motion.a>
              <motion.button
                onClick={() => setShowModal(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-neon-teal to-neon-lime text-black px-4 py-1.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-neon-teal/25 transition-all duration-300 text-sm"
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
      )}
    </>
  )
}
