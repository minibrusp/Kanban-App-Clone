/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif']
      },
      colors: {
        'slate-blue': '#585fc7',
        'light-slate-blue': '#8471f2',
        perano: '#A8A4FF',
        'summer-sky': '#49c4e5',
        'medium-aquamarine': '#67e2ae',
        white: '#ffffff',
        'ship-cove': '#828fa3',
        'alice-blue': '#f4f7fd',
        'black-rock': '#2b2c37',
        'black-russian': '#20212c',
        flamingo: '#ea5555',
        solitude: '#E4EBFA'
      },
      content: {
        arrowDownIcon: 'url("arrowDown.svg")'
      }
    }
  },
  plugins: []
}
