const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: (config) => {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        "crypto": false,
        "path": false,
        "fs": false,
        "stream": false,
        "process": false,
      };
      return config;
    },
  },
};
