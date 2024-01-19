import { JetBrains_Mono as FontMono, Inter, Inter_Tight} from "next/font/google"

export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontItalic = Inter_Tight({
  subsets: ["latin"],
  style: "italic",
  variable: "--font-italic",
})

