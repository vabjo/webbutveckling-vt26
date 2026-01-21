import { defineConfig } from "vite";
import {resolve} from "path";

export default defineConfig({
    build: {
        rollupOptions: {
            input: { /* Lägger till de html filer som ska användas */
                main: resolve(__dirname, "index.html"),
                photos: resolve(__dirname, "pics.html"),
                process: resolve(__dirname, "process.html")
            }
        }
    }
});
