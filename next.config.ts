import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "res.cloudinary.com",
      "images.unsplash.com",
      "plus.unsplash.com",
      "instagram.fbom26-1.fna.fbcdn.net",
      "instagram.fbom19-1.fna.fbcdn.net",
      "instagram.fbom19-2.fna.fbcdn.net",
      "instagram.fbom19-3.fna.fbcdn.net",
      "instagram.fbom26-1.fna.fbcdn.net",
      "instagram.fbom19-4.fna.fbcdn.net",
      "instagram.fbom19-5.fna.fbcdn.net",
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.fbcdn.net',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '**.instagram.com',
        pathname: '**',
      }
    ],
  },
};

export default nextConfig;
