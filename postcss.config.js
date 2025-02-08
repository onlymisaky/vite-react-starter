/**
 * @link https://github.com/postcss/postcss#usage
 * @link https://github.com/postcss/postcss-load-config/
 * @type {import('postcss-load-config').Config}
 */
export default {
  plugins: {
    /**
     * @link https://github.com/postcss/postcss-nested
     * @description 如果仅需嵌套、变量语法，使用 PostCss 性能比 scss 更优
     */
    'postcss-nested': {},
    autoprefixer: {},
    tailwindcss: {},
  },
};
