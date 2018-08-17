const isHotReloaded = process.argv.includes('serve')

class TailwindExtractor {
  static extract (content) {
    return content.match(/[A-Za-z0-9-_:/]+/g) || []
  }
}

const extensionsWithCSS = [ 'vue', 'css', 'less', 'sass', 'scss', 'styl' ]

module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-preset-env')({ stage: 2 }),
    require('tailwindcss')('./tailwind.config.js'),
    !isHotReloaded && require('@fullhuman/postcss-purgecss')({
      content: [ `./src/**/*.@(${extensionsWithCSS.join('|')})` ],
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: extensionsWithCSS,
        },
      ],
    }),
    require('autoprefixer')(),
  ],
}
