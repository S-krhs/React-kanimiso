import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // proxy: {
    //   '/pics': {
    //     target: 'https://d2n0vbpdmqpidn.cloudfront.net/',
    //   }
    // }
  }
});
