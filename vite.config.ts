import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Detect if the environment is production
const isProduction = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // base: '/outreachspace/',
  base: isProduction ? '/outreachspace/' : '/', // Only use base for GitHub Pages

});
