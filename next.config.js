/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  content: [
    "@/pages/**/*.{js,ts,jsx,tsx}",
    "@/components/**/*.{js,ts,jsx,tsx}",
    "@/assets/**/*.{js,ts,jsx,tsx}",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('c/src/assets/images/heroImage.png')",
      },
    },
    colors: {
      green: "#10983A",
      black: "#000000",
      gray: "#4F4F4F",
      border: "#D2D2D2",
    },
  },
};
