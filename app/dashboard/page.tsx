'use client'

import { motion } from 'framer-motion'
import DashboardShell from '../components/DashboardShell'
import InfoCard from '../components/InfoCard'
import Conversation from '../components/Conversation'
import ChatBox from '../components/ChatBox'
import SummaryPanel from '../components/SummaryPanel'
import SectionTitle from '../components/SectionTitle'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-radial from-zinc-900 via-zinc-800 to-teal-900/20">
      {/* Aurora background animation */}
      <div className="fixed inset-0 bg-gradient-radial from-zinc-900/50 via-zinc-800/30 to-teal-900/10 animate-aurora-drift pointer-events-none" />
      
      <div className="relative z-10">
        {/* Top Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/5"
        >
          <div className="container mx-auto px-4 md:px-6 xl:px-8">
            <div className="flex justify-between items-center h-16">
              <span className="font-sora font-bold text-xl text-white">PitchMe</span>
              <div className="flex items-center space-x-4">
                <button className="text-zinc-300 hover:text-white transition-colors">Dashboard</button>
                <button className="text-zinc-300 hover:text-white transition-colors">Marketplace</button>
                <div className="w-8 h-8 bg-gradient-teal-lime rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">U</span>
                </div>
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Main Dashboard Content */}
        <div className="pt-20 pb-24">
          <DashboardShell>
            {/* Left Rail - Info Cards */}
            <div className="space-y-6">
              <SectionTitle icon="📊" title="Market Overview" />
              <InfoCard
                title="Market Overview"
                data={[
                  { label: "TAM", value: "$2.4B" },
                  { label: "Growth", value: "24% YoY" },
                  { label: "Region", value: "Global" }
                ]}
                badge="Updated"
              />
              
              <InfoCard
                title="Business Model"
                data={[
                  { label: "Primary", value: "SaaS" },
                  { label: "ARPU", value: "$89/mo" },
                  { label: "Margin", value: "78%" }
                ]}
              />
              
              <InfoCard
                title="Competitors"
                data={[
                  { label: "Direct", value: "3 major players" }
                ]}
                chips={["Competitor A", "Competitor B", "Competitor C"]}
              />
              
              <InfoCard
                title="Target Audience"
                data={[
                  { label: "Persona", value: "SMB Owners" },
                  { label: "Age", value: "25-45" },
                  { label: "Channel", value: "Digital" }
                ]}
              />
              
              <InfoCard
                title="Next Steps"
                data={[
                  { label: "Phase 1", value: "MVP Development" },
                  { label: "Phase 2", value: "Beta Testing" },
                  { label: "Phase 3", value: "Market Launch" }
                ]}
                isWide={true}
                checklist={[
                  "Complete market research",
                  "Develop MVP features",
                  "Secure initial funding"
                ]}
              />
            </div>

            {/* Center - Conversation */}
            <div className="space-y-6">
              <SectionTitle icon="💬" title="Conversation" />
              <Conversation />
              <ChatBox />
            </div>

            {/* Right Rail - Summary Panel */}
            <div>
              <SectionTitle icon="🎯" title="Conclusion / Solution" />
              <SummaryPanel />
            </div>
          </DashboardShell>
        </div>
      </div>
    </div>
  )
}
