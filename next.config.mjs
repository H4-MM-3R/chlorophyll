/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagehost9.online-image-editor.com",
      },{
        protocol: "https",
        hostname: "www.aloha.com",
      },{
        protocol: "https",
        hostname: "www.naturenursery.in",
      },{
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },{
        protocol: "https",
        hostname: "images.unsplash.com",
      },{
        protocol: "https",
        hostname: "png.pngtree.com",
      },{
        protocol: "https",
        hostname: "images.rawpixel.com",
      }
    ]
  },
  redirects(){
    return [
      {
        source: "/templates",
        destination: "/templates/dashboard",
        permanent: true,
      }
    ]
  }
}

export default nextConfig;


