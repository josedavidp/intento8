/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],


  theme: {
    colors: {
      'blue': '#153d6c',
      'gray2': '#7f7f7f',
      'white': '#ffffff',
      'yellow': '#EFB810',
      'gray': '#EDEDED',
      'black': '#000000',
      'blue-1': '#D7E4F2',
      'blue-2': '#506E91'
    }
  },

plugins: [
  require("daisyui"),
  // eslint-disable-next-line global-require
  require('@tailwindcss/forms'),
  // add custom variant for expanding sidebar
  plugin(({ addVariant, e }) => {
    addVariant('sidebar-expanded', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => `.sidebar-expanded .${e(`sidebar-expanded${separator}${className}`)}`);
    });
  }),
],
}
