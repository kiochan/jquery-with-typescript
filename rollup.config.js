import typescript from 'rollup-plugin-typescript'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

export default {
    input: './src/index.ts',
    output: {
        file: 'dist/index.js',
        format: 'iife',
        exports: 'named',
        sourcemap: true
    },
    plugins: [
        typescript(),
        resolve(),
        commonjs()
    ]
}
