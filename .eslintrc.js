module.exports = {
	root: true,
	env: {
		node: true,
	},
	parserOptions: {
		ecmaVersion: 2015,
	},
	rules: {
		'comma-dangle': [ 'error', 'always-multiline' ],
		'curly': 'error',
		'no-multiple-empty-lines': [ 'error', {
			max: 1,
		}],
		'no-var': 'error',
	},
}
