import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Divide bibliotecas grandes como React
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Ajusta el límite de advertencia si es necesario
  },
})
