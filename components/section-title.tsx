"use client"

import { ComponentProps, useEffect, useState } from "react"
import Link from "next/link"

import H1 from "@/components/h1"

interface SectionTitleProps extends ComponentProps<'div'> {}

export const SectionTitle = ({ children }: SectionTitleProps) => {
    const [href, setHref] = useState<string>('')
    
    useEffect(() => {
        function loadLink () {
            return setHref(children?.toString().toLowerCase() as string)
        }
        loadLink()
    }, [children])

    return (
        <div className="max-w-fit w-auto flex items-center justify-start pb-2">
            <Link href={`/${href}`}>
                <H1>
                    {children}
                </H1>
            </Link>
        </div>
    )
}