/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "hue-color": 250,
        'first-color': 'var(--first-color)',
        'first-color-second': ' var(--first-color-second) ',
        'first-color-alt': 'var(--first-color-alt)',
        'first-color-lighter': 'var(--first-color-lighter)',
        'title-color': 'var(--title-color)',
        'text-color': 'var(--text-color)',
        'text-color-light': 'var(--text-color-light)',
        'input-color': 'var(--input-color)',
        'body-color': 'var(--body-color)',
        'container-color': '#fff',
      },
      fontFamily: {
        "Poppins": "Poppins"
      },
      fontSize: {
        'big-font-size': ' 2rem ',
        'h1-font-size': ' 1.5rem ',
        'h2-font-size': ' 1.25rem',
        'h3-font-size': ' 1.125rem',
        'normal-font-size': ' .938rem',
        'small-font-size': ' .813rem',
        'smaller-font-size': ' .75rem',

      },
      fontWeight: {
        'font-medium': 'var(--font-medium)',
        'font-semi-bold': 'var(--font-semi-bold)',
      },
      zIndex: {
        "z-tooltip": "var(--z-tooltip)",
        "z-fixed": "var(--z-fixed)",
        "z-modal": "var(--z-modal)",

      },
      height:{
        "header-height":"4rem"
      },
      padding:{
        'sm-padding':'var(--sm-padding)',
        'md-padding':'var(--md-padding)',
        'lg-padding':'var(--lg-padding)',
        'xl-padding':'var(--xl-padding)', 
        'xl2-padding':'var(--xl2-padding)'
      }
    },
    screens: {

      'xs': '500px',
      // => @media (min-width: 500px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1850px',
      // => @media (min-width: 1850px) { ... }
    },
    
  },
  
  plugins: [],
}