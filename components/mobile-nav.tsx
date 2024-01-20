"use client"

import * as React from "react"
import Image from "next/image"
import Link, { LinkProps } from "next/link"
import { usePathname, useRouter } from "next/navigation"

import { docsConfig } from "@/config/docs"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const currentRoute = usePathname() || "/";
  const [hoveredPath, setHoveredPath] = useState(currentRoute)


  useEffect(() => {
    setHoveredPath(currentRoute)
  }, [currentRoute])


  return (
    <div>
      <div className="flex justify-center items-center relative space-x-48">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <div className="lg:hidden mr-12">
              <MenuIcon />
            </div>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col justify-center bg-gradient-to-br from-[#654120]/80 to-[#2c6e31]/80 backdrop-blur">
            <MobileLink
              href="/"
              className="flex items-center justify-center"
              onOpenChange={setOpen}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="relative lg:hidden">
                  <Image className="rounded-full"
                    src="/images/logoNew.png"
                    width="119"
                    height="64"
                    alt="logo"
                  />
                </div>
              </div>
            </MobileLink>
            <ScrollArea className="mb-2 h-[calc(100vh-8rem)] pb-8">
              <div className="pt-12 flex flex-col font-medium text-xl">
                {docsConfig.mainNav?.map(
                  (item) =>
                    item.href && (
                      <MobileLink
                        key={item.href}
                        href={item.href}
                        onOpenChange={setOpen}
                        currentRoute={currentRoute}
                        setHoveredPath={setHoveredPath}
                        className={`${currentRoute === item.href
                          ? "text-yellow-500 flex items-center text-xl font-black px-2 py-4"
                          : "flex items-center text-xl font-black px-2 hover:text-yellow-500 transtion-all duration-300 py-4"
                          }`}
                      >
                        <span className="px-4">{item.title}</span>
                        {item.href === hoveredPath && (
                          <motion.span
                            className="bg-[#000000]/50 backdrop-blur-xl py-4 px-4 fixed -z-10 text-transparent rounded-lg"
                            layoutId="outline"
                            transition={{
                              type: "tween",
                              duration: 0.3,
                            }}
                          >
                            {item.title}
                          </motion.span>
                        )}
                      </MobileLink>
                    )
                )}
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
  setHoveredPath?: React.Dispatch<React.SetStateAction<string>>
  currentRoute?: string
}


function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  currentRoute,
  setHoveredPath,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
const handleMouseOver = () => {
    setHoveredPath?.(String(href)); // Ensure href is converted to a string
  };

  const handleMouseLeave = () => {
    setHoveredPath?.(String(currentRoute)); // Ensure currentRoute is converted to a string
  };

  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </Link>
  )
}
