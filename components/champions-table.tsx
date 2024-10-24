"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

import { getListChampions } from "@/app/api/[[...route]]/fetch-search-data"

export const ChampionsTable = () => {
    const [champions, setChampions]= useState<[ChampionsType]>()

    type ChampionsType = {
        name: string
        image_url: string
    }

    useEffect(() => {
        async function updateData () {
            const data = await getListChampions()
            console.log(data)
            return setChampions(data as [ChampionsType])
        }
        updateData()
    }, [])
    
    return (
        <div className="lg:col-span-2 lg:row-span-2">
            <div>
                <Link href="/champions">
                    <h1 className="text-2xl font-semibold text-[#d1cbd1] hover:text-slate-200">Champions</h1>
                </Link>
            </div>

            { champions ? (
                champions.map((champion) => {
                    return (
                        <div
                            key={champion.name}
                        >
                            {champion.name}
                        </div>
                    )
                })
            ) : ""}
        </div>
    )
}