/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  

  content: [
    "./components/**/*.{js,vue,ts}",
    "./presets/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
    theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
      },
      boxShadow: {
        '3xl': '0px 3px 6px rgb(0 0 0 / 16%)',
        '4xl': '0px -6px 6px rgb(0 0 0 / 16%)',
        'slider' : '5px -7px 3px rgb(0 0 0 / 10%)',
        '5xl' : '5px -7px 3px  rgb(47 163 247 / 10%)',
        
      },
      backgroundImage: {
        'custom-blue-yellow': 'linear-gradient(to right, #EAA121 20%, #183867 20%)',
      },
      colors: {
        'primary': '#EAA121',
        // 'primary-100': 'rgb(var(--primary-100))',
        // 'primary-200': 'rgb(var(--primary-200))',
        // 'primary-300': 'rgb(var(--primary-300))',
        // 'primary-400': 'rgb(var(--primary-400))',
        // 'primary-500': 'rgb(var(--primary-500))',
        // 'primary-600': 'rgb(var(--primary-600))',
        // 'primary-700': 'rgb(var(--primary-700))',
        // 'primary-800': 'rgb(var(--primary-800))',
        // 'primary-900': 'rgb(var(--primary-900))',
        // 'primary-950': 'rgb(var(--primary-950))',
        // 'surface-0': 'rgb(var(--surface-0))',
        // 'surface-50': 'rgb(var(--surface-50))',
        // 'surface-100': 'rgb(var(--surface-100))',
        // 'surface-200': 'rgb(var(--surface-200))',
        // 'surface-300': 'rgb(var(--surface-300))',
        // 'surface-400': 'rgb(var(--surface-400))',
        // 'surface-500': 'rgb(var(--surface-500))',
        // 'surface-600': 'rgb(var(--surface-600))',
        // 'surface-700': 'rgb(var(--surface-700))',
        // 'surface-800': 'rgb(var(--surface-800))',
        // 'surface-900': 'rgb(var(--surface-900))',
        // 'surface-950': 'rgb(var(--surface-950))'
    },
      screens: {
        '3xl': '2400px',
        'xs':"400px"
      },
    },
  },
  plugins: [],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
}