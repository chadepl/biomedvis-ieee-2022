import { defineConfig } from "vite";
import path from "path";

console.log(__dirname);
const root = path.resolve(__dirname, "src") 
const out_dir = path.resolve(__dirname, "dist") 

export default defineConfig({
    root, 
    build: {
        outDir: out_dir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: path.resolve(root, "index.html"),
                diary: path.resolve(root, "diary", "index.html"),
                prototype: path.resolve(root, "prototype", "index.html"),
                prototype_ideation: path.resolve(root, "prototype_ideation", "index.html")
            }
        }
    }
})