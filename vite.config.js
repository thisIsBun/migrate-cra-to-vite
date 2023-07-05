import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react";
import replace from '@rollup/plugin-replace';

export default defineConfig({
    server: {
        open: true
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
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                }
            }
        }
    }
})