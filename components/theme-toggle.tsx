"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", ease: "easeInOut", duration: 0.6 }}
    >
      <Button
        variant="themetoggle"
        size="lg"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <span className="hidden lg:dark:block pr-4">Dark</span>
        <span className="hidden lg:block lg:dark:hidden pr-4">Light</span>
        <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
        <Moon className="hidden h-5 w-5 dark:block" />
      </Button>
    </motion.div>
  )
}
