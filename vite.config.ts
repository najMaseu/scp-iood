import path from "path";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  root: path.join(process.cwd(), "client"),
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
