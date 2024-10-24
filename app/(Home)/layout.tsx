import Header from "@/components/header"
import { SearchBar } from "@/components/search-bar"
import DefaultScreen from "@/components/default-screen"

interface Props {
    children: React.ReactNode
}

const HomepageLayout = ({ children }: Props) => {
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

export default HomepageLayout