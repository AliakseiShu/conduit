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
        darkGreen: '#398439',
        newBlack: '#373a3c',
        newGrey:'#bbb',
        lightGrey:'#999',
        borderGrey:'#ddd',
        textGrey:'#aaa',
        pageHoverBg:'#eceeef'
      },
      spacing: {
        navItem: '0.425rem',
        0.3: '0.3rem',
        0.2: '0.2rem',
        0.6: '0.6em'
      },
      boxShadow: {
        banner: 'inset 0 8px 8px -8px rgba(0, 0, 0, 0.3), inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3)',
      },
      dropShadow: {
        logo: '0px 1px 3px rgba(0, 0, 0, 0.3)',
      },
      fontSize: {
        conduitSize: '3.5rem',
        date: '0.8rem',
      },
      borderRadius: {
        buttonSm: '0.2rem',
        tag: '10rem'
      }
    }
  },
  plugins: [],
}

