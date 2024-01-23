"use client"

import { AnimatePresence, motion } from "framer-motion"

import { Card } from "@/components/ui/card"

import { UserAuthForm } from "./components/user-auth-form"

export default function page() {
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
                  Contact Us
                </h1>
                <p className="bg-gradient-to-r from-[#654120] to-[#2c6e31] bg-clip-text text-transparent dark:text-white text-lg font-light font-mono">
                  Please fill the below form for further enquiry
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-auto py-10 mt-12 w-full px-64" id="enquiry">
        <div className="flex items-center justify-center">
          <div className="bg-dark rounded-xl w-[1400px] h-[500px]">
            <div className="flex justify-center items-center border-[2px] h-full">
              <h1>Hello</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="px-auto py-10 mt-12 w-full px-64">
        <div className="flex items-center justify-center">
          <div className="bg-dark rounded-xl w-[1400px] h-[500px]">
            <div className="flex justify-around items-center border-[2px] h-full">
              <UserAuthForm />
              <UserAuthForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 mt-12 w-full" id="location">
        <div className="flex justify-center">
          <iframe
            className="rounded-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.068225537128!2d75.9238379!3d22.688504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e35fd45514b5%3A0x521af88572dcb31b!2sEmpire%20Market%20Place!5e0!3m2!1sen!2sin!4v1705741641585!5m2!1sen!2sin"
            width="1400"
            height="500"
          ></iframe>
        </div>
      </section>
    </div>
  )
}

