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
        // Define your custom colors here if needed
        'f7AB0A': '#f7ab0a',
      },

    },
  },
  plugins: [require('tailwind-scrollbar'),
],
}
