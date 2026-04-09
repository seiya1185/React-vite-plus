import { defineConfig } from 'vite-plus'

export default defineConfig({
  server: {
    host: true,
    port: 5174,
    watch: {
      usePolling: true,
    },
  },

  // Oxlint の設定
  lint: {
    ignorePatterns: ['dist/**'],
  },

  // Oxfmt の設定
  fmt: {
    singleQuote: true,
    semi: false,
  },
})
