/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FFF9F2',
        'bg-secondary': '#FDF5EC',
        'bg-section': '#F9EFE4',
        'bg-[#FFF8F0]': '#FFF8F0',
        burgundy: '#6E1F1F',
        luxuryBrown: '#8B3E2F',
        goldenAmber: '#D48B2C',
        softGold: '#F2B84A',
        warmBeige: '#F4E7D5',
        cream: '#FFF8F0',
        primary: '#6E1F1F',
        secondary: '#8B3E2F',
        accent: '#D48B2C',
        text: '#2A1C18',
        'text-secondary': '#5E4A43',
        'text-muted': '#8E776F',
        'menu-text': '#4E312A',
        card: '#FFFFFF',
        cardBorder: '#F1E4D3',
        footerBody: '#F6E6D3',
        footerHover: '#F2B84A',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'glass': '0 12px 40px 0 rgba(110, 31, 31, 0.08)',
        'glass-hover': '0 20px 48px 0 rgba(110, 31, 31, 0.15)',
        'soft': '0 12px 40px 0 rgba(110, 31, 31, 0.08)',
        'glow': '0 0 25px rgba(212, 139, 44, 0.25)',
        'hero-mirror': '0 20px 60px -10px rgba(110, 31, 31, 0.25), 0 10px 30px -15px rgba(212, 139, 44, 0.2)',
      },
      backgroundImage: {
        'lavix-heading': 'linear-gradient(135deg, #6E1F1F 0%, #D48B2C 100%)',
        'cta-gradient': 'linear-gradient(135deg, #6E1F1F 0%, #8B3E2F 50%, #D48B2C 100%)',
        'hero-gradient': 'radial-gradient(circle at 50% 30%, rgba(212, 139, 44, 0.15) 0%, rgba(110, 31, 31, 0.08) 40%, rgba(255, 249, 242, 0) 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%': { opacity: '0.4', transform: 'scale(0.98)' },
          '100%': { opacity: '0.8', transform: 'scale(1.02)' },
        },
      }
    },
  },
  plugins: [],
}
