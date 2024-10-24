"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Loader2 } from "lucide-react"


import { Button } from "@/components/ui/button"
import { getListChampions, BasicChampionInfo } from "@/app/api/[[...route]]/fetch-search-data"
import H1 from "@/components/html/h1"
import { ChampionsBox } from "@/components/champion-box"

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
            const timeout = setTimeout(() => {
                setFadeIn(false)
            }, 25)
            setChampions(data as BasicChampionInfo[])
            return () => clearTimeout(timeout)
        }
        updateData(page)
    }, [page])
    
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
                                <ChampionsBox
                                    key={champion.id}
                                    id={champion.id}
                                    name={champion.name}
                                    image_url={champion.image_url}
                                    fadeIn={fadeIn}
                                />
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