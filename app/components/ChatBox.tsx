'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Modal from './Modal'

export default function ChatBox({ placeholder = "Type your idea..." }: { placeholder?: string }) {
  const [message, setMessage] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [userTyping, setUserTyping] = useState(false)
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const animatedSentences = [
    "Ask PitchMe to start a new business in...",
    "Ask PitchMe to generate a full business model for...",
    "Ask PitchMe to register a business in...",
    "Ask PitchMe to launch a side hustle with...",
    "Ask PitchMe to simulate a full startup journey for...",
    "Ask PitchMe to outline a full launch roadmap for..."
  ]

  useEffect(() => {
    if (userTyping) return

    const currentSentence = animatedSentences[currentSentenceIndex]
    
    if (!isDeleting) {
      if (displayText.length < currentSentence.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentSentence.slice(0, displayText.length + 1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true)
        }, 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 30)
        return () => clearTimeout(timeout)
      } else {
        setIsDeleting(false)
        setCurrentSentenceIndex((prev) => (prev + 1) % animatedSentences.length)
      }
    }
  }, [displayText, isDeleting, currentSentenceIndex, userTyping, animatedSentences])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setMessage(value)
    setUserTyping(true)
  }

  const handleFocus = () => {
    setUserTyping(true)
  }

  const handleBlur = () => {
    if (message.length === 0) {
      setUserTyping(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      setShowModal(true)
      setMessage('')
      setUserTyping(false)
    }
  }

  const handleClickOnText = () => {
    setUserTyping(true)
    setTimeout(() => inputRef.current?.focus(), 0)
  }

  const handleClickOutside = () => {
    if (message.length === 0) {
      setUserTyping(false)
    }
  }

  const handleFormClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl mx-auto"
        onClick={handleClickOutside}
      >
        <form onSubmit={handleSubmit} className="relative" onClick={handleFormClick}>
          <div className="rounded-2xl bg-[#272725] border border-gray-700 px-6 md:px-7 h-32 md:h-36 flex flex-col justify-between relative">
            {/* Text input area - top */}
            <div className="flex-1 flex items-start pt-4">
              <div className="flex-1">
                {userTyping ? (
                  <input
                    ref={inputRef}
                    type="text"
                    value={message}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder={placeholder}
                    className="w-full bg-transparent text-white placeholder:text-white/50 text-lg outline-none text-left"
                    autoFocus
                  />
                ) : (
                  <div 
                    className="w-full bg-transparent text-white/50 text-lg outline-none text-left cursor-text"
                    onClick={handleClickOnText}
                  >
                    {displayText}
                    <span className="animate-pulse">|</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Buttons - bottom right */}
            <div className="flex items-center justify-end space-x-3 pb-4">
              <button
                type="button"
                className="w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-200 flex items-center justify-center"
              >
                <span className="text-black font-bold text-sm">G</span>
              </button>
              
              <button
                type="submit"
                disabled={!message.trim()}
                className="w-10 h-10 rounded-full bg-gray-600 hover:bg-gray-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </motion.div>

      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
      )}
    </>
  )
}
