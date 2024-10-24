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
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { getListChampions, BasicChampionInfo } from "@/app/api/[[...route]]/fetch-search-data"
import H1 from "@/components/html/h1"

export const ChampionsTable = () => {
    const [champions, setChampions] = useState<BasicChampionInfo[]>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [fadeIn, setFadeIn] = useState<boolean>(true)
    const [page, setPage] = useState<number>(1)


    useEffect(() => {
        async function updateData (page: number) {
            const data = await getListChampions(page)
            if (!data) {
                throw new Error("Failed getting data")
            }
            setIsLoading(false)
            setFadeIn(false)
            setChampions(data as BasicChampionInfo[])
            return
        }
        updateData(page)
    }, [page])
    
    function changeState () {
        return setFadeIn(false)
    }
    
    return (
        <div className="min-h-full grid lg:col-span-2 lg:row-span-2">
            <div className="w-full pb-3">
                <Link href="/champions">
                    <H1>Champions</H1>
                </Link>
            </div>

            <div className="w-full lg:min-h-[620px] h-full flex flex-col justify-between">
                {/* champions icons */}
                <div className="p-3 lg:grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 flex flex-row lg:gap-5 gap-x-3 overflow-hidden">
                    {isLoading && (
                        <div className="col-span-full min-h-[400px] grid items-center justify-center">
                            <Loader2
                                className="animate-spin size-8 flex items-center"
                            />
                        </div>
                    )}
                    {champions && (
                        champions.map((champion) => {
                            return (
                                <TooltipProvider
                                    key={champion.id}
                                >
                                    
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div 
                                                className={cn("lg:w-32 min-w-20 lg:h-full h-1/2 p-2 flex flex-col items-center justify-center bg-[#312e35] shadow-sm hover:cursor-pointer hover:scale-110 ease-out transition-transform duration-100",
                                                    fadeIn ? "translate-x-2 opacity-0" : "translate-x-0 opacity-1",
                                                )}
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
                <div className="mx-4 p-4 flex items-center justify-end">
                    <div className="flex items-center space-x-2">
                        <Button
                            className="justify-about font-semibold bg-[#312e35] hover:bg-gradient-to-r from-[#fceb77] via-[#f8f284] to-[#fbe270] outline-none text-[#d1cbd1] hover:text-slate-900 hover:border-[#f1dd87] rounded-none transition disabled:bg-slate-500"
                            disabled={page === 1}
                            onClick={() => {
                                setFadeIn(true)
                                setPage(page-1)
                            }}
                        >
                            <span> &larr; </span>
                        </Button>
                        <Button
                            className="justify-about font-semibold bg-[#312e35] hover:bg-gradient-to-r from-[#fceb77] via-[#f8f284] to-[#fbe270] outline-none text-[#d1cbd1] hover:text-slate-900 hover:border-[#f1dd87] rounded-none transition"
                            disabled={page === 4}
                            onClick={() => {
                                setFadeIn(true)
                                setPage(page+1)
                            }}
                        >
                            <span> &rarr; </span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}