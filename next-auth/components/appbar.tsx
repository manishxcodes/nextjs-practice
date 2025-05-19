"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export const Appbar = () => {
    const session = useSession();
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-8">
                <button onClick={() => {signIn()}}>SignIn</button>
                <button onClick={() => {signOut()}}>SignOut</button>
            </div>

            {JSON.stringify(session)}
        </div>
    )
}
