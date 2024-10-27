"use client"

import { ChampionsTable } from "@/components/champions/champions-table"

export default function Page () {
    return (
        <div className="max-w-screen-2xl mx-auto w-full flex flex-col bg-slate-800">
            <ChampionsTable 
                path="/champion"
                standardSize={168}
            />
        </div>
    )
}