module.exports = {
  root: true,
  extends: [
    'airbnb-typescript/base',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'prettier',
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
    'import/resolver': {
      typescript: {},
      alias: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        map: [
          ['components', './components'],
          ['screens', './screens/'],
          ['constants', './constants/'],
          ['theme', './theme/'],
          ['hooks', './hooks/'],
        ],
      },
    },
  },
  plugins: [
    'react',
    'react-native',
    'react-hooks',
    'jsx-a11y',
    'import',
    'simple-import-sort',
    'prettier',
    '@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: { jest: true, 'react-native/react-native': true },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'padded-blocks': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': [
      'error',
      {
        skip: [
          'Text',
          'TextContent',
          'Title',
          'RedirectionButtonContext',
          'TaskInfoTitleItem',
          'TaskInfoTextContent',
        ],
      },
    ],
    'react-native/no-single-element-style-arrays': 2,
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'prettier/prettier': 'error',
    'import/no-cycle': 'off',
    '@typescript-eslint/no-var-requires': 0,
    'no-confusing-arrow': 0,
    'arrow-body-style': ['error', 'always'],
    'object-curly-newline': 'off',
    'react/no-unstable-nested-components': ['off', { allowAsProps: true }],
    'arrow-parens': ['error', 'always'],
    'no-nested-ternary': 'off',
    indent: 'off',
    'operator-linebreak': [
      1,
      'after',
      { overrides: { '?': 'ignore', ':': 'ignore' } },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      { ts: 'never', tsx: 'never', js: 'never', jsx: 'never', mjs: 'never' },
    ],
  },
  globals: {
    fetch: false,
    React: true,
    google: true,
    mount: true,
    mountWithRouter: true,
    shallow: true,
    shallowWithRouter: true,
    context: true,
    expect: true,
    jsdom: true,
    JSX: true,
  },
};
