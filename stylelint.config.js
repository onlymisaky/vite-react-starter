/**
 * @link https://stylelint.io/user-guide/configure
 * @type {import('stylelint').Config}
 */
export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-tailwindcss',
    'stylelint-config-tailwindcss/scss',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'order/order': [],
    'order/properties-order': [],
    'at-rule-no-unknown': [true, {
      ignoreAtRules: ['use', 'tailwind'],
    }],
    'color-function-notation': null,
    'alpha-value-notation': null,
    'selector-class-pattern': null,
  },
};
