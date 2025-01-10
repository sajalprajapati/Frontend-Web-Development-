// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode.
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    define: {
      // Define your environment variables here.
      'process.env.REACT_APP_GIPHY_API_KEY': JSON.stringify(env.VITE_REACT_APP_GIPHY_API_KEY),
    },
    // Add other configurations as needed.
  };
});
