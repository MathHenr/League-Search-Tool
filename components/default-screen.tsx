import { ChampionsTable } from "@/components/champions-table"

const DefaultScreen = () => {
    return (
        <section className="mx-4 p-4 min-h-[600px] grid grid-cols-1 lg:grid-cols-3">
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

export default DefaultScreen