/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: ['./dist/*.html'],
  content: [
    './dist/**/*.{html,js,tsx}',
    './src/**/*.{html,js,tsx}',
  ],  
  theme: {
    extend: {},
  },
  plugins: [],
}