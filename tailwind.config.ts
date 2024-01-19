const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        marquee: {
          "from": { transform: "translateX(0%)" },
          "to": { transform: "translateX(-100%)" },
        },
        scroll: {
          "to": { transform: "translateX(calc(-250px * 5))" },
        },
        smallscroll: {
          "to": { transform: "translateX(calc(-125px * 5))" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "carousel": "marquee 5s linear infinite",
        "smallcarousel": "scroll 14s linear infinite",
        "smallercarousel": "smallscroll 14s linear infinite"
      },
      backgroundImage: {
        'contactusBg': "url('https://img.freepik.com/free-vector/hand-drawn-houseplant-collection_23-2148911678.jpg?w=826&t=st=1704484586~exp=1704485186~hmac=81aecbb18c7bfebc1e354987a0083914a4b0a3fd0b9a404002559f55d85dfa6d'), -webkit-linear-gradient(left, #654120, #2c6e31 )",
        'maskBg': "https://aloha.com/cdn/shop/files/Mask_Group_035d30ed-871e-424f-bbf3-d66ecba58127.webp?v=1695353925",
        'gradBg': "linear-gradient(to right, #654120, #2c6e31)"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

