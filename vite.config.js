import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react";
import replace from '@rollup/plugin-replace';

export default defineConfig({
    server: {
        open: '/index.html'
    },
    plugins: [replace({
        __PUBLIC_URL__: '/migrate-cra-to-vite',
        preventAssignment: true,
    }), react()],
    esbuild: {
        loader: "jsx",
        include: /src\/.*\.jsx?$/,
        exclude: [],
    },
    optimizeDeps: {
        esbuildOptions: {
            loader: {
                '.js': 'jsx',
            },
        },
    },
    base: '/migrate-cra-to-vite',
})