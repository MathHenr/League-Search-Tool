"use client"

import { useState, useEffect } from "react"

import { useParams } from "next/navigation"

import { fetchChampionsData, ChampionAtributes } from "@/app/api/[[...route]]/fetch-search-data"

export default function ChampionsPage () {
    const [champion, setChampion] = useState<ChampionAtributes>()
    const params = useParams()
    const championsID = params.id as string
    console.log(championsID)

    useEffect(() => {
        async function getData () {
            const data: ChampionAtributes = await fetchChampionsData(championsID)
            if (!data) {
                throw new Error("Failed to fetch champion data")
            }
            setChampion(data)
        }
        getData()
    }, [championsID])
    
    return (
        <>
            <p>{champion?.name}</p>
        </>
    )
}