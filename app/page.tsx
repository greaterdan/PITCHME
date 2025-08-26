'use client'

import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="gradient-bg min-h-screen">
      <Navbar />
      <Hero />
      <Pricing />
      <Footer />
    </main>
  )
}
