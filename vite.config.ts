import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "https://feargh.github.io/postcode-react/",
    server: {
        port: 3000,
        strictPort: true,
        host: "localhost",
    },
});