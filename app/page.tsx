"use client";

import { SmallCarousel } from "@/components/smallcarousel";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { smallCarouselConfig } from "@/config/scarousel";
import { siteConfig } from "@/config/site";
import { fontItalic } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const plugin = useRef(Autoplay({ delay: 2000 }));

  const galleryArray = [
    "/gallery/Pic1.png",
    "/gallery/Pic2.png",
    "/gallery/Pic4.png",
    "/gallery/Pic5.png",
    "/gallery/Pic6.png",
  ];

  return (
    <div className="dark:bg-gradient-to-r dark:from-[#654120] dark:to-[#2c6e31]">
      <section className="grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex flex-col items-center gap-2">
          <div className="bg-gradient-to-r from-[#654120] to-[#2c6e31] h-[35vh]"></div>
          <Link
            href={siteConfig.links.twitter}
            className="rounded-2xl px-4 py-1.5 text-sm font-medium text-white"
            target="_blank"
          >
            Follow along on Twitter
          </Link>
          <h1 className="bg-gradient-to-r from-[#654120] to-[#2c6e31] text-transparent dark:text-white bg-clip-text text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl lg:text-6xl text-center pb-4">
            Welcome to Chlorophyll <br className="hidden sm:inline" />
          </h1>
          <p className="text-center mx-auto max-w-[700px] text-lg text-muted-foreground">
            a Location nestled in the heart of lush greenery, our nursery is a
            haven for plant enthusiasts and those seeking to bring the serenity
            of nature into their lives..
          </p>
        </div>
        <div className="flex justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", ease: "easeInOut", duration: 0.6 }}
          >
            <Link
              href="/aboutus"
              className="group dark:shadow-white shadow-black shadow-inner h-10 py-2 px-4 inline-flex items-center justify-center rounded-md text-sm font-medium hover:text-white hover:bg-black dark:text-white hover:dark:bg-white hover:dark:text-black overflow-hidden transition-all duration-700"
            >
              <div className="flex justify-center gap-1 items-center">
                <span>More About Us</span>
                <ArrowRight className="h-4 w-4 group-hover:scale-125 group-hover:translate-x-1 transition-transform duration-700" />
              </div>
            </Link>
          </motion.div>
        </div>
        <div className="h-[35vh]"> </div>
      </section>

      <section className="w-full">
        <Carousel plugins={[plugin.current]} className="max-w-screen">
          <CarouselContent>
            <CarouselItem key={1}>
              <img alt="" src="/display/picture1.png" />
            </CarouselItem>
            <CarouselItem key={2}>
              <img alt="" src="/display/picture2.png" />
            </CarouselItem>
            <CarouselItem key={3}>
              <img
                alt=""
                src="https://www.naturenursery.in/wp-content/uploads/2020/03/1920x773.jpg"
              />
            </CarouselItem>
            <CarouselItem key={4}>
              <img
                alt=""
                src="https://www.naturenursery.in/wp-content/uploads/2020/01/IMG_20191126_170016.jpg"
              />
            </CarouselItem>
            <CarouselItem key={5}>
              <img
                alt=""
                src="https://www.naturenursery.in/wp-content/uploads/2020/02/NN-1.jpg"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>

      <section className="space-y-6 dark:text-white text-transparent py-8 lg:py-24">
        <div className="container  flex max-w-[64rem] flex-col items-center gap-8 text-center">
          <h1 className="bg-gradient-to-r from-[#654120] to-[#2c6e31] text-transparent bg-clip-text dark:text-white text-4xl font-black leading-tight tracking-tighter md:text-6xl">
            Checkout our Products
          </h1>

          <Link href="/products" className="group">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Button variant="new">
                <div className="flex justify-center items-center gap-1">
                  <span>Explore our Products</span>
                  <ArrowRight className="h-4 w-4 group-hover:scale-125 group-hover:translate-x-1 transition-transform duration-700" />
                </div>
              </Button>
            </motion.div>
          </Link>
        </div>
      </section>

      <SmallCarousel items={smallCarouselConfig.items} />

      <section className="flex justify-center items-center flex-col lg:flex-row py-12 gap-4">
        <div className="bg-stone-500/40 dark:bg-black/40 backdrop-blur aspect-square w-[300px] lg:w-[600px] flex-col flex justify-center gap-4 items-center rounded-xl">
          <h1 className="lg:text-4xl text-2xl font-black leading-tighter tracking-tight text-center pb-12">
            Explore the lush beauty of our Home gardening store.
          </h1>
          <p className=" px-4 text-center">
            Each photo tells a story of growth, resilience, and the inherent
            beauty of the natural world. Feel the therapeutic power of greenery
            as you scroll through our gallery
          </p>
          <p className={cn("px-8 pb-12 text-center", fontItalic.className)}>
            Visit us in-store to witness the magic in person and bring home a
            piece of nature's artistry. Our passionate team is ready to assist
            you in selecting the perfect additions to your garden, answering
            questions, and sharing expert tips to ensure your plants thrive
          </p>
          <Link href="/gallery" className="group">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Button className="bg-white dark:bg-transparent text-black dark:shadow-white shadow-black shadow-inner h-10 py-2 px-4 inline-flex items-center justify-center rounded-md text-sm font-medium hover:text-white hover:bg-black dark:text-white hover:dark:bg-white hover:dark:text-black overflow-hidden transition-all duration-700">
                <div className="flex justify-center items-center gap-1">
                  <span>Explore our Gallery</span>
                  <ArrowRight className="h-4 w-4 group-hover:scale-125 group-hover:translate-x-1 transition-transform duration-700" />
                </div>
              </Button>
            </motion.div>
          </Link>
        </div>

        <div className="aspect-square w-[250px] sm:w-[600px] flex justify-center rounded-xl">
          <div className="w-fit flex justify-center items-center">
            <Carousel className="w-full max-w-sm">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <img src={galleryArray[index]} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}
