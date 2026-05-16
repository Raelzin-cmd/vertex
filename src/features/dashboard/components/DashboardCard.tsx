import { ReactNode } from "react"
import { StyleSheet, Text, View } from "react-native"
import { colors } from "../../../theme/colors"

type Props = {
    title: string,
    children: ReactNode
}

export function DashboardCard({ title, children }: Props) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>
                {title}
            </Text>

            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.card,
        borderRadius: 24,
        padding: 20,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: colors.border
    },

    title: {
        color: colors.text,
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 16
    }
})