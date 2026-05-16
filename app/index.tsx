import { ActivityIndicator, View } from "react-native"
import { useAuth } from "../src/features/auth/hooks/AuthContext"
import { LoginScreen } from "../src/features/auth/screens/LoginScreen"
import { HomeScreen } from "../src/features/dashboard/screens/HomeScreen"
import { colors } from "../src/theme/colors"

export default function Home() {
    const { session, loading } = useAuth()

    if (loading) {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: colors.background,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <ActivityIndicator color="#FFF" />
            </View>
        )
    }

    if (!session) {
        return <LoginScreen />
    }

    return <HomeScreen />
}