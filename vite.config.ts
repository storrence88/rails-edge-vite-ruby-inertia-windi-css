import { defineConfig } from "vite";
import RubyPlugin from "vite-plugin-ruby";
import react from "@vitejs/plugin-react";
import WindiCSS from "vite-plugin-windicss";

export default defineConfig({
  plugins: [
    react(),
    RubyPlugin(),
    WindiCSS({
      root: __dirname,
      scan: {
        fileExtensions: ["erb", "haml", "html", "vue", "js", "ts", "jsx", "tsx"],
        dirs: ["app/views", "app/frontend"]
      }
    })
  ]
});
