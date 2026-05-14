import { z } from "zod"

export const signUpSchema = z.object({
    name: z
        .string()
        .min(2, "Nome muito curto"),

    email: z
        .string()
        .email("Email inválido"),

    password: z
        .string()
        .min(8, "Mínimo de 8 caracteres")
        .regex(/[A-Z]/, "Precisa de letra maiúscula")
        .regex(/[0-9]/, "Precisa de número")
})

export type SignUpFormData = z.infer<typeof signUpSchema>