module.exports = {
	addToFileAt (filePath, importPath) {
		const importStatement = `import '${importPath}'`
		const fs = require('fs')
		const mainFileString = fs.readFileSync(filePath, 'utf-8')
		if (mainFileString.includes(importStatement)) {
			return
		}
		const lines = mainFileString.split(/\r?\n/g)
		let lastImportLineIndex = 0
		for (let index = 1; index < lines.length; index += 1) {
			const line = lines[index].trim()
			if (line.length) {
				if (!line.startsWith('import ')) {
					break
				}
				lastImportLineIndex = index
			}
		}
		lines[lastImportLineIndex] += `\n\n${importStatement}`
		fs.writeFileSync(filePath, lines.join('\n'), 'utf-8')
	},
}
