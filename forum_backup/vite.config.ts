import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";

export default defineConfig({
    base: "/forum/",
    build: {
        emptyOutDir: true,
        outDir: "../static/forum",
    },
    plugins: [svelte()],
    resolve: {
        alias: {
            "@": resolve("./src"),
        },
    },
});
