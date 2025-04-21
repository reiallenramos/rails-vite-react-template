module.exports = {
  plugins: [
    '@atlaskit/tokens/babel-plugin',
    [
      // You can also set these options on @babel/preset-react
      // directly.
      "@babel/plugin-transform-react-jsx",
      {
        "runtime": "classic",
        "pragma": "jsx",
        "pragmaFrag": "React.Fragment"
      }
    ],
    // ↓↓ Compiled should run last ↓↓
    ['@compiled/babel-plugin', { transformerBabelPlugins: ['@atlaskit/tokens/babel-plugin'] }],
    // OPTIONAL: If you are distributing your own packages with Compiled styles (eg. to NPM/etc), you want to convert runtime Compiled to distribute `compiled.css` files for consumers to load:
    [
      '@compiled/babel-plugin-strip-runtime',
      {
        sortShorthand: true,
        // Your `extractStylesToDirectory` config is relative to where you build your output distributions for NPM/etc
        extractStylesToDirectory: { source: 'src', dest: 'dist' }
      },
    ],
  ],
};