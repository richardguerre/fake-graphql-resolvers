import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";
// import * as packageJson from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext",
    minify: false,
    lib: {
      entry: "src/index.ts",
      name: "composure",
      formats: ["es"],
    },
    rollupOptions: {
      // external: Object.keys(packageJson.peerDependencies),
      output: {
        // Since we publish our ./src folder, there's no point
        // in bloating sourcemaps with another copy of it.
        sourcemapExcludeSources: true,
      },
    },
  },
  plugins: [dts(), tsconfigPaths()],
});
