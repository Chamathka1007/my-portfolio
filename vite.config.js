import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my-portfolio/', // <-- your repo name here
  plugins: [react()],
});
