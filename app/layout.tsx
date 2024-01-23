"use client";

import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { fontSans } from "@/lib/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { SiteHeader } from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head />
            <body
                className={cn(
                    "bg-background antialiased",
                    fontSans.className,
                )}
            >
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                    <div className="relative flex min-h-screen flex-col overflow-hidden">
                        <SiteHeader />
                        <div className="flex-1">{children}</div>
                        <SiteFooter />
                        <FloatingWhatsApp phoneNumber="9676425280" accountName="hemram" />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
