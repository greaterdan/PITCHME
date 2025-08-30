'use client'

import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import SplineBackground from './components/SplineBackground'

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <SplineBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </div>
  )
}
