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
}
