import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), basicSsl()],
  build: {
    lib: {
      entry: {
        appOne: './src/appOne/main.js',
        appTwo: './src/appTwo/main.js'
      }
    }
  },
  server: {
    open: '/',
    https: true,
    strictPort: true,
  }
});
