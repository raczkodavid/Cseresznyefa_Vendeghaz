import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import vueDevTools from "vite-plugin-vue-devtools";
export default defineConfig({
  plugins: [vue(), tailwindcss(), vueDevTools()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@images": path.resolve(__dirname, "./src/assets/images"),
      "@deluxe": path.resolve(
        __dirname,
        "./src/assets/images/apartments/deluxe"
      ),
      "@standard": path.resolve(
        __dirname,
        "./src/assets/images/apartments/standard"
      ),
      "@outside": path.resolve(
        __dirname,
        "./src/assets/images/apartments/outside"
      ),
      "@localTypes": path.resolve(__dirname, "./src/types"),
    },
  },
});
