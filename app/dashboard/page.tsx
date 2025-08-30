'use client'

import { motion } from 'framer-motion'
import Card from '../components/Card'
import DashboardChatBox from '../components/DashboardChatBox'

export default function DashboardPage() {
  const businesses = [
    { id: 1, name: "Inventory SaaS", status: "Active", lastUpdated: "2 hours ago" },
    { id: 2, name: "E-commerce Platform", status: "Draft", lastUpdated: "1 day ago" },
    { id: 3, name: "AI Analytics Tool", status: "Active", lastUpdated: "3 hours ago" },
    { id: 4, name: "Mobile App", status: "Planning", lastUpdated: "5 days ago" },
    { id: 5, name: "B2B Marketplace", status: "Active", lastUpdated: "1 hour ago" },
  ]

  return (
    <div className="h-screen bg-black relative overflow-hidden">
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
      
      <div className="relative z-10 h-full flex">
        {/* ChatGPT-style Sidebar - Always visible and smaller */}
        <div className="w-64 flex flex-col border-r border-white/20 bg-black/20 backdrop-blur-sm">
          {/* Sidebar Header */}
          <div className="p-3 border-b border-white/5">
            <div className="flex items-center justify-between">
              <h2 className="text-white font-semibold text-base">Your Businesses</h2>
            </div>
          </div>

          {/* New Business Button */}
          <div className="p-3 border-b border-white/5">
            <button className="w-full bg-gradient-to-r from-teal-400 to-blue-500 text-black font-semibold py-2 px-3 rounded-lg hover:from-teal-500 hover:to-blue-600 transition-all duration-200 text-sm">
              + New Business
            </button>
          </div>

          {/* Business List */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-2">
              {businesses.map((business) => (
                <div
                  key={business.id}
                  className="group p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer mb-1"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-medium text-sm truncate">
                        {business.name}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                          business.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                          business.status === 'Draft' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {business.status}
                        </span>
                        <span className="text-zinc-500 text-xs">
                          {business.lastUpdated}
                        </span>
                      </div>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 text-zinc-400 hover:text-white transition-all duration-200">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="p-3 border-t border-white/5">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xs">U</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-xs font-medium truncate">User Account</p>
                <p className="text-zinc-400 text-xs">user@example.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Top Navigation */}
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between px-6 py-4 border-b border-white/20 bg-black/20 backdrop-blur-sm"
          >
            <div className="flex items-center space-x-4">
              <span className="font-sora font-bold text-xl text-white">PitchMe</span>
            </div>
            <div className="flex items-center space-x-6">
              <button className="text-zinc-300 hover:text-white transition-colors font-medium">Dashboard</button>
              <button className="text-zinc-300 hover:text-white transition-colors font-medium">Marketplace</button>
              <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">U</span>
              </div>
            </div>
          </motion.nav>

          {/* Dashboard Content */}
          <div className="flex-1 overflow-hidden">
            <div className="h-full px-6 py-4">
              <div className="mx-auto max-w-[1400px] h-full">
                {/* Desktop Grid Layout */}
                <div className="hidden lg:grid grid-cols-12 gap-6 h-full" style={{ gridTemplateRows: '200px 200px 1fr 100px' }}>
                  
                  {/* Left Column - Info Cards */}
                  <div className="col-span-8 grid grid-cols-8 gap-6" style={{ gridTemplateRows: '200px 200px' }}>
                    
                    {/* Top Row - Three small cards */}
                    <Card 
                      title="Market Overview" 
                      className="col-span-2 row-span-1 rounded-[28px]"
                    >
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-zinc-400 text-sm">TAM</span>
                          <span className="text-white font-semibold text-lg">$2.4B</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-zinc-400 text-sm">Growth</span>
                          <span className="text-green-400 font-semibold text-lg">24% YoY</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-zinc-400 text-sm">Region</span>
                          <span className="text-white font-semibold text-lg">Global</span>
                        </div>
                      </div>
                    </Card>

                    <Card 
                      title="Business Model" 
                      className="col-span-2 row-span-1 rounded-[28px]"
                    >
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-zinc-400 text-sm">Primary</span>
                          <span className="text-white font-semibold text-lg">SaaS</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-zinc-400 text-sm">ARPU</span>
                          <span className="text-green-400 font-semibold text-lg">$89/mo</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-zinc-400 text-sm">Margin</span>
                          <span className="text-blue-400 font-semibold text-lg">78%</span>
                        </div>
                      </div>
                    </Card>

                    <Card 
                      title="Competitors" 
                      className="col-span-2 row-span-1 rounded-[28px]"
                    >
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-zinc-400 text-sm">Direct</span>
                          <span className="text-white font-semibold text-lg">3 major</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                          <span className="px-2 py-1 rounded-full text-xs border border-red-400/30 text-red-400 bg-black/20">Competitor A</span>
                          <span className="px-2 py-1 rounded-full text-xs border border-yellow-400/30 text-yellow-400 bg-black/20">Competitor B</span>
                          <span className="px-2 py-1 rounded-full text-xs border border-purple-400/30 text-purple-400 bg-black/20">Competitor C</span>
                        </div>
                      </div>
                    </Card>

                    <Card 
                      title="Target Audience" 
                      className="col-span-2 row-span-1 rounded-[28px]"
                    >
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-zinc-400 text-sm">Persona</span>
                          <span className="text-white font-semibold text-lg">SMB Owners</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-zinc-400 text-sm">Age</span>
                          <span className="text-blue-400 font-semibold text-lg">25-45</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-zinc-400 text-sm">Channel</span>
                          <span className="text-green-400 font-semibold text-lg">Digital</span>
                        </div>
                      </div>
                    </Card>

                    {/* Second Row - Two small cards */}
                    <Card 
                      title="Next Steps" 
                      className="col-span-2 rounded-[28px]"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-4 h-4 bg-green-500 rounded-sm flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-zinc-300 text-sm">Market research</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-4 h-4 border border-zinc-600 rounded-sm"></div>
                          <span className="text-zinc-300 text-sm">Develop MVP</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-4 h-4 border border-zinc-600 rounded-sm"></div>
                          <span className="text-zinc-300 text-sm">Secure funding</span>
                        </div>
                      </div>
                    </Card>

                    <Card 
                      title="Financial Projections" 
                      className="col-span-2 rounded-[28px]"
                    >
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-zinc-400 text-sm">Year 1</span>
                          <span className="text-white font-semibold text-lg">$2.1M</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-zinc-400 text-sm">Year 3</span>
                          <span className="text-green-400 font-semibold text-lg">$8.7M</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-zinc-400 text-sm">Break-even</span>
                          <span className="text-blue-400 font-semibold text-lg">Month 18</span>
                        </div>
                      </div>
                    </Card>

                    {/* Third Row - Wide Conversation card */}
                    <Card 
                      title="Conversation" 
                      className="col-span-8 row-span-1 rounded-[28px]"
                    >
                      <div className="h-full flex flex-col">
                        <div className="flex-1 overflow-y-auto space-y-4 p-4">
                          <div className="flex justify-end">
                            <div className="max-w-[70%] bg-gradient-to-r from-teal-400 to-blue-500 text-black rounded-2xl px-4 py-3">
                              <p className="text-sm font-medium">I want to build a SaaS platform for small businesses to manage their inventory and sales.</p>
                            </div>
                          </div>
                          <div className="flex justify-start">
                            <div className="max-w-[70%] bg-zinc-800/50 border border-white/10 text-zinc-300 rounded-2xl px-4 py-3">
                              <p className="text-sm">Great idea! Let me analyze the market opportunity and create a comprehensive business plan for your inventory management SaaS.</p>
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <div className="max-w-[70%] bg-gradient-to-r from-teal-400 to-blue-500 text-black rounded-2xl px-4 py-3">
                              <p className="text-sm font-medium">What's the target market size and who are the main competitors?</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Right Column - Conclusion Panel */}
                  <div className="col-span-4 row-span-3">
                    <Card 
                      title="Conclusion / Solution" 
                      className="h-full rounded-[36px]"
                    >
                      <div className="h-full flex flex-col">
                        <div className="flex flex-wrap gap-2 mb-6">
                          <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-blue-600 text-white border-transparent shadow-lg">
                            Model
                          </button>
                          <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-800/50 text-zinc-400 border border-white/10 hover:text-white hover:bg-zinc-700/50">
                            Audience
                          </button>
                          <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-800/50 text-zinc-400 border border-white/10 hover:text-white hover:bg-zinc-700/50">
                            Pricing
                          </button>
                          <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-800/50 text-zinc-400 border border-white/10 hover:text-white hover:bg-zinc-700/50">
                            GTM
                          </button>
                          <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-800/50 text-zinc-400 border border-white/10 hover:text-white hover:bg-zinc-700/50">
                            Ops
                          </button>
                          <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-800/50 text-zinc-400 border border-white/10 hover:text-white hover:bg-zinc-700/50">
                            Legal
                          </button>
                          <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-800/50 text-zinc-400 border border-white/10 hover:text-white hover:bg-zinc-700/50">
                            Risks
                          </button>
                          <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-800/50 text-zinc-400 border border-white/10 hover:text-white hover:bg-zinc-700/50">
                            Metrics
                          </button>
                        </div>
                        
                        <div className="bg-zinc-800/30 rounded-xl p-4 border border-white/5 mb-6">
                          <h4 className="text-white font-bold mb-3">Model</h4>
                          <p className="text-zinc-300 text-sm leading-relaxed">
                            SaaS subscription model with freemium tier. Primary revenue from monthly subscriptions targeting micro-businesses.
                          </p>
                        </div>

                        <div className="flex-1 bg-zinc-800/20 rounded-xl border border-white/5 relative overflow-hidden">
                          <div className="absolute inset-0" style={{
                            backgroundImage: `
                              radial-gradient(circle at 20% 30%, rgba(0,245,212,0.1) 0%, transparent 50%),
                              radial-gradient(circle at 80% 70%, rgba(0,245,212,0.1) 0%, transparent 50%)
                            `,
                            backgroundSize: '200px 200px, 150px 150px'
                          }} />
                          <div className="relative z-10 p-6 flex items-center justify-center h-full">
                            <div className="text-center">
                              <div className="text-zinc-500 text-sm mb-2 font-medium">Mind Map Visualization</div>
                              <div className="text-zinc-600 text-xs">Connections between business elements</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Chatbox - Bottom row spanning left columns */}
                  <div className="col-span-8 flex items-center">
                    <DashboardChatBox />
                  </div>
                </div>

                {/* Mobile/Tablet Layout */}
                <div className="lg:hidden grid grid-cols-1 gap-5 h-full overflow-y-auto">
                  <Card title="Market Overview" className="h-[200px] rounded-[28px]">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-400 text-sm">TAM</span>
                        <span className="text-white font-semibold text-lg">$2.4B</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-400 text-sm">Growth</span>
                        <span className="text-green-400 font-semibold text-lg">24% YoY</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-400 text-sm">Region</span>
                        <span className="text-white font-semibold text-lg">Global</span>
                      </div>
                    </div>
                  </Card>

                  <Card title="Business Model" className="h-[200px] rounded-[28px]">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-400 text-sm">Primary</span>
                        <span className="text-white font-semibold text-lg">SaaS</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-400 text-sm">ARPU</span>
                        <span className="text-green-400 font-semibold text-lg">$89/mo</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-400 text-sm">Margin</span>
                        <span className="text-blue-400 font-semibold text-lg">78%</span>
                      </div>
                    </div>
                  </Card>

                  <Card title="Competitors" className="h-[200px] rounded-[28px]">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-400 text-sm">Direct</span>
                        <span className="text-white font-semibold text-lg">3 major</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="px-2 py-1 rounded-full text-xs border border-red-400/30 text-red-400 bg-black/20">Competitor A</span>
                        <span className="px-2 py-1 rounded-full text-xs border border-yellow-400/30 text-yellow-400 bg-black/20">Competitor B</span>
                        <span className="px-2 py-1 rounded-full text-xs border border-purple-400/30 text-purple-400 bg-black/20">Competitor C</span>
                      </div>
                    </div>
                  </Card>

                  <Card title="Target Audience" className="h-[200px] rounded-[28px]">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-400 text-sm">Persona</span>
                        <span className="text-white font-semibold text-lg">SMB Owners</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-400 text-sm">Age</span>
                        <span className="text-blue-400 font-semibold text-lg">25-45</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-400 text-sm">Channel</span>
                        <span className="text-green-400 font-semibold text-lg">Digital</span>
                      </div>
                    </div>
                  </Card>

                  <Card title="Next Steps" className="h-[200px] rounded-[28px]">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-green-500 rounded-sm flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-zinc-300 text-sm">Market research</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 border border-zinc-600 rounded-sm"></div>
                        <span className="text-zinc-300 text-sm">Develop MVP</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 border border-zinc-600 rounded-sm"></div>
                        <span className="text-zinc-300 text-sm">Secure funding</span>
                      </div>
                    </div>
                  </Card>

                  <Card title="Conclusion / Solution" className="min-h-[500px] rounded-[36px]">
                    <div className="h-full flex flex-col">
                      <div className="flex flex-wrap gap-2 mb-6">
                        <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-blue-600 text-white border-transparent shadow-lg">
                          Model
                        </button>
                        <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-800/50 text-zinc-400 border border-white/10 hover:text-white hover:bg-zinc-700/50">
                          Audience
                        </button>
                        <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-800/50 text-zinc-400 border border-white/10 hover:text-white hover:bg-zinc-700/50">
                          Pricing
                        </button>
                        <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-800/50 text-zinc-400 border border-white/10 hover:text-white hover:bg-zinc-700/50">
                          GTM
                        </button>
                        <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-800/50 text-zinc-400 border border-white/10 hover:text-white hover:bg-zinc-700/50">
                          Ops
                        </button>
                        <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-800/50 text-zinc-400 border border-white/10 hover:text-white hover:bg-zinc-700/50">
                          Legal
                        </button>
                        <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-800/50 text-zinc-400 border border-white/10 hover:text-white hover:bg-zinc-700/50">
                          Risks
                        </button>
                        <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-800/50 text-zinc-400 border border-white/10 hover:text-white hover:bg-zinc-700/50">
                          Metrics
                        </button>
                      </div>
                      
                      <div className="bg-zinc-800/30 rounded-xl p-4 border border-white/5 mb-6">
                        <h4 className="text-white font-bold mb-3">Model</h4>
                        <p className="text-zinc-300 text-sm leading-relaxed">
                          SaaS subscription model with freemium tier. Primary revenue from monthly subscriptions targeting micro-businesses.
                        </p>
                      </div>

                      <div className="flex-1 bg-zinc-800/20 rounded-xl border border-white/5 relative overflow-hidden">
                        <div className="absolute inset-0" style={{
                          backgroundImage: `
                            radial-gradient(circle at 20% 30%, rgba(0,245,212,0.1) 0%, transparent 50%),
                            radial-gradient(circle at 80% 70%, rgba(0,245,212,0.1) 0%, transparent 50%)
                          `,
                          backgroundSize: '200px 200px, 150px 150px'
                        }} />
                        <div className="relative z-10 p-6 flex items-center justify-center h-full">
                          <div className="text-center">
                            <div className="text-zinc-500 text-sm mb-2 font-medium">Mind Map Visualization</div>
                            <div className="text-zinc-600 text-xs">Connections between business elements</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card title="Conversation" className="h-[380px] rounded-[28px]">
                    <div className="h-full flex flex-col">
                      <div className="flex-1 overflow-y-auto space-y-4 p-4">
                        <div className="flex justify-end">
                          <div className="max-w-[70%] bg-gradient-to-r from-teal-400 to-blue-500 text-black rounded-2xl px-4 py-3">
                            <p className="text-sm font-medium">I want to build a SaaS platform for small businesses to manage their inventory and sales.</p>
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="max-w-[70%] bg-zinc-800/50 border border-white/10 text-zinc-300 rounded-2xl px-4 py-3">
                            <p className="text-sm">Great idea! Let me analyze the market opportunity and create a comprehensive business plan for your inventory management SaaS.</p>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className="max-w-[70%] bg-gradient-to-r from-teal-400 to-blue-500 text-black rounded-2xl px-4 py-3">
                            <p className="text-sm font-medium">What's the target market size and who are the main competitors?</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <DashboardChatBox />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
