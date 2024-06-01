import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/AppleWebsite_Vite-ReactJS/"
  

  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react': ['react', 'react-dom'], // put react and react-dom into a separate chunk
        },
      },
    },
  },
})
