const rewireSass = require('react-app-rewire-sass');

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireSass(config, env);
  return config;
}