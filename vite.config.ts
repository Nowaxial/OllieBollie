import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // eslint-disable-next-line prettier/prettier
    port: 1080 // använd port 3000 istället för standardporten 3000
  },
});
