/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactCompiler: true,
  images: {
    qualities: [100, 75],
    unoptimized: true,
  },
};

export default nextConfig;