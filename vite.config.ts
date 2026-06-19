import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "es2020",
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (/[\\/](three|@react-three)[\\/]/.test(id)) return "three";
          if (/[\\/]gsap[\\/]/.test(id)) return "gsap";
          if (/[\\/]framer-motion[\\/]/.test(id)) return "motion";
          if (
            /[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/.test(
              id
            )
          )
            return "vendor";
        },
      },
    },
  },
});
