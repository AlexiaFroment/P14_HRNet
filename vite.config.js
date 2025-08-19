import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";
import { resolve } from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
var __dirname = dirname(fileURLToPath(import.meta.url));
export default defineConfig({
    plugins: [tailwindcss(), react()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
    build: {
        rollupOptions: {
            plugins: [
                visualizer({
                    filename: "stats.html",
                    open: true,
                    gzipSize: true,
                    brotliSize: true,
                }),
            ],
            output: {
                manualChunks: {
                    // React ecosystem (change jamais)
                    react: ["react", "react-dom", "react-router-dom"],
                    // Ant Design (très gros, change rarement)
                    antd: ["antd", "@ant-design/icons"],
                    // Forms & validation (moyennes, changent peu)
                    forms: ["formik", "yup"],
                    // Utils (petites mais stables)
                    utils: ["dayjs", "uuid", "zustand"],
                },
            },
        },
    },
});
