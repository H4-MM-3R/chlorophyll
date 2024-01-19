"use client"

import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
              className="dark:shadow-white shadow-black shadow-inner h-10 py-2 px-4 inline-flex items-center justify-center rounded-md text-sm font-medium hover:text-white hover:bg-black dark:text-white hover:dark:bg-white hover:dark:text-black overflow-hidden transition-all duration-700"
            >
              <div className="flex justify-center gap-1 items-center">
                <span>More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </motion.div>
        </div>
        <div className="h-[35vh]"> </div>
      </section>


      </div>
  );
}
