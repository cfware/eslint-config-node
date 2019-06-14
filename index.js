'use strict';

module.exports = {
	parser: 'babel-eslint',
	env: {
		es6: true,
		node: true
	},
	rules: {
		// https://github.com/avajs/eslint-plugin-ava/issues/261
		'ava/no-import-test-files': 'off',
		'import/extensions': [
			'error',
			'always',
			{
				ignorePackages: true
			}
		],
		'lines-between-class-members': [
			'error',
			'always',
			{
				exceptAfterSingleLine: true
			}
		],
		'unicorn/import-index': 'off'
	}
};
