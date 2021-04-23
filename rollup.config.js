import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import packageJson from "./package.json";

const config = {
  extensions: [".ts", ".tsx"],
};

export default {
  input: "./src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions: config.extensions }),
    commonjs(),
    babel({
      extensions: config.extensions,
      include: ["src/**/*"],
      exclude: "node_modules/**",
    }),
  ],
};
