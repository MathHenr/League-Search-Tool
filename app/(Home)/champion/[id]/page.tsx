"use client"

import { useState, useEffect } from "react"

import Image from "next/image"
import { useParams } from "next/navigation"
import { Loader2 } from "lucide-react"

import { fetchChampionsData, ChampionsInfo } from "@/app/api/[[...route]]/fetch-search-data"

export default function ChampionsPage () {
    const [champion, setChampion] = useState<ChampionsInfo>()
    const [loading, setLoading] = useState<boolean>(true)
    const params = useParams()
    const championsID = params.id as string
    console.log(championsID)

    useEffect(() => {
        async function getData () {
            const data: ChampionsInfo = await fetchChampionsData(championsID)
            if (!data) {
                throw new Error("Failed to fetch champion data")
            }
            setChampion(data as ChampionsInfo)
            setLoading(false)
        }
        getData()
    }, [championsID])
    console.log(champion)
    
    return (
        <div className="max-w-screen-2xl mx-auto w-full bg-slate-800 p-3">
            <div className="flex flex-col">
                {loading && (
                    <div className="col-span-full min-h-[400px] grid items-center justify-center">
                        <Loader2
                            className="animate-spin size-8 flex items-center"
                        />
                    </div>
                )}
                {champion && (
                        <div className="flex">
                            <div>
                                <Image height={200} width={200} src={champion.big_image_url} alt={champion.name} />
                            </div>
                            <div className="w-full flex justify-between px-5">
                                <h1 className="w-full text-2xl font-semibold text-[#d1cbd1]">{champion.name}</h1>
                                <div className="border-l border-slate-100/55 p-3">
                                    <div>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                )}

            </div>
        </div>
    )
}