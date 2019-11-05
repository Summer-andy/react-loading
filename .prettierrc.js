module.exports = {
	printWidth: 100,
	singleQuote: true,
	trailingComma: 'none',
	semi: true,
	overrides: [
		{
			files: '*.md',
			options: {
				parser: 'markdown',
			},
		},
	],
};
