"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Loader2 } from "lucide-react"

import {
    Tooltip,
    TooltipProvider,
    TooltipTrigger,
    TooltipContent
} from "@/components/ui/tooltip"
import { getListChampions } from "@/app/api/[[...route]]/fetch-search-data"
import H1 from "@/components/html/h1"

type ChampionsType = {
    name: string
    image_url: string
}

export const ChampionsTable = () => {
    const [champions, setChampions] = useState<[ChampionsType]>()
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        async function updateData () {
            const data = await getListChampions()
            console.log(data)
            if (data) setIsLoading(false)
            return setChampions(data as [ChampionsType])
        }
        updateData()
    }, [])
    
    return (
        <div className="h-full lg:col-span-2 lg:row-span-2">
            <div className="w-full pb-3">
                <Link href="/champions">
                    <H1>Champions</H1>
                </Link>
            </div>

            <div className="p-3 h-full lg:grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 flex flex-row lg:gap-5 gap-x-3 overflow-hidden">
                {isLoading && (
                    <div className="lg:col-span-full w-full flex flex-col items-center justify-center">
                        <Loader2
                            className="animate-spin size-8 flex items-center"
                        />
                    </div>
                )}
                {champions && (
                    champions.map((champion) => {
                        return (
                            <TooltipProvider
                                key={champion.name}
                            >
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <div 
                                            className="lg:w-32 min-w-20 lg:h-full h-1/2 p-2 flex flex-col items-center justify-center bg-[#312e35] shadow-sm hover:cursor-pointer hover:scale-110 transition-transform ease-out"
                                        >
                                            <Image height={100} width={100} src={champion.image_url} alt={champion.name} />
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent
                                        className="rounded-none bg-[#ccc256] border-[#f1dd87] border text-[#6c4e3b] lg:font-semibold font-normal"
                                        side="bottom"
                                    >
                                        <p>{champion.name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        )
                    })
                )}
            </div>
        </div>
    )
}