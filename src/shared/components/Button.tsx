import { StyleSheet, Text, TouchableOpacity } from "react-native"

import { colors } from "../../theme/colors"

type Props = {
    title: string
    onPress?: () => void
}

export function Button({ title, onPress }: Props) {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={styles.button}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: 56,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primary
    },

    text: {
        color: colors.text,
        fontSize: 16,
        fontWeight: "600"
    }
})