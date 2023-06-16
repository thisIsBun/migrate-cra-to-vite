import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react";

export default defineConfig({
    server: {
        open: '/index.html'
    },
    plugins: [react()],
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
    build: {
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/react-router-dom')) {
                        return 'react';
                    } else if (id.includes('node_modules/@fortawesome/free-solid-svg-icons')) {
                        return 'fortawesome';
                    } else if (id.includes('node_modules/@reach/combobox') || id.includes('node_modules/@react-google-maps/api') || id.includes('node_modules/use-places-autocomplete') || id.includes('node_modules/firebase')) {
                        return 'google';
                    } else if (id.includes('node_modules/@fortawesome/fontawesome-svg-core') || id.includes('node_modules/react-table') || id.includes('node_modules/styled-components' || id.includes('node_modules/sweetalert2')) || id.includes('node_modules/@fortawesome/react-fontawesome') || id.includes('node_modules/@fortawesome/free-regular-svg-icons')) {
                        return 'utilities';
                    }
                }
            }
        }
    }
})