import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: {
      index: "src/index.ts",
      styles: "src/styles.css"
    },
    format: ["cjs", "esm"],
    dts: true,
    clean: true,
    minify: true,
    external: ["react", "react-dom", "lucide-react", "next", "next/server"],
    injectStyle: false,
    esbuildOptions(options) {
      options.banner = {
        js: '"use client";',
      };
    },
  },
  {
    entry: {
      "server/index": "src/server/index.ts",
    },
    format: ["cjs", "esm"],
    dts: true,
    clean: false,
    minify: true,
    external: ["react", "react-dom", "lucide-react", "next", "next/server", "@libsql/client/web", "@line/bot-sdk"],
  }
]);
