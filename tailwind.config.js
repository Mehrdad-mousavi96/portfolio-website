/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      personal: {
        'normal': 'max-w-[350px]',
        'mxs': 'xs:max-w-[350px]',
        'msm': 'sm:max-w-[500px]',
        'mmd': 'md:max-w-[650px]',
        'mlg': 'lg:max-w-[900px]',
        'mxl': 'xl:max-w-[1100px]'
      }
    },
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px', 
    }
  },
  plugins: [],
}