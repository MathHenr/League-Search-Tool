import { useEffect, useState } from "react"

import { Loader2 } from "lucide-react"

import { getListPlayers, BasicPlayerInfo } from "@/app/api/[[...route]]/fetch-search-data"
import { SectionTitle } from "@/components/section-title"
import { ItemBox } from "@/components/item-box"

const standardSize = 9
const path = '/pro'

export const PlayersTable = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [players, setPlayers] = useState<BasicPlayerInfo[]>([])
    const [fadeIn, setFadeIn] = useState<boolean>(true)
    
    useEffect(() => {
        async function updatePlayerData () {
            const data: BasicPlayerInfo[] = await getListPlayers()

            if (!data) {
                throw new Error("Failed getting the data")
            }

            setIsLoading(false)
            setPlayers(data)

            const timeout = setTimeout(() => {
                setFadeIn(false)
            }, 25)
            return () => clearTimeout(timeout)
        }
        updatePlayerData()
    }, [])
    
    return (
        <div className="lg:col-span-1 lg:row-span-1 max-h-[480px] flex flex-col p-3">
            <SectionTitle>
                Pros
            </SectionTitle>

            <div className="w-full flex flex-col">
                <div className="p-2 lg:grid grid-cols-3 flex flex-row lg:gap-3 gap-x-3 overflow-hidden">
                    {isLoading && (
                        <div className="col-span-full min-h-[400px] grid items-center justify-center">
                            <Loader2
                                className="animate-spin size-8 flex items-center"
                            />
                        </div>
                    )}

                    {players && (
                        players
                        .filter((item, index) => index < standardSize)
                        .map((player) => {
                            return (
                                <ItemBox
                                    key={player.id}
                                    id={player.id}
                                    name={player.name}
                                    image_url={player.image_url ? player.image_url : '/unknown.svg'}
                                    fadeIn={fadeIn}
                                    path={path}
                                />
                            )   
                        })
                    )}
                
                </div>
            </div>
        </div>
    )
}