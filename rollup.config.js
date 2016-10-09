import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

export default {
  entry: 'src/js/main.js',
  format: 'iife',
  plugins: [babel(), uglify()],
  dest: 'dist/js/main.js'
}
