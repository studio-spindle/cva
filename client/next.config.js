module.exports = {
  webpack(_config, { isServer }) {
    const config = { ..._config };
    if (isServer) {
      const originalEntry = config.entry;

      config.entry = async () => {
        const entries = { ...(await originalEntry()) };
        entries['./scripts/build-sitemap.js'] = './scripts/build-sitemap.js';

        return entries;
      };
    }

    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
};
