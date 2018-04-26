import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

export default {
    input: "index.js",
    treeshake: false,
    plugins: [
        babel({
            extends: __dirname+"/.babelrc.js",
        }),
        resolve({
            jsnext: true,
        }),
        commonjs({
        }),
    ],
    output: {
        file: "output.js",
        format: "iife",
        name: "example",
        sourcemap: false
    }
};