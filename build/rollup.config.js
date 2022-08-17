// rollup.config.js
import vue from 'rollup-plugin-vue'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import babel from '@rollup/plugin-babel'
import minimist from 'minimist'
import scss from 'rollup-plugin-scss'
import url from '@rollup/plugin-url'

const argv = minimist(process.argv.slice(2))

const baseConfig = {
   input: 'src/entry.js',
   plugins: {
      preVue: [],
      replace: { 'process.env.NODE_ENV': 'production' },
      vue: {
         css: true,
         template: { isProduction: true },
      },
      postVue: [
         resolve({
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
         }),
         commonjs(),
      ],
      babel: {
         exclude: 'node_modules/**',
         extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
         babelHelpers: 'bundled',
      },
   },
}

const external = ['vue']

const globals = {
   vue: 'Vue',
}

// Customize configs for individual targets
const buildFormats = []
if (!argv.format || argv.format === 'es') {
   const esConfig = {
      ...baseConfig,
      input: 'src/entry.esm.js',
      external,
      output: {
         file: 'dist/vuepe.esm.js',
         format: 'esm',
         exports: 'named',
      },
      plugins: [
         replace(baseConfig.plugins.replace),
         ...baseConfig.plugins.preVue,
         url(),
         vue(baseConfig.plugins.vue),
         ...baseConfig.plugins.postVue,
         babel({
            ...baseConfig.plugins.babel,
            presets: require('../babel.config').presets,
         }),
      ],
   }
   buildFormats.push(esConfig)
}

if (!argv.format || argv.format === 'cjs') {
   const umdConfig = {
      ...baseConfig,
      external,
      output: {
         compact: true,
         file: 'dist/vuepe.ssr.js',
         format: 'cjs',
         name: 'Vuepe',
         exports: 'auto',
         globals,
      },
      plugins: [
         replace(baseConfig.plugins.replace),
         ...baseConfig.plugins.preVue,
         url(),
         vue({
            ...baseConfig.plugins.vue,
            template: {
               ...baseConfig.plugins.vue.template,
               optimizeSSR: true,
            },
         }),
         ...baseConfig.plugins.postVue,
         babel(baseConfig.plugins.babel),
      ],
   }
   buildFormats.push(umdConfig)
}

if (!argv.format || argv.format === 'iife') {
   const unpkgConfig = {
      ...baseConfig,
      external,
      output: {
         compact: true,
         file: 'dist/vuepe.min.js',
         format: 'iife',
         name: 'Vuepe',
         exports: 'auto',
         globals,
      },
      plugins: [
         replace(baseConfig.plugins.replace),
         ...baseConfig.plugins.preVue,
         url(),
         vue(baseConfig.plugins.vue),
         ...baseConfig.plugins.postVue,
         babel(baseConfig.plugins.babel),
      ],
   }
   buildFormats.push(unpkgConfig)
}

// build css
buildFormats.push({
   input: 'src/style.js',
   plugins: [
      scss({
         output: 'dist/vuepe.min.css',
         outputStyle: 'compressed',
         failOnError: true,
      }),
   ],
})
// Export config
export default buildFormats
