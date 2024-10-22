"use client"

import { useState } from "react"

import { usePathname, useRouter } from "next/navigation"
import { useMedia } from "react-use"
import { Menu } from "lucide-react"

import { NavButton } from "@/components/nav-button"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetClose
} from "@/components/ui/sheet"
import { MenuHeaderLogo } from "@/components/menu-header-logo"


const routes = [
    {
        href: "/champions",
        label: "Champions",
    },
    {
        href: "/pros",
        label: "Pros",
    },
    {
        href: "/teams",
        label: "Teams",
    },
    {
        href: "/tournaments",
        label: "Tournaments",
    },
]

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const pathname = usePathname()
    const router = useRouter()
    const isMobile = useMedia("(max-width: 1024px)", false)

    const onClick = (href: string) => {
        router.push(href)
        setIsOpen(false)
    }

    if (isMobile) {
        return (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger>
                    <Button
                        variant="outline"
                        size="sm"
                        className="font-normal hover:bg-gradient-to-l from-[#0047C9] via-[#0055D2] to-[#0068DE] hover:text-white bg-white text-black border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none focus:bg-white/30 transition px-4"
                    >
                        <Menu className="size-4"/>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <div className="min-h-screen w-full flex flex-col items-center justify-start">
                        <MenuHeaderLogo />
                        <nav className="min-h-screen w-full flex flex-col items-center justify-start gap-y-2 mt-14">
                            {routes.map((route) => (
                                <Button
                                    key={route.href}
                                    variant={route.href === pathname ? "secondary" : "ghost"}
                                    className="font-semibold w-full"
                                    onClick={() => onClick(route.href)}
                                >
                                    {route.label}
                                </Button>
                            ))}
                        </nav>
                    </div>
                </SheetContent>
            </Sheet>
        )
    }
    
    return (
        <nav className="hidden lg:flex items-center space-x-4 overflow-x-auto">
            {routes.map((route) => (
                <NavButton
                    key={route.href}
                    href={route.href}
                    label={route.label}
                    isActive={pathname === route.href}
                />
            ))}
        </nav>
    )
}