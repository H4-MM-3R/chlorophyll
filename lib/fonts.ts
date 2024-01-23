import { Didact_Gothic, JetBrains_Mono as FontMono, Inter, Inter_Tight, PT_Sans} from "next/font/google"

export const fontSans = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const fontMono = FontMono({
  subsets: ["latin"],
})

export const fontItalic = Inter_Tight({
  subsets: ["latin"],
  style: "italic",
})


export const fontPTSans = PT_Sans({
    subsets: ["latin"],
    weight: ["400", "700"],
})



