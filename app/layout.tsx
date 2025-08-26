import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pitchme.dev - Build Your Business Instantly',
  description: 'From idea to launch-ready business in minutes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-inter bg-dark-bg text-white overflow-x-hidden">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
