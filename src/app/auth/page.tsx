"use client"
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { GoalIcon } from "lucide-react"
import { handleSignin } from "@/actions/auth.actions";

export default function page() {
    return (
        <div className=" w-full h-[80vh]">
            <Button onClick={async()=> await handleSignin()}>
                <GoalIcon />
                Sign in with Google
            </Button>
        </div>
    )
}
