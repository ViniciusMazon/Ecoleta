module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript-prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "import/extensions": ["error", "ignorePackages", {
      "ts": "never",
      "tsx": "never",
      "js": "never",
      "jsx": "never",
      "mjs": "never"
    }]
  },
}
