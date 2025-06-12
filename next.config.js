/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/4GZDgpWQ2F',
        permanent: false,
      },
      {
        source: '/access',
        destination: 'https://discord.gg/QweRcCA3N4',
        permanent: false,
      },
      {
        source: '/explorer',
        destination: 'https://explorer.mud.dev/redstone/worlds/0x253eb85B3C953bFE3827CC14a151262482E7189C',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
