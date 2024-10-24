const DefaultScreen = () => {
    return (
        <section className="mx-4 p-4 min-h-[400px] bg-white/30 grid grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-2 lg:row-span-2 bg-blue-300/30">
                <p>Champions section</p>
            </div>
            <div className="lg:col-span-1 lg:row-span-1 bg-red-300/30">
                <p>Players section</p>
            </div>
            <div className="lg:col-span-1 lg:row-span-1 bg-green-300/30">
                <p>Leagues section</p>
            </div>
        </section>
    )
}

export default DefaultScreen