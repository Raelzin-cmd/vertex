import { router } from "expo-router"
import { useState } from "react"
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { colors } from "../../../theme/colors"
import { signIn } from "../services/auth.service"

export function LoginScreen() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleLogin() {
        try {
            setLoading(true)

            const response = await signIn(email, password)

            if (response.error) {
                Alert.alert(response.error.message)

                return
            }

            Alert.alert("Login realizado")
        } catch {
            Alert.alert("Erro ao entrar")
        } finally {
            setLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Entrar</Text>

            <TextInput
                placeholder="Email"
                placeholderTextColor="#777"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
                style={styles.input}
            />

            <TextInput
                placeholder="Senha"
                placeholderTextColor="#777"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={styles.input}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
                disabled={loading}
            >
                <Text style={styles.buttonText}>
                    {loading ? "Entrando..." : "Entrar"}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => router.push("/singup")}
            >
                <Text style={styles.link}>
                    Criar Conta
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
        alignItems: "center"
    },

    buttonText: {
        color: colors.text,
        fontSize: 16,
        fontWeight: "600"
    },

    link: {
        color: colors.primary,
        marginTop: 20,
        textAlign: "center",
        fontSize: 16
    }
})