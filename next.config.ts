import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://avatars.steamstatic.com/**'),
      new URL('https://cdn.akamai.steamstatic.com/steam/apps/**')
    ],
  },
};

export default nextConfig;
