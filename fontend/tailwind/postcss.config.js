// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//     cssnano: {},
//   },
// };
module.exports = {
  plugins: [require('tailwindcss'), require('autoprefixer'), require('cssnano')],
};
