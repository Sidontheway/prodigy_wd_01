/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      'neutralsilver': "#F5F7FA",
      'neutralgray': "#717171",
      'neutralDgray': "#4D4D4D",
      'brandprimary': "#4CAF4F",
      'gray900': "#18191F"

    },

    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

