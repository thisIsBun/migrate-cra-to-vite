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
})