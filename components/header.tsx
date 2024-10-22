import { Navigation } from "@/components/navigation"
import { HeaderLogo } from "@/components/header-logo"
import { LoginButton } from "@/components/user-login"
import { LeagueLogo } from "@/components/league-logo"
import { AboutMsg } from "@/components/about-msg"

const Header = () => {
    return (
        <header className="h-20 px-4 pb-[400px] bg-game bg-cover bg-center bg-no-repeat text-white">
            <div className="max-w-screen-2xl mx-auto h-20"
            >
                <div className="size-full grid grid-cols-3">
                    <div className="h-full flex items-center justify-start col-span-2">
                        <LeagueLogo />
                        <HeaderLogo/>
                        <Navigation/>
                    </div>
                    <div className="h-full grid items-center col-span-1">
                        <LoginButton />
                    </div>
                </div>
                <AboutMsg/>
            </div>
        </header>
    )
}

export default Header