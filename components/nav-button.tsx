import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

interface Props {
    href: string;
    label: string;
    isActive?: boolean;
}

export const NavButton = ({
    href,
    label,
    isActive
}: Props) => {
    return (
        <Button
            asChild
            size="sm"
            className={cn("w-full lg:w-auto justify-about font-semibold hover:bg-gradient-to-l from-[#0047C9] via-[#0055D2] to-[#0068DE] border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-black hover:text-white focus:bg-[#0068DE] transition",
                isActive ? "bg-[#0068DE]" : "bg-transparent",
            )}
        >
            <Link href={href}> {label} </Link>
        </Button>
    )
}