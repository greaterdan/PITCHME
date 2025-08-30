'use client'

import { ReactNode } from 'react'

interface DashboardShellProps {
  children: ReactNode
}

export default function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="container mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-12 gap-6">
        {/* Left Rail - Info Cards */}
        <div className="col-span-12 lg:col-span-3">
          {Array.isArray(children) ? children[0] : children}
        </div>
        
        {/* Center - Conversation */}
        <div className="col-span-12 lg:col-span-5">
          {Array.isArray(children) ? children[1] : null}
        </div>
        
        {/* Right Rail - Summary Panel */}
        <div className="col-span-12 lg:col-span-4">
          {Array.isArray(children) ? children[2] : null}
        </div>
      </div>
    </div>
  )
}
