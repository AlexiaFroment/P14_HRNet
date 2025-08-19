import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";
import { resolve } from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
var __dirname = dirname(fileURLToPath(import.meta.url));
export default defineConfig({
    plugins: [
        tailwindcss(),
        react({
            babel: {
                plugins: [
                    [
                        "babel-plugin-import",
                        {
                            libraryName: "antd",
                            libraryDirectory: "es",
                            style: false,
                        },
                    ],
                ],
            },
        }),
    ],
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
        },
    },
});
