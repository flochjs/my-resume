module.exports = {
  extends: [
    'react-app',
    'airbnb-base',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  plugins: ['jsx-a11y'],
  rules: {
    'import/prefer-default-export': 'off',
    'consistent-return': 'off',
    'prefer-arrow-callback': 'off',
  },
};
