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
      textColor: { 
        skin: {
          base: 'var(--color-text-base)'
        }
      }      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};