"use client"

import { motion } from "framer-motion"
import { InstagramEmbed } from "react-social-media-embed"

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
                                    Gallery
                                </h1>
                                <p className="bg-gradient-to-r from-[#654120] to-[#2c6e31] bg-clip-text text-transparent dark:text-white text-lg font-light font-mono">
                                    Checkout the Gallery of Chlorophyll
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="flex justify-center items-center">
                <div className="bg-black/60 backdrop-blur-lg aspect-square w-[600px] flex justify-center items-center rounded-xl">
                    <InstagramEmbed
                        url="https://www.instagram.com/chlorophyll.in?igsh=OGQ5ZDc2ODk2ZA%3D%3D"
                        width={328}
                    />
                </div>
            </section>
        </div>
    )
}

