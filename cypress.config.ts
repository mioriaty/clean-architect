import { defineConfig } from 'cypress'
import vitePreprocessor from 'cypress-vite'

export default defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:8000',
    specPattern: ['**/*.spec.ts', '**/*.test.ts', '**/*.cy.ts'],
    setupNodeEvents(on) {
      on(
        'file:preprocessor',
        vitePreprocessor({
          configFile: './vite.config.test.js',
          mode: 'development',
        })
      )
    },
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
})
