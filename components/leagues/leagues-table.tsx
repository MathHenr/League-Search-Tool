import { useEffect, useState } from "react"

import { Loader2 } from "lucide-react"

import { SectionTitle } from "@/components/section-title"
import { getListLeagues, BasicLeagueInfo } from "@/app/api/[[...route]]/fetch-search-data"
import { ItemBox } from "@/components/item-box"

const path = '/leagues'

export const LeaguesTable = () => {
    const [leagues, setLeagues] = useState<BasicLeagueInfo[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [fadeIn, setFadeIn] = useState<boolean>(true)
    
    useEffect(() => {
        async function updateLeagueData () {
            const data: BasicLeagueInfo[] = await getListLeagues()

            if (!data) {
                throw new Error("Failed getting the data")
            }

            setIsLoading(false)
            setLeagues(data)
            const timeout = setTimeout(() => {
                setFadeIn(false)
            }, 25)
            return () => clearTimeout(timeout)
        }
        updateLeagueData()
    }, [])
    
    return (
        <div className="lg:col-span-1 lg:row-span-1 max-h-[480px] flex flex-col  p-3">
            <SectionTitle>
                Leagues
            </SectionTitle>

            <div className="w-full flex flex-col">
                <div className="p-2 lg:grid 2xl:grid-cols-3 lg:grid-cols-3 flex flex-row lg:gap-3 gap-x-3 overflow-hidden">
                    {isLoading && (
                        <div className="col-span-full min-h-[400px] grid items-center justify-center">
                            <Loader2
                                className="animate-spin size-8 flex items-center"
                            />
                        </div>
                    )}
                    {leagues && (
                        leagues.map((league) => {
                            return (
                                <ItemBox
                                    key={league.id}
                                    id={league.id}
                                    name={league.name}
                                    image_url={league.image_url}
                                    path={path}
                                    fadeIn={fadeIn}
                                />
                            )
                        })
                    )}
                </div>
            </div>
        </div>
    )
}