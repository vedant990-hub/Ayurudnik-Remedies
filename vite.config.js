  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  import path from 'path'

  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [react()],
    root: '.',
    publicDir: 'public',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    server: {
      port: 3000,
      open: true,
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
      assetsInlineLimit: 4096,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // Vendor chunks
            if (id.includes('node_modules/react')) {
              return 'vendor-react';
            }
            if (id.includes('node_modules/react-router')) {
              return 'vendor-router';
            }
            if (id.includes('node_modules')) {
              return 'vendor';
            }
            // Page chunks for code splitting
            if (id.includes('/pages/')) {
              const pageName = id.match(/\/pages\/(\w+)/)?.[1];
              return `page-${pageName}`;
            }
            // Component chunks
            if (id.includes('/components/')) {
              return 'components';
            }
          },
        },
      },
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        loader: {
          '.js': 'jsx',
        },
      },
    },
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  })
