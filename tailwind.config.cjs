module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f8ff',
          100: '#e6efff',
          500: '#2563eb',
        }
      },
      transitionProperty: {
        'height': 'height'
      }
    }
  },
  plugins: [],
}