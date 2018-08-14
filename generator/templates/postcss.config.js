const isDev = process.argv.indexOf('serve') !== -1

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./tailwind.config.js'),
    isDev ? null : require('@fullhuman/postcss-purgecss')({
      content: [ './src/**/*.vue', './src/**/*.@(css|less|sass|scss|styl)' ],
    }),
    require('autoprefixer'),
  ],
}
