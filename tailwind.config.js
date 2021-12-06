// tailwind.config.js
module.exports = {
  purge: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.html',
    './_scribe/*.html',
    './*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        headline: ['Bowlby'],
        fob:['Font Awesome 5 Brands']
      },
      textColor: { 
        skin: {
          headlinePrimary: 'var(--color-text-headline-primary)',
          headlineSecondary: 'var(--color-text-headline-secondary)'
        }
      }      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};