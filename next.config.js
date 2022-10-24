/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test(".svg")
    );
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve("@svgr/webpack"),
    });
    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "encrypted-tbn0.gstatic.com",
      "a0.muscache.com",
      "media.cntraveler.com",
      "www.thearowanavilla.com",
      "thearowanavilla.com",
    ],
  },
};

module.exports = nextConfig;
