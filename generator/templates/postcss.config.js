class TailwindExtractor {
  static extract (content) {
    return content.match(/[A-Za-z0-9-_:/]+/g) || []
  }
}

module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-preset-env')({ stage: 2 }),
    require('tailwindcss')('./tailwind.config.js'),
    require('@fullhuman/postcss-purgecss')({
      content: [ './src/**/*.vue', './src/**/*.@(css|less|sass|scss|styl)' ],
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: [ 'vue', 'css', 'less', 'sass', 'scss', 'styl' ],
        },
      ],
    }),
    require('autoprefixer')(),
  ],
}
