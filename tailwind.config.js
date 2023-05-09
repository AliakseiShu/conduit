/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        titillium: ['Titillium Web', 'sans-serif'],
      },
      colors: {
        green: '#5CB85C',
      },
      spacing: {
        navItem: '0.425rem',
      },
      boxShadow: {
        banner: 'inset 0 8px 8px -8px rgba(0, 0, 0, 0.3), inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3)',
      },
      dropShadow: {
        logo: '0px 1px 3px rgba(0, 0, 0, 0.3)',
      },
      fontSize: {
        conduitSize: '3.5rem',
      }
    }
  },
  plugins: [],
}

