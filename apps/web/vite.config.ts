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
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },

  // Oxfmt の設定
  fmt: {
    ignorePatterns: ['dist/**'],
    singleQuote: true,
    semi: false,
    singleAttributePerLine: true,
    sortImports: true,
  },
})
