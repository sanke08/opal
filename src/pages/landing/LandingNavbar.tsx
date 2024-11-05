"use client"
import { Menu, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


export default function LandingNavbar() {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="text-3xl font-semibold flex items-center gap-x-3">
        <Menu className="w-8 h-8" />
        Opal
      </div>
      <div className="hidden gap-x-10 items-center lg:flex">
        <Link
          href="/"
          className="bg-[#7320DD] py-2 px-5 font-semibold text-lg rounded-full hover:bg-[#7320DD]/80"
        >
          Home
        </Link>
        <Link href="/">Pricing</Link>
        <Link href="/">Contact</Link>
      </div>


      {/* <Button onClick={async () => await handleSignin()} className="text-base flex gap-x-2"> */}
      <Link href="/auth" className="text-base flex gap-x-2">
        <User fill="#000" />
        Login
      </Link>
      {/* </Button> */}
    </div>
  )
}
