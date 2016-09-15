var paths = {
  styles     : [
    'src/thumbprint/**/*.scss',
    '!src/thumbprint/library/**/*.scss',
  ],
  css: {
      directory: './dist/css/',
      filename : './dist/css/thumbprint.css'
  },
  scss: {
      files: [
        'src/thumbprint/**/*.scss',
        '!src/thumbprint/library/**/*.scss',
      ],
      filename : './src/thumbprint/thumbprint.scss'
  }
};

// Exports the path so that projects using thumbprint
// can setup import paths NOT into the node_modules

module.exports = {
  paths: paths,
};
