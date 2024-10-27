import { useState, useEffect } from "react"
import { Loader2 } from "lucide-react"

import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { getListChampions, BasicChampionInfo } from "@/app/api/[[...route]]/fetch-search-data"
import { ItemBox } from "@/components/item-box"
import { SectionTitle } from "@/components/section-title"

interface ChampionTableProps {
    standardSize: number
    path: string
}

export const ChampionsTable = ({ path, standardSize }: ChampionTableProps) => {
    const [champions, setChampions] = useState<BasicChampionInfo[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [fadeIn, setFadeIn] = useState<boolean>(true)
    const [sizeList, setSize] = useState<number>(standardSize)

    useEffect(() => {
        async function updateChampionData () {
            const championsList: BasicChampionInfo[] = []

            for (let i = 1; i <= 4; i++) {
                const data: BasicChampionInfo[] = await getListChampions(i)
                
                if (!data) {
                    throw new Error("Failed getting the data")
                }

                for (let k = 0; k < data.length; k++) {
                    championsList.push(data[k])
                }
            }
            setChampions(championsList)

            setIsLoading(false)
            const timeout = setTimeout(() => {
                setFadeIn(false)
            }, 25)
            return () => clearTimeout(timeout)
        }
        updateChampionData()
    }, [])
        
    return (
        <div className={cn(
            "lg:min-h-screen flex flex-col lg:col-span-2 lg:row-span-2 p-3",
            (standardSize > 36) ? "border-none" : "border-r border-slate-100/25"
        )}>
            <SectionTitle>
                Champions
            </SectionTitle>

            <div className="w-full lg:min-h-[620px] h-full flex flex-col justify-between">
                {/* champions icons */}
                <div className="p-3 lg:grid 2xl:grid-cols-8 xl:grid-cols-7 lg:grid-cols-5 justify-items-center flex flex-row lg:gap-5 gap-x-3 overflow-hidden">
                    {isLoading && (
                        <div className="col-span-full min-h-[400px] grid items-center justify-center">
                            <Loader2
                                className="animate-spin size-8 flex items-center"
                            />
                        </div>
                    )}
                    {champions && (
                        champions
                        .filter((item, index) => index < sizeList)
                        .map((champion) => {
                            return (
                                <ItemBox
                                    key={champion.id}
                                    id={champion.id}
                                    name={champion.name}
                                    image_url={champion.image_url}
                                    fadeIn={fadeIn}
                                    path={path}
                                />
                            )
                        })
                    )}
                </div>
                <div className="mx-4 p-4 flex items-center justify-center">
                    <div className="flex items-center space-x-2">
                        <Link href={"/champions"}>
                            <Button
                                className={cn(
                                    "justify-about font-semibold bg-[#312e35] hover:bg-gradient-to-r from-[#fceb77] via-[#f8f284] to-[#fbe270] outline-none text-[#d1cbd1] hover:text-slate-900 hover:border-[#f1dd87] rounded-none transition disabled:bg-slate-500",
                                    (standardSize > 36) ? "hidden" : ""
                                )}
                            >
                                <span> View all champions </span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}