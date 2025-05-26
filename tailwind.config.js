/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}", // Adjust this based on your file structure
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',  // Custom color
        secondary: '#F59E0B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],  // Custom font
      },
      spacing: {
        '128': '32rem',  // Custom spacing
      },
    },
  },
  plugins: [],
}
