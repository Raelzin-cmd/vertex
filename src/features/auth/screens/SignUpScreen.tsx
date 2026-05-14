import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { colors } from "../../../theme/colors"
import { signUp } from "../services/auth.service"
import { SignUpFormData, signUpSchema } from "../validations/auth.schema"

export function SignUpScreen() {
    const [loading, setLoading] = useState(false)

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<SignUpFormData>({
        resolver: zodResolver(signUpSchema)
    })

    async function handleSignUp(data: SignUpFormData) {
        try {
            setLoading(true)

            const response = await signUp(data)

            if (response.error) {
                Alert.alert(response.error.message)
                return
            }

            Alert.alert(
                "Conta criada",
                "Verifique seu email para confirmar a conta"
            )
        } catch {
            Alert.alert("Erro ao criar conta")
        } finally {
            setLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Criar conta</Text>

            <Controller
                control={control}
                name="name"
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        placeholder="Nome"
                        placeholderTextColor="#777"
                        value={value}
                        onChangeText={onChange}
                        style={styles.input}
                    />
                )}
            />

            {errors.name && (
                <Text style={styles.error}>
                    {errors.name.message}
                </Text>
            )}

            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#777"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        value={value}
                        onChangeText={onChange}
                        style={styles.input}
                    />
                )}
            />

            {errors.email && (
                <Text style={styles.error}>
                    {errors.email.message}
                </Text>
            )}

            <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        placeholder="Senha"
                        placeholderTextColor="#777"
                        secureTextEntry
                        value={value}
                        onChangeText={onChange}
                        style={styles.input}
                    />
                )}
            />

            {errors.password && (
                <Text style={styles.error}>
                    {errors.password.message}
                </Text>
            )}

            <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit(handleSignUp)}
                disabled={loading}
            >
                <Text style={styles.buttonText}>
                    {loading ? "Criando..." : "Criar conta"}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 24,
        justifyContent: "center"
    },

    title: {
        color: colors.text,
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 32
    },

    input: {
        height: 56,
        backgroundColor: colors.card,
        borderRadius: 16,
        paddingHorizontal: 16,
        color: colors.text,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: colors.border
    },

    button: {
        height: 56,
        borderRadius: 16,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 12
    },

    buttonText: {
        color: colors.text,
        fontSize: 16,
        fontWeight: "600"
    },

    error: {
        color: colors.error,
        marginBottom: 12
    }
})