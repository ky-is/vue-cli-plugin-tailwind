module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-preset-env')({ stage: 2 }),
    require('tailwindcss')('./tailwind.config.js'),
    require('@fullhuman/postcss-purgecss')({
      content: [ './src/**/*.vue', './src/**/*.@(css|less|sass|scss|styl)' ],
    }),
    require('autoprefixer')(),
  ],
}
