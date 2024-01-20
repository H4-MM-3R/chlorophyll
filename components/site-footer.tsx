import Link from "next/link"

import { siteConfig } from "@/config/site"

import { Icons } from "./icons"
import { ThemeToggle } from "./theme-toggle"
import { buttonVariants } from "./ui/button"

export default function SiteFooter() {
  return (
    <footer className="relative w-screen dark:bg-gradient-to-r dark:from-[#654120] dark:to-[#2c6e31] text-sm text-neutral-500 dark:text-neutral-400 bottom-0 ">
      <div className="border-b border-accent-foreground w-screen mx-auto mb-4 "></div>
      <div className="lg:flex px-8 pb-4 text-sm dark:border-neutral-700 ">
        <Link href="/">
        <div className="w-full flex justify-center items-center">
          <div className="w-[350px] lg:w-[400px] mb-4">
            <img src="/images/appLogo-removebg.png" alt="" />
          </div>
        </div>
        </Link>
        <div className="px-4 flex flex-col lg:flex-row justify-around w-full gap-12">
          <nav className="flex justify-center w-full lg:pl-36 lg:space-x-12 space-x-4 items-center">
            <div className="flex flex-col space-y-4">
              <Link href="/contactus">
                <div className="font-medium duration-300 transition-all text-2xl bg-gradient-to-r from-[#654120] to-[#2c6e31] text-transparent bg-clip-text dark:text-white hover:text-black hover:dark:text-stone-500 ">
                  Contact Us
                </div>
              </Link>
              <Link href="/contactus#enquiry">
                <div className="font-light duration-300 transition-all bg-gradient-to-r from-[#654120] to-[#2c6e31] text-transparent bg-clip-text dark:text-white hover:text-black hover:dark:text-stone-500 ">
                  Enquiry
                </div>
              </Link>
              <Link href="/about">
                <div className="font-light duration-300 transition-all bg-gradient-to-r from-[#654120] to-[#2c6e31] text-transparent bg-clip-text dark:text-white hover:text-black hover:dark:text-stone-500 ">
                  Contact Us
                </div>
              </Link>
              <Link href="/contactus#location">
                <div className="font-light duration-300 transition-all bg-gradient-to-r from-[#654120] to-[#2c6e31] text-transparent bg-clip-text dark:text-white hover:text-black hover:dark:text-stone-500 ">
                  Location
                </div>
              </Link>
            </div>
            <div className="h-full w-[1px] bg-transparent" />
            <div className="flex flex-col space-y-4">
              <Link href="/aboutus">
                <div className="font-medium duration-300 transition-all text-2xl bg-gradient-to-r from-[#654120] to-[#2c6e31] text-transparent bg-clip-text dark:text-white hover:text-black hover:dark:text-stone-500 ">
                  About Us
                </div>
              </Link>
              <Link href="/aboutus#history">
                <div className="font-light duration-300 transition-all bg-gradient-to-r from-[#654120] to-[#2c6e31] text-transparent bg-clip-text dark:text-white hover:text-black hover:dark:text-stone-500 ">
                 History
                </div>
              </Link>
              <Link href="/aboutus#mission">
                <div className="font-light duration-300 transition-all bg-gradient-to-r from-[#654120] to-[#2c6e31] text-transparent bg-clip-text dark:text-white hover:text-black hover:dark:text-stone-500 ">
                  Mission
                </div>
              </Link>
              <Link href="/aboutus#team">
                <div className="font-light duration-300 transition-all bg-gradient-to-r from-[#654120] to-[#2c6e31] text-transparent bg-clip-text dark:text-white hover:text-black hover:dark:text-stone-500 ">
                  Team
                </div>
              </Link>
            </div>
            <div className="h-full w-[1px] bg-transparent" />
            <div className="flex flex-col space-y-4">
              <Link href="/about">
                <div className="font-medium duration-300 transition-all text-2xl bg-gradient-to-r from-[#654120] to-[#2c6e31] text-transparent bg-clip-text dark:text-white hover:text-black hover:dark:text-stone-500 ">
                  Blog
                </div>
              </Link>
              <Link href="/about">
                <div className="font-light duration-300 transition-all bg-gradient-to-r from-[#654120] to-[#2c6e31] text-transparent bg-clip-text dark:text-white hover:text-black hover:dark:text-stone-500 ">
                  Contact Us
                </div>
              </Link>
              <Link href="/about">
                <div className="font-light duration-300 transition-all bg-gradient-to-r from-[#654120] to-[#2c6e31] text-transparent bg-clip-text dark:text-white hover:text-black hover:dark:text-stone-500 ">
                  Contact Us
                </div>
              </Link>
              <Link href="/about">
                <div className="font-light duration-300 transition-all bg-gradient-to-r from-[#654120] to-[#2c6e31] text-transparent bg-clip-text dark:text-white hover:text-black hover:dark:text-stone-500 ">
                  Contact Us
                </div>
              </Link>
            </div>
          </nav>
          <div className="flex flex-col space-y-4 justify-center items-center mx-12">
            <h1 className="text-xl font-black dark:text-white">Follow Us on</h1>
            <nav className="flex items-center space-x-8">
              <Link
                href={siteConfig.links.insta}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "insta",
                  })}
                >
                  <Icons.insta className="h-5 w-5" />
                </div>
              </Link>
              <Link href={siteConfig.links.fb} target="_blank" rel="noreferrer">
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "fb",
                  })}
                >
                  <Icons.fb className="h-7 w-6 fill-current" />
                </div>
              </Link>
              <Link href={siteConfig.links.fb} target="_blank" rel="noreferrer">
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "twitter",
                  })}
                >
                  <Icons.twitter className="h-7 w-6 fill-current" />
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="border-b border-muted lg:w-[900px] w-[500px] mx-auto mb-4"></div>
      <div className="text-center px-2 mb-4">
        © Copyright 2023. All Rights Reserved. Chlorophyll
      </div>
    </footer>
  )
}
