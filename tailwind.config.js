/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#EE6D82',
        secondary: '#64748b',
        dark: '#0f172a'
      },
      screens: {
        '2xl': '1320px'
      },
      animation: {
                'spin-slow': 'spin 3s linear infinite',
                goyang: 'goyang 1s ease-in-out infinite',
      },
      keyframes: {
                 goyang: {
                 '0%, 100%': { transform: 'rotate(-3deg)' },
                 '50%': { transform: 'rotate(3deg)' },
                 },
      },
    },
  },
  plugins: [],
}

