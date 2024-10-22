import { Search } from "lucide-react"

export const SearchBar = () => {
    return (
        <div className="size-full flex items-center gap-x-2">
            <Search
                className="size-5 lg:size-7 text-[#0055D2]"
            />
            <input
                type="text"
                className="size-full border-none focus-visible:ring-offset-0 focus:outline-none py-[3px] lg:text-base text-sm"
                placeholder="Search for a champion, player, team or tournament"
            />
        </div>
    )
}