'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Modal from './Modal'

interface ChatBoxProps {
  placeholder?: string
  onSend?: (message: string) => void
  animatedText?: string[]
}

export default function ChatBox({ 
  placeholder = "Type your idea...", 
  onSend,
  animatedText = []
}: ChatBoxProps) {
  const [inputValue, setInputValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [animatedDisplayText, setAnimatedDisplayText] = useState('')
  const [userTyping, setUserTyping] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const chatboxRef = useRef<HTMLDivElement>(null)

  // Animated text effect
  useEffect(() => {
    if (userTyping || animatedText.length === 0) return

    let timeout: NodeJS.Timeout

    const typeText = async () => {
      const currentSentence = animatedText[currentTextIndex]
      
      // Type out the text
      for (let i = 0; i <= currentSentence.length; i++) {
        if (userTyping) return
        await new Promise(resolve => {
          timeout = setTimeout(resolve, 50)
        })
        setAnimatedDisplayText(currentSentence.slice(0, i))
      }

      // Wait before starting to delete
      await new Promise(resolve => {
        timeout = setTimeout(resolve, 2000)
      })

      // Delete the text
      for (let i = currentSentence.length; i >= 0; i--) {
        if (userTyping) return
        await new Promise(resolve => {
          timeout = setTimeout(resolve, 30)
        })
        setAnimatedDisplayText(currentSentence.slice(0, i))
      }

      // Move to next sentence
      setCurrentTextIndex((prev) => (prev + 1) % animatedText.length)
    }

    typeText()

    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [currentTextIndex, userTyping, animatedText])

  // Handle clicks outside the chatbox to restart animation
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatboxRef.current && !chatboxRef.current.contains(event.target as Node)) {
        // User clicked outside the chatbox, restart animation
        setUserTyping(false)
        setInputValue('')
        setCurrentTextIndex(0)
        setAnimatedDisplayText('')
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
    
    // Once user starts typing, keep userTyping true even if they delete everything
    if (value.length > 0) {
      setUserTyping(true)
      setAnimatedDisplayText('') // Clear animated text when user types
    }
    // Don't set userTyping to false when input is empty - keep it true once user has interacted
  }

  const handleInputFocus = () => {
    setIsFocused(true)
    setUserTyping(true)
    setInputValue('')
    setAnimatedDisplayText('') // Clear animated text when user focuses
  }

  const handleInputBlur = () => {
    setIsFocused(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleSend = () => {
    // Only send if user has actually typed something (not animated text)
    if (userTyping && inputValue.trim()) {
      if (onSend) {
        onSend(inputValue.trim())
      }
      setInputValue('')
      setUserTyping(false)
      setIsModalOpen(true)
    }
  }

  const displayText = userTyping ? inputValue : (animatedDisplayText || '')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full max-w-4xl mx-auto"
    >
      <div 
        ref={chatboxRef}
        className={`
          relative w-full h-32 md:h-36 rounded-3xl
          bg-[#272725] backdrop-blur-sm
          border border-gray-700
          transition-all duration-300 ease-out
          ${isFocused ? 'border-gray-600' : ''}
        `}
      >
        <div className="relative flex flex-col h-full px-6">
          {/* Input field at top */}
          <div className="flex-1 relative pt-4">
            <input
              ref={inputRef}
              type="text"
              value={userTyping ? inputValue : ''}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              onKeyDown={handleKeyDown}
              placeholder=""
              aria-label="Message PitchMe"
              className="w-full bg-transparent text-lg text-gray-200 outline-none border-none"
            />

            {/* Animated text - only show when user is not typing and no input */}
            {!userTyping && inputValue === '' && (
              <span className="absolute top-4 left-0 text-lg text-gray-400 pointer-events-none">
                {animatedDisplayText}
                <span className="inline-block w-0.5 h-5 bg-white animate-pulse ml-1"></span>
              </span>
            )}
          </div>

          {/* Buttons at bottom */}
          <div className="flex items-center justify-end space-x-3 pb-4">
            {/* Grok G button */}
            <button className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-600 transition-colors duration-200">
              <span className="text-white font-bold text-lg">G</span>
            </button>
            
            {/* Send button */}
            <motion.button
              whileHover={userTyping && inputValue.trim() ? { scale: 1.05 } : {}}
              whileTap={userTyping && inputValue.trim() ? { scale: 0.95 } : {}}
              onClick={handleSend}
              disabled={!userTyping || !inputValue.trim()}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                userTyping && inputValue.trim() 
                  ? 'bg-gray-700 hover:bg-gray-600 cursor-pointer' 
                  : 'bg-gray-800 cursor-not-allowed opacity-50'
              }`}
              aria-label="Send"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </motion.div>
  )
}
