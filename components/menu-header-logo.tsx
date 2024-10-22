import Link from "next/link";
import Image from "next/image";

export const MenuHeaderLogo = () => {
    return (
        <Link href="/" className="h-full">
            <div className="flex flex-col items-center h-full gap-x-4">
                <div className="flex flex-col items-center justify-center mt-2 space-y-2 drop-shadow-md">
                    <Image width={100} height={100} src="/logo.svg" alt="Logo" /> 
                    <h2 className="text-normal font-semibold">LoL Pro</h2>
                </div>
                <div className="h-[70%] w-px bg-white" />
            </div>
        </Link>
    )
}