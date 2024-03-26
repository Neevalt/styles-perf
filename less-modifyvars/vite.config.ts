import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { variables } from './src/assets/variables';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: variables,
      },
    },
  },
  plugins: [vue()],
})
