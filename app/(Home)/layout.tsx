import Footer from "@/components/footer"
import Header from "@/components/header/header"
import { SearchBar } from "@/components/search-bar"

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
                <Footer />
            </main>
        </>
    )
}

export default HomepageLayout