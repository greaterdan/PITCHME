'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn, useSession } from 'next-auth/react'
import ChatBox from '../components/ChatBox'

export default function SignupPage() {
  const { data: session } = useSession()
  const router = useRouter()
  
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
  }

  const handleGoogleSignIn = () => {
    // For now, just navigate to dashboard (Google Auth is on pause)
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Create Account Form */}
      <div className="w-1/2 bg-black relative overflow-hidden">
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black to-gray-800/30 z-0" />
        
        {/* Grain noise overlay for texture */}
        <div 
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '128px 128px',
            mixBlendMode: 'overlay'
          }}
        />
        
        {/* Additional fine grain for more texture */}
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grainFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grainFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '64px 64px',
            mixBlendMode: 'multiply'
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full p-6">
          <div className="max-w-sm w-full">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="w-6 h-6 bg-gradient-to-br from-pink-400 via-orange-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">❤</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-xl font-bold text-white text-center mb-6">
              Create your account
            </h1>

            {/* Social Login Buttons */}
            <div className="space-y-3 mb-4">
              <button 
                onClick={handleGoogleSignIn}
                className="w-full bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-3 text-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Continue with Google</span>
              </button>
              
              <button 
                onClick={() => signIn('github', { callbackUrl: '/dashboard' })}
                className="w-full bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-3 text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>Continue with GitHub</span>
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center mb-4">
              <div className="flex-1 border-t border-gray-700"></div>
              <span className="px-4 text-gray-400 text-sm">OR</span>
              <div className="flex-1 border-t border-gray-700"></div>
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-colors duration-200 text-sm"
              />
            </div>

            {/* Terms Checkbox */}
            <div className="mb-4">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-700 rounded focus:ring-blue-500 focus:ring-2"
                />
                <span className="text-gray-300 text-xs">
                  I agree to our{' '}
                  <a href="#" className="text-white underline hover:no-underline">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-white underline hover:no-underline">Privacy Policy</a>
                </span>
              </label>
            </div>

            {/* Continue Button */}
            <button className="w-full bg-white hover:bg-gray-100 text-gray-900 font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 mb-4 text-sm">
              Continue
            </button>

            {/* Login link */}
            <p className="text-center text-gray-400 text-sm">
              Already have an account?{' '}
              <Link href="/" className="text-white underline hover:no-underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Spline Background with Chatbox */}
      <div className="w-1/2 relative overflow-hidden">
        {/* Spline Background - Only for this half */}
        <div className="absolute inset-0">
          {/* Pure black base */}
          <div className="absolute inset-0 bg-black z-0" />
          
          {/* Spline iframe - only for right half */}
          <iframe 
            src='https://my.spline.design/claritystream-UpsazBK64iFZEuotRhmmhGi0/' 
            frameBorder='0' 
            className="absolute inset-0 w-full h-full z-10"
            style={{ 
              pointerEvents: 'none'
            }}
          />
          
          {/* Noise overlay */}
          <div 
            className="absolute inset-0 z-5 opacity-80"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: '64px 64px',
              mixBlendMode: 'overlay'
            }}
          />
          
          {/* Additional grain layer */}
          <div 
            className="absolute inset-0 z-5 opacity-60"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grainFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.0' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grainFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: '32px 32px',
              mixBlendMode: 'multiply'
            }}
          />
          
          {/* Overlay to hide Spline attribution badge */}
          <div 
            className="absolute bottom-4 right-4 w-40 h-10 bg-black z-30 rounded"
          />
        </div>
        
        {/* Chatbox */}
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="w-full max-w-md">
            <ChatBox 
              placeholder="Type your idea..."
            />
          </div>
        </div>
      </div>
    </div>
  )
}
