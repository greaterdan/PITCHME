'use client'

import { motion } from 'framer-motion'

const communityExamples = [
  {
    id: 1,
    title: "EcoTech Solutions",
    description: "Sustainable tech startup that went from concept to $50K revenue in 3 months",
    category: "SaaS",
    revenue: "$50K",
    timeframe: "3 months",
    gradient: "from-neon-teal/20 to-neon-lime/20"
  },
  {
    id: 2,
    title: "HealthFlow",
    description: "AI-powered health monitoring platform with 10K+ active users",
    category: "HealthTech",
    revenue: "$120K",
    timeframe: "6 months",
    gradient: "from-neon-aqua/20 to-neon-teal/20"
  },
  {
    id: 3,
    title: "LocalEats",
    description: "Restaurant discovery app connecting local businesses with customers",
    category: "FoodTech",
    revenue: "$85K",
    timeframe: "4 months",
    gradient: "from-neon-lime/20 to-neon-aqua/20"
  },
  {
    id: 4,
    title: "EduStream",
    description: "Online learning platform with personalized curriculum generation",
    category: "EdTech",
    revenue: "$200K",
    timeframe: "8 months",
    gradient: "from-neon-teal/20 to-neon-aqua/20"
  }
]

export default function Community() {
  return (
    <section id="community" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-sora font-bold text-4xl sm:text-5xl mb-6">
            From the <span className="text-neon-teal">Community</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how entrepreneurs are building successful businesses with Pitchme.dev
          </p>
        </motion.div>

        {/* Community Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communityExamples.map((example, index) => (
            <motion.div
              key={example.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 40px rgba(0, 245, 212, 0.15)"
              }}
              className="group relative"
            >
              <div className="bg-card-bg/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full transition-all duration-300 hover:border-neon-teal/30">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${example.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Category badge */}
                  <div className="inline-block bg-neon-teal/10 text-neon-teal text-sm font-medium px-3 py-1 rounded-full mb-4">
                    {example.category}
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-sora font-semibold text-xl mb-3 text-white group-hover:text-neon-teal transition-colors duration-300">
                    {example.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    {example.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex justify-between items-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-neon-lime">
                        {example.revenue}
                      </div>
                      <div className="text-xs text-gray-400">Revenue</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-neon-aqua">
                        {example.timeframe}
                      </div>
                      <div className="text-xs text-gray-400">Timeframe</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 245, 212, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-teal-lime text-black px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
          >
            Join the Community
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
