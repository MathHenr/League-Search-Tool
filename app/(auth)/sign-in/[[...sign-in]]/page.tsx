import Image from "next/image"
import { SignIn } from "@clerk/nextjs"

import Footer from "@/components/footer"

export default function Page() {
  return (
    <div className="absolute min-h-screen inset-0">
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:hidden min-h-screen w-full absolute bg-crowd bg-center bg-cover blur-md -z-10" />
        <div className="h-full lg:flex flex-col items-center justify-center px-4">
          <div className="flex items-center justify-center pt-12">
            <Image src="/logo.svg" alt="Logo" height={100} width={100}/>
          </div>
          <div className="text-center space-y-2 py-4 z-10">
            <h2 className="lg:bg-gradient-to-l from-[#0047C9] via-[#0055D2] to-[#0068DE] lg:inline-block lg:text-transparent lg:bg-clip-text text-3xl font-semibold text-white">Welcome Back</h2>
            <p className="text-base font-normal lg:text-slate-600 text-white">Look up info on the League of Legends competitive scene.</p>
          </div>
          <div className="flex items-center justify-center">
            <SignIn />  
          </div>
        </div>
        
        <div className="min-h-screen bg-crowd bg-cover bg-center hidden lg:grid lg:col-span-2" />
        
      </div>

      <Footer/>
    </div>
  )
}