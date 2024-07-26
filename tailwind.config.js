/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'alice-Blue': '#F0F5FF',
        'custom-btn':'#006BD7'
      },
      maxHeight: {
        'md-Product-Box': '250px'
      },
      height: {
        'md-Product-Box': '80vh'
      },
    },
  },
  plugins: [require('daisyui')],
}

