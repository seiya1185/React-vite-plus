import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5174,
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
