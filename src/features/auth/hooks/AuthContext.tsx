import { createContext, ReactNode, useContext, useEffect, useState } from "react"

import { Session } from "@supabase/supabase-js"
import { supabase } from "../../../lib/supabase"

type AuthContextData = {
    session: Session | null
    loading: boolean
}

type Props = {
    children: ReactNode
}

const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: Props) {
    const [session, setSession] = useState<Session | null>(null)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => {
            setSession(data.session)

            setLoading(false)
        })

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

        return () => {
            subscription.unsubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider
            value={{
                session,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}