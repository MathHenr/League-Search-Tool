import { ComponentProps } from "react"

interface H1Props extends ComponentProps<'h1'> {}

export default function H1 (h1: H1Props) {
    return (
        <div>
            <h1 className="text-2xl font-semibold text-[#d1cbd1] hover:text-slate-200"{...h1} />
        </div>
    )
}