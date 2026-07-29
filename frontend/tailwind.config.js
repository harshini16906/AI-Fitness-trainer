/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          cyan: '#2DD4BF',
          blue: '#38BDF8',
          purple: '#8B5CF6',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(56, 189, 248, 0.25)',
      },
    },
  },
  plugins: [],
};
