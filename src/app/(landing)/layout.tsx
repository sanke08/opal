import LandingNavbar from '@/pages/landing/LandingNavbar'
import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className=' p-10' >
            <LandingNavbar />
            {children}
        </div>
    )
}
