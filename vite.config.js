import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // Set to '/' if deploying at root, or '/subdirectory/' if deploying to a subdirectory
  plugins: [react()],
});
