/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#00DC82', // Add your custom color
        'custom-gradient': 'linear-gradient(to right, #FF5D5D, #4794FF)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #FF5D5D, #4794FF)',
        'custom-green': '#00DC82', 
      },
      borderImage: {
        'custom-gradient': 'linear-gradient(to right, #FF5D5D, #4794FF)',
      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
