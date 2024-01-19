"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { NavItem } from "@/types/nav";

interface MainNavProps {
    items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
    const currentRoute = usePathname() || "/";
    const [hoveredPath, setHoveredPath] = useState(currentRoute);

    useEffect(() => {
        setHoveredPath(currentRoute);
    }, [currentRoute]);

    return (
        <div className=" w-full hidden lg:flex gap-12 items-center justify-between">
            <Link href="/" className="flex items-center justify-center">
                <div className="w-[250px] xl:w-[350px] h-[250px] xl:h-[350px] relative">
                    <Image
                        className="mt-3"
                        src="/images/appLogo-removebg.png"
                        alt="logo"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </Link>

            <nav className="flex relative justify-center items-center">
                {items?.map((item) => (
                    <Link
                        href={item.href}
                        key={item.href}
                        data-active={currentRoute === item.href}
                        className={`${currentRoute === item.href
                                ? "text-yellow-500 flex items-center lg:text-sm xl:text-xl font-semibold px-2"
                                : "flex items-center lg:text-sm xl:text-xl font-semibold px-2 hover:text-yellow-500 transtion-all duration-300"
                            }`}
                        onMouseOver={() => setHoveredPath(item.href)}
                        onMouseLeave={() => setHoveredPath(currentRoute)}
                    >
                        <span className="py-4 px-4">{item.title}</span>
                        {item.href === hoveredPath && (
                            <motion.span
                                className="dark:bg-[#000000]/50 backdrop-blur-xl py-4 px-4 fixed -z-10 text-transparent rounded-lg"
                                layoutId="outline"
                                transition={{
                                    type: "tween",
                                    duration: 0.3,
                                }}
                            >
                                {item.title}
                            </motion.span>
                        )}
                    </Link>
                ))}
            </nav>
        </div>
    );
}
