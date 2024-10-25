import { ComponentProps } from "react"
import Link from "next/link"

import H1 from "@/components/html/h1"

interface SectionTitleProps extends ComponentProps<'div'> {}

export const SectionTitle = ({ children }: SectionTitleProps) => {
    return (
        <div className="max-w-fit w-auto flex items-center justify-center pb-2">
            <Link href="/champions">
                <H1>
                    {children}
                </H1>
            </Link>
        </div>
    )
}