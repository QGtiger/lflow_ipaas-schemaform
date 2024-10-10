import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["src/index.tsx"],
  dts: true,
  clean: true,
  format: ["esm", 'cjs'],
  external: ["react", "antd"],
  treeshake: true,
  minify: true,
  sourcemap: true,
  splitting: true,
  // target: 'node14',
  ignoreWatch: ["**/dist", "**/node_modules"],
});
