import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
    return (
        <Link href="/" className="h-full">
            <div className="hidden lg:flex items-center h-full gap-x-4">
                <div className="flex items-center justify-center mt-2 space-y-2 hover:scale-105 transition-transform ease-out hover:drop-shadow-mdshadow-md">
                    <Image width={64} height={64} src="/logo.svg" alt="Logo" /> 
                </div>
                <div className="h-[70%] w-px bg-[#f1dd87]" />
            </div>
        </Link>
    )
}