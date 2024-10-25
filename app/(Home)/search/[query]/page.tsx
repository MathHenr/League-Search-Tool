"use client"

import { useParams } from "next/navigation"

import { fetchSearchData } from "@/app/api/[[...route]]/fetch-search-data"

import DefaultScreen from "@/components/homepage"

export default function SearchQuery () {
    const params = useParams()
    const searchedParams = params.query as string
    // fetchData()
    // async function fetchData () {
    //     const results = await fetchSearchData(params.query)
    //     return console.log(results)
    // }
    
    return(
        <div className="max-w-screen-2xl mx-auto min-h-screen">
            {searchedParams && (
                <div className="p-2 mx-4">
                    <p>You&apos;ve searched for: <strong>{searchedParams.replace(/%20/g, " ")}</strong></p>
                    <div className="w-full border-b border-slate-100" />
                </div>
            )}
            <DefaultScreen />
        </div>
    )
}