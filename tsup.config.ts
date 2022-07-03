import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  sourcemap: true,
  clean: true,
  tsconfig: "./tsconfig.json",
  dts: true,
  target: "es5",
  inject: ["./react-imports.js"],
});
