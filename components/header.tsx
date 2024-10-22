import { Navigation } from "@/components/navigation"
import { HeaderLogo } from "@/components/header-logo"
import { SearchBar } from "@/components/search-bar"
import { LoginButton } from "@/components/user-login"

const Header = () => {
    return (
        <header className="bg-[#C1D1DE] h-20 px-4 lg:px-4 shadow-sm">
            <div className="max-w-screen-2xl mx-auto h-full">
                <div className="h-full flex items-center lg:justify-between justify-between lg:gap-x-0 gap-x-2">
                    <div className="h-full flex items-center justify-center gap-x-3">
                        <HeaderLogo />
                        <Navigation />
                    </div>
                    <div className="xl:w-1/3 lg:w-1/4 w-3/4 h-10 bg-white flex lg:items-center justify-start px-2 py-px rounded-xl">
                        <SearchBar />
                    </div>
                    <div className="hidden lg:flex justify-end">
                        <LoginButton />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header