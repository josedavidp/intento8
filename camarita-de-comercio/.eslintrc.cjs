module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 2022, // Cambiado a un número de versión específico en lugar de 'latest'
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect', // Cambiado a 'detect' para que detecte automáticamente la versión de React
    },
  },
  plugins: ['react-refresh'],
  rules: {
    // Las reglas que ya tenías
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
