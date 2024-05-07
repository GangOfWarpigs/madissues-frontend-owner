import path from "path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

import tailwind from "tailwindcss"
import autoprefixer from "autoprefixer"
import vuetify from "vite-plugin-vuetify"

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement: (tag) => {
              return tag.startsWith('v-')
            }
          }
        }
      }),
      vuetify({ autoImport: true}),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})