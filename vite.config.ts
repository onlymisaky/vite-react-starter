import * as path from 'node:path';
import react from '@vitejs/plugin-react-swc';
import { codeInspectorPlugin } from 'code-inspector-plugin';
import { defineConfig, loadEnv } from 'vite';

// https://vite.dev/config/
export default defineConfig((config) => {
  const envDir = path.resolve(process.cwd(), './environments');
  const env = loadEnv(config.mode, envDir) as unknown as ViteEnv;

  return {
    base: process.env.BASE_URL || env.BASE_URL || '/',
    envDir,
    plugins: [
      react(),
      codeInspectorPlugin({
        bundler: 'vite',
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});
