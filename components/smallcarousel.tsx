"use client"

import { SmallCarouselItem } from "@/types/ui"
import Link from "next/link"
import Image from "next/image"


interface SmallCarouselProps {
  items?: SmallCarouselItem[];
}


export function SmallCarousel({ items }: SmallCarouselProps) {

  return (
    <div className="dark:bg-[#121212]">
      <div className="relative
    ">
        <div className="h-[450px] m-auto relative w-[67%] grid place-items-center overflow-hidden
        after:bg-gradient-to-r after:to-transparent after:from-white after:dark:from-[#121212] after:content-[''] after:h-full after:absolute after:w-1/12 after:z-10 after:left-0 after:top-0
        before:bg-gradient-to-r before:to-transparent before:from-white before:dark:from-[#121212] before:content-[''] before:h-full before:absolute before:w-1/12 before:z-10 before:right-0 before:top-0 before:rotate-180
      ">
          <div className="flex w-[1250px] lg:w-[2500px] animate-smallercarousel lg:animate-smallcarousel">
            {items?.map((item) =>
              <div className="p-4" key={item.key}>
                <Image className="h-[145px] w-[125px] lg:w-[250px] lg:h-[289px] z-30 duration-1000 ease-in-out rounded-3xl hover:cursor-pointer hover:rounded-lg hover:scale-125 "
                  src={item.src}
                  alt=""
                  width="250"
                  height="289"
                  key={item.key}
                />
                <Link href="/products">
                </Link>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}



