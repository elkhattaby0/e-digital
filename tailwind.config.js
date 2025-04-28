/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./public/index.html", 
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
    }, 
  },
  plugins: [], 
}
