import react from '@vitejs/plugin-react'
import * as path from 'path'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
import svgrPlugin from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [
    react(),
    tsconfigPaths(),
    chunkSplitPlugin(),
    svgrPlugin(),
    splitVendorChunkPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
  server: {
    port: 8000,
  },
}))
