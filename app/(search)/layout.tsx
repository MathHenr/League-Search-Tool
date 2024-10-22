"use client"

import Header from "@/components/header"
import { SearchBar } from "@/components/search-bar"

interface Props {
    children: React.ReactNode
}

const SearchPageLayout = ({ children }: Props) => {
    
    return (
        <>
            <main className="min-h-screen bg-[#242430] text-white">
                <Header />
                <SearchBar />
                {children}
            </main>
        </>
    )
}

export default SearchPageLayout