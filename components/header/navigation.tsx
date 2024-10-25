"use client"

import { useState } from "react"

import { usePathname, useRouter } from "next/navigation"
import { useMedia } from "react-use"
import { Menu } from "lucide-react"

import { NavButton } from "@/components/header/nav-button"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetClose
} from "@/components/ui/sheet"
import { MenuHeaderLogo } from "@/components/header/menu-header-logo"


const routes = [
    {
        href: "/",
        label: "Home",
    },
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
    const isMobile = useMedia("(max-width: 1023px)", false)

    const onClick = (href: string) => {
        router.push(href)
        setIsOpen(false)
    }

    if (isMobile) {
        return (
            <div className="flex items-center justify-end ml-4">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger>
                        <Button
                            variant="outline"
                            size="sm"
                            className="lg:w-auto justify-about font-semibold bg-[#312e35] hover:bg-gradient-to-r from-[#fceb77] via-[#f8f284] to-[#fbe270] outline-none text-[#d1cbd1] hover:text-slate-900 hover:border-[#f1dd87] rounded-none transition border-[#52505c]"
                        >
                            <Menu className="size-4"/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="bg-[#636179] border-none text-white">
                        <div className="min-h-screen w-full flex flex-col items-center justify-start">
                            <MenuHeaderLogo />
                            <nav className="min-h-screen w-full flex flex-col items-center justify-start gap-y-2 mt-14">
                                {routes.map((route) => (
                                    <Button
                                        key={route.href}
                                        variant={route.href === pathname ? "secondary" : "ghost"}
                                        className="font-semibold w-full rounded-none"
                                        onClick={() => onClick(route.href)}
                                    >
                                        {route.label}
                                    </Button>
                                ))}
                            </nav>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        )
    }
    
    return (
        <nav className="hidden lg:flex items-center mx-2 overflow-x-auto">
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