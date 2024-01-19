export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Chlorophyll",
  mainNav: [
    {
      title: "About Us",
      href: "/aboutus"
    },
    {
      title: "Products",
      href: "/products"
    },
    {
      title: "Gallery",
      href: "/gallery"
    },
    {
      title: "Blog",
      href: "/blog"
    },
    {
      title: "Contact Us",
      href: "/contactus"
    },

  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
    insta: "https://instagram.com/shadcn",
    fb: "https://facebook.com/shadcn",
  },
}
