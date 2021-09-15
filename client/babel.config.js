const mode = process.env.NODE_ENV || 'development';
const isDevelopment = mode === 'development';
const isProduction = mode === 'production';

module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        alias: {
          src: './src',
        },
      },
    ],
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    isProduction ? '@babel/plugin-transform-react-constant-elements' : null,
    isProduction
      ? [
          'babel-plugin-transform-react-remove-prop-types',
          {
            removeImport: true,
          },
        ]
      : null,
  ].filter(Boolean),
};
