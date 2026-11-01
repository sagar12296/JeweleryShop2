/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          black: "#0A0A0B",
          dark: "#121215",
          surface: "#18181D",
          card: "#1E1E24",
          cardHover: "#25252D",
          border: "rgba(212, 175, 55, 0.2)",
          borderBright: "rgba(212, 175, 55, 0.5)",
          cream: "#F8F5EE",
          ivory: "#F1ECE1",
          gold: {
            light: "#F7E7B4",
            DEFAULT: "#D4AF37",
            rich: "#C5A059",
            deep: "#997328",
            antique: "#85651E",
            sheen: "#FFE49E"
          }
        }
      },
      fontFamily: {
        heading: ['Cinzel', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        gurmukhi: ['"Noto Serif Gurmukhi"', 'serif'],
      },
      boxShadow: {
        'gold-sm': '0 2px 10px rgba(212, 175, 55, 0.12)',
        'gold-md': '0 4px 20px rgba(212, 175, 55, 0.2)',
        'gold-lg': '0 10px 35px rgba(212, 175, 55, 0.25)',
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.35)',
        'dark-luxury': '0 10px 30px -5px rgba(0, 0, 0, 0.8)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FBF5E6 0%, #D4AF37 50%, #997328 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #C5A059 0%, #FFE599 50%, #C5A059 100%)',
        'gold-radial': 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(10,10,11,0) 70%)',
        'dark-gradient': 'linear-gradient(180deg, #121215 0%, #0A0A0B 100%)',
      },
      animation: {
        'shimmer': 'shimmer 3s infinite linear',
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.85' },
          '50%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}

