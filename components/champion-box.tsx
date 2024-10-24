import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    Tooltip,
    TooltipProvider,
    TooltipTrigger,
    TooltipContent
} from "@/components/ui/tooltip"

interface ChampionsBoxProps {
    id: number
    name: string
    image_url: string
    fadeIn: boolean
}

export const ChampionsBox = ({
    id, 
    image_url, 
    name, 
    fadeIn 
}: ChampionsBoxProps) => {
    return (
        <TooltipProvider
            key={id}
        >
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link href={`/champion/${id}`}>
                        <div 
                            className={cn("lg:w-32 min-w-20 lg:h-full h-1/2 p-2 flex flex-col items-center justify-center bg-[#312e35] shadow-sm hover:cursor-pointer hover:scale-110 ease-out transition-transform duration-100",
                                fadeIn ? "translate-x-2 opacity-0" : "translate-x-0 opacity-1",
                            )}
                        >
                            <Image height={100} width={100} src={image_url} alt={name} />
                        </div>
                    </Link>
                </TooltipTrigger>

                <TooltipContent
                    className="rounded-none bg-[#ccc256] border-[#f1dd87] border text-[#6c4e3b] lg:font-semibold font-normal"
                    side="bottom"
                >
                    <p>{name}</p>
                </TooltipContent>

            </Tooltip>
        </TooltipProvider>
)
} 