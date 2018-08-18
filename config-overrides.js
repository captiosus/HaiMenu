const paths = require("react-scripts/config/paths");
const { getLoader, loaderNameMatches } = require("react-app-rewired");

module.exports = function override(config, env) {

  const babelLoader = getLoader(
    config.module.rules,
    rule => loaderNameMatches(rule, 'babel-loader')
  );

  babelLoader.include = [paths.appSrc, paths.appNodeModules + '/react-native-vector-icons/'];
  config.module.rules.push({
    test: '/\.ttf$/',
    loader: 'url-loader',
    include: paths.appNodeModules + '/react-native-vector-icons/'
  });
  return config;
}
