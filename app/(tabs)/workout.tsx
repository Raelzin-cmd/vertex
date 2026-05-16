import { StyleSheet, Text, View } from "react-native"
import { colors } from "../../src/theme/colors"

export default function WorkoutTab() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Academia
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: "center",
        alignItems: "center"
    },

    title: {
        color: colors.text,
        fontSize: 28,
        fontWeight: "bold"
    }
})