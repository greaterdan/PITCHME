'use client'

import { motion } from 'framer-motion'

const pricingPlans = [
  {
    id: 1,
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for solo entrepreneurs getting started",
    features: [
      "AI Business Plan Generator",
      "Market Research Tools",
      "Basic Templates",
      "Email Support",
      "5 Projects"
    ],
    popular: false,
    gradient: "from-neon-teal/10 to-neon-lime/10"
  },
  {
    id: 2,
    name: "Pro",
    price: "$99",
    period: "/month",
    description: "For growing businesses and teams",
    features: [
      "Everything in Starter",
      "Advanced Analytics",
      "Custom Branding",
      "Priority Support",
      "Unlimited Projects",
      "Team Collaboration",
      "API Access"
    ],
    popular: true,
    gradient: "from-neon-aqua/15 to-neon-teal/15"
  },
  {
    id: 3,
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations and agencies",
    features: [
      "Everything in Pro",
      "Custom Integrations",
      "Dedicated Account Manager",
      "White-label Solutions",
      "Advanced Security",
      "SLA Guarantee",
      "Custom Training"
    ],
    popular: false,
    gradient: "from-neon-lime/10 to-neon-aqua/10"
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
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
            Simple <span className="text-neon-teal">Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your business needs. Start free, scale as you grow.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px rgba(0, 245, 212, 0.1)"
              }}
              className={`relative group ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-teal-lime text-black px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`bg-card-bg/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full transition-all duration-300 hover:border-neon-teal/30 relative overflow-hidden ${plan.popular ? 'border-neon-teal/20' : ''}`}>
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Plan name */}
                  <h3 className="font-sora font-bold text-2xl mb-2 text-white">
                    {plan.name}
                  </h3>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-neon-teal">
                      {plan.price}
                    </span>
                    <span className="text-gray-400 text-lg">
                      {plan.period}
                    </span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-8 text-sm">
                    {plan.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <div className="w-2 h-2 bg-neon-lime rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-teal-lime text-black hover:shadow-lg hover:shadow-neon-teal/25' 
                        : 'border-2 border-neon-teal text-neon-teal hover:bg-neon-teal/10'
                    }`}
                  >
                    {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-sm">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex justify-center items-center space-x-8 mt-6 text-sm text-gray-400">
            <span>✓ Cancel anytime</span>
            <span>✓ 30-day money back</span>
            <span>✓ 24/7 support</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
