import { MainNavItem} from "types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
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
}
