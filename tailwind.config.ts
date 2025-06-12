// tailwind.config.ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    // Background colors
    'bg-amber-100',
    'bg-red-100',
    'bg-blue-100',
    'bg-purple-100',
    // Text colors
    'text-amber-500',
    'text-red-500',
    'text-blue-500',
    'text-purple-500',
  ],
}
