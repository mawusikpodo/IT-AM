/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "adventurous-caiman-790.convex.cloud",
      },
    ],
    domains: ['tough-falcon-11.convex.cloud'],
  },
};

export default nextConfig;
