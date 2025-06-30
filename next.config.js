/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"],
  },
};

// module.exports = {
//   experimental: {
//     optimizePackageImports: ["@phosphor-icons/react"],
//   },
// };
export default nextConfig;
