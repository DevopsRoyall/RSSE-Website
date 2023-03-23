/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: {
        'blue': '#007BFF',
        'orange': '#FF7F00',
        'dark-gray': '#333333',
      },
      textColor: {
        'blue': '#007BFF',
        'orange': '#FF7F00',
        'dark-gray': '#333333',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
