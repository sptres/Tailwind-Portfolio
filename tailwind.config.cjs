/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#F97316', // Orange color
          'primary-focus': '#EA580C',
          'primary-content': '#FFFFFF',
          // Define other colors for your theme here...
        },
        mygreen: {
          primary: '#9CAFB7', // Sage green color
          'primary-focus': '#7F99A0',
          'primary-content': '#FFFFFF',
          // Define other colors for your theme here...
        },
      },
    ],
  },
};
