"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import { fontItalic } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export default function() {
  return (
    <div className="dark:bg-gradient-to-r from-[#654120] to-[#2c6e31]">
      <section className="py-24 w-full">
        <div className="flex items-center justify-center">
          <div className="bg-contactusBg dark:bg-blend-multiply bg-center w-full h-[400px] flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-white/70 rounded-xl dark:bg-black/50 w-[500px] h-[250px] backdrop-blur-[6px] flex flex-col space-y-4 justify-center items-center ">
                <h1 className="bg-gradient-to-r from-[#654120] to-[#2c6e31] bg-clip-text text-transparent dark:text-white text-7xl font-black">
                  About Us
                </h1>
                <p className="bg-gradient-to-r from-[#654120] to-[#2c6e31] bg-clip-text text-transparent dark:text-white text-lg font-light font-mono">
                  Our Motivation and Vision for this Store
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 w-full">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <img
                alt="Image"
                className="mx-auto aspect-[1/1] overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="https://t3.ftcdn.net/jpg/04/50/95/60/360_F_450956077_XzAzwqPtSQ9JYIfq0XjjVwC6UCOwWoRK.jpg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4 w-[600px]">
                <div className="flex justify-center items-center space-y-2">
                  <h2 className="text-5xl font-black tracking-tighter">
                    About Our Plant Nursery
                  </h2>
                </div>
                <div className="flex justify-center items-center space-y-2">
                  <p className="text-center max-w-[700px] overflow-flex text-gray-500 dark:text-gray-400 text-md font-medium">
                    We are a family-owned plant nursery with a passion for
                    growing beautiful plants.
                  </p>
                </div>
                <div className="text-lg">
                  Chlorophyll, your premier plant garden store, sprouted from a
                  shared passion for greenery and a commitment to fostering a
                  deeper connection between people and nature. Established in
                  the vibrant spring of 2023, our journey began with the simple
                  desire to create a space where the beauty of plants could be
                  celebrated, and customers could embark on their own green
                  adventures.
                </div>
                <div className={cn("font-light text-lg", fontItalic.className)}>
                  From a modest seed, Chlorophyll has grown into a flourishing
                  nursery, dedicated to providing a diverse selection of
                  high-quality plants and sharing the joy of cultivating a green
                  haven.
                </div>
                <div className="flex justify-center pt-8">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                      type: "spring",
                      ease: "easeInOut",
                      duration: 0.6,
                    }}
                  >
                    <Link
                      href="/gallery"
                      className="dark:shadow-white shadow-black shadow-md h-10 py-2 px-4 inline-flex items-center justify-center rounded-md text-sm font-medium hover:text-white hover:bg-black dark:text-white hover:dark:bg-white hover:dark:text-black overflow-hidden transition-all duration-700"
                    >
                      Checkout our Gallery
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="py-24 w-full">
        <div className="container">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-5xl font-black mb-4">
              We Chlorophyll as a Plant Store
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center mx-auto px-8 h-full space-x-4 w-[1400px]">
          <div className="px-8 py-8 rounded-xl bg-stone-500/40 dark:bg-black/50 backdrop-blur-[6px] flex flex-col space-y-4 justify-center items-center ">
            <h1 className="text-3xl font-semibold">Mission:</h1>
            <p className="text-center">
              At Chlorophyll, our mission is to inspire and empower individuals
              to embrace the enriching benefits of plant life. We strive to
              offer a curated collection of plants that not only beautify living
              spaces but also contribute to a healthier, happier lifestyle. We
              aim to be a trusted resource for plant enthusiasts, providing
              expert guidance and fostering a community that shares a profound
              love for nature.
            </p>
          </div>
          <div className="my-8 px-8 py-8 rounded-xl bg-stone-500/40 dark:bg-black/50 backdrop-blur-[6px] flex flex-col space-y-4 justify-center items-center">
            <h1 className="text-3xl font-semibold">Vision:</h1>
            <p className="text-center">
              Our vision at Chlorophyll is to be the go-to destination for plant
              lovers seeking not just products, but an immersive experience. We
              envision a world where every home is adorned with thriving plants,
              creating a harmonious balance between the indoors and the natural
              world. Through continuous innovation and sustainable practices, we
              aspire to be a leader in promoting environmental consciousness and
              well-being.
            </p>
          </div>
        </div>
      </section>

      <section className=" py-24 w-full space-y-6">
        <h2 className="font-black tracking-tighter flex justify-center items-center text-5xl">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-24">
          <div className="space-y-4">
            <img
              alt="Team member 1"
              className="h-64"
              src="https://t3.ftcdn.net/jpg/04/50/95/60/360_F_450956077_XzAzwqPtSQ9JYIfq0XjjVwC6UCOwWoRK.jpg"
            />
            <h3 className="text-xl font-bold">Team Member 1</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
            </p>
          </div>
          <div className="space-y-4">
            <img
              alt="Team member 2"
              className="h-64"
              src="https://t3.ftcdn.net/jpg/04/50/95/60/360_F_450956077_XzAzwqPtSQ9JYIfq0XjjVwC6UCOwWoRK.jpg"
            />
            <h3 className="text-xl font-bold">Team Member 2</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
            </p>
          </div>
          <div
            className="space-y-4">
            <img
              alt="Team member 3"
              className="h-64"
              src="https://t3.ftcdn.net/jpg/04/50/95/60/360_F_450956077_XzAzwqPtSQ9JYIfq0XjjVwC6UCOwWoRK.jpg"
            />
            <h3 className="text-xl font-bold">Team Member 3</h3>
            <p className="text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

