import Link from "next/link"
import Image from "next/image"

export const LeagueLogo = () => {
    return (
        <Link className="mr-4" href="https://www.leagueoflegends.com/pt-br/">
            <Image height={140} width={140} src="/league-logo.png" alt="League of Legends Logo"/>
        </Link>
    )
}