"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"

export const SearchBar = () => {
    const [ query, setQuery ]  = useState<string>('')
    const router = useRouter()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        return router.push(`/search/${query}`)
    }

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const search: string = event.target.value
        return setQuery(search)
    }
    
    return (
        <div className="flex items-center justify-center">
            <div className="lg:w-1/2 w-full p-2 bg-white text-slate-800 m-4">
                <form onSubmit={handleSubmit}>
                    <div className="size-full flex items-center gap-x-2">
                        <Search
                            className="size-5 lg:size-7 text-[#0055D2]"
                        />
                        <input
                            type="text"
                            value={query}
                            name="search"
                            className="size-full border-none focus-visible:ring-offset-0 focus:outline-none py-[3px] lg:text-base text-sm"
                            placeholder="Search for a champion, player, team or tournament"
                            onChange={handleSearch}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}