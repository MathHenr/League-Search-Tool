import Header from "@/components/header"

interface Props {
    children: React.ReactNode
}

const HomepageLayout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}

export default HomepageLayout