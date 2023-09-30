/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#13151a',
        'light-gray': '#333'
      },
      animation: {
        fadeInDown: 'fadeInDown 2s ease-in-out',
        fadeInUp: 'fadeInUp 2s ease-in-out'
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: 0.1, transform: 'translateY(-80px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        fadeInUp: {
          '0%': { opacity: 0.1, transform: 'translateY(80px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
}
