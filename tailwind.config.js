/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-teal': '#00f5d4',
        'neon-lime': '#00ff88',
        'neon-aqua': '#00d4ff',
        'dark-bg': '#0a0a0a',
        'card-bg': '#111111',
        'border-glow': '#00f5d4',
      },
      fontFamily: {
        'sora': ['Sora', 'sans-serif'],
        'clash': ['Clash Display', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'gradient-flow': 'gradient-flow 20s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'gradient-flow': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'glow': {
          '0%': { boxShadow: '0 0 20px rgba(0, 245, 212, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 245, 212, 0.6)' }
        }
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(ellipse at center bottom, rgba(0, 245, 212, 0.1) 0%, rgba(0, 255, 136, 0.05) 50%, transparent 100%)',
        'radial-gradient-top': 'radial-gradient(ellipse at top left, rgba(0, 212, 255, 0.08) 0%, transparent 70%)',
        'gradient-teal-lime': 'linear-gradient(135deg, #00f5d4 0%, #00ff88 100%)',
      }
    },
  },
  plugins: [],
}
