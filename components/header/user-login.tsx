"use client"

import Link from "next/link"

import { useUser } from "@clerk/nextjs"
import { UserButton, ClerkLoaded, ClerkLoading } from "@clerk/nextjs"
import { Loader2, Settings } from "lucide-react"

import { NavButton } from "@/components/header/nav-button"

const redirectUser = {
    href: "/sign-in",
    label: "Account",
}

export const LoginButton = () => {
    const { user } = useUser()

    return (
        <>
            {user && (
                <div className="flex items-center justify-end lg:mr-0 mr-2">
                    <ClerkLoaded>
                        <UserButton userProfileMode="modal"/>
                        <Link href="/">
                            <Settings className="size-5 mx-2" />
                        </Link>
                    </ClerkLoaded>
                    <ClerkLoading>
                        <Loader2 className="size-8 animate-spin text-slate-900"/>
                    </ClerkLoading>
                </div>
            )}
            {!user && (
                <div className="flex items-center justify-end lg:mr-0 mr-2">
                    <NavButton 
                        key={redirectUser.href}
                        href={redirectUser.href}
                        label={redirectUser.label}
                        isSettings={true}
                    />
                </div>
            )}
        </>
    )
}