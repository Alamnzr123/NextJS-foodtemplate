/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            esModule: false,
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
