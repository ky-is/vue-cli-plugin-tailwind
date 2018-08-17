module.exports = (api, options) => {
	function findFileName (files, name) {
		const searchName = `/${name.toLowerCase()}`
		return Object.keys(files).find(fileName => fileName.toLowerCase().includes(searchName))
	}

	delete api.generator.pkg.postcss

	api.extendPackage({
		devDependencies: {
			"@fullhuman/postcss-purgecss": "^1.0.1",
			"postcss-import": "^12.0.0",
			"postcss-preset-env": "^5.3.0",
			"tailwindcss": "^0.6.5",
		},
	})

	api.render('./templates', options)

	api.postProcessFiles(files => {
		const searchName = 'App.vue'
		const appFileName = findFileName(files, searchName)
		const importPath = 'assets/styles/tailwind.css'
		if (!appFileName) {
			return api.exitLog(`${searchName} file not found. Please import '${importPath}' manually.`, 'error')
		}
		const appFileString = files[appFileName]
		if (appFileString.includes(importPath)) {
			return
		}
		const mainFileString = files[findFileName(files, 'main.')]
		if (mainFileString && mainFileString.includes(importPath)) {
			return
		}
		const importStatement = `\n@import '${importPath}';\n`
		const lines = appFileString.split(/\r?\n/g)
		const styleIndex = lines.findIndex(line => line.startsWith('<style'))
		if (styleIndex !== -1) {
			lines[styleIndex] += importStatement
		} else {
			lines[lines.length - 1] += `\n<style>${importStatement}</style>\n`
		}
		files[appFileName] = lines.join('\n')
	})
}
