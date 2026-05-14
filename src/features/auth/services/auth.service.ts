import { supabase } from "../../../lib/supabase"

type SignUpProps = {
    name: string
    email: string
    password: string
}

export async function signUp({
    name,
    email,
    password,
}: SignUpProps) {
    const response = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                name
            }
        }
    })

    return response
}