"use client"

import { ChampionsTable } from "@/components/champions/champions-table"
import { PlayersTable } from "@/components/players/players-table"
import { LeaguesTable } from "@/components/leagues/leagues-table"

const HomePage = () => {
    return (
        <section className="max-w-screen-2xl xl:mx-auto mx-4 p-4 grid grid-cols-1 lg:grid-cols-3 bg-slate-800 shadow-md">
            {/* champions content */}
            <ChampionsTable 
                path="/champion" 
                standardSize={36}
            />
            {/* players content */}
            <PlayersTable />
            {/* league content */}
            <LeaguesTable />
        </section>
    )
}

export default HomePage