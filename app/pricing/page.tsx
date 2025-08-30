'use client'

import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

export default function PricingPage() {
  return (
    <div className="gradient-bg min-h-screen">
      <Navbar />
      <main className="pt-20 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Pricing />
        </div>
      </main>
      <Footer />
    </div>
  )
}
