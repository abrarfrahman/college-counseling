import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true, // Allow external access
    allowedHosts: ["5175-ieqkn3srwzycyig74z57x-e4de4238.manusvm.computer", "5173-ivgbc0ynf1a55ddx93cva-e4de4238.manusvm.computer"],
  },
})

