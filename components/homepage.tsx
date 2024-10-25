import { ChampionsTable } from "@/components/champions/champions-table"

const HomePage = () => {
    return (
        <section className="max-w-screen-2xl xl:mx-auto mx-4 p-4 grid grid-cols-1 grid-rows-3 lg:grid-cols-3 bg-slate-800 shadow-md">
            {/* champions content */}
            <ChampionsTable />
            {/* players content */}
            <div className="lg:col-span-1 lg:row-span-1 bg-red-300/30">
                <p>Players section</p>
            </div>
            {/* league content */}
            <div className="lg:col-span-1 lg:row-span-1 bg-green-300/30">
                <p>Leagues section</p>
            </div>
        </section>
    )
}

export default HomePage