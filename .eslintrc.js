module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'linebreak-style': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'import/no-named-as-default': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-no-constructed-context-values': 'off',
  },
};
