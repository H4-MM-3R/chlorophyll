"use client"

import Image from "next/image"
import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import { MobileNav } from "./mobile-nav"

export function SiteHeader() {
  return (
    <header className="bg-gradient-to-r from-[#654120]/80 to-[#2c6e31]/80 text-white backdrop-blur-lg fixed z-40 w-screen ">
      <div className="flex lg:h-[130px] h-[75px] items-center justify-around lg:justify-center lg:mx-8">
        <MainNav items={siteConfig.mainNav} />
        <MobileNav />

        <div className="w-[119px] h-[64px] relative lg:hidden ">
          <Image className="rounded-full"
            src="/images/logoNew.png"
            alt="logo"
            layout="fill"
          />
        </div>

        <ThemeToggle />
      </div>
    </header>
  )
}
