import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { featureFlags } from './src/lib/site.config.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Silence rolldown's advisory plugin-timing notice — it's machine-load
      // dependent and makes CI/QA "zero warnings" checks flaky.
      checks: { pluginTimings: false },
    },
  },
  define: {
    // Inlined as a literal at build time so that when a feature flag is off,
    // the bundler dead-code-eliminates the lazy import and the feature's
    // chunk is not emitted at all. Source of truth: src/lib/site.config.js.
    __FEATURE_AI_CHATBOT__: JSON.stringify(featureFlags.aiChatbot),
    __FEATURE_BOOKING__: JSON.stringify(featureFlags.booking),
    __FEATURE_ECOMMERCE__: JSON.stringify(featureFlags.ecommerce),
  },
})
