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
        'readex': ['Readex Pro', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'aurora-drift': 'aurora-drift 30s ease-in-out infinite',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'glow': {
          '0%': { boxShadow: '0 0 20px rgba(0, 245, 212, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 245, 212, 0.6)' }
        },
        'aurora-drift': {
          '0%, 100%': {
            'background-position': '0% 50%',
            'background-size': '200% 200%'
          },
          '50%': {
            'background-position': '100% 50%',
            'background-size': '200% 200%'
          }
        }
      }
    },
  },
  plugins: [],
}
