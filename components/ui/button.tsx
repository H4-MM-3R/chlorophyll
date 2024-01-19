import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-[#2c6e31] text-white hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:dark:text-[#654120] dark:text-white hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in hover:dark:bg-white hover:bg-black hover:text-white",
        secondary:
          "bg-secondary text-secondary-foreground hover:be-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:dark:bg-black",
        fb: "hover:text-black text-white bg-blue-900",
        twitter: "hover:text-black text-white bg-cyan-500",
        insta: "hover:text-black text-white bg-gradient-to-r from-yellow-500 via-red-500 to-purple-600",
        link: "underline-offset-4 hover:underline text-primary",
        new: "text-black dark:shadow-white shadow-black shadow-inner h-10 py-2 px-4 inline-flex items-center justify-center rounded-md text-sm font-medium hover:text-white hover:bg-black dark:text-white hover:dark:bg-white hover:dark:text-black overflow-hidden transition-all duration-700",
        themetoggle: "dark:shadow-white shadow-black shadow-inner h-10 py-2 px-4 inline-flex items-center justify-center rounded-md text-sm font-medium dark:text-white overflow-hidden transition-all duration-700"
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md xl:mx-4",
        icon: "h-11 w-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
