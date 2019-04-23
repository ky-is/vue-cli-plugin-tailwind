const IN_PRODUCTION = process.env.NODE_ENV === 'production'

class TailwindVueExtractor {
  static extract (content) {
    const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
    return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
  }
}

const extensionsUsingCSS = [ 'vue', 'html' ]

module.exports = {
  plugins: [
    require('postcss-preset-env')({ stage: 2 }),
    require('tailwindcss')('./tailwind.config.js'),
    IN_PRODUCTION && require('@fullhuman/postcss-purgecss')({
      content: [ `./@(public|src)/**/*.@(${extensionsUsingCSS.join('|')})` ],
      extractors: [
        {
          extractor: TailwindVueExtractor,
          extensions: extensionsUsingCSS,
        },
      ],
      whitelist: [],
      whitelistPatterns: [ /-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).+-move$/, /^router-link(|-exact)-active$/ ],
    }),
    require('autoprefixer')(),
  ],
}
