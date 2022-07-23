import path from "path";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import wasmPack from "vite-plugin-wasm-pack";

export default defineConfig({
  plugins: [solidPlugin(), wasmPack("./scp-iood-wasm")],
  root: path.join(process.cwd(), "client"),
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./client/src/components"),
      "@application": path.resolve(__dirname, "./application"),
      "@domain": path.resolve(__dirname, "./domain"),
      "@infrastructure": path.resolve(__dirname, "./infrastructure"),
    },
  },
  assetsInclude: ["**/*.gltf"],
});
