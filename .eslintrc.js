module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'no-sparse-arrays': 0,
    'no-inner-declarations': 0,
    'no-constant-condition': 0,
    'no-unused-vars': [
      2,
      {
        // 允许声明未使用变量
        vars: 'local',
        // 参数不检查
        args: 'none',
      },
    ],
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/explicit-member-accessibility': [
      2,
      { accessibility: 'no-public' },
    ],
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-use-before-define': [2, { functions: false }],
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-empty-interface': 1,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    'node/no-callback-literal': 'off',
    'prettier/prettier': 2,
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
  },

  overrides: [
    {
      files: ['**/*.md', '**/*.md/*.*', 'examples'],
      rules: {
        'no-alert': 'off',
        'no-console': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'no-restricted-imports': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-redeclare': 'off',
      },
    },
  ],
}
