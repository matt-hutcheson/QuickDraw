import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import macrosPlugin from "vite-plugin-babel-macros";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), macrosPlugin()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
