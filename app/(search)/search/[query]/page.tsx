"use client"

import { useParams } from "next/navigation"

export default function SearchQuery () {
    const params = useParams()
    
    return(
        <main>Query: {params.query}</main>
    )
}