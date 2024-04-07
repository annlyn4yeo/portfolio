/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Disable Image Optimization API
  },
  output: "export",
};

export default nextConfig;
