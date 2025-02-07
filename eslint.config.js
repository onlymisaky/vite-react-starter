import antfu from '@antfu/eslint-config';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default antfu({
  react: true,
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
  },
  rules: {
    'style/arrow-parens': 'off',
    'style/semi': ['error', 'always'],
    'style/quote-props': 'off',
    'node/prefer-global/process': 'off',
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  ignores: [
    '**/tsconfig.*.json',
    '**/tsconfig.json',
  ],
});
