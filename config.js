var paths = {
  'styles': [
    'src/thumbprint/**/*.scss',
    '!src/thumbprint/library/**/*.scss',
  ],
  cssDest: './dist/css/',
  cssDestName: './dist/css/thumbprint.css',
  thumbprint: './src/thumbprint/thumbprint.scss',
  scssLint: 'stylelintrc.json'
};

// Building flat CSS with base64 icons for use in extras apps

module.exports = {
  paths: paths,
};
