/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "plus.unsplash.com", // ✅ add this line
    ],
  },
};

module.exports = nextConfig;
