'use client'

import { useEffect, useState } from 'react'

export default function SplineBackground() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Pure black base to eliminate any old background */}
      <div className="fixed inset-0 bg-black z-0" />
      
      {/* Spline iframe - full coverage */}
      <iframe 
        src='https://my.spline.design/claritystream-UpsazBK64iFZEuotRhmmhGi0/' 
        frameBorder='0' 
        className="fixed inset-0 w-full h-full z-10"
        onLoad={() => setIsLoading(false)}
        style={{ 
          pointerEvents: 'none'
        }}
      />
      
      {/* Strong noise/grain overlay on top of Spline - LOWER z-index than content */}
      <div 
        className="fixed inset-0 z-5 opacity-80"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '64px 64px',
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Additional fine grain layer - LOWER z-index than content */}
      <div 
        className="fixed inset-0 z-5 opacity-60"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grainFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.0' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grainFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '32px 32px',
          mixBlendMode: 'multiply'
        }}
      />
      
      {/* Loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black z-30 transition-opacity duration-1000" />
      )}
      
      {/* Overlay to hide only the Spline attribution badge */}
      <div 
        className="fixed bottom-4 right-4 w-40 h-10 bg-black z-30 rounded"
      />
    </>
  )
}
