export default {
  presets: [['@babel/preset-env', { targets: 'defaults' }]],
  plugins: ['./remove-jsdoc.js'],
};
