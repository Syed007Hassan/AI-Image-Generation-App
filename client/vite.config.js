import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // generate manifest.json in outDir
    manifest: false,
    rollupOptions: {
      // overwrite default .html entry
      external: ["react"],
      input: "src/main.jsx",
    },
  },
  plugins: [react()],
});
