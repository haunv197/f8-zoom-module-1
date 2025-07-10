import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import path from "path";

export default defineConfig({
  base: "/f8-zoom-module-1",
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "src/index.html"),
        course: path.resolve(__dirname, "src/sign-in.html"),
        shop: path.resolve(__dirname, "src/sign-up.html"),
        contact: path.resolve(__dirname, "src/collection.html"),
        contact: path.resolve(__dirname, "src/payment.html"),
        contact: path.resolve(__dirname, "src/account.html"),
        // ...
      },
    },
  },
  plugins: [ViteEjsPlugin()],
});
