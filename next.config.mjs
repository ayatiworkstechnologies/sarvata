/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  output: "export",

  images: {
    qualities: [100, 75],
    unoptimized: true, // Required for static export
  },

  trailingSlash: true, // Optional: generates folder-based URLs
};

export default nextConfig;