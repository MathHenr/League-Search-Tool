import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
    return (
        <Link href="/" className="h-full">
            <div className="hidden lg:flex items-center h-full gap-x-4">
                <div className="flex-col items-center mt-2 space-y-2">
                    <Image width={64} height={64} src="/logo.svg" alt="Logo" /> 
                    <h2 className="text-sm font-semibold">LoL Pro</h2>
                </div>
                <div className="h-[70%] w-px bg-white" />
            </div>
        </Link>
    )
}