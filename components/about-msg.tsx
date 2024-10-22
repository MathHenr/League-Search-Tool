import { NavButton } from "@/components/nav-button"

export const AboutMsg = () => {
    return (
        <div className="lg:w-1/3 w-1/2 text-slate-50 flex flex-col justify-center lg:ml-20 ml-12 space-y-2 my-6">
            <h1 className="lg:text-3xl text-xl font-bold tracking-tighter">Welcome to Lol pro project</h1>
            <div className="flex flex-col items-start space-y-2">
                <p className="lg:text-base text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, neque.</p>
                <NavButton
                    href="https://github.com/MathHenr/league_search.git"
                    label="About"
                />
            </div>
        </div>
    )
}