// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "@umn-latis/quill-better-image-module",
      // the proper extensions will be added
      fileName: "index",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["quill"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          quill: "Quill",
        },
      },
    },
  },
});
