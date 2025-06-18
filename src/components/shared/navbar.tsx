"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
    Home,
    Briefcase,
    Eye,
    Menu,
    PhoneCallIcon,
    ArrowRight
} from "lucide-react"
import { GrServices } from "react-icons/gr";
import { FcAbout } from "react-icons/fc";

import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { BiQuestionMark } from "react-icons/bi"

interface NavItem {
    name: string
    href: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: React.ComponentType<any>
    isActive?: boolean
}

// Navigation links with icons
const navigationLinks: NavItem[] = [
    { name: "Home", href: "/", icon: Home, isActive: true },
    { name: "About Us", href: "/about-us", icon: FcAbout },
    { name: "Services", href: "/services", icon: GrServices },
    { name: "Portfolio", href: "/portfolio", icon: Eye },
    { name: "FAQ", href: "/faq", icon: BiQuestionMark },
    { name: "Contact", href: "/contact", icon: Briefcase },
]

export default function Navbar() {
    const [activeTab, setActiveTab] = useState("Home")
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])


    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full transition-all duration-700 ease-in-out",
                    scrolled ? "pt-1" : "pt-6",
                )}
            >
                <div
                    className={cn(
                        "transition-all duration-700 ease-in-out mx-auto px-4",
                        scrolled ? "container" : "max-w-[80rem]",
                    )}
                >
                    <div className="bg-white/10 border border-gray-200/50 backdrop-blur-lg rounded-full shadow-lg shadow-red-200 transition-all duration-300">
                        <div className="flex items-center justify-between px-4 py-3">
                            {/* Logo */}
                            <Link href="/" className="flex items-center flex-shrink-0">
                                <Image
                                    src="/images/logo-full.png"
                                    alt="Stock Logo"
                                    width={1000}
                                    height={1000}
                                    className={cn("transition-all duration-300", scrolled ? "w-36" : "w-36")}
                                />
                            </Link>

                            {/* Desktop Navigation */}
                            <div className="hidden lg:flex items-center gap-4 flex-1 justify-center mx-8">
                                {navigationLinks.map((item) => {
                                    const Icon = item.icon
                                    const isActive = activeTab === item.name

                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setActiveTab(item.name)}
                                            className={cn(
                                                "relative cursor-pointer text-sm font-semibold px-3 py-2 rounded-full transition-colors",
                                                "text-gray-700 hover:text-red-600",
                                                isActive && "bg-red-50 text-red-600",
                                                scrolled ? "px-4" : "px-4",
                                            )}
                                        >
                                            <span
                                                className={cn(
                                                    "transition-all duration-300",
                                                    scrolled ? "hidden xl:inline" : "hidden 2xl:inline",
                                                )}
                                            >
                                                {item.name}
                                            </span>
                                            <span className={cn("transition-all duration-300", scrolled ? "xl:hidden" : "2xl:hidden")}>
                                                <Icon size={scrolled ? 16 : 18} strokeWidth={2.5} />
                                            </span>
                                            {isActive && (
                                                <motion.div
                                                    layoutId="lamp"
                                                    className="absolute inset-0 w-full bg-red-500/10 rounded-full -z-10"
                                                    initial={false}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 300,
                                                        damping: 30,
                                                    }}
                                                >
                                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-1 bg-red-500 rounded-t-full">
                                                        <div className="absolute w-8 h-4 bg-red-500/20 rounded-full blur-md -top-1 -left-1" />
                                                        <div className="absolute w-6 h-4 bg-red-500/20 rounded-full blur-md -top-1" />
                                                        <div className="absolute w-3 h-3 bg-red-500/20 rounded-full blur-sm top-0 left-1.5" />
                                                    </div>
                                                </motion.div>
                                            )}
                                        </Link>
                                    )
                                })}
                            </div>

                            <div className="fex-col lg:flex-row items-center gap-6 hidden lg:flex">
                                <div className="flex items-center gap-2">
                                    <PhoneCallIcon
                                        className="h-9 w-9 rounded-full p-2 bg-gradient-to-r from-[#9f0101] to-[#fa0101] text-white"
                                    />
                                    <div className="text-xs">
                                        <h3>Emergency Helpline</h3>
                                        <Link href="callto:01609302239">+880 1609-302239</Link>
                                    </div>
                                </div>
                                <Link href="/contact">
                                    <Button onClick={() => setActiveTab("Contact")} className="bg-gradient-to-r from-[#9f0101] to-[#fa0101] text-white rounded-3xl">
                                        Free Quote <ArrowRight />
                                    </Button>
                                </Link>
                            </div>

                            {/* Mobile menu */}
                            <div className="lg:hidden">
                                <Sheet open={open} onOpenChange={setOpen}>
                                    <SheetTrigger asChild>
                                        <Button size="icon" className="h-8 w-8 rounded-full">
                                            <Menu className="h-4 w-4" />
                                            <span className="sr-only">Toggle menu</span>
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent side="left" className="w-[80%] sm:w-[350px]">
                                        <div className="mt-6 flex flex-col space-y-4">
                                            {navigationLinks.map((link) => {
                                                const Icon = link.icon
                                                return (
                                                    <Link
                                                        key={link.name}
                                                        href={link.href}
                                                        className={`flex items-center gap-3 px-2 py-2 text-base font-medium rounded-lg transition-colors ${activeTab === link.name
                                                            ? "text-red-600 bg-red-50"
                                                            : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                                            }`}
                                                        onClick={() => {
                                                            setActiveTab(link.name)
                                                            setOpen(false)
                                                        }}
                                                    >
                                                        <Icon size={20} />
                                                        {link.name}
                                                    </Link>
                                                )
                                            })}
                                            <div className="flex-col gap-6">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <PhoneCallIcon
                                                        className="h-9 w-9 rounded-full p-2 bg-gradient-to-r from-[#9f0101] to-[#fa0101] text-white"
                                                    />
                                                    <div className="text-xs">
                                                        <h3>Emergency Helpline</h3>
                                                        <Link href="callto:01609302239">+880 1609-302239</Link>
                                                    </div>
                                                </div>
                                                <Link href="/contact">
                                                    <Button onClick={() => setActiveTab("Contact")} className="bg-gradient-to-r from-[#9f0101] to-[#fa0101] text-white rounded-3xl">
                                                        Free Quote <ArrowRight />
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </SheetContent>
                                </Sheet>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Bottom Navigation */}
            <div className="lg:hidden fixed -bottom-3 left-1/2 -translate-x-1/2 z-40 mb-6">
                <div className="flex items-center gap-1 bg-white/10 border border-gray-200/50 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
                    {navigationLinks.slice(0, 5).map((item) => {
                        const Icon = item.icon
                        const isActive = activeTab === item.name

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setActiveTab(item.name)}
                                className={cn(
                                    "relative cursor-pointer text-sm font-semibold px-5 py-2 rounded-full transition-colors",
                                    "text-gray-700 hover:text-red-600",
                                    isActive && "bg-red-50 text-red-600",
                                )}
                            >
                                <Icon size={18} strokeWidth={2.5} />
                                {isActive && (
                                    <motion.div
                                        layoutId="mobile-lamp"
                                        className="absolute inset-0 w-full bg-red-500/10 rounded-full -z-10"
                                        initial={false}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30,
                                        }}
                                    >
                                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-1 bg-red-500 rounded-t-full">
                                            <div className="absolute w-8 h-4 bg-red-500/20 rounded-full blur-md -top-1 -left-1" />
                                            <div className="absolute w-6 h-4 bg-red-500/20 rounded-full blur-md -top-1" />
                                            <div className="absolute w-3 h-3 bg-red-500/20 rounded-full blur-sm top-0 left-1.5" />
                                        </div>
                                    </motion.div>
                                )}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    )
}