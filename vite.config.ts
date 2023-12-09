import react from '@vitejs/plugin-react'
import * as path from 'path'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
import svgrPlugin from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  plugins: [
    react(),
    tsconfigPaths(),
    chunkSplitPlugin(),
    svgrPlugin(),
    splitVendorChunkPlugin(),
  ],
  build: {
    chunkSizeWarningLimit: 1600,
    minify: mode === 'development' ? false : 'terser',
    sourcemap: command === 'serve' ? 'inline' : false,
    rollupOptions: {
      output: {
        indent: false,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
}))
