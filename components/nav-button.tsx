import Link from "next/link"
import { Settings } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface Props {
    href: string;
    label: string;
    isActive?: boolean;
    isSettings?: boolean;
}

export const NavButton = ({
    href,
    label,
    isActive,
    isSettings,
}: Props) => {
    return (
        <Button
            asChild
            size="sm"
            className={cn("lg:w-auto justify-about font-semibold bg-[#312e35] hover:bg-gradient-to-r from-[#fceb77] via-[#f8f284] to-[#fbe270] outline-none text-[#d1cbd1] hover:text-slate-900 hover:border-[#f1dd87] rounded-none transition",
                isActive ? "bg-[#ccc256] border-[#f1dd87] border text-[#6c4e3b]" : "bg-[#312e35] border-[#52505c] border",
            )}
        >
            <Link href={href}>
                {isSettings && ( 
                    <Settings/>
                )}
                {label}
            </Link>
        </Button>
    )
}