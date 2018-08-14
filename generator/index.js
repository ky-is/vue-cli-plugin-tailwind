const imports = require('../utils/imports.js')

module.exports = (api, options) => {
	delete api.generator.pkg.postcss

	api.extendPackage({
		devDependencies: {
			"@fullhuman/postcss-purgecss": "^1.0.1",
			"postcss-import": "^12.0.0",
			"tailwindcss": "^0.6.5",
		},
	})

	api.render('./templates', options)

	api.onCreateComplete(() => {
		const jsExtension = api.hasPlugin('typescript') ? 'ts' : 'js'
		const pathToMain = api.resolve(`./src/main.${jsExtension}`)
		imports.addToFileAt(pathToMain, '@/assets/styles/tailwind.css')
	})
}
