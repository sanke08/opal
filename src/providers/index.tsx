"use client"
import AuthSessionProvider from "./AuthSessionProvider"


const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <AuthSessionProvider>
            {children}
        </AuthSessionProvider>
    )
}

export default Provider
