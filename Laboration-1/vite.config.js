import { defineConfig } from "vite";
import {resolve} from "path";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
    build: {
        rollupOptions: {
            input: { /* Lägger till de html filer som ska användas */
                main: resolve(__dirname, "index.html"),
                photos: resolve(__dirname, "photos.html"), /* bäst att döpa samma namn om inte main, annars strul att hitta */
                process: resolve(__dirname, "process.html")
            }
        }
    },
    plugins: [
        ViteImageOptimizer({
            avif: {
                quality: 60
            }
        })
    ]
});
